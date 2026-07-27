import { defineConfig } from "astro/config";
import { existsSync, readFileSync } from "node:fs";

const [owner = "", repository = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const userSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const customDomain = existsSync("public/CNAME")
  ? readFileSync("public/CNAME", "utf8").trim()
  : "";

export default defineConfig({
  // GitHub Actions 会自动提供 GITHUB_REPOSITORY；本地开发无需额外配置。
  site:
    process.env.SITE_URL ??
    (customDomain
      ? `https://${customDomain}`
      : owner
        ? `https://${owner}.github.io`
        : "http://localhost:4321"),
  base:
    process.env.BASE_PATH ??
    (customDomain ? "/" : repository && !userSite ? `/${repository}` : "/"),
});
