@echo off
echo ========================================
echo WM2 Website Git Commit Tool
echo ========================================
echo.

echo Checking current status...
git status
echo.

echo Ensuring .cursor is not tracked (safe to ignore errors)...
git rm -r --cached .cursor >nul 2>&1
echo.

echo Adding all changes...
git add .
echo.

echo Changes added successfully!
echo.

set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message="Static cleanup: remove React assets, add .gitignore .cursor, update footers"

echo Committing with message: %commit_message%
git commit -m %commit_message%
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo Done! Your changes have been published.
echo ========================================
echo.
echo Your website will update in a few minutes at:
echo https://mohanad-alsharef.github.io/wm2-distribution-marketing-publish/
echo.

pause
