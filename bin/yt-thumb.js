#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const getThumnail = require('../index');

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

  const result = await getThumnail(video);
  const msgBox = boxen( `${chalk.bold(result.title)} \n\n${result.url}`, boxenOptions );

  console.log(msgBox);
})(options.video);
