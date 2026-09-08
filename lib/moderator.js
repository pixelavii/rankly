export async function Moderator (link, category, preview, myId) {
  try {
    const url = new URL(link)

    const hostname = url.hostname.toLowerCase().replace(/^www\./, '')

    const pathname = url.pathname.split('/').filter(Boolean)

    let username = null
    let short_link = null

    // Instagram
    if (category.name === 'Instagram') {
      if (hostname !== 'instagram.com') {
        return null
      }

      username = pathname[0]

      if (!username) {
        return null
      }

      short_link = `instagram.com/${username}`
    }

    // LinkedIn
    else if (category.name === 'LinkedIn') {
      if (hostname !== 'linkedin.com') {
        return null
      }

      if (pathname[0] !== 'in' || !pathname[1]) {
        return null
      }

      username = pathname[1]

      short_link = `linkedin.com/in/${username}`
    }

    // Facebook
    else if (category.name === 'Facebook') {
      if (hostname !== 'facebook.com') {
        return null
      }

      username = pathname[0]

      if (!username) {
        return null
      }

      short_link = `facebook.com/${username}`
    }

    // Reddit
    else if (category.name === 'Reddit') {
      if (hostname !== 'reddit.com') {
        return null
      }

      if (pathname[0] !== 'u' || !pathname[1]) {
        return null
      }

      username = pathname[1]

      short_link = `reddit.com/u/${username}`
    }

    // X / Twitter
    else if (category.name === 'X') {
      if (hostname !== 'x.com') {
        return null
      }

      username = pathname[0]

      if (!username) {
        return null
      }

      short_link = `x.com/${username}`
    }

    // YouTube
    else if (category.name === 'YouTube') {
      if (hostname !== 'youtube.com' && hostname !== 'youtu.be') {
        return null
      }

      // youtube.com/@username
      if (pathname[0]?.startsWith('@')) {
        username = pathname[0].substring(1)

        if (!username) {
          return null
        }

        short_link = `youtube.com/@${username}`
      }

      // youtube.com/channel/UCxxxx
      else if (pathname[0] === 'channel' && pathname[1]) {
        username = pathname[1]

        short_link = `youtube.com/channel/${username}`
      } else {
        return null
      }
    }

    // Unsupported category
    else {
      return null
    }

    return {
      username: username ? `@${username}` : null,
      short_link,
      category: category.name,
      category_id: category.id,
      link,
      amount: preview,
      clicks: 0,
      idempotencyKey: myId
    }
  } catch (error) {
    console.error('Invalid URL:', error)

    return null
  }
}
