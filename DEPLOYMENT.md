# Deployment Guide for devloop.online

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `devloop` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands in your terminal (from the project directory):

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/devloop.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. GitHub will provide a URL like `https://YOUR_USERNAME.github.io/devloop`

### Step 4: Configure Custom Domain in GitHub

1. Still in the **Pages** settings
2. Under **Custom domain**, enter: `devloop.online`
3. Check **Enforce HTTPS** (recommended)
4. Click **Save**

Your `CNAME` file is already set up correctly with `devloop.online`!

### Step 5: Configure DNS at Namecheap

1. Log in to your [Namecheap account](https://www.namecheap.com)
2. Go to **Domain List** → Click **Manage** next to `devloop.online`
3. Go to **Advanced DNS** tab
4. Add/Update these DNS records:

   **Add A Records:**
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.108.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.109.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.110.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.111.153`
   - TTL: Automatic

   **Add CNAME Record:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - TTL: Automatic

5. **Remove** any existing A records pointing to other IPs
6. Click **Save All Changes**

### Step 6: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- Usually works within 1-2 hours
- You can check status at: https://www.whatsmydns.net/#A/devloop.online

### Step 7: Verify Deployment

Once DNS propagates:
- Visit `https://devloop.online` (should show your site)
- Visit `https://www.devloop.online` (should redirect to main domain)

---

## Option 2: Netlify (Alternative - Also Free)

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub (easiest)

### Step 2: Deploy Site

1. Click **Add new site** → **Deploy manually**
2. Drag and drop your project folder OR
3. Connect to GitHub and select your repository

### Step 3: Configure Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter `devloop.online`
4. Follow Netlify's DNS instructions

### Step 4: Update Namecheap DNS

Use Netlify's provided DNS records (different from GitHub Pages)

---

## Option 3: Vercel (Alternative - Also Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Add custom domain `devloop.online`
5. Update DNS records as instructed by Vercel

---

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation
- Clear your browser cache
- Try accessing from different network/device
- Check DNS propagation: https://www.whatsmydns.net/#A/devloop.online

### HTTPS Not Working?
- GitHub Pages automatically provides SSL certificates
- Wait for DNS to fully propagate first
- Check "Enforce HTTPS" is enabled in GitHub Pages settings

### Site Not Updating?
- GitHub Pages can take 1-2 minutes to rebuild after push
- Check Actions tab in GitHub for build status
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## Quick Reference: GitHub Pages IP Addresses

These are the current GitHub Pages IPs (as of 2024):
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

If these change, GitHub will update their documentation.

