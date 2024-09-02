// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import compression from 'vite-plugin-compression';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/kangarookids",
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // Use 'gzip' for Gzip compression
      threshold: 10240, // Only compress files larger than 10KB
      ext: '.gz', // Extension for Gzip files
    }),
  ],
  base: "/kangarookids",
});

