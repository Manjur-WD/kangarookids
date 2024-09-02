// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/kangarookids",
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createBrotliCompress, createGzip } from 'compression';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kangarookids",
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'compression',
          generateBundle(options, bundle) {
            Object.keys(bundle).forEach((key) => {
              const file = bundle[key];
              if (file.fileName.endsWith('.js') || file.fileName.endsWith('.css')) {
                const source = file.source;
                
                // Compress with Gzip
                const gzip = createGzip();
                gzip.write(source);
                gzip.end();
                const gzipPath = path.join(options.dir, `${file.fileName}.gz`);
                fs.writeFileSync(gzipPath, gzip.read());

                // Compress with Brotli
                const brotli = createBrotliCompress();
                brotli.write(source);
                brotli.end();
                const brotliPath = path.join(options.dir, `${file.fileName}.br`);
                fs.writeFileSync(brotliPath, brotli.read());
              }
            });
          }
        }
      ]
    }
  }
});


