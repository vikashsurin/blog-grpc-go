/** @type {import('@sveltejs/kit').Config} */
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import commonjs from "@rollup/plugin-commonjs";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

const config = {
  ssr: false,
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          babel: {
            presets: [
              [
                "@babel/preset-env",
                {
                  loose: true,
                  // No need for babel to resolve modules
                  modules: true,
                  targets: {
                    // ! Very important. Target es6+
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        }),
      ],
    }),
    viteCommonjs(),
    commonjs(),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
