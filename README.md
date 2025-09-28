# Jaime Rosales – Developer Portfolio

Welcome to my personal developer portfolio! This site was built from scratch using **Next.js**, **TailwindCSS**, and **Framer Motion**, and is designed to showcase who I am, what I build, and how I work.

## 🌐 Live Site
👉 [https://jaimerosales.dev](https://jaimerosales.dev)

---

## 🚀 About This Project

As a 3rd Year Computer Science student at Griffith College Dublin, I built this portfolio to demonstrate my skills in modern web development and to connect with potential employers and collaborators. The site showcases my projects, technical skills, and professional journey in a clean, responsive design.

### What Makes This Special
- ⚡ **Performance First**: Built with Next.js 14 for optimal speed and SEO
- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- 🌙 **Dark/Light Mode**: User preference with localStorage persistence
- ♿ **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting for consistency
- **PostCSS** - CSS processing with Autoprefixer
- **Git** - Version control

### Deployment
- **Vercel** - Hosting and continuous deployment
- **GitHub** - Source code repository

## 📁 Project Structure

```
jaime-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Homepage component
│   └── thanks/            # Thank you page for contact form
├── components/            # Reusable React components
│   ├── Footer.js          # Site footer with social links
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── ProjectCard.js     # Project showcase cards
│   └── ThemeProvider.js   # Dark/light mode context
├── data/                  # Static data and configuration
│   └── projects.js        # Project information and tech stack
├── public/                # Static assets
│   ├── images/           # Project screenshots and icons
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # Site structure for crawlers
└── ...config files       # ESLint, Prettier, Tailwind configs
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JaimeRosalesHTML/jaime-portfolio.git
   cd jaime-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run check` - Run lint and build checks

## 🎯 Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation and interactions

### Performance Optimizations
- Image optimization with Next.js Image component
- Font loading optimization with Google Fonts
- Lazy loading for non-critical resources
- Minimal bundle size with tree shaking

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for readability
- Screen reader friendly

### SEO & Meta
- Dynamic meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data for search engines
- XML sitemap and robots.txt

## 🎨 Design Decisions

### Color Palette
- **Primary**: Blue (#3B82F6) for CTAs and highlights
- **Neutral**: Gray scale for text and backgrounds
- **Dark Mode**: Custom dark theme with proper contrast

### Typography
- **Font**: Inter (Google Fonts) for readability
- **Hierarchy**: Clear heading structure (h1-h4)
- **Responsive**: Fluid typography that scales with screen size

### Animations
- **Subtle**: Framer Motion for smooth, purposeful animations
- **Performance**: GPU-accelerated transforms
- **Accessibility**: Respects user's motion preferences

## 🐛 Known Limitations

- Contact form requires Formspree integration (currently using placeholder)
- Some project images may need optimization for faster loading
- Mobile navigation could benefit from swipe gestures
- No internationalization (i18n) support yet

## 🛣 Roadmap & TODOs

### Short Term
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Implement contact form with Formspree
- [ ] Add project filtering and search functionality
- [ ] Optimize images with next/image and WebP format

### Medium Term
- [ ] Add blog section for technical articles
- [ ] Implement dark mode system preference detection
- [ ] Add project case studies with detailed write-ups
- [ ] Create admin panel for content management

### Long Term
- [ ] Add internationalization (i18n) support
- [ ] Implement CMS integration (Strapi or Sanity)
- [ ] Add analytics and performance monitoring
- [ ] Create mobile app version with React Native

## 🤝 Contributing

This is a personal portfolio project, but I'm open to suggestions and feedback! If you find any issues or have ideas for improvements:

1. Open an issue describing the problem or suggestion
2. Fork the repository (if you want to contribute code)
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rosalesjaime000@gmail.com
- **LinkedIn**: [jaimerosales2005](https://www.linkedin.com/in/jaimerosales2005)
- **GitHub**: [JaimeRosalesHTML](https://github.com/JaimeRosalesHTML)
- **Portfolio**: [jaimerosales.dev](https://jaimerosales.dev)

---

**Built with ❤️ by Jaime Rosales**  
*Computer Science Student at Griffith College Dublin*