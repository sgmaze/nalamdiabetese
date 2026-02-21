# Nalam Diabetes Prevention Foundation

**Preventing Diabetes, One Community at a Time**

A student-led non-profit bringing free A1C testing, bilingual health education, and data-driven follow-up to the communities of Coimbatore, Tamil Nadu. Launching May 2026.

---

## About

Nalam Diabetes Prevention Foundation was born from a simple observation: too many families in Coimbatore were discovering diabetes only after serious complications had already set in. Five students with roots in Tamil Nadu came together to change that through early detection and community-level prevention.

This repository contains the foundation's public website — a static, bilingual (English/Tamil) site built with modern web technologies and no build tools required.

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, impact stats, diabetes crisis data, the Nalam Model, research articles, call-to-action |
| **About** | `about.html` | Origin story, mission & vision, strategic pillars, organizational goals |
| **Our Work** | `programs.html` | The Nalam Model, 5-step process, four core programs |
| **Team** | `team.html` | Five student founders, foundation roles |
| **Get Involved** | `get-involved.html` | Donate, volunteer, spread the word, contact info |

## Features

- **Bilingual Support** — Full English/Tamil toggle with 300+ translated strings
- **Language Persistence** — Selection saved to localStorage, persists across pages
- **FOUC Prevention** — Inline script prevents flash of wrong language on page load
- **Responsive Design** — Mobile-first layout with tablet and desktop breakpoints
- **Modern Typography** — Inter (English) + Noto Sans Tamil (Tamil) via Google Fonts
- **Tailwind CSS** — Utility-first styling via CDN (no build step)

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **Tailwind CSS** — Via CDN (`cdn.tailwindcss.com`), no build tools needed
- **Vanilla JavaScript** — Custom i18n engine, no frameworks
- **Google Fonts** — Inter, Noto Sans Tamil
- **No dependencies** — No package.json, no node_modules, no bundler

## Project Structure

```
.
├── index.html                  # Homepage
├── about.html                  # About page
├── programs.html               # Our Work page
├── team.html                   # Team page
├── get-involved.html           # Get Involved page
├── style.css                   # Custom styles (FOUC prevention, etc.)
├── i18n.js                     # Translation engine
├── logo.png                    # Foundation logo
└── translations/
    └── translations.json       # English & Tamil translation strings
```

## Getting Started

No build tools required. Just serve the files with any static server:

```bash
# Clone the repo
git clone https://github.com/sgmaze/nalamdiabetictrust.git
cd nalamdiabetictrust

# Serve locally (pick any method)
python3 -m http.server 3000
# or
npx serve .
# or
php -S localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Multilingual System

The site uses a custom lightweight i18n system:

1. **HTML elements** are tagged with `data-i18n` attributes that map to translation keys
2. **`translations/translations.json`** contains all strings in both English (`en`) and Tamil (`ta`)
3. **`i18n.js`** loads the translations and swaps text when the language toggle is clicked
4. **Language preference** is stored in `localStorage` (key: `nalam-lang`) and persists across pages

### Translation Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `data-i18n` | Text content | `data-i18n="common.nav.home"` |
| `data-i18n-html` | Inner HTML (preserves child elements) | `data-i18n-html="home.hero.title"` |
| `data-i18n-alt` | Image alt text | `data-i18n-alt="common.alt.logo"` |
| `data-i18n-aria` | Aria labels | `data-i18n-aria="common.mobile.toggleMenu"` |

### Adding or Editing Translations

1. Open `translations/translations.json`
2. Find the key under both `en` and `ta` sections
3. Update the text values
4. Keys follow the pattern: `section.subsection.element` (e.g., `home.hero.title`, `common.nav.about`)

## Contact

**Email:** nalamdiabetictrust@gmail.com

**Location:** Coimbatore, Tamil Nadu, India

---

Built with care by the Nalam student team.
