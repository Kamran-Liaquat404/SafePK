import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        learn: resolve(__dirname, 'pages/learn.html'),
        tools: resolve(__dirname, 'pages/tools.html'),
        articles: resolve(__dirname, 'pages/articles.html'),
        directory: resolve(__dirname, 'pages/directory.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        privacyPolicy: resolve(__dirname, 'pages/privacy-policy.html'),
        termsOfUse: resolve(__dirname, 'pages/terms-of-use.html'),
        disclaimer: resolve(__dirname, 'pages/disclaimer.html'),
        cookiePolicy: resolve(__dirname, 'pages/cookie-policy.html'),
        externalLinksPolicy: resolve(__dirname, 'pages/external-links-policy.html'),
        help: resolve(__dirname, 'pages/help.html'),
        cyberAssistanceDisclaimer: resolve(__dirname, 'pages/cyber-assistance-disclaimer.html'),
        contactPolicy: resolve(__dirname, 'pages/contact-policy.html'),
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
