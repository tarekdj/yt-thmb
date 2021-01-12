#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const puppeteer = require('puppeteer');

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -v <video-id>")
 .option("v", { alias: "video", describe: "Video ID", type: "string", demandOption: true })
 .argv;

(async (video) => {
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

  const msgBox = boxen( `${chalk.bold(result.title)} \n\n${result.url}`, boxenOptions );

  console.log(msgBox);
  await browser.close();
})(options.video);
