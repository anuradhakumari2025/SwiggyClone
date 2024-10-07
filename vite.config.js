// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     proxy: {
//       '/dapi': {
//         target: 'https://www.swiggy.com',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/dapi/, '/dapi'),
//       },
//     },
//   },
// });

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Merge your proxy and plugin configuration into a single `defineConfig`
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/dapi": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dapi/, "/dapi"),
      },
    },
  },
});
