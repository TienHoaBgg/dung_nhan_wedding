#!/bin/bash

echo "========================================"
echo "   DEPLOY WEDDING WEBSITE TO GITHUB"
echo "========================================"
echo

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Please install Git first"
    exit 1
fi

echo "[1/6] Checking current directory..."
if [ ! -f "index.html" ]; then
    echo "ERROR: index.html not found!"
    echo "Please run this script in the wedding website directory"
    exit 1
fi

echo "[2/6] Initializing Git repository..."
if [ ! -d ".git" ]; then
    git init
    echo "Git repository initialized."
else
    echo "Git repository already exists."
fi

echo "[3/6] Adding remote repository..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/TienHoaBgg/dung_nhan_wedding.git
echo "Remote repository added."

echo "[4/6] Adding all files..."
git add .
echo "All files added to staging."

echo "[5/6] Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update wedding website"
fi

git commit -m "$commit_message"
echo "Changes committed."

echo "[6/6] Pushing to GitHub..."
echo
echo "IMPORTANT: You may need to enter your GitHub credentials"
echo "If you have 2FA enabled, use a Personal Access Token instead of password"
echo

if git push -u origin main; then
    echo
    echo "========================================"
    echo "        DEPLOYMENT SUCCESSFUL!"
    echo "========================================"
    echo
    echo "Your website will be available at:"
    echo "https://tienhoabgg.github.io/dung_nhan_wedding/"
    echo
    echo "Next steps:"
    echo "1. Go to GitHub repository settings"
    echo "2. Enable GitHub Pages (Settings > Pages)"
    echo "3. Select source: Deploy from branch 'main'"
    echo "4. Wait 5-10 minutes for deployment"
    echo "5. Visit your website!"
    echo
    echo "Repository URL:"
    echo "https://github.com/TienHoaBgg/dung_nhan_wedding"
    echo
else
    echo
    echo "ERROR: Failed to push to GitHub"
    echo "This might be because:"
    echo "1. Repository doesn't exist yet - create it on GitHub first"
    echo "2. Authentication failed - check your credentials"
    echo "3. Network issues"
    echo
    echo "Please create the repository manually:"
    echo "1. Go to https://github.com/TienHoaBgg"
    echo "2. Click 'New repository'"
    echo "3. Name: dung_nhan_wedding"
    echo "4. Make it Public"
    echo "5. Don't initialize with README"
    echo "6. Create repository"
    echo "7. Run this script again"
    exit 1
fi
