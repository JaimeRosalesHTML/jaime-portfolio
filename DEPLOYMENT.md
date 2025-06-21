# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio.

### Step 1: Prepare Your Project
1. Make sure all your changes are committed to Git
2. Push your code to GitHub, GitLab, or Bitbucket

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

### Step 3: Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Alternative Deployment Options

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy

### Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect Next.js
4. Deploy

### Manual Deployment
1. Build your project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the entire folder to your hosting provider

## Environment Variables

If you add any environment variables later:
1. Create a `.env.local` file for local development
2. Add the same variables in your Vercel dashboard under Settings → Environment Variables

## Post-Deployment Checklist

- [ ] Test all links work correctly
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Update social media links with your actual profiles
- [ ] Replace placeholder projects with your real projects
- [ ] Add your actual CV to the public folder
- [ ] Update personal information and bio

## Performance Optimization

After deployment, consider:
1. Optimizing images
2. Adding meta tags for SEO
3. Setting up analytics (Google Analytics, etc.)
4. Adding a sitemap
5. Configuring caching headers

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (18+ recommended)
- Check for any TypeScript errors if you add TypeScript later

### Runtime Errors
- Check browser console for JavaScript errors
- Verify all import paths are correct
- Ensure all required files are present

### Contact Form Issues
- The current form is a placeholder
- Consider using services like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Custom backend API 