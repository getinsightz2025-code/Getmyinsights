# 🎥 Video Background Setup Guide

## 📁 **Video File Requirements**

### **Supported Formats:**
- **Primary:** MP4 (H.264 codec)
- **Secondary:** WebM (for better compression)
- **Fallback:** Static gradient background

### **Recommended Video Specifications:**
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration:** 10-30 seconds (looping)
- **File Size:** Under 5MB for optimal loading
- **Frame Rate:** 24-30 fps
- **Codec:** H.264 for MP4, VP9 for WebM

## 📂 **File Placement**

Place your video files in the `public` folder:

```
public/
├── hero-background.mp4     # Main video file
├── hero-background.webm    # WebM version (optional)
└── video-poster.jpg        # Poster image (optional)
```

## 🎬 **Video Content Suggestions**

### **Recommended Themes:**
1. **Abstract Technology** - Floating particles, data streams, network connections
2. **Business/Corporate** - Office scenes, meetings, technology
3. **E-commerce** - Shopping, products, marketplace visuals
4. **Data Visualization** - Charts, graphs, analytics dashboards
5. **Minimalist** - Simple geometric patterns, gradients

### **What to Avoid:**
- ❌ Fast-moving content (distracts from text)
- ❌ Bright/contrasting colors (hard to read text over)
- ❌ Large file sizes (slow loading)
- ❌ Audio (not needed for background)

## 🛠️ **Video Optimization**

### **Using FFmpeg (Command Line):**

```bash
# Optimize MP4 for web
ffmpeg -i your-video.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart public/hero-background.mp4

# Create WebM version
ffmpeg -i your-video.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus public/hero-background.webm

# Create poster image
ffmpeg -i your-video.mp4 -ss 00:00:01 -vframes 1 public/video-poster.jpg
```

### **Online Tools:**
- **HandBrake** - Free video converter
- **CloudConvert** - Online conversion
- **FFmpeg.wasm** - Browser-based conversion

## 📱 **Mobile Optimization**

The video background is automatically optimized for mobile:

- **Mobile:** Video plays with reduced quality/performance
- **Tablet:** Balanced performance and quality
- **Desktop:** Full quality video

### **Mobile-Specific Considerations:**
- Keep file size under 3MB for mobile
- Use simpler animations
- Consider static image fallback for slow connections

## 🎨 **Customization Options**

### **Change Video Overlay Opacity:**
```css
/* In Hero.tsx, modify this line: */
<div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

/* Options: */
bg-black/10  /* Very light overlay */
bg-black/20  /* Light overlay (current) */
bg-black/30  /* Medium overlay */
bg-black/40  /* Dark overlay */
```

### **Change Video Position:**
```css
/* In the video element, modify: */
className="w-full h-full object-cover"

/* Options: */
object-cover    /* Crop to fill (current) */
object-contain  /* Fit entire video */
object-center   /* Center the video */
```

### **Add Video Controls (for testing):**
```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  controls  // Add this for testing
  className="w-full h-full object-cover"
>
```

## 🚀 **Performance Tips**

### **1. Compress Your Video:**
- Use online tools like TinyPNG for video
- Aim for 1-3MB file size
- Test loading speed on slow connections

### **2. Use Multiple Formats:**
- MP4 for broad compatibility
- WebM for smaller file size
- Fallback gradient for unsupported browsers

### **3. Lazy Loading (Optional):**
```jsx
// Add loading="lazy" for better performance
<video
  autoPlay
  loop
  muted
  playsInline
  loading="lazy"
  className="w-full h-full object-cover"
>
```

## 🔧 **Troubleshooting**

### **Video Not Playing:**
1. Check file path in `public` folder
2. Verify video format (MP4/WebM)
3. Check browser console for errors
4. Test with different browsers

### **Poor Performance:**
1. Reduce video file size
2. Lower video resolution
3. Use simpler video content
4. Consider static image fallback

### **Text Not Readable:**
1. Increase overlay opacity (`bg-black/30`)
2. Add stronger text shadows
3. Use higher contrast text colors
4. Adjust video brightness

## 📋 **Quick Setup Checklist**

- [ ] Video file optimized (under 5MB)
- [ ] Video placed in `public/hero-background.mp4`
- [ ] WebM version created (optional)
- [ ] Poster image added (optional)
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Performance checked on slow connections

## 🎯 **Example Video Sources**

### **Free Stock Video Sites:**
- **Pexels** - Free stock videos
- **Pixabay** - High-quality free videos
- **Coverr** - Background videos
- **Videvo** - Free video clips

### **Paid Options:**
- **Shutterstock** - Professional stock videos
- **Adobe Stock** - High-quality content
- **Envato Elements** - Subscription-based

## 💡 **Pro Tips**

1. **Keep it Subtle** - The video should enhance, not distract
2. **Test on Mobile** - Ensure it doesn't slow down mobile devices
3. **Have a Fallback** - Always provide a static background option
4. **Consider Bandwidth** - Not everyone has fast internet
5. **Brand Consistency** - Video should match your brand colors/theme

Your video background is now ready! Just add your video file to the `public` folder and it will automatically work. 🎉 