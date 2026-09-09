import { supabase } from './utils/db'

export default async function GetHighestBids (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    // Run both lookups in parallel — they're independent of each other
    const [byCategory, overall] = await Promise.all([
      supabase.rpc('get_highest_bids'),
      supabase.rpc('get_overall_stats')
    ])

    if (byCategory.error) throw byCategory.error
    if (overall.error) throw overall.error

    // Reshape [{ category: 'Instagram', highest_amount: 86, bidder_count: 5 }, ...]
    // into { Instagram: { highestBid: 86, bidderCount: 5 }, ... }
    const categories = {}
    for (const row of byCategory.data) {
      categories[row.category] = {
        highestBid: row.highest_amount,
        bidderCount: row.bidder_count
      }
    }

    const stats = overall.data?.[0] ?? { total_users: 0, highest_bid: 0 }

    return res.json({
      success: true,
      categories,
      totalUsers: stats.total_users,
      highestBid: stats.highest_bid
    })
  } catch (error) {
    console.error('get-highest-bids error:', error)
    return res.status(500).json({ success: false, message: 'Unable to fetch highest bids' })
  }
}