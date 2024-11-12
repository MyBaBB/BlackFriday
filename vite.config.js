import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'url';
import path from 'path';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "name": "Black Friday Deals",
        "short_name": "Amazon",
        "id": "/",
        "theme_color": "#030103",
        "start_url": "./",
        "display": "standalone",
        "background_color": "#2a61a1",
        "lang": "en",
        "scope": "./",
        "icons": [
          {
            "src": "favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png",
           
          },
          {
            "src": "favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png",
           
          },
          {
            "src": "android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            
          },
          {
            "src": "android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            
          },
          
          {
            "src": "apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png",
          },
        
        ],
      }
    })
  ],
  resolve: {
    // This is for absolute imports in the project. It allows us to import components or other files from the root of the project using '@/'.
    // For example, instead of doing `import Component from '../../components/Component'`, we can do `import Component from '@/components/Component'`.
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
