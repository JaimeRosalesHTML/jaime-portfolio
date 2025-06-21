#!/bin/bash

echo "========================================"
echo "Git Helper Script for Portfolio"
echo "========================================"

echo ""
echo "Choose an option:"
echo "1. Add all files and commit with \"update\" message"
echo "2. Push to GitHub"
echo "3. Add, commit, and push (all in one)"
echo "4. Build and deploy (build + add + commit + push)"
echo "5. Check Git status"
echo "6. Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "Adding all files and committing..."
        git add .
        git commit -m "update"
        echo "Done!"
        ;;
    2)
        echo ""
        echo "Pushing to GitHub..."
        git push origin main
        echo "Done!"
        ;;
    3)
        echo ""
        echo "Adding, committing, and pushing..."
        git add .
        git commit -m "update"
        git push origin main
        echo "Done!"
        ;;
    4)
        echo ""
        echo "Building and deploying..."
        npm run build
        git add .
        git commit -m "update"
        git push origin main
        echo "Done!"
        ;;
    5)
        echo ""
        echo "Checking Git status..."
        git status
        echo ""
        ;;
    6)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice. Please try again."
        ;;
esac

read -p "Press Enter to continue..." 