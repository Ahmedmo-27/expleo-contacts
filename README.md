# Expleo Group – Contact Cards

A React + Vite web app with 4 individual digital contact cards, each with a unique QR code.

## Project Structure

```
expleo-contacts/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite config
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # App bootstrap
    ├── App.jsx                 # Router
    ├── data/
    │   └── people.js           # ← Edit contact info & website here
    ├── styles/
    │   └── global.css          # Design tokens & base styles
    ├── components/
    │   ├── ContactCard.jsx     # Card shown on home page
    │   ├── ContactCard.module.css
    │   ├── DetailRow.jsx       # Row on person page
    │   ├── DetailRow.module.css
    │   ├── Icons.jsx           # All SVG icons
    │   ├── QRCodeCanvas.jsx    # QR code renderer
    │   └── QRCodeCanvas.module.css
    └── pages/
        ├── HomePage.jsx        # Directory grid ("/")
        ├── HomePage.module.css
        ├── PersonPage.jsx      # Individual card ("/person/:id")
        ├── PersonPage.module.css
        ├── NotFoundPage.jsx
        └── NotFoundPage.module.css
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

The output goes to `dist/`. Deploy that folder anywhere.

---

## Editing Contact Info

All data lives in `src/data/people.js`. Edit names, titles, phones, or emails there. The `WEBSITE` constant at the top controls the link shown on every card.

---

## Deploying (so QR codes work on phones)

The QR codes encode each person's full URL. They only work when scanned if the site is hosted online. Easiest options:

| Host | How |
|------|-----|
| **Netlify** | `npm run build` → drag `dist/` to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` in project root |
| **GitHub Pages** | Push repo, enable Pages on `gh-pages` branch |

After deploying, the QR codes automatically encode the correct live URLs (e.g. `https://yoursite.netlify.app/person/1`).

---

## The QR Code URLs

| # | Person | URL |
|---|--------|-----|
| 1 | Eman Kamel Hassan | `/person/1` |
