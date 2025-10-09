# Oslo Design Studio 🎨

A modern, fully responsive, bilingual (English/Norwegian) website built with Astro for a creative design agency in Oslo. Features 5 comprehensive pages with smooth animations, interactive elements, and a clean, professional design.

![Astro](https://img.shields.io/badge/Astro-4.0-BC52EE?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## ✨ Features

- 🌍 **Bilingual Support** - Full English and Norwegian translations with easy language switching
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure
- ⚡ **Fast Performance** - Built with Astro for optimal loading speeds
- 🎨 **Modern Design** - Clean, professional aesthetic with gradient accents
- 🔄 **Interactive Elements** - Smooth hover effects and transitions
- 📝 **Contact Form** - Functional contact form with validation
- 🎭 **Portfolio Filter** - Dynamic filtering for project categories
- 📊 **Statistics Section** - Showcasing company achievements

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rayice/oslo-design-studio.git
cd oslo-design-studio
```

2. Install dependencies:
```bash
npm install
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

- **[Astro 4.0](https://astro.build/)** - Static site generator
- **TypeScript** - Type-safe development
- **Custom CSS** - No frameworks for better performance
- **Modern JavaScript** - ES6+ features
- **i18n** - Internationalization support

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

## 📁 Project Structure

```
oslo-design-studio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── LanguageSwitcher.astro
│   ├── i18n/
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── services.astro
│       ├── portfolio.astro
│       ├── about.astro
│       ├── contact.astro
│       └── no/
│           ├── index.astro
│           ├── services.astro
│           ├── portfolio.astro
│           ├── about.astro
│           └── contact.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
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

Update `astro.config.mjs` with your site URL, then:

```bash
npm run build
```

## 👨‍💻 Developer

**Syed**
- Website: [digitalcloud.no](https://digitalcloud.no)
- GitHub: [@Digitalcloud-Ali](https://github.com/Digitalcloud-Ali)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For inquiries about this project:
- Visit: [digitalcloud.no](https://digitalcloud.no)
- GitHub: [@Digitalcloud-Ali](https://github.com/Digitalcloud-Ali)
