# CSS Stability Guide for DFOS Prototypes

## 🚨 Common CSS Issues & Solutions

### Issue: CSS Classes Not Loading ("Plain HTML" Display)

This happens when Tailwind CSS compilation fails. Here are the permanent fixes:

## ✅ Permanent Solutions

### 1. **Stable CSS Configuration**
- **globals.css**: Uses standard HSL color variables (more stable than oklch)
- **tailwind.config.js**: Properly configured for Tailwind v3
- **postcss.config.js**: Standard PostCSS setup

### 2. **If CSS Breaks Again:**

#### Quick Fix:
```bash
cd "/Users/ilyayudanov/Desktop/prototyping/DFOS prototype/dfos-prototype"
pkill -f "next dev"
rm -rf .next
npm run dev
```

#### Nuclear Option:
```bash
npm run dev:stable
```
This runs the comprehensive cleanup script.

### 3. **Manual CSS Build (Emergency):**
```bash
npm run build:css
```
This explicitly compiles Tailwind CSS to verify it's working.

### 4. **Check CSS Status:**
```bash
# Test if CSS is loading:
curl -s http://localhost:3000 | grep 'class=".*text-4xl'

# Check CSS file content:
curl -s "$(curl -s http://localhost:3000 | grep -o 'href="[^"]*\.css[^"]*"' | head -1 | sed 's/.*href="//;s/".*//')" | grep -c "\."
```

## 🔧 Root Causes We've Fixed

1. **Tailwind v4**: Downgraded to stable v3
2. **Invalid CSS Syntax**: Removed @custom-variant directive  
3. **Cache Corruption**: Comprehensive cache clearing
4. **PostCSS Conflicts**: Removed duplicate config files
5. **Missing Plugins**: Added required Tailwind plugins

## 🎯 Current Stable Configuration

- **Tailwind CSS**: v3.4.0 (stable)
- **PostCSS**: Standard configuration
- **CSS Variables**: HSL format (more compatible)
- **Plugins**: tailwindcss-animate, @tailwindcss/line-clamp
- **Build Process**: Tested and working

## 📋 Troubleshooting Checklist

If CSS breaks:
- [ ] Kill Next.js processes: `pkill -f "next dev"`
- [ ] Clear cache: `rm -rf .next`
- [ ] Check globals.css syntax
- [ ] Restart server: `npm run dev`
- [ ] Test CSS loading in browser

---

*Keep this guide for future reference when CSS issues occur.*
