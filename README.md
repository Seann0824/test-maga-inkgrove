# My Blog

由 [InkGrove](https://github.com/) 初始化的 Astro 博客 / An Astro blog initialized by InkGrove.

- 文章在 `src/content/blog/`（front matter 即表单字段）
- 本地预览：`npm install && npm run dev`
- 构建：`npm run build`（产物在 `dist/`）
- 部署：发布到 `main` 后，GitHub Actions 会自动构建并部署到 GitHub Pages

首次部署前，在仓库的 **Settings → Pages → Build and deployment** 中选择
**GitHub Actions**。如需自定义域名，在 workflow 中设置 `SITE_URL` 与
`BASE_PATH: /`，并按 GitHub Pages 指引配置域名。
