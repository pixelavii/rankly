import { createUser } from './models/UserInsert'

export default async function CreateUser (req, res) {
  if ((req.method === 'POST')) {
    try {
      const { username, short_link, category, category_id, link, amount } =
        req.body

      if (!username || !link || !category || !amount) {
        return res
          .status(400)
          .json({ success: false, error: 'Missing required fields' })
      }

      const payload = {
        created_at: new Date().toISOString(),
        username: username,
        link: link,
        price: amount,
        category: category,
        category_id: category_id,
        clicks: 0,
        payment_id: 1236547415687,
        short_link: short_link
      }

      const updated = await createUser(payload)
      res.json({ success: true, data: updated })
    } catch (error) {
      console.error('Update expense error:', error)
      res
        .status(500)
        .json({ success: false, error: 'Failed to enter User Datails' })
    }
  }
}
