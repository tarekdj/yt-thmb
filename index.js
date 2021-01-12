const puppeteer = require('puppeteer');

module.exports = async function getThumnail(video) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${video}`);
    const result = await page.evaluate((v) => {
      // Thanks Stackoverflow for the hint: https://stackoverflow.com/a/50317524
      const videoRenderer = window.ytInitialData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].videoRenderer;

      return {
        title: videoRenderer.title.runs[0].text,
        url: videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url
      }
    }, video);

    await browser.close();
    return result;
}