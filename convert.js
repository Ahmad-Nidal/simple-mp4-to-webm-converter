const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

// Get command-line arguments
const args = process.argv.slice(2); // Skip 'node' and script name
const inputFile = args[0];
const outputFile = args[1] || path.format({
  dir: path.dirname(inputFile),
  name: path.parse(inputFile).name,
  ext: '.webm',
});

if (!inputFile) {
  console.error('Error: Please provide an input file.\nUsage: node convert.js <input.mp4> [output.webm]');
  process.exit(1);
}

function convertMp4ToWebm(input, output) {
  ffmpeg(input)
    .output(output)
    .videoCodec('libvpx-vp9')
    .audioCodec('libopus')
    .on('start', () => {
        console.log('Converting video...');
    })
    .on('end', () => {
      console.log(`Conversion finished successfully: ${output}`);
    })
    .on('error', (err) => {
      console.error('Error during conversion:', err.message);
    })
    .run();
}

convertMp4ToWebm(inputFile, outputFile);
