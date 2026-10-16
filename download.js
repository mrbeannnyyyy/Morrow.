// After uploading the installer to Cloudflare R2, paste its public object URL here.
const MORROW_DOWNLOAD_URL = "PASTE_CLOUDFLARE_R2_PUBLIC_DOWNLOAD_URL_HERE";

if (MORROW_DOWNLOAD_URL.startsWith("https://")) {
  document.querySelectorAll(".app-download").forEach((link) => {
    link.href = MORROW_DOWNLOAD_URL;
    link.setAttribute("download", "Morrow-1.0.0-arm64.dmg");
  });
}
