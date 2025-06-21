# Installation Guide

## Prerequisites

Before running this portfolio project, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the Windows installer (.msi file)

2. **Install Node.js**:
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation

3. **Verify Installation**:
   Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

Once Node.js is installed, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Alternative Installation Methods

### Using Chocolatey (Windows Package Manager)
```bash
choco install nodejs
```

### Using Winget (Windows Package Manager)
```bash
winget install OpenJS.NodeJS
```

## Troubleshooting

### If npm is not recognized:
1. Restart your terminal/command prompt
2. Make sure Node.js was installed with "Add to PATH" option
3. Check if Node.js is in your system PATH

### If you get permission errors:
1. Run terminal as Administrator
2. Or use `npm install --user` to install packages locally

## Next Steps

After successful installation:
1. Customize the portfolio content in the files
2. Add your projects to `data/projects.js`
3. Update personal information in `app/page.js`
4. Deploy to Vercel or your preferred platform 