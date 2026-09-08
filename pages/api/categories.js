import { supabase } from './utils/db'

export default async function GetHighestBids (req, res) {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { data, error } = await supabase.rpc('get_highest_bids')

    if (error) throw error

    const categories = {}
    for (const row of data) {
      categories[row.category] = {
        highestBid: row.highest_amount,
        bidderCount: row.bidder_count
      }
    }

    return res.json({ success: true, categories })
  } catch (error) {
    console.error('get-highest-bids error:', error)
    return res
      .status(500)
      .json({ success: false, message: 'Unable to fetch highest bids' })
  }
}
