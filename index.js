const yt = require("youtube-dl-exec");

// Replace this with your URL
const url = "";

console.log("🚀 Starting download...");

// notice we use .exec here instead of just yt()
const subprocess = yt.exec(url, {
  paths: "add your full path of the download location",
  output: "%(title)s.%(ext)s",
  format: "bestvideo+bestaudio/best",
  mergeOutputFormat: "mp4",
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  socketTimeout: 30, // Keeps the timeout fix we added
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
