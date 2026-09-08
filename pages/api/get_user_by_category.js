import { supabase } from './utils/db'

const PAGE_SIZE = 50

export default async function GetUsersByCategory (req, res) {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { category, page = '1' } = req.query

    if (!category) {
      return res
        .status(400)
        .json({ success: false, message: 'category is required' })
    }

    const pageNumber = parseInt(page, 10)
    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
      return res
        .status(400)
        .json({ success: false, message: 'page must be a positive integer' })
    }

    const from = (pageNumber - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1 // .range() is inclusive on both ends

    const { data, error, count } = await supabase
      .from('Users')
      .select('*', { count: 'exact' })
      .eq('category', category)
      .order('amount', { ascending: false })
      .range(from, to)

    if (error) throw error

    const totalPages = Math.max(1, Math.ceil((count ?? 0) / PAGE_SIZE))

    return res.json({
      success: true,
      users: data,
      pagination: {
        page: pageNumber,
        pageSize: PAGE_SIZE,
        totalCount: count ?? 0,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1
      }
    })
  } catch (error) {
    console.error('get-users-by-category error:', error)
    return res
      .status(500)
      .json({ success: false, message: 'Unable to fetch users' })
  }
}
