const fetchThumbnail = require('./index')

test('Gets a vidoo title and thumb url', async () => {
  const result = await fetchThumbnail('iPIo9uez40I')
  // Seems like the sqp changes over time so we can't rely on a static value.
  expect(result).toInclude('https://i.ytimg.com/an_webp/iPIo9uez40I/mqdefault_6s.webp')
})
