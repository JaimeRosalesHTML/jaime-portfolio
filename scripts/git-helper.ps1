# Git Helper Script for Portfolio (PowerShell)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Git Helper Script for Portfolio" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Write-Host ""
Write-Host "Choose an option:" -ForegroundColor Yellow
Write-Host "1. Add all files and commit with 'update' message" -ForegroundColor White
Write-Host "2. Push to GitHub" -ForegroundColor White
Write-Host "3. Add, commit, and push (all in one)" -ForegroundColor White
Write-Host "4. Build and deploy (build + add + commit + push)" -ForegroundColor White
Write-Host "5. Check Git status" -ForegroundColor White
Write-Host "6. Exit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-6)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Adding all files and committing..." -ForegroundColor Green
        git add .
        git commit -m "update"
        Write-Host "Done!" -ForegroundColor Green
    }
    "2" {
        Write-Host ""
        Write-Host "Pushing to GitHub..." -ForegroundColor Green
        git push origin main
        Write-Host "Done!" -ForegroundColor Green
    }
    "3" {
        Write-Host ""
        Write-Host "Adding, committing, and pushing..." -ForegroundColor Green
        git add .
        git commit -m "update"
        git push origin main
        Write-Host "Done!" -ForegroundColor Green
    }
    "4" {
        Write-Host ""
        Write-Host "Building and deploying..." -ForegroundColor Green
        npm run build
        git add .
        git commit -m "update"
        git push origin main
        Write-Host "Done!" -ForegroundColor Green
    }
    "5" {
        Write-Host ""
        Write-Host "Checking Git status..." -ForegroundColor Green
        git status
        Write-Host ""
    }
    "6" {
        Write-Host "Goodbye!" -ForegroundColor Yellow
        exit
    }
    default {
        Write-Host "Invalid choice. Please try again." -ForegroundColor Red
    }
}

Read-Host "Press Enter to continue" 