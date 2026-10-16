const downloadUrl = "https://github.com/mrbeannnyyyy/Morrow./releases/download/v1.0.0/Morrow-1.0.0-arm64.dmg";
document.querySelectorAll(".app-download").forEach((link) => {
  link.href = downloadUrl;
  link.setAttribute("aria-label", "Download Morrow 1.0.0 for Apple silicon");
});
