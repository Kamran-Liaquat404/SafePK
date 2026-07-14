# SafePK v5.0.0

SafePK is a modern, browser-based cybersecurity awareness platform built for Pakistan. It helps users learn how to recognize online scams, protect personal accounts, and access verified safety resources through a simple and practical experience.

The project is designed as a lightweight web application focused on digital safety education, fraud prevention, and public awareness.

---

## Overview

SafePK combines educational content, interactive tools, and a curated directory of trusted resources into one platform. The goal is to make cyber safety understandable for everyday users, especially those who may not have a technical background.

This version is structured as a static web app with multiple pages for learning, tools, directory access, and support information.

---

## What the Project Includes

### 1. Learn Section
A dedicated learning area that explains common online threats such as:
- phishing scams
- WhatsApp hijacking and verification code fraud
- fake prize and lottery scams
- fake job and online earning traps

### 2. Interactive Safety Tools
The tools page provides browser-based utilities such as:
- password strength evaluation
- privacy and security diagnostics
- incident report building for cyber complaints
- simple cryptographic cipher tools
- quiz-based awareness checks

### 3. Cyber Directory
A searchable directory of official and verified contacts including:
- FIA Cyber Crime resources
- PTA-related support channels
- banking and wallet fraud helplines
- safety organizations and public awareness portals

### 4. Support and Awareness Pages
Additional pages cover:
- about SafePK
- privacy policy
- terms of use
- disclaimer
- help center
- cyber assistance disclaimer

---

## Tech Stack

SafePK is built using:
- HTML5 for page structure
- CSS for styling and responsive design
- JavaScript for interactivity and content rendering
- Vite for local development and build support
- Node.js build script for static export to the dist folder

---

## Project Structure

- index.html – landing page
- pages/ – educational and informational pages
- css/ – styling files
- js/ – scripts for data, learning content, directory logic, theme handling, and app behavior
- assets/ – images, icons, and static media
- manifest.json – PWA manifest
- sw.js – service worker for caching and offline support behavior
- vite.config.js – Vite configuration
- build.js – static build script

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:3000
```

---

## Build for Production

To generate a production-ready static build:

```bash
npm run build
```

The build output is generated in the dist folder.

---

## Purpose and Vision

SafePK aims to promote cybersecurity awareness in Pakistan by making digital safety education simple, actionable, and accessible to everyday users.

Its vision is to help people recognize fraud, avoid common scams, and feel more confident using digital services safely.

---

## Disclaimer

SafePK is an educational awareness platform. It does not provide real-time cyber protection, legal enforcement, or emergency response services.

Users should always verify information through official government, banking, or telecom channels when dealing with real incidents.

---

## License

© 2026 SafePK. All rights reserved.

This project and its content are protected. Unauthorized copying, redistribution, or commercial use is strictly prohibited.

---

## Contact

For inquiries or collaboration:

infosafepk@proton.me

Website:
https://www.safepk.net
