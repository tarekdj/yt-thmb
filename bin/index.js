#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require('yargs')
const fetchThumbnail = require('..')

const options = yargs
  .usage('Usage: -v <video-id>')
  .option('v', {
    alias: 'videoId',
    describe: 'Video ID',
    type: 'string',
    demandOption: true
  })
  .argv;

(async (videoId) => {
  const result = await fetchThumbnail(videoId)
  const boxContent = `${chalk.bold(result.title)} \n\n${result.url}`
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555'
  }
  const Box = boxen(boxContent, boxenOptions)

  console.log(Box)
})(options.videoId)
