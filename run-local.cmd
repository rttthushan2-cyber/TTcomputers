@echo off
title Computer Shop Website - Local Server
echo ==========================================
echo Starting Computer Shop Website Locally
echo ==========================================

if not exist node_modules (
    echo node_modules not found. Installing dependencies...
    npm install
)

echo.
echo Starting development server...
echo Local URL will show below.
echo.
npm run dev

pause
