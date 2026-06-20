# 📘 PROJECT DOCUMENTATION — Md. Ekhtiar Hossain Portfolio

> This document is the single source of truth for the project. It is written so that **any AI agent or human developer** can fully understand the project's purpose, structure, decisions, current progress, and remaining work — without needing any other context.

---

## 1. Project Overview

**What it is:** A personal portfolio website for **Md. Ekhtiar Hossain**, a Computer Science & Engineering student specializing in **networking and cybersecurity**, currently seeking a networking internship.

**Goal:** Showcase his skills, projects, certifications, education, and contact info in a clean, modern, recruiter-friendly single-page website that can be hosted for free on GitHub Pages.

**Design inspiration:** The user liked the template at `https://a-rakin.github.io/portfolio/`. We adapted that single-page, smooth-scroll layout but **re-themed and re-contented it** to match a network/security engineer (not a generic web developer).

**Tech stack (intentionally simple, no build tools):**
- HTML5 (semantic, single page)
- CSS3 (custom properties / CSS variables, Flexbox, Grid, media queries)
- Vanilla JavaScript (no frameworks, no dependencies to install)
- External CDN assets: Google Fonts (Poppins + Fira Code), Font Awesome 6.5.1 (icons)

**Why no framework?** Keeps it lightweight, zero build step, instantly hostable on GitHub Pages, and easy for a student to maintain.

---

## 2. Theme & Design Decisions

| Decision | Value | Reason |
|---|---|---|
| Theme | Dark background + matrix-green accent (`#00ff41`) | User chose "hacker / cybersecurity feel" |
| Body font | Poppins | Clean, modern, readable |
| Mono font | Fira Code | Code/terminal aesthetic for headings, tags, labels |
| Layout | Single page, smooth scroll | Matches the inspiration template |
| Responsiveness | Mobile-first breakpoints at 900px, 768px, 480px | Works on all devices |
| References section | **Excluded** | Personal references are normally kept off public portfolio sites (can be re-added if requested) |

### Color Variables (defined in `css/style.css` `:root`)
```css
--bg: #0a0e0a;          /* page background */
--bg-alt: #0f150f;      /* alternating section background */
--card: #131a13;        /* card background */
--border: #1f2a1f;      /* borders */
--accent: #00ff41;      /* PRIMARY GREEN — change this to re-theme */
--accent-dim: #00cc34;
--accent-glow: rgba(0, 255, 65, 0.15);
--text: #e0e6e0;        /* main text */
--text-dim: #8a948a;    /* secondary text */
--text-mute: #5a655a;   /* muted text */
```

---

## 3. File Structure

```
Portfolio/
├── index.html                      # All page markup / every section
├── css/
│   └── style.css                   # All styles + responsive design + animations
├── js/
│   └── main.js                     # Interactivity (see section 5)
├── assets/
│   ├── PLACE_YOUR_FILES_HERE.txt   # Reminder note (delete after adding files)
│   ├── profile.jpg                 # ⚠️ NOT YET ADDED — user's photo
│   └── resume.pdf                  # ⚠️ NOT YET ADDED — user's resume
├── README.md                       # Quick-start / deploy guide for the user
└── PROJECT.md                      # THIS FILE — full project documentation
```

---

## 4. Page Sections (in `index.html`, in order)

