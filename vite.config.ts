import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content Security Policy. Приложение не ходит в сеть, поэтому всё
// разрешено только со своего же origin.
//
// Политика добавляется только в собранное приложение (apply: 'build'):
// в режиме разработки она запретила бы подключение HMR через WebSocket.
// В собранном файле Vite не оставляет ни встроенных скриптов, ни внешних
// адресов — всё, что нужно, лежит рядом, относительными путями.
const csp = {
  name: 'csp-meta',
  apply: 'build' as const,
  transformIndexHtml(html: string) {
    return {
      html,
      tags: [
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Content-Security-Policy',
            content: [
              "default-src 'self'",
              "script-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self' data:",
              "connect-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'none'",
            ].join('; '),
          },
          injectTo: 'head-prepend' as const,
        },
      ],
    }
  },
}

export default defineConfig({
  plugins: [react(), csp],
  base: './',
  build: {
    target: 'es2018',
    outDir: 'dist',
    emptyOutDir: true,
  },
})
