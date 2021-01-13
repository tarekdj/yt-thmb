const getThumbnail = require('../index');

test('Gets a vidoo title and thumb url', async () => {
    const result = await getThumbnail('YGfv28PtXvA');
    expect.assertions(1);
    // Seems like the sqp changes over time so we can't rely on a static value.
    expect(result).toInclude('https://i.ytimg.com/an_webp/YGfv28PtXvA/mqdefault_6s.webp');
});