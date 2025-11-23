# Namecheap DNS Configuration for devloop.online

## Current Status
✅ GitHub repository: `imusman541/devloop`
✅ GitHub Pages enabled
✅ Custom domain added: `devloop.online`
❌ DNS not configured (this is why you see the error)

## Step-by-Step: Configure DNS at Namecheap

### Step 1: Log in to Namecheap
1. Go to https://www.namecheap.com
2. Log in to your account
3. Click **Domain List** from the left sidebar

### Step 2: Access DNS Settings
1. Find `devloop.online` in your domain list
2. Click **Manage** button next to it
3. Go to the **Advanced DNS** tab

### Step 3: Remove Existing A Records (if any)
1. Look for any existing **A Record** entries
2. If you see any A records pointing to other IPs (not GitHub Pages), click the trash icon to delete them
3. Keep any CNAME records for now (we'll update the www one)

### Step 4: Add GitHub Pages A Records
Add **4 A Records** with these exact values:

**A Record #1:**
- **Type:** A Record
- **Host:** `@`
- **Value:** `185.199.108.153`
- **TTL:** Automatic (or 30 min)

**A Record #2:**
- **Type:** A Record
- **Host:** `@`
- **Value:** `185.199.109.153`
- **TTL:** Automatic (or 30 min)

**A Record #3:**
- **Type:** A Record
- **Host:** `@`
- **Value:** `185.199.110.153`
- **TTL:** Automatic (or 30 min)

**A Record #4:**
- **Type:** A Record
- **Host:** `@`
- **Value:** `185.199.111.153`
- **TTL:** Automatic (or 30 min)

### Step 5: Add/Update CNAME Record for www
Add or update the CNAME record:

**CNAME Record:**
- **Type:** CNAME Record
- **Host:** `www`
- **Value:** `imusman541.github.io`
- **TTL:** Automatic (or 30 min)

### Step 6: Save Changes
1. Click **Save All Changes** (green button)
2. Namecheap will show a confirmation message

### Step 7: Wait for DNS Propagation
- DNS changes typically take **1-2 hours** to propagate
- Can take up to **24-48 hours** in some cases
- You can check propagation status at: https://www.whatsmydns.net/#A/devloop.online

### Step 8: Verify in GitHub
1. Go back to your GitHub repository: https://github.com/imusman541/devloop
2. Go to **Settings** → **Pages**
3. Scroll to **Custom domain** section
4. Click **Check again** button
5. The error should disappear once DNS propagates

### Step 9: Enable HTTPS
Once DNS is verified:
1. The **Enforce HTTPS** checkbox will become available
2. Check the box to enable HTTPS
3. GitHub will automatically provision an SSL certificate (takes a few minutes)

## Visual Guide: What Your DNS Should Look Like

After configuration, your Advanced DNS tab should show:

```
Type    Host    Value                    TTL
A       @       185.199.108.153         Auto
A       @       185.199.109.153         Auto
A       @       185.199.110.153         Auto
A       @       185.199.111.153         Auto
CNAME   www     imusman541.github.io    Auto
```

## Troubleshooting

### Still showing DNS error after 2 hours?
1. **Double-check the IP addresses** - Make sure all 4 A records are exactly:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. **Verify Host field** - Should be `@` (not `devloop.online` or blank)

3. **Check DNS propagation:**
   - Visit: https://www.whatsmydns.net/#A/devloop.online
   - You should see the 4 GitHub IPs listed
   - If you see different IPs, DNS hasn't propagated yet

4. **Clear browser cache** and try again

5. **Try from different network** (mobile data, different WiFi)

### HTTPS not working?
- Wait for DNS to fully propagate first (24-48 hours)
- Then enable "Enforce HTTPS" in GitHub Pages settings
- SSL certificate provisioning can take 10-30 minutes after DNS is verified

## Quick Test Commands

You can test DNS from your terminal:

```bash
# Check A records
dig devloop.online +short

# Should return the 4 GitHub IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME for www
dig www.devloop.online +short

# Should return: imusman541.github.io
```

## Expected Timeline

- **0-30 minutes:** DNS changes saved at Namecheap
- **30 minutes - 2 hours:** DNS starts propagating globally
- **2-24 hours:** Full DNS propagation (most locations)
- **After DNS verified:** GitHub enables HTTPS (10-30 minutes)

Once everything is set up, your site will be live at:
- ✅ https://devloop.online
- ✅ https://www.devloop.online (redirects to main domain)

