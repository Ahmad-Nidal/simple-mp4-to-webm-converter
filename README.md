# Simple MP4 to WebM Video Converter with Node.js

## 📌 Overview
This is a simple Node.js script to convert MP4 videos to WebM format using `fluent-ffmpeg` and `ffmpeg-static`. It allows you to specify the input video file from the command line and automatically generates an output filename if not provided.

## 🛠️ Requirements
- Node.js

## 📦 Installation
```bash
# Clone the repository and 
git clone https://github.com/Ahmad-Nidal/simple-mp4-to-webm-converter.git && cd simple-mp4-to-webm-converter

# Install dependencies
npm i
```

## 🚀 Usage
```bash
# Run the script with an input file (output will be generated automatically)
node convert.js input.mp4

# Or specify both input and output files
node convert.js input.mp4 output.webm
```

## 💻 Script Breakdown
- Reads input from command-line arguments.
- Automatically generates the output filename if not provided.
- Uses `fluent-ffmpeg` with VP9 and Opus codecs for WebM.

## 📝 Dependencies
- `fluent-ffmpeg`: FFmpeg wrapper for Node.js.
- `ffmpeg-static`: Provides a static version of FFmpeg.

## ⚖️ License
This project is open-source and available under the MIT License.
