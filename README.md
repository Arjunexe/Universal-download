# 🚀 Universal Video Downloader (Node.js + yt-dlp)

A lightweight, high-performance CLI tool to download videos from thousands of websites (YouTube, Eporner, Vimeo, etc.) in the best possible quality (up to 4K/8K).

Built with **Node.js** as a wrapper around the powerful **yt-dlp** engine, featuring real-time progress bars and bypass capabilities for geo-blocked content using Cloudflare WARP.

## ✨ Features

- **Universal Support:** Works on thousands of sites supported by `yt-dlp`.
- **Best Quality:** Automatically merges the best video and audio streams (requires FFmpeg).
- **Live Progress:** Shows real-time download speed, size, and ETA in the terminal.
- **Bypass Blocks:** Includes instructions for Cloudflare WARP to bypass ISP blocking.

---

## 🛠️ Prerequisites (Linux/Ubuntu)

Before running the script, you must install the core engines: **FFmpeg** (for processing) and **yt-dlp** (for downloading).

### 1. Install FFmpeg

Required to merge high-quality video and audio streams (e.g., 1080p+).

```bash
sudo apt update && sudo apt install ffmpeg

sudo curl -L [https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp) -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp


📦 Installation
Clone the repository
```
