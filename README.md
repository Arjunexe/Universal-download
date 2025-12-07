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
```

📦 Installation
Clone the repository

```bash

```

git clone [https://github.com/yourusername/universal-downloader.git](https://github.com/yourusername/universal-downloader.git)
cd universal-downloader

```

```

Install Dependencies

```bash

```

npm install

```

```

🛡️ Bypassing ISP Blocks (Cloudflare WARP)
If your ISP blocks specific websites (e.g., Eporner, Torrent sites), use Cloudflare WARP. It is free, unlimited, and faster than traditional VPNs.

1. Install WARP

```bash

```

# Add GPG Key

curl -fsSL [https://pkg.cloudflareclient.com/pubkey.gpg](https://pkg.cloudflareclient.com/pubkey.gpg) | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

# Add Repo

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] [https://pkg.cloudflareclient.com/](https://pkg.cloudflareclient.com/) $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list

# Install

sudo apt-get update && sudo apt-get install cloudflare-warp

```

```

2. Register (Run once)

```bash

```

warp-cli registration new

```

```

3. Usage Commands

Action,Command
Connect (Turn ON),warp-cli connect
Disconnect (Turn OFF),warp-cli disconnect
Check Status,curl https://www.cloudflare.com/cdn-cgi/trace

Tip: If the trace command shows warp=on, you are safe to download.

Tip: If the trace command shows warp=on, you are safe to download.
const url = '[https://example.com/video-link](https://example.com/video-link)';

Run the downloader:

node index.js

The video will be saved to your Downloads folder (or whichever path is set in the script).

⚖️ Disclaimer
This tool is for educational and personal use only.

Do not use this tool to distribute copyrighted material.

Respect the Terms of Service of the websites you download from.

The author is not responsible for any misuse of this software.
