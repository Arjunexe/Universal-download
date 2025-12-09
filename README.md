# 🚀 Universal Video Downloader (Node.js + yt-dlp)

A lightweight, high-performance CLI tool to download videos from thousands of websites in the best possible quality (up to 4K/8K).

Built with **Node.js** as a wrapper around the powerful **yt-dlp** engine, featuring real-time progress bars and bypass capabilities for geo-blocked content using Cloudflare WARP.

---

## ✨ Features

- **Universal Support:** Works on thousands of sites supported by `yt-dlp`.
- **Best Quality:** Automatically merges the best video and audio streams (requires FFmpeg).
- **Live Progress:** Shows real-time download speed, size, and ETA in the terminal.
- **Bypass Blocks:** Includes instructions for Cloudflare WARP to bypass ISP blocking.

---

## 🛠️ Prerequisites (Linux/Ubuntu)

Before running the script, install **FFmpeg** and **yt-dlp**.

### Install FFmpeg

```bash
sudo apt update && sudo apt install ffmpeg
```

### Install yt-dlp

```bash
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/universal-downloader.git
cd universal-downloader
```

### Install Dependencies

```bash
npm install
```

---

## 🛡️ Bypassing ISP Blocks (Cloudflare WARP)

Install Cloudflare WARP (free + unlimited).

### 1. Install WARP

```bash
# Add key
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

# Add repo
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list

# Install
sudo apt-get update && sudo apt-get install cloudflare-warp
```

### 2. Register WARP

```bash
warp-cli registration new
```

### 3. Usage Commands

| Action       | Command                                         |
| ------------ | ----------------------------------------------- |
| Turn ON      | `warp-cli connect`                              |
| Turn OFF     | `warp-cli disconnect`                           |
| Check Status | `curl https://www.cloudflare.com/cdn-cgi/trace` |

**warp=on → safe to download**

---

## ▶️ Usage

Run:

```bash
node index.js [add your url herer]
```

Your video will save to the Downloads folder (or configured path).

---

## ⚖️ Disclaimer

This tool is for educational and personal use only.  
Do not distribute copyrighted material or violate any website’s Terms of Service.  
You are responsible for your usage.
