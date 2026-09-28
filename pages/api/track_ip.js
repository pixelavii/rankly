import { supabase } from './utils/db'

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

    const { data, error } = await supabase.rpc('increment_clicks', {
      target_user_id: userId
    })

    if (error) throw error

    // The function's RETURNING clicks comes back as a single row/value
    const totalClicks = Array.isArray(data) ? data[0] : data

    return res.json({ success: true, totalClicks })
  } catch (error) {
    console.error('track-click error:', error)
    return res
      .status(500)
      .json({ success: false, message: 'Unable to record click' })
  }
}
