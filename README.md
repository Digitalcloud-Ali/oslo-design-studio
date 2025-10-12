# Oslo Design Studio 🎨

A modern, fully responsive, bilingual (English/Norwegian) website built with Astro for a creative design agency in Oslo. Features 5 comprehensive pages with smooth animations, interactive elements, and a clean, professional design.

![Astro](https://img.shields.io/badge/Astro-4.0-BC52EE?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
- [Tech Stack](#️-tech-stack)
- [Internationalization](#-internationalization-i18n)
- [Project Structure](#-project-structure)
- [Design Highlights](#-design-highlights)
- [Responsive Design](#-responsive-design)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

## 🌟 Demo

> **Note:** Add your live demo URL here once deployed!

### Screenshots

<details>
<summary>Click to view screenshots</summary>

> **Note:** Add screenshots of your website here to showcase the design and functionality.

</details>

## 🚀 Quick Start

Get up and running in minutes:

```bash
# Clone the repository
git clone https://github.com/Digitalcloud-Ali/oslo-design-studio.git

# Navigate to directory
cd oslo-design-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` and start building! 🎉

## ✨ Features

### Core Features
- 🌍 **Bilingual Support** - Full English and Norwegian translations with seamless language switching
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop, and large screens)
- 🎯 **SEO Optimized** - Proper meta tags, semantic HTML, and structured data
- ⚡ **Lightning Fast** - Built with Astro for optimal loading speeds and performance
- 🎨 **Modern Design** - Clean, professional aesthetic with purple/blue gradient themes
- 🔄 **Interactive Elements** - Smooth hover effects, transitions, and animations
- 📝 **Contact Form** - Functional contact form with client-side validation
- 🎭 **Portfolio Filter** - Dynamic filtering for project categories (Brand Identity, Web Design, UI/UX, Marketing)
- 📊 **Statistics Section** - Real-time showcasing of company achievements and metrics

### Technical Features
- 🏗️ **Static Site Generation** - Pre-rendered pages for maximum performance
- 🔧 **TypeScript Support** - Type-safe development experience
- 🎯 **Zero JavaScript** - HTML and CSS only (unless needed for interactivity)
- 📦 **Modular Components** - Reusable Astro components
- 🌐 **i18n Ready** - Built-in internationalization system
- 🎨 **Custom CSS** - No heavy frameworks, just clean custom styles

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Digitalcloud-Ali/oslo-design-studio.git
cd oslo-design-studio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

The development server supports hot module replacement (HMR) for instant updates.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📄 Pages

### English Version
- **/** - Home page with hero, services preview, and featured projects
- **/services** - Detailed overview of all design services with pricing
- **/portfolio** - Showcase of 9+ completed projects with filtering
- **/about** - Company story, team members, values, and awards
- **/contact** - Contact form, office information, and FAQ section

### Norwegian Version (Norsk)
- **/no/** - Hjemmeside
- **/no/services** - Tjenester
- **/no/portfolio** - Portefølje
- **/no/about** - Om Oss
- **/no/contact** - Kontakt

## 🛠️ Tech Stack

- **[Astro 4.0](https://astro.build/)** - Modern static site generator with partial hydration
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development with enhanced DX
- **Custom CSS** - Hand-crafted styles without heavy frameworks for better performance
- **Modern JavaScript** - ES6+ features for clean, maintainable code
- **i18n System** - Custom internationalization implementation
- **Git** - Version control and collaboration

### Why Astro?

Astro was chosen for this project because:

- ⚡ **Zero JS by Default** - Ships no JavaScript unless needed, resulting in faster page loads
- 🏗️ **Component Islands** - Interactive components only where needed
- 🔧 **Framework Agnostic** - Bring your own framework or use none
- 📦 **Built-in Optimizations** - Automatic CSS bundling, image optimization, and more
- 🎯 **SEO Friendly** - Static HTML generation for better search engine visibility
- 💻 **Great DX** - Fast dev server, TypeScript support, and excellent documentation

## 🌐 Internationalization (i18n)

The website supports English and Norwegian languages:

- **Language Switcher**: Available in the navigation bar (EN | NO)
- **Automatic Routing**: URLs are prefixed with `/no/` for Norwegian content
- **Translation System**: Centralized translation files in `src/i18n/`
- **Translated Content**: All navigation, pages, and UI elements

### Adding New Translations

1. Update `src/i18n/translations.ts` with new translation keys
2. Use the `useTranslations()` function in your components
3. Both English and Norwegian pages will automatically use the translations

### Adding a New Language

To add support for another language (e.g., Swedish):

1. Update `astro.config.mjs`:
```javascript
locales: ['en', 'no', 'sv']
```

2. Add translations in `src/i18n/translations.ts`:
```typescript
export const translations = {
  en: { ... },
  no: { ... },
  sv: { ... }
}
```

3. Create page structure:
```
src/pages/sv/
├── index.astro
├── services.astro
└── ...
```

## 🎨 Customization

### Changing Colors

The main color scheme is defined using CSS variables. Update these in your layout or CSS files:

```css
:root {
  --primary-color: #6366f1;    /* Primary purple/blue */
  --secondary-color: #8b5cf6;  /* Secondary purple */
  --accent-color: #ec4899;     /* Accent pink */
  --dark-gray: #1f2937;        /* Text color */
  --light-bg: #f9fafb;         /* Light background */
}
```

### Modifying Content

- **Pages**: Edit files in `src/pages/` for English and `src/pages/no/` for Norwegian
- **Layout**: Modify `src/layouts/Layout.astro` for site-wide changes
- **Components**: Update `src/components/` for reusable elements
- **Translations**: Edit `src/i18n/translations.ts` for all text content

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Create the Norwegian version in `src/pages/no/`
3. Add translations to `src/i18n/translations.ts`
4. Update navigation in the Layout component

## 📁 Project Structure

```
oslo-design-studio/
├── public/                      # Static assets
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/             # Reusable Astro components
│   │   └── LanguageSwitcher.astro  # Language toggle component
│   ├── i18n/                   # Internationalization
│   │   ├── translations.ts     # Translation strings (EN/NO)
│   │   └── utils.ts           # i18n utility functions
│   ├── layouts/                # Page layouts
│   │   └── Layout.astro       # Main layout wrapper
│   ├── pages/                  # File-based routing
│   │   ├── index.astro        # Home page (EN)
│   │   ├── services.astro     # Services page (EN)
│   │   ├── portfolio.astro    # Portfolio page (EN)
│   │   ├── about.astro        # About page (EN)
│   │   ├── contact.astro      # Contact page (EN)
│   │   └── no/                # Norwegian pages
│   │       ├── index.astro    # Home page (NO)
│   │       ├── services.astro # Services page (NO)
│   │       ├── portfolio.astro # Portfolio page (NO)
│   │       ├── about.astro    # About page (NO)
│   │       └── contact.astro  # Contact page (NO)
│   └── env.d.ts               # TypeScript environment types
├── .gitignore                  # Git ignore rules
├── astro.config.mjs           # Astro configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Design Highlights

- **Color Scheme**: Professional gradient themes (Purple/Blue tones)
- **Typography**: Clean, modern font stack with excellent readability
- **Animations**: Smooth hover effects and transitions
- **Layout**: Grid-based responsive layout system
- **Components**: Reusable, modular component structure

## 📱 Responsive Design

The website is fully optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1200px and up)
- 🖥️ Large screens (1920px and up)

All components adapt seamlessly to different screen sizes using:
- CSS Grid and Flexbox for flexible layouts
- Mobile-first approach for optimal performance
- Touch-friendly interactions for mobile devices
- Optimized images and assets for each breakpoint

## ⚡ Performance

Built with performance in mind:

- **Fast Loading** - Astro's static site generation ensures minimal JavaScript
- **Optimized Assets** - Efficient CSS and HTML output
- **SEO Ready** - Semantic HTML and proper meta tags
- **Lighthouse Scores** - Optimized for high performance metrics
- **Zero Runtime** - No client-side JavaScript unless explicitly needed
- **Small Bundle Size** - Minimal dependencies for faster loading

Expected Lighthouse Scores:
- ⚡ Performance: 95+
- ♿ Accessibility: 90+
- 🎯 Best Practices: 95+
- 🔍 SEO: 100

### Browser Support

This website supports all modern browsers:
- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Netlify

```bash
npm run build
```

Then drag the `dist/` folder to Netlify's deployment interface.

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to GitHub Pages

1. Update `astro.config.mjs` with your site URL:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/oslo-design-studio',
});
```

2. Build and deploy:
```bash
npm run build
# Upload the dist/ folder to GitHub Pages
```

### Other Platforms

The static output in `dist/` can be deployed to:
- **AWS S3** - Static website hosting
- **Cloudflare Pages** - Fast global CDN
- **Render** - Static site hosting
- **Surge** - Quick deployment for static sites
- **Firebase Hosting** - Google's hosting solution

## 🔧 Troubleshooting

### Common Issues

**Port 4321 already in use**
```bash
# Kill the process using port 4321
npx kill-port 4321
# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors**
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check Node.js version (should be 18.0+)
node --version

# Clear Astro cache
rm -rf .astro
npm run build
```

**TypeScript errors**
```bash
# Regenerate Astro type definitions
npm run astro sync
```

### Getting Help

If you encounter issues:
1. Check the [Astro documentation](https://docs.astro.build/)
2. Search existing [GitHub issues](https://github.com/Digitalcloud-Ali/oslo-design-studio/issues)
3. Open a new issue with details about your problem

## 👨‍💻 Developer

**Syed**
- Website: [digitalcloud.no](https://digitalcloud.no)
- GitHub: [@Digitalcloud-Ali](https://github.com/Digitalcloud-Ali)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Digitalcloud-Ali/oslo-design-studio/issues).

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📞 Contact

For inquiries about this project:
- Visit: [digitalcloud.no](https://digitalcloud.no)
- GitHub: [@Digitalcloud-Ali](https://github.com/Digitalcloud-Ali)

---

<div align="center">

**If you find this project helpful, please consider giving it a ⭐ on GitHub!**

Made with ❤️ by [Syed](https://digitalcloud.no)

</div>
