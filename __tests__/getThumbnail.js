const getThumbnail = require('../index');

test('Gets a vidoo title and thumb url', async () => {
    expect.assertions(2);
    const result = await getThumbnail('YGfv28PtXvA');
    expect(result.title).toBe('Can you solve this tricky JavaScript Array problem?');
    // Seems like the sqp changes over time so we can't rely on a static value.
    expect(result.url).toInclude('https://i.ytimg.com/an_webp/YGfv28PtXvA/mqdefault_6s.webp');
});
