# Git Setup Guide for Portfolio

This guide will help you set up Git and connect your portfolio to GitHub.

## 🚀 Quick Setup Commands

Once Git is installed, run these commands in order:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Make initial commit
git commit -m "Initial portfolio setup"

# 4. Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# 5. Set main as default branch
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

## 📥 Installing Git

### Windows
1. **Download Git**: Go to [git-scm.com](https://git-scm.com)
2. **Install**: Run the installer, use default settings
3. **Verify**: Open PowerShell and run `git --version`

### Using Package Managers
```bash
# Windows (Chocolatey)
choco install git

# Windows (Winget)
winget install Git.Git
```

## 🔧 Easy Git Commands

### Using npm scripts (Recommended)
```bash
# Add all files and commit with "update" message
npm run git:add
npm run git:commit

# Push to GitHub
npm run git:push

# Do all three at once (add + commit + push)
npm run git:update

# Build and deploy (build + add + commit + push)
npm run deploy
```

### Using Helper Scripts
```bash
# Windows
scripts/git-helper.bat

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

## 🔗 Connecting to GitHub

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it (e.g., "portfolio")
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Link Your Local Repository
```bash
# Add the remote (replace with your URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Verify remote
git remote -v

# Push for the first time
git push -u origin main
```

## 📝 Common Workflow

### Daily Development
```bash
# 1. Make your changes to files

# 2. Quick update (add + commit + push)
npm run git:update

# OR use the helper script
scripts/git-helper.bat
# Choose option 3
```

### Before Deploying
```bash
# Build and deploy
npm run deploy

# OR use the helper script
scripts/git-helper.bat
# Choose option 4
```

## 🔍 Troubleshooting

### Git not found
- Install Git from [git-scm.com](https://git-scm.com)
- Restart your terminal after installation

### Authentication issues
```bash
# Set your Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Push rejected
```bash
# Pull latest changes first
git pull origin main

# Then push
git push origin main
```

### Wrong remote URL
```bash
# Check current remote
git remote -v

# Change remote URL
git remote set-url origin https://github.com/yourusername/your-repo-name.git
```

## 📋 Quick Reference

| Command | Description |
|---------|-------------|
| `npm run git:update` | Add + commit + push |
| `npm run deploy` | Build + add + commit + push |
| `scripts/git-helper.bat` | Interactive Git helper |
| `git status` | Check file status |
| `git log` | View commit history |

## 🎯 Next Steps

1. **Install Git** (if not already installed)
2. **Create GitHub repository**
3. **Run the setup commands** above
4. **Test the workflow** with `npm run git:update`
5. **Deploy to Vercel** using the deployment guide

## 💡 Tips

- Use `npm run git:update` for quick updates
- Use `npm run deploy` before deploying to production
- The helper scripts provide a user-friendly interface
- Always check `git status` before committing
- Use meaningful commit messages for important changes 