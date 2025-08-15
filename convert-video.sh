#!/bin/bash

# Video Conversion Script for GetInsightZ Hero Background
# Place your .mov file in the same directory and run this script

echo "🎥 Converting video for web optimization..."

# Convert to MP4 (H.264) - Main format
ffmpeg -i "your-video.mov" \
  -c:v libx264 \
  -crf 23 \
  -preset medium \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  "public/hero-background.mp4"

# Convert to WebM (VP9) - Smaller file size
ffmpeg -i "your-video.mov" \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  "public/hero-background.webm"

# Create poster image (first frame)
ffmpeg -i "your-video.mov" \
  -ss 00:00:01 \
  -vframes 1 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  "public/video-poster.jpg"

echo "✅ Conversion complete!"
echo "📁 Files created:"
echo "   - public/hero-background.mp4 (main format)"
echo "   - public/hero-background.webm (smaller size)"
echo "   - public/video-poster.jpg (loading image)" 