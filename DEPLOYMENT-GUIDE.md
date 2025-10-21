# Anike Brands Website - Deployment Guide

## ✅ Website Status

Your Anike Brands website has been successfully updated with all your real information and is **ready for deployment** to Hostinger Business Shared Hosting!

## 🎯 What Was Updated

### 1. Company Information (`src/data/company-info.ts`)
Created a centralized data file containing:
- ✅ Company name and tagline: "We don't just build brands. We nurture them."
- ✅ Founder information: Olamide Fatosin, Brand Identity Designer, B.A. in Linguistics
- ✅ Real contact details:
  - Email: Theanikedesign@gmail.com
  - Phone/WhatsApp: +234 906 016 0288
- ✅ Real social media links:
  - LinkedIn: https://www.linkedin.com/in/olamidefatosin/
  - Instagram: https://www.instagram.com/anikebrands
  - TikTok: https://www.tiktok.com/@anikebrands
  - Twitter: https://x.com/anikemide
- ✅ Professional certifications (2023-2025)
- ✅ Complete services list

### 2. Website Sections Updated

#### Footer (`src/components/footer.tsx`)
- ✅ Real social media links (opens in new tabs)
- ✅ Real contact information (clickable email, phone, WhatsApp)
- ✅ Updated company description
- ✅ Nigeria location

#### Hero Section (`src/components/sections/hero-section.tsx`)
- ✅ New headline: "We Don't Just Build Brands. We Nurture Them."
- ✅ Updated description with Anike Brands philosophy
- ✅ Badge updated to "Brand Identity Design & Strategy"

#### About Sections
- ✅ About Hero: Meaning of "Anike" - "to care for"
- ✅ About Bio: Founder story and company philosophy
- ✅ Experience Section: Real certifications from:
  - Deestincts Creative Bootcamp (2023)
  - Synthera Fellowship Cohort 1 (2024)
  - Bizmarrow Technologies (2025)

#### Services Sections
- ✅ Services Section: Updated with 5 core services
- ✅ Services Grid: Complete service offerings:
  1. Brand Identity Design & Strategy
  2. Visual Communication & Collateral Design
  3. Brand Strategy & Positioning
  4. Motion & Digital Design
  5. Social Media Design & Strategy
  6. Event & Experiential Branding

#### Contact Page (`src/components/sections/contact-info.tsx`)
- ✅ Real email, phone, WhatsApp links (all clickable)
- ✅ Social media icons with real links
- ✅ Updated location to Nigeria

### 3. README Documentation
- ✅ Detailed Hostinger deployment instructions
- ✅ Company information and contact details
- ✅ Contact form integration options
- ✅ Troubleshooting tips

## 🚀 How to Deploy to Hostinger

### Step 1: Build Your Website

Open your terminal in the project folder and run:

```bash
npm run build
```

This creates a `out/` folder with all static files.

### Step 2: Upload to Hostinger

**Method A: File Manager (Easiest)**
1. Log into Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html/`
4. Delete any existing files (if first deployment)
5. Upload **ALL contents** from the `out/` folder
   - Don't upload the `out` folder itself, just its contents
   - Include: `_next/`, all `.html` files, assets, etc.

**Method B: FTP/SFTP**
1. Use FileZilla or any FTP client
2. Connect to your Hostinger account
3. Navigate to `public_html/`
4. Upload all contents from `out/` folder

### Step 3: Test Your Website

Visit your domain and check all pages:
- Homepage: `yourdomain.com/`
- About: `yourdomain.com/about/`
- Services: `yourdomain.com/services/`
- Portfolio: `yourdomain.com/portfolio/`
- Testimonials: `yourdomain.com/testimonials/`
- Contact: `yourdomain.com/contact/`

## ⚙️ Post-Deployment Setup

### Contact Form Integration

Your contact form currently simulates submission. For real email submissions, integrate one of these services:

1. **Web3Forms** (Recommended - Free & Simple)
   - Sign up at https://web3forms.com
   - Get your access key
   - Update the form in `src/components/sections/contact-form.tsx`

2. **Formspree**
   - Sign up at https://formspree.io
   - Follow their Next.js integration guide

3. **EmailJS**
   - Sign up at https://www.emailjs.com
   - Client-side email sending (no backend needed)

### Adding Real Images

Replace placeholder images with your actual work:
1. Add project images to `public/` folder
2. Update image paths in:
   - `src/components/sections/hero-section.tsx`
   - `src/components/sections/featured-work-section.tsx`
   - `src/components/sections/portfolio-grid.tsx`
   - `src/components/sections/about-bio.tsx` (profile photo)

### SEO Optimization

Before going live:
1. Update meta tags in each page's metadata
2. Add Open Graph images for social sharing
3. Create and submit `sitemap.xml` to Google Search Console
4. Set up Google Analytics (optional)

## 📝 Making Future Updates

### To Update Contact Information:
1. Edit `src/data/company-info.ts`
2. Run `npm run build`
3. Re-upload the `out/` folder to Hostinger

### To Add Portfolio Projects:
1. Edit `src/components/sections/portfolio-grid.tsx`
2. Add new project objects to the array
3. Rebuild and redeploy

### To Update Services:
1. Edit `src/components/sections/services-grid.tsx`
2. Modify services array
3. Rebuild and redeploy

## ✨ Key Features

✅ **Fully Static** - No server or Node.js required
✅ **Mobile Responsive** - Works perfectly on all devices
✅ **Dark/Light Mode** - Theme toggle included
✅ **Fast Loading** - Optimized for performance
✅ **SEO Friendly** - Proper meta tags and structure
✅ **Animated** - Smooth Framer Motion animations
✅ **Professional Design** - Modern, clean aesthetic

## 🔧 Troubleshooting

### Pages Not Loading
- Check that all files from `out/` folder are in `public_html/`
- Ensure trailing slashes in URLs (e.g., `/about/` not `/about`)
- Clear browser cache

### Styles Not Showing
- Verify `_next/` folder uploaded correctly
- Check browser console for 404 errors
- Ensure file permissions are correct (644 for files, 755 for folders)

### Contact Form Not Working
- Form currently simulates submission
- Integrate a form service (see Post-Deployment Setup above)

## 📞 Support

For website-related questions:
- Email: Theanikedesign@gmail.com
- WhatsApp: +234 906 016 0288

For technical issues with Hostinger:
- Contact Hostinger support
- Check Hostinger knowledge base

## 🎉 Next Steps

1. ✅ Build the website (`npm run build`)
2. ✅ Upload to Hostinger
3. ⏳ Test all pages and links
4. ⏳ Integrate contact form service
5. ⏳ Add real portfolio images
6. ⏳ Set up custom domain (if needed)
7. ⏳ Submit to search engines
8. ⏳ Share on social media!

---

**Congratulations!** Your Anike Brands website is ready to go live! 🚀

*"We don't just build brands. We nurture them."*



