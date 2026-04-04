# Personal Portfolio

My personal Portfolio App

## Features

- 🚀 Fast and modern front-end (React + Vite)
- 📦 Ready for deployment as a static site

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (usually comes with Node.js)
- A code editor like Visual Studio Code (recommended)

---

## Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/Kourix84/Personal-Portfolio.git
```
### How to Start the Application

1. Open the project directory in CMD:

```bash
cd portfolio
```
2. Install Dependencies in CMD:

```bash
npm install
```

3. Run the Development Server in CMD:

```bash
npm run dev
```

4. Build for Production in CMD:

```bash
npm run build
```

4. Preview the Production Build in CMD:

```bash
npm run preview
```

---

### Deployment
You can deploy the built site (dist/ folder) to any static hosting, such as:

- Netlify

- Vercel

- GitHub Pages

### Customization

- Add your own React components to the src/components/ folder.

- Update the IndexedDB logic as needed in src/db/idb.js.

- Change app icons and manifest in the public/ folder.

- Adjust PWA settings in vite.config.js.

### Credits

- React

- Vite

- idb (IndexedDB helper)

- vite-plugin-pwa

---

## Step-by-Step: How to Use This App

Download or clone the repository.

Install dependencies: 'npm install'

Start the app: 'npm run dev'

Open the app in your browser.

---

## Troubleshooting

### App Won’t Work Offline
- Run `npm run build` and `npm run preview` to test the production build.
- Check the browser Console for service worker errors.
- If offline mode fails, clear your browser cache and refresh.

### IndexedDB Issues
- Use `npm run dev` or `npm run preview` (do not use `file://` paths).
- Some browsers’ private/incognito mode may block IndexedDB.
- Check the Console for errors and confirm you’re using Chrome, Edge, or Firefox.

### App Not Installable
- Make sure `manifest.webmanifest` and icons are present in the `public/` folder.
- Check that your service worker is active (see Application tab in DevTools).

### App Not Updating
- PWAs use caching, so updates may take time to appear.
- Hard refresh the app (Ctrl+Shift+R or Cmd+Shift+R).

### Still Stuck?
- Check browser DevTools (Console/Application tab) for errors.
- Open an issue or contact the maintainer with details.

---
## Licence 
MIT License

Copyright (c) 2026 Kourosh Esmaeil Tajer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
SOFTWARE.