1. **Navbar** (`#navbar`) — Fixed top bar, logo "EH.", nav links, "Resume" download button, mobile hamburger menu.
2. **Hero** (`#home`) — Greeting, name, animated typing title, description, CTA buttons, social links, profile photo in a rotating dashed ring.
3. **About** (`#about`) — Two paragraphs (from resume summary) + 3 stat boxes (3.79 CGPA, 4+ Projects, 4+ Certifications).
4. **Skills** (`#skills`) — 4 category cards: Networking, Tools, Systems, Security (content from resume's Skills section).
5. **Projects** (`#projects`) — 4 project cards with descriptions, tech tags, and GitHub links (see section 6 for links).
6. **Certifications** (`#certifications`) — 4 course cards (Cisco, Security Blue Team, TCM Security, Business Automation Ltd.).
7. **Education** (`#education`) — Vertical timeline (BSc IUBAT, HSC Uttara Model College, SSC Shahid Academic School) + 4 "Key Achievements" cards.
8. **Contact** (`#contact`) — Contact details (email, phone, LinkedIn, location) + a working `mailto:` contact form.
9. **Footer** — Logo, social links, dynamic copyright year.
10. **Scroll-to-top button** — Appears after scrolling 400px.

---

## 5. JavaScript Functionality (`js/main.js`)

| Feature | Description |
|---|---|
| Mobile nav toggle | Opens/closes the slide-in menu on small screens; closes on link click |
| Navbar scroll effect | Adds `.scrolled` class (background + border) after 40px scroll |
| Typing effect | Cycles through: "Network Engineer", "CSE Student", "Cybersecurity Enthusiast", "Network Troubleshooter" |
| Active link highlight | Highlights the nav link of the section currently in view |
| Scroll-to-top button | Shows/hides based on scroll position |
| Reveal on scroll | Uses `IntersectionObserver` to fade-in cards as they enter viewport |
| Contact form | Validates fields, then opens user's email client via `mailto:` pre-filled with the message |
| Footer year | Auto-inserts the current year |

---

## 6. Data / Personal Info Used

| Field | Value |
|---|---|
| Name | Md. Ekhtiar Hossain |
| Title | Network Engineer (Intern) |
| Email | ekhtiarhossain10@gmail.com |
| Phone | +880 163 071 0626 |
| Location | Uttara-10, Dhaka |
| GitHub | https://github.com/Ekhtiarhossain1 |
| LinkedIn | https://linkedin.com/in/ekhtiar10 |

### Project GitHub Links (confirmed by user)
| Project | Link |
|---|---|
| Cyber Security Home Lab | No dedicated repo → links to GitHub **profile** |
| Multi-Router Campus Network Design (VLANs, VLSM, RIP) | https://github.com/Ekhtiarhossain1/multi-router-campus-network-vlan-rip |
| VLSM Subnetting & Multi-LAN Network (RIP v2) | https://github.com/Ekhtiarhossain1/vlsm-subnetting-rip-network |
| Static & RIP Routing with VLSM | https://github.com/Ekhtiarhossain1/Routing-Lab |

### Education
- **BSc in CSE** — IUBAT (09/2022 – Present) — CGPA 3.79/4.0
- **HSC** — Uttara Model College (2019–2021) — GPA 4.92/5.0
- **SSC** — Shahid Academic School (2017–2019) — GPA 4.57/5.0

### Certifications / Courses
- Networking Basics — Cisco
- Introduction to Network Analysis — Security Blue Team
- Linux 100: Fundamentals — TCM Security
- Advanced Cybersecurity Training — Business Automation Ltd.

---

## 7. How to Run / Preview Locally

```bash
# From the Portfolio directory:
python -m http.server 5500
# Then open http://localhost:5500 in a browser
```
Or simply double-click `index.html` (the mailto form and most features still work).

---

## 8. How to Deploy (GitHub Pages)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Ekhtiarhossain1/portfolio.git
git push -u origin main
```
Then: **GitHub repo → Settings → Pages → Source: `main` / root → Save.**
Live URL: `https://ekhtiarhossain1.github.io/portfolio/`

---

## 9. ✅ Progress — What's DONE

- [x] Gathered all requirements from the user (theme, photo, repo links, work experience, resume button)
- [x] Designed the overall structure & sections
- [x] Built `index.html` with all 9 sections
- [x] Built `css/style.css` (full dark+green theme, responsive, animations)
- [x] Built `js/main.js` (typing, nav, scroll reveal, active links, contact form, year)
- [x] Wrote `README.md` (quick start + deploy guide)
- [x] Created `assets/` folder with placeholder instructions
- [x] Profile photo has a graceful fallback placeholder if missing
- [x] Wrote this `PROJECT.md` documentation file

---

## 10. ⏳ Remaining / TODO

### Must do (by the user — required for a complete site)
- [ ] **Add `assets/profile.jpg`** — the user's real profile photo (square, ~400x400px)
- [ ] **Add `assets/resume.pdf`** — the user's resume PDF (for the download button)
- [ ] **Delete** `assets/PLACE_YOUR_FILES_HERE.txt` after adding the two files above
- [ ] **Deploy** to GitHub Pages (see section 8)

### Optional improvements (nice-to-have / future)
- [ ] Add real project screenshots/thumbnails to project cards
- [ ] Add network topology diagrams (Packet Tracer screenshots) inside each project repo & link them
- [ ] Replace the `mailto:` contact form with a real backend (e.g. Formspree / EmailJS) so messages send without opening an email client
- [ ] Add a favicon (`assets/favicon.ico`) and Open Graph meta tags for nicer link previews on social media
- [ ] Add a "References available upon request" line if desired (currently excluded)
- [ ] Add SEO meta tags & a `sitemap.xml` for better discoverability
- [ ] Consider a light/dark theme toggle
- [ ] Add Google Analytics or similar (optional)

---

## 11. Notes for Future AI / Developers

- **No package manager / build step.** Edit files directly; refresh the browser.
- **To re-theme:** change `--accent` and `--bg` in `css/style.css` `:root`.
- **To add a project:** copy an existing `<article class="project__card">` block in `index.html` and update the icon, title, description, tags, and GitHub link.
- **To add a skill:** add an `<li>` inside the relevant `.skills__list` in `index.html`.
- **Icons** come from Font Awesome — find icon names at https://fontawesome.com/icons.
- The contact form intentionally uses `mailto:` (no backend). This is by design for a static, free-to-host site.
- The "References" section from the original resume is deliberately omitted from the public site.
