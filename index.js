const isomorphicFetch = require('isomorphic-fetch')

async function fetchHTML (searchQuery) {
  const url = `https://www.youtube.com/results?search_query=${searchQuery}`
  const headers = {
    'User-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0'
  }
  const html = await isomorphicFetch(url, { headers }).then(response => response.text())

  return html
}

module.exports = async function fetchThumbnail (videoId) {
  const html = await fetchHTML(videoId)
  // eslint-disable-next-line
  const pattern = `https:\/\/i\.ytimg\.com\/an_webp\/${videoId}\/mqdefault.+?"`
  const regex = new RegExp(pattern, 'gi')
  const [result] = html.match(regex)
  const clean = result.replace('"', '').replace(/\\u0026/g, '&')

  return clean
}
