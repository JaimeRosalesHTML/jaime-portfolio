# Jaime Rosales - Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Contact Form**: Functional contact form for easy communication
- **Project Showcase**: Grid layout to showcase your projects
- **Tech Stack Display**: Visual representation of your technical skills

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── ProjectCard.js
│   └── ThemeProvider.js
├── data/
│   └── projects.js
├── scripts/
│   ├── git-helper.bat
│   ├── git-helper.ps1
│   ├── git-helper.sh
│   ├── quick-update.bat
│   └── quick-update.sh
├── public/
│   └── (add your images here)
└── configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git (for version control)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jaime-rosales-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Git Setup & Workflow

### Quick Git Commands
```bash
# Add, commit, and push all changes
npm run git:update

# Build and deploy (build + add + commit + push)
npm run deploy

# Quick update using scripts
scripts/quick-update.bat  # Windows
./scripts/quick-update.sh # Unix/Linux
```

### Interactive Git Helper
```bash
# Windows
scripts/git-helper.bat

# PowerShell
scripts/git-helper.ps1

# Unix/Linux/Mac
./scripts/git-helper.sh
```

### Manual Git Commands
```bash
# Add all changes
git add .

# Commit with message
git commit -m "update"

# Push to GitHub
git push origin main

# Check status
git status
```

For detailed Git setup instructions, see [GIT_SETUP.md](GIT_SETUP.md).

## 📝 Customization

### Personal Information

1. **Update personal details** in `app/page.js`:
   - Name and title
   - Bio and description
   - Education information
   - Contact details

2. **Update social links** in `components/Footer.js`:
   - GitHub profile
   - LinkedIn profile
   - Email address

### Projects

1. **Replace placeholder projects** in `data/projects.js`:
   - Update project titles, descriptions, and technologies
   - Add your actual GitHub repository links
   - Add live demo links
   - Update project images (add to `public/images/`)

### Tech Stack

1. **Update technologies** in `data/projects.js`:
   - Modify the `techStack` array
   - Add or remove technologies as needed

### Styling

1. **Colors**: Update the primary color scheme in `tailwind.config.js`
2. **Fonts**: Change fonts in `app/layout.js`
3. **Animations**: Modify Framer Motion animations in components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Features Overview

### Home Section
- Hero section with name and professional description
- Call-to-action buttons (View Projects, Download CV)
- Smooth scroll navigation

### About Section
- Personal bio and background
- Education information (Griffith College)
- Tech stack grid with icons

### Projects Section
- Grid layout of featured projects
- Project cards with descriptions, technologies, and links
- GitHub and live demo buttons

### Contact Section
- Contact form with validation
- Contact information display
- Social media links

### Navigation
- Fixed navigation bar
- Smooth scrolling between sections
- Mobile-responsive menu
- Theme toggle (dark/light mode)

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Light Theme**: 
  - Background: #F9FAFB
  - Text: #111827
- **Dark Theme**:
  - Background: #0F172A
  - Text: #F8FAFC

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Spacing
- Consistent padding and margins using TailwindCSS spacing scale
- Responsive breakpoints for mobile, tablet, and desktop

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run git:update` - Add + commit + push
- `npm run deploy` - Build + add + commit + push

### Code Structure

- **Components**: Reusable UI components in `/components`
- **Data**: Static data and configuration in `/data`
- **Pages**: Main page content in `/app`
- **Scripts**: Git helper scripts in `/scripts`
- **Styles**: Global styles and TailwindCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: jaime.rosales@example.com
- **GitHub**: [@jaime-rosales](https://github.com/jaime-rosales)
- **LinkedIn**: [Jaime Rosales](https://linkedin.com/in/jaime-rosales)

---

Built with ❤️ using Next.js and TailwindCSS 