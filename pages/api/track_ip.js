import { supabase } from './utils/db'

const UNIQUE_VIOLATION = '23505'

export default async function TrackClick (req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { userId } = req.body

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: 'userId is required' })
    }

    const ipAddress = getClientIp(req)

    if (!ipAddress) {
      return res
        .status(400)
        .json({ success: false, message: 'Could not determine client IP' })
    }

    // Try to insert. The unique index on (user_id, ip_address) is the real
    // guard: if this IP has already clicked this profile, the insert fails
    // with a unique violation and we treat that as "already counted"
    // rather than an error — no need to SELECT-then-insert first.
    const { error } = await supabase.from('IP').insert({
      user_id: userId,
      ip_address: ipAddress
    })

    if (error && error.code !== UNIQUE_VIOLATION) {
      throw error
    }

    const isNewClick = !error

    // Return the up-to-date total either way, so the frontend can show a
    // live count regardless of whether this click was new or a repeat.
    const { count, error: countErr } = await supabase
      .from('IP')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)

    if (countErr) throw countErr

    return res.json({
      success: true,
      isNewClick,
      totalClicks: count ?? 0
    })
  } catch (error) {
    console.error('track-click error:', error)
    return res
      .status(500)
      .json({ success: false, message: 'Unable to record click' })
  }
}

function getClientIp (req) {
  // Behind a proxy/load balancer (Vercel, etc.), the real client IP is in
  // x-forwarded-for as a comma-separated list — the first entry is the
  // original client.
  const forwarded = req.headers['x-forwarded-for']
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress ?? null
}
