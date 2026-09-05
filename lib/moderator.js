export async function Moderator (link, category, preview) {
  if (category.name === 'Instagram') {
    try {
      const url = new URL(link)

      const username = url.pathname.split('/').filter(Boolean)[0]

      const hostname = url.hostname.replace(/^www\./, '')

      return {
        username: username ? `@${username}` : null,
        short_link: `${hostname}/${username}`,
        category: category.name,
        category_id: category.id,
        link: link,
        amount: preview
      }
    } catch (error) {
      return null
    }
  }

  return null
}
