# Md. Ekhtiar Hossain — Portfolio

A clean, responsive, single-page portfolio website with a **dark + matrix-green (cybersecurity)** theme.
Built with plain **HTML, CSS, and JavaScript** — no build tools required.

## 📁 Project Structure
```
Portfolio/
├── index.html          # All page content / sections
├── css/
│   └── style.css       # All styling + responsive design
├── js/
│   └── main.js         # Typing effect, nav, scroll reveal, contact form
├── assets/
│   ├── profile.jpg     # 👉 ADD YOUR PHOTO HERE (square, e.g. 400x400)
│   └── resume.pdf      # 👉 ADD YOUR RESUME PDF HERE
└── README.md
```

## ✅ Two Things You MUST Add
The site works immediately, but to make it fully yours:

1. **Profile Photo** — Save a square photo as `assets/profile.jpg`.
   *(Until you do, a placeholder image appears automatically.)*

2. **Resume PDF** — Save your resume as `assets/resume.pdf`.
   *(This is what the "Resume" download button uses.)*

## ▶️ How to View Locally
Just open `index.html` in your browser, **or** run a tiny local server:

```bash
# Python (already installed on your machine)
python -m http.server 5500
```
Then open: http://localhost:5500

## 🚀 How to Deploy Free on GitHub Pages
1. Create a new GitHub repo, e.g. `portfolio`.
2. Push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Ekhtiarhossain1/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: `main` branch / root → Save**.
4. Your site goes live at: `https://ekhtiarhossain1.github.io/portfolio/`

## ✏️ Sections Included
- Hero (animated typing roles)
- About (with quick stats)
- Skills & Tools (Networking, Tools, Systems, Security)
- Projects (4 cards with GitHub links)
- Certifications & Courses
- Education timeline + Key Achievements
- Contact (info + working mailto contact form)

## 🎨 Want to Change Colors?
Edit the variables at the top of `css/style.css`:
```css
:root {
    --accent: #00ff41;   /* main green — change this for a new theme */
    --bg: #0a0e0a;       /* page background */
}
```

---
Contact: ekhtiarhossain10@gmail.com · [GitHub](https://github.com/Ekhtiarhossain1) · [LinkedIn](https://linkedin.com/in/ekhtiar10)
