@echo off
echo ========================================
echo    DEPLOY WEDDING WEBSITE TO GITHUB
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/
    pause
    exit /b 1
)

echo [1/6] Checking current directory...
if not exist "index.html" (
    echo ERROR: index.html not found!
    echo Please run this script in the wedding website directory
    pause
    exit /b 1
)

echo [2/6] Initializing Git repository...
if not exist ".git" (
    git init
    echo Git repository initialized.
) else (
    echo Git repository already exists.
)

echo [3/6] Adding remote repository...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/TienHoaBgg/dung_nhan_wedding.git
echo Remote repository added.

echo [4/6] Adding all files...
git add .
echo All files added to staging.

echo [5/6] Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update wedding website

git commit -m "%commit_message%"
echo Changes committed.

echo [6/6] Pushing to GitHub...
echo.
echo IMPORTANT: You may need to enter your GitHub credentials
echo If you have 2FA enabled, use a Personal Access Token instead of password
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Failed to push to GitHub
    echo This might be because:
    echo 1. Repository doesn't exist yet - create it on GitHub first
    echo 2. Authentication failed - check your credentials
    echo 3. Network issues
    echo.
    echo Please create the repository manually:
    echo 1. Go to https://github.com/TienHoaBgg
    echo 2. Click "New repository"
    echo 3. Name: dung_nhan_wedding
    echo 4. Make it Public
    echo 5. Don't initialize with README
    echo 6. Create repository
    echo 7. Run this script again
    pause
    exit /b 1
)

echo.
echo ========================================
echo         DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Your website will be available at:
echo https://tienhoabgg.github.io/dung_nhan_wedding/
echo.
echo Next steps:
echo 1. Go to GitHub repository settings
echo 2. Enable GitHub Pages (Settings > Pages)
echo 3. Select source: Deploy from branch 'main'
echo 4. Wait 5-10 minutes for deployment
echo 5. Visit your website!
echo.
echo Repository URL:
echo https://github.com/TienHoaBgg/dung_nhan_wedding
echo.
pause
