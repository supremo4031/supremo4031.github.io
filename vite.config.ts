import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function computeBase(): string {
  // On GitHub Pages, project sites are served from /<repo>/.
  // User/organization sites (<user>.github.io) are served from /.
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo) return "/";
  if (repo.endsWith(".github.io")) return "/";
  return `/${repo}/`;
}

export default defineConfig({
  plugins: [react()],
  base: computeBase()
});

