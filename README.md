# Morrow website for Vercel

This is a static website folder. Add the folder to a GitHub repository, then import that repository in Vercel. In Vercel, choose **Other** as the framework preset and leave the build command and output directory empty.

## Installer download

The Mac installer is in `Browser App/release/Morrow-1.0.0-arm64.dmg` in the Documents project folder. It is about 102 MB, above Vercel Hobby's 100 MB source upload limit and Cloudflare Pages' 25 MiB per-file limit, so it is not included in this website folder. Upload it to a public Cloudflare R2 bucket, then paste the resulting object URL into `MORROW_DOWNLOAD_URL` in `download.js`. All download buttons use that one setting.

The site icon, page, styles, and download-link configuration are all included in this folder.
