# 🌐 Avinash Boruah — Personal Portfolio

<p align="center">
  <img src="public/favicon.svg" width="64" height="64" alt="Portfolio Favicon" />
</p>

<p align="center">
  <b>A modern, retro-inspired developer portfolio exploring Full-Stack Development and AI.</b>
</p>

<p align="center">
  <a href="https://github.com/avinashboruah/portfolio"><img src="https://img.shields.io/badge/React-19-blue?logo=react&style=flat-square" alt="React 19" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&style=flat-square" alt="Vite 7" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss&style=flat-square" alt="Tailwind CSS v4" /></a>
  <a href="https://github.com/avinashboruah"><img src="https://img.shields.io/badge/GitHub-avinashboruah-181717?logo=github&style=flat-square" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/avinash-boruah-7a4380250/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&style=flat-square" alt="LinkedIn" /></a>
</p>

---

## ✨ Features

- **🎨 Retro-Modern Aesthetic**:
  - Pixel typography using [`Press Start 2P`](https://fonts.google.com/specimen/Press+Start+2P) paired with clean modern sans-serif fonts.
  - Custom refined color palette (*Carbon Black*, *Almond Silk*, *Lilac Ash*, and *Rosy Granite*).
  - Subtle, theme-aware custom horizontal scrollbars.

- **🌌 3D Interactive Background**:
  - Powered by [Vanta.js](https://www.vantajs.com/) (Net effect) and [Three.js](https://threejs.org/).
  - Dynamically recalculates mesh vertices and node colors when switching between Dark and Light modes.

- **📄 Dual-Resume Support (Full-Stack & AI)**:
  - Interactive segmented role toggle switching seamlessly between **Full Stack Developer** and **AI Engineer** resumes.
  - One-click PDF in-browser preview and direct download capabilities.

- **⚡ Dynamic GitHub Project Showcase**:
  - Fetches repositories on-the-fly directly from the GitHub REST API (`topics`, `description`, `stars`, and `homepage`).
  - **12-Hour LocalStorage Caching**: Protects against unauthenticated GitHub API rate limits.
  - **Graceful Fallbacks**: Offline fallback cards guarantee projects are never blank even if an API error occurs.
  - **Sideways Horizontal Scrolling**: Smooth horizontal scroll rows without cluttered chevron arrows.
  - **Skeleton Loaders**: Skeleton pulse placeholders rendered while repositories are being fetched.

- **🏆 Certificates & Credentials**:
  - Highlights professional courses, hackathons, and certifications (Oracle Generative AI, 100xDevs, NIT Agartala AI Internship, IBM Expert Labs, SIH, HackerRank).
  - Integrated image-loading skeleton state with smooth opacity fade-in.

- **🌓 Dark / Light Mode**:
  - React Context-driven theme toggling with smooth transitions across all UI components.

- **📬 Contact & Connect**:
  - One-click email copy button with status feedback.
  - Quick links to GitHub, LinkedIn, and X (Twitter).

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **3D & Canvas Graphics** | [Three.js](https://threejs.org/) & [Vanta.js](https://www.vantajs.com/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Data Fetching** | GitHub REST API with custom LocalStorage caching |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── assets/              # Resume PDFs (Full Stack, AI Engineer)
│   ├── favicon.svg          # Custom terminal-style vector favicon
│   ├── profilePic.jpeg      # Profile avatar
│   └── _redirects           # SPA routing redirects (Netlify/Vercel)
├── src/
│   ├── assets/              # Static certificate images
│   ├── components/
│   │   ├── Background.jsx              # Vanta.net 3D canvas background
│   │   ├── BottonComp.jsx              # Footer component
│   │   ├── Certificates.jsx            # Certificates horizontal scroll section
│   │   ├── CertificatesCard.jsx        # Certificate item card with image skeleton
│   │   ├── CertificatesCardSkeleton.jsx# Skeleton loader for certificates
│   │   ├── Contact.jsx                 # Get in touch & social links
│   │   ├── Greetings.jsx               # Hero section with dual resume switcher
│   │   ├── Landing.jsx                 # Main landing page layout
│   │   ├── Navbar.jsx                  # Header with theme toggle & socials
│   │   ├── NotAvailable.jsx            # Fallback page for missing live demos
│   │   ├── ProjectCard.jsx             # GitHub project card
│   │   ├── ProjectCardSkeleton.jsx     # Skeleton loader for projects
│   │   └── Projects.jsx                # Projects horizontal scroll section
│   ├── context/
│   │   └── DarkThemeContext.js         # Dark/Light theme state provider
│   ├── data/
│   │   ├── CertificateData.js          # Certificate entries & metadata
│   │   └── ProjectData.js              # Repository list & GitHub username
│   ├── utils/
│   │   └── fetchGitHubprojects.js      # Cached GitHub API integration
│   ├── App.css                         # Custom theme rules & scrollbars
│   ├── App.jsx                         # Main router & theme wrapper
│   ├── index.css
│   └── main.jsx                        # Application root
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/avinashboruah/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## ⚙️ Configuration & Customization

### Adding / Editing Projects
Open [`src/data/ProjectData.js`](src/data/ProjectData.js) and add your GitHub repository names to the `ProjectName` array:

```javascript
export const ProjectName = [
  "pawsense",
  "backkit",
  "qualify",
  "your-new-repo-name"
];

export const GitHUB_UserName = "avinashboruah";
```
The portfolio will automatically pull the repo title, description, topics (tech stack), and live demo link directly from your GitHub profile.

### Adding Certificates
Open [`src/data/CertificateData.js`](src/data/CertificateData.js) to append or modify certificates and verification links.

---

## 📬 Contact & Socials

- **Portfolio**: [avinashboruah.me](https://github.com/avinashboruah/portfolio)
- **GitHub**: [@avinashboruah](https://github.com/avinashboruah)
- **LinkedIn**: [Avinash Boruah](https://www.linkedin.com/in/avinash-boruah-7a4380250/)
- **X (Twitter)**: [@avinash_boruah](https://x.com/avinash_boruah)
- **Email**: [avinashboruah01@gmail.com](mailto:avinashboruah01@gmail.com)

---

<p align="center">
  Made with ❤️ by <b>Avinash Boruah</b>
</p>
