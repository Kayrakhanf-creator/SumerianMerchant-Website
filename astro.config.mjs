import { defineConfig } from "astro/config";

// Fully static output — no backend, deploy anywhere.
// build.assets: no leading underscore, so GitHub Pages (Jekyll) never
// hides the bundled CSS/JS folder.
export default defineConfig({
  site: "https://kayrakhanf-creator.github.io",
  build: {
    assets: "sitefiles",
  },
});
