import * as cheerio from 'cheerio'

export default async function SocialResponse (request) {
  try {
    const { searchParams } = new URL(request.url)
    const link = searchParams.get('link')
    const category = searchParams.get('category')

    if (!username) {
      return Response.json({ error: 'Username is required' }, { status: 400 })
    }

    const response = await fetch(
      `https://www.instagram.com/${encodeURIComponent(username)}/`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9'
        },
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      return Response.json(
        {
          error: `Instagram returned ${response.status}`
        },
        { status: response.status }
      )
    }

    const html = await response.text()

    const $ = cheerio.load(html)

    const title = $('meta[property="og:title"]').attr('content')
    const description = $('meta[property="og:description"]').attr('content')

    const image = $('meta[property="og:image"]').attr('content')

    const url = $('meta[property="og:url"]').attr('content')

    return Response.json({
      username,
      title,
      description,
      image,
      url
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        error: 'Failed to fetch Instagram profile'
      },
      { status: 500 }
    )
  }
}
