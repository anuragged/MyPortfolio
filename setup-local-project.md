# Local Development Setup Guide

## Step 1: Create Project Structure
```bash
mkdir anurag-portfolio
cd anurag-portfolio

# Create directory structure
mkdir -p src/components src/i18n public
```

## Step 2: Install Dependencies
```bash
npm init -y
npm install react@^18.3.1 react-dom@^18.3.1 framer-motion@^10.16.16 react-i18next@^13.5.0 i18next@^23.7.6 emailjs-com@^3.2.0 lucide-react@^0.344.0
npm install -D @vitejs/plugin-react@^4.3.1 vite@^5.4.2 tailwindcss@^3.4.1 postcss@^8.4.35 autoprefixer@^10.4.18 typescript@^5.5.3 @types/react@^18.3.5 @types/react-dom@^18.3.0 eslint@^9.9.1
```

## Step 3: Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

## Step 4: Copy All Files
Copy all the files from the Bolt project to your local directory structure.

## Step 5: Run Development Server
```bash
npm run dev
```

## Step 6: Build for Production
```bash
npm run build
```

## Step 7: Deploy to Netlify

### Option A: Drag & Drop (Simple)
1. Run `npm run build`
2. Go to https://app.netlify.com/
3. Drag the `dist` folder to Netlify

### Option B: Git Integration (Recommended)
1. Initialize git: `git init`
2. Add files: `git add .`
3. Commit: `git commit -m "Initial commit"`
4. Push to GitHub/GitLab
5. Connect repository to Netlify
6. Set build command: `npm run build`
7. Set publish directory: `dist`

### Option C: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```