#!/bin/bash

# DFOS Prototype - Stable Development Script
# This script ensures CSS compilation works reliably

echo "🚀 Starting DFOS Prototypes with stable CSS..."

# Kill any existing processes
pkill -f "next dev" 2>/dev/null || true

# Clear all caches
echo "🧹 Cleaning caches..."
rm -rf .next
rm -rf node_modules/.cache
npm cache clean --force --silent

# Rebuild CSS to ensure it compiles
echo "🎨 Pre-compiling CSS..."
npx tailwindcss -i ./app/globals.css -o ./public/styles.css --watch=false

# Start the development server
echo "🖥️  Starting development server..."
npm run dev
