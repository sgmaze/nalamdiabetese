# Nalam Diabetes Foundation

**Preventing Diabetes, One Community at a Time**

A student-led non-profit bringing free A1C testing, bilingual health education, and data-driven follow-up to the communities of Coimbatore, Tamil Nadu. Launched May 2026.

---

## About

Nalam Diabetes Foundation was born from a simple observation: too many families in Coimbatore were discovering diabetes only after serious complications had already set in. Five students with roots in Tamil Nadu came together to change that through early detection and community-level prevention.

Since launching in May 2026, we have run two free A1C testing camps: 40 people tested in June and 74 in July. More camps are planned.

This repository contains the foundation's public website: a static, English-only site with no build tools required.

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, impact stats, diabetes crisis data, the Nalam Model, research articles, call-to-action |
| **About** | `about.html` | Origin story, mission & vision, strategic pillars, 2026 milestones |
| **Our Work** | `programs.html` | The Nalam Model, 5-step process, four core programs |
| **Team** | `team.html` | Five student founders, foundation roles |
| **Get Involved** | `get-involved.html` | Donate, volunteer, spread the word, contact info |

## Tech Stack

- **HTML5**: one file per page, no templates
- **Tailwind CSS**: loaded from a CDN (`cdn.tailwindcss.com`), so styling is done with classes in the HTML
- **style.css**: a few custom styles (animations, nav underline)
- **Google Fonts**: Inter
- **No dependencies**: no package.json, no node_modules, no bundler

## Project Structure

```
.
├── index.html                  # Homepage
├── about.html                  # About page
├── programs.html               # Our Work page
├── team.html                   # Team page
├── get-involved.html           # Get Involved page
├── style.css                   # Custom styles
├── logo.png                    # Foundation logo
├── images/                     # Photos used on the pages
├── CNAME                       # Custom domain for GitHub Pages (do not delete)
└── PLAN.md                     # Website redesign plan
```

## Getting Started

No build tools required. Open any `.html` file in your browser, or serve the folder locally:

```bash
git clone https://github.com/sgmaze/nalamdiabetese.git
cd nalamdiabetese
python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Making Changes

1. Create a branch from `main`.
2. Edit the HTML and check it in your browser.
3. Open a pull request. Changes need one approval before they go live at www.nalamdiabetes.org.

The header and footer are copied into every page, so a change to either one has to be made in all five files.

## Contact

**Email:** nalamdiabetictrust@gmail.com

**Location:** Coimbatore, Tamil Nadu, India

---

Built with care by the Nalam student team.
