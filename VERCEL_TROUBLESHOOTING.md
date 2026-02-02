# 🔧 Vercel Contact Form Troubleshooting Guide

## Issue: Contact Form Works Locally but Not on Vercel

### ✅ Fixes Applied

1. **Added Runtime Configuration** to `/app/api/contact/route.ts`:
   - `export const runtime = 'nodejs'` - Ensures proper serverless function runtime
   - `export const dynamic = 'force-dynamic'` - Prevents static optimization of API route

2. **Improved Prisma Connection Handling**:
   - Added `prisma.$disconnect()` in finally block to properly close connections
   - Optimized Prisma Client initialization for serverless
   - Added logging configuration

3. **Enhanced Error Handling**:
   - Better error messages for debugging
   - Detailed logging to help identify issues

---

## 🚀 Deployment Steps

### Step 1: Verify Environment Variables in Vercel

**Critical:** Make sure `DATABASE_URL` is set in Vercel

1. Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

2. Verify `DATABASE_URL` is present and correct:
   ```
   postgresql://neondb_owner:npg_im8JrZEptUQ3@ep-falling-fog-ah1zrgpf-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   ```

3. **Important:** Ensure it's enabled for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. After adding/updating, **redeploy** your project

---

### Step 2: Push Updated Code

```bash
git add .
git commit -m "Fix Vercel API route with proper runtime config"
git push origin main
```

---

### Step 3: Monitor Deployment

1. Go to **Vercel Dashboard → Deployments**
2. Watch the build logs
3. Look for any errors during:
   - Install phase
   - Build phase
   - Function deployment

---

## 🐛 Debugging on Vercel

### Check Function Logs

1. Go to: **Vercel Dashboard → Your Project → Logs**
2. Filter by: **Functions**
3. Try submitting the contact form
4. Look for error messages in real-time

### Common Issues & Solutions

#### Issue 1: "Cannot find module '@prisma/client'"

**Solution:**
- The `postinstall` script should handle this
- Verify in `package.json`: `"postinstall": "prisma generate"`
- Redeploy if needed

#### Issue 2: "Database connection timeout"

**Symptoms:**
- Form hangs, then shows error
- Logs show connection timeout

**Solutions:**
1. Verify `DATABASE_URL` is correct in Vercel
2. Check if your Neon database is active (not suspended)
3. Use **pooled connection** string (contains `-pooler` in hostname) ✅ You're already using this!

#### Issue 3: "Internal Server Error (500)"

**Solution:**
1. Check Vercel Function Logs for detailed error
2. Common causes:
   - Missing `DATABASE_URL`
   - Invalid connection string
   - Database not accessible from Vercel IPs
   - Prisma schema mismatch

**Fix:** Run `npx prisma db push` to sync your schema

#### Issue 4: API Route Returns 404

**Symptoms:**
- Form submission fails
- Browser console shows 404 error
- Network tab shows `/api/contact` not found

**Solutions:**
1. Verify the file exists at: `app/api/contact/route.ts`
2. Check it exports a `POST` function
3. Ensure the build succeeded
4. Check Vercel Functions tab - should show `/api/contact`

#### Issue 5: CORS or Fetch Errors

**Symptoms:**
- "Failed to fetch" error in console
- CORS policy error

**Solution:**
- This shouldn't happen with same-origin requests
- If you see this, check if form is using correct path: `/api/contact` (not full URL)

---

## 🧪 Testing After Deployment

### Test 1: API Endpoint Directly

Using browser DevTools console on your deployed site:

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Testing API'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": { "id": 1, "name": "Test User", ... }
}
```

### Test 2: Check Database

```bash
npx prisma studio
```

Look in the `Contact` table - should see test entries

### Test 3: Form Submission

1. Visit your deployed site
2. Scroll to Contact section
3. Fill out the form
4. Submit
5. Should see success message

---

## 📋 Checklist Before Asking for Help

- [ ] `DATABASE_URL` is set in Vercel Environment Variables
- [ ] Environment variable is enabled for Production
- [ ] I've redeployed after setting environment variables
- [ ] Build logs show no errors
- [ ] The file `app/api/contact/route.ts` exists
- [ ] I can see `/api/contact` in Vercel Functions tab
- [ ] Database is accessible (test with Prisma Studio locally)
- [ ] Connection string includes `-pooler` for Neon
- [ ] I've checked Vercel Function Logs for errors

---

## 🔍 How to Get Error Details

### From Browser (User Side):

1. Open DevTools (F12)
2. Go to **Console** tab
3. Submit the form
4. Look for error messages (red text)
5. Copy the full error message

### From Vercel (Server Side):

1. Go to **Vercel Dashboard**
2. Select your project
3. Click **Logs** tab
4. Filter by **Functions**
5. Submit the form
6. Copy any error messages that appear

### What to Report:

When asking for help, include:
- ✅ Exact error message from browser console
- ✅ Error message from Vercel Function Logs
- ✅ Which step failed (form submission, API call, database save)
- ✅ Screenshot if helpful

---

## ✅ Verification After Fix

After deploying the fixes:

1. **Build Status:**
   ```
   ✓ Compiled successfully
   ✓ Generating static pages
   ƒ /api/contact (Dynamic)
   ```

2. **Function Deployed:**
   - Check Vercel Dashboard → Functions
   - Should see `/api/contact` listed

3. **Test Form:**
   - Submit test message
   - Should see success message
   - Check database for entry

---

## 🎯 Expected Behavior

**Localhost:**
- ✅ Form submits
- ✅ Success message appears
- ✅ Data saved to database

**Vercel (Production):**
- ✅ Form submits
- ✅ Success message appears
- ✅ Data saved to database
- ✅ Same behavior as localhost

---

## 📞 Still Not Working?

If the contact form still doesn't work after following this guide:

1. Collect error details (see "How to Get Error Details" above)
2. Check Vercel Function Logs
3. Verify DATABASE_URL is correct
4. Try deploying again
5. Share specific error messages for further assistance
