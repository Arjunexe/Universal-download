const yt = require("youtube-dl-exec");

// Replace this with your URL
// warp-cli connect
// warp-cli disconnect
// curl https://www.cloudflare.com/cdn-cgi/trace

// 1. Grabs the URL from the terminal argument
const url = process.argv[2];

// 2. specific check: If user forgot the URL, tell them and stop
if (!url) {
  console.error("❌ Error: Please provide a URL!");
  console.log("Usage: node index.js <VIDEO_URL>");
  process.exit(1); // Exit with error code
}

console.log(`🚀 Starting download for:${url}`);

// notice we use .exec here instead of just yt()
const subprocess = yt.exec(url, {
  paths: "/home/arjun/Videos/DownloaderU",
  output: "%(title)s.%(ext)s",
  format: "bestvideo+bestaudio/best",
  mergeOutputFormat: "mp4",
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  socketTimeout: 30, // Keeps the timeout fix we added
  // cookiesFromBrowser: "brave",
});

// THIS IS THE MAGIC PART
// It pipes the internal downloader's output to your terminal screen in real-time
subprocess.stdout.pipe(process.stdout);
subprocess.stderr.pipe(process.stderr);

// Handle when it finishes or errors
subprocess
  .then(() => {
    console.log("\n✅ Download Complete!");
  })
  .catch((err) => {
    console.error("\n❌ Error:", err);
  });
