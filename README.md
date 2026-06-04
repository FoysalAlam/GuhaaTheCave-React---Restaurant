# Guhaa — The Cave Kitchen 🪨
### React + Bootstrap Restaurant Website

## Project Structure
```
guhaa-react/
├── public/
│   ├── index.html         ← HTML entry point
│   └── logo.png           ← Restaurant logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     ← Navigation bar
│   │   ├── Hero.jsx       ← Hero / landing section
│   │   ├── About.jsx      ← Our story + stats
│   │   ├── Menu.jsx       ← Full menu with tabs + prices
│   │   ├── Highlights.jsx ← Key features
│   │   ├── Amenities.jsx  ← Facilities & accessibility
│   │   ├── Reviews.jsx    ← Customer reviews
│   │   ├── Reserve.jsx    ← WhatsApp reservation form
│   │   └── Footer.jsx     ← Footer with links
│   ├── styles/
│   │   └── design.css     ← All custom CSS (cave theme)
│   ├── App.js             ← Root component
│   └── index.js           ← React entry point
├── package.json           ← Dependencies
└── README.md
```

## How to Run

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)

### Step 2 — Open folder in VS Code
```
File → Open Folder → select guhaa-react
```

### Step 3 — Open Terminal in VS Code
```
Terminal → New Terminal
```

### Step 4 — Install dependencies
```bash
npm install
```

### Step 5 — Start the app
```bash
npm start
```
The website opens automatically at http://localhost:3000

## Tech Stack
- **React 18** — component-based UI
- **Bootstrap 5** — responsive grid & utility classes
- **React Bootstrap** — Bootstrap components as React
- **Custom CSS** — cave theme (design.css)
- **Google Fonts** — Cinzel Decorative, Cinzel, Lato
