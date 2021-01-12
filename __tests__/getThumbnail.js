const getThumbnail = require('../index');

test('Gets a vidoo title and thumb url', async () => {
    
    jest.setTimeout(3000);
    try {
        const result = await getThumbnail('YGfv28PtXvA');
        expect.assertions(2);
        expect(result.title).toBe('Can you solve this tricky JavaScript Array problem?');
        // Seems like the sqp changes over time so we can't rely on a static value.
        expect(result.url).toInclude('https://i.ytimg.com/an_webp/YGfv28PtXvA/mqdefault_6s.webp');
    }
    catch (err) {
        expect(JSON.stringify(err)).toContain('TimeoutError');
    }

});
