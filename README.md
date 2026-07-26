# Saqib Hussnain — Portfolio

A clean, dark-themed developer portfolio showcasing 4 frontend projects. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no templates.

## 🌐 Live Demo

[saqib-hussnain.vercel.app](https://saqib-hussnain.vercel.app/)

---

## 📋 About

Frontend Developer & CS student currently learning backend development. This portfolio showcases real projects built from scratch using HTML, CSS, and JavaScript including an AI-powered tool using Google's Gemini API.

---

## 🚀 Projects Showcased

### 1. AI Text Toolkit ✦ `New`
Real-time text processing with 6 AI modes (Summarize, Fix Grammar, Formal/Casual Rewrite, Translate, Extract Points) powered by Gemini 2.5 Flash API.
- **Tech:** HTML, CSS, JS, Gemini API
- **Demo:** [ai-text-toolkit-opal.vercel.app](https://ai-text-toolkit-opal.vercel.app)
- **Code:** [GitHub](https://github.com/Saqib216/AI-Text-Toolkit)

### 2. SoundPulse - Spotify Inspired
Fully functional music player with playbar, playlist switching, seek bar, volume control, and dynamic song loading from JSON files.
- **Tech:** HTML, CSS, JS
- **Demo:** [soundpulse-nine.vercel.app](https://soundpulse-nine.vercel.app)
- **Code:** [GitHub](https://github.com/Saqib216/soundpulse)

### 3. Netflix Clone
Netflix-style landing page with hero banner, feature cards, FAQ section, responsive layout, and multiple CTAs.
- **Tech:** HTML, CSS
- **Code:** [GitHub](https://github.com/Saqib216/netflix-clone)

### 4. Currency Converter
Real-time currency conversion for 150+ currencies using a live exchange rate API, with auto-updating country flags.
- **Tech:** HTML, CSS, JS, API
- **Demo:** [currency-converter-sleek.vercel.app/](https://currency-converter-sleek.vercel.app/)
- **Code:** [GitHub](https://github.com/Saqib216/currency-converter)

---

## ✨ Portfolio Features

- **Sticky Glassmorphism Navbar** — Frosted glass effect with `backdrop-filter: blur(12px)`
- **Profile Photo** — Circular image with neon glow, grayscale filter, color on hover
- **Overlay Navigation** — Full-screen mobile menu with large uppercase links
- **Per-Card Brand Colors** — Each project card glows in its project's brand color on hover:
  - AI Text Toolkit → Purple (`#8B5CF6`)
  - SoundPulse → Green (`#1DB954`)
  - Netflix Clone → Red (`#E50914`)
  - Currency Converter → Blue (`#38bdf8`)
- **"New" Badge** — Animated neon pulse badge on latest project card
- **Responsive Design** — Hamburger menu on mobile, single-column cards, centered layout
- **Smooth Hover Effects** — Cards float up on hover, buttons light up, badges glow
- **Active States for Mobile** — `:active` states replace hover for touch devices

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Fonts:** Fontshare — Clash Display (headings) + Satoshi (body)
- **Icons:** Font Awesome 7
- **Hosting:** Vercel

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Single-page HTML
├── css/
│   └── style.css       # All styling (variables, components, animations, responsive)
├── js/
│   └── script.js       # Hamburger + overlay nav toggle
└── Assets/
    ├── profile.jpg         # Hero section photo
    ├── favicon.png
    ├── up-arrow.svg        # GitHub button arrow icon
    ├── ai-text-toolkit.png # Project preview images
    ├── spotify-preview.png
    ├── netflix-preview.png
    └── currency-preview.png
```

---

## 🎨 Design System

### CSS Variables
```css
--bg-primary: #0a0a0a
--bg-secondary: #111111
--bg-card: #1a1a1a
--accent: #38bdf8        /* Sky blue */
--accent-hover: #0284c7
--text-primary: #ffffff
--text-secondary: #a0a0a0
--border-radius: 12px
--transition: all 0.3s ease
```

### Typography
- **Headings:** Clash Display (Fontshare)
- **Body:** Satoshi (Fontshare)
- **Gradient Name** — Logo uses `linear-gradient(45deg, #ffffff, #a0a0a0)` with `-webkit-background-clip: text`

### Key CSS Techniques
- **Glassmorphism Navbar** — Semi-transparent background + backdrop blur
- **Neon Glow** — `box-shadow` with accent color on profile image and skill badges
- **Per-Card Hover** — Each card has unique brand-colored border and glow
- **Underline Animation** — Nav links grow a white underline on hover via `::after`
- **Hover-only media query** — `@media (hover: hover)` separates hover effects from touch devices
- **CSS custom properties** — Section padding overridden locally for Contact section

---

## 🧩 JavaScript

Simple and clean — only 2 responsibilities:

```javascript
// 1. Toggle overlay nav on hamburger click
hamburger.addEventListener("click", () => {
    overlayNav.classList.toggle("active");
});

// 2. Close overlay nav when any link is clicked
anchors.forEach(link => {
    link.addEventListener("click", () => {
        overlayNav.classList.remove("active");
    });
});
```

The overlay nav uses CSS `opacity` + `visibility` transitions for a smooth open/close animation instead of `display: none` toggling.

---

## 📱 Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| Below 768px | Desktop nav hidden → hamburger appears |
| Below 768px | Hero section stacks vertically (image above text) |
| Below 768px | Cards switch from 2-column grid to single column |
| Below 768px | Contact links stack vertically |
| All sizes | Overlay nav available for full-screen mobile menu |

---

## 🚀 Run Locally

```bash
git clone https://github.com/Saqib216/portfolio-website.git
cd portfolio-website
```

Open `index.html` with VS Code Live Server or just double-click it.

---

## 📧 Contact

- **Email:** mdsaqibhussnain@gmail.com
- **GitHub:** [github.com/Saqib216](https://github.com/Saqib216)
- **Instagram:** [@itx.saqib.hussnain](https://www.instagram.com/itx.saqib.hussnain/)
- **LinkedIn:** [linkedin.com/in/saqib-hussnain](https://linkedin.com/in/saqib-hussnain)

---

## 📝 License

Open source — available for personal and educational use.

---

**Handcrafted by Saqib Hussnain** — *No templates. No frameworks. Just code.*