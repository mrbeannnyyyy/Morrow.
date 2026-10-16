# Morrow website for Vercel

This is a static website folder. Add the folder to a GitHub repository, then import that repository in Vercel. In Vercel, choose **Other** as the framework preset and leave the build command and output directory empty.

## Installer download

The Mac installer is in `downloads/Morrow-1.0.0-arm64.dmg` in the Documents website folder. It is about 102 MB, above GitHub's 100 MB per-file limit, Vercel Hobby's 100 MB source upload limit and Cloudflare Pages' 25 MiB per-file limit, so `.gitignore` excludes it from source control. Upload it to a public Cloudflare R2 bucket, then paste the resulting object URL into `MORROW_DOWNLOAD_URL` in `download.js`. All download buttons use that one setting.

The site icon, page, styles, and download-link configuration are all included in this folder. The download button uses the R2 URL when configured and otherwise points to `downloads/Morrow-1.0.0-arm64.dmg` for local hosting.
# Morrow.
