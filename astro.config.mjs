import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";

// import deno from "@astrojs/deno";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
