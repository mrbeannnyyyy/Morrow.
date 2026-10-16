// After uploading the installer to Cloudflare R2, paste its public object URL here.
// The local path also works if the website is hosted alongside the downloads folder.
const MORROW_DOWNLOAD_URL = "PASTE_CLOUDFLARE_R2_PUBLIC_DOWNLOAD_URL_HERE";
const LOCAL_DOWNLOAD_PATH = "./downloads/Morrow-1.0.0-arm64.dmg";

const downloadUrl = MORROW_DOWNLOAD_URL.startsWith("https://") ? MORROW_DOWNLOAD_URL : LOCAL_DOWNLOAD_PATH;
document.querySelectorAll(".app-download").forEach((link) => {
  link.href = downloadUrl;
  link.setAttribute("download", "Morrow-1.0.0-arm64.dmg");
});
