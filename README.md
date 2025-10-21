# AnikeBrands - Brand Identity Design & Strategy

A modern, responsive website for Anike Brands - a brand identity design studio founded by Olamide Fatosin. Built with Next.js, Tailwind CSS, and Framer Motion.

**"Anike"** (a Yoruba name meaning "to care for") is the heart of everything we do. We don't just build brands. We nurture them.

## Features

- **Modern Design**: Minimalist, visually striking design with black/white base and vibrant accent colors
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations and smooth scroll effects
- **SEO Optimized**: Meta tags, social preview images, and SEO optimization
- **Fast Performance**: Optimized for speed and performance

## Pages

1. **Home**: Hero section, services overview, featured work, and call-to-action
2. **About**: Bio, skills, experience, and downloadable portfolio PDF
3. **Services**: Detailed service offerings with pricing and process
4. **Portfolio**: Grid/masonry layout with filters and project showcases
5. **Testimonials**: Client testimonials in grid and carousel layouts
6. **Contact**: Contact form with project details and contact information

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes for dark/light mode
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Static export for Hostinger

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anike-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create a static export in the `out` directory, ready for deployment to Hostinger.

## Deployment to Hostinger

This website is configured for static export and is **fully compatible** with Hostinger Business Shared Hosting. Here's how to deploy:

### Step-by-Step Deployment Instructions

#### 1. Build the Website Locally

```bash
# Build the static site
npm run build
```

This command generates all static files in the `out/` directory.

#### 2. Upload to Hostinger

**Option A: Using File Manager (Recommended for beginners)**
1. Log into your Hostinger control panel (hPanel)
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain root directory)
4. Upload **all contents** from the `out/` folder to `public_html`
   - Make sure to upload the contents, not the folder itself
   - All files including `_next/`, `.html` files, and assets should be in `public_html`

**Option B: Using FTP/SFTP**
1. Connect to your Hostinger account via FTP/SFTP:
   - Host: your-domain.com
   - Username: (provided by Hostinger)
   - Password: (your Hostinger password)
   - Port: 21 (FTP) or 22 (SFTP)
2. Navigate to `public_html/` directory
3. Upload all contents from `out/` folder

#### 3. Verify Deployment

1. Visit your domain in a web browser
2. Check all pages are working:
   - Homepage (/)
   - About (/about/)
   - Services (/services/)
   - Portfolio (/portfolio/)
   - Testimonials (/testimonials/)
   - Contact (/contact/)

### Important Notes

- ✅ **No Server Required**: The site runs as static HTML/CSS/JS
- ✅ **No Node.js Needed**: Hostinger shared hosting works perfectly
- ✅ **Fast Loading**: Static files load instantly
- ⚠️ **Contact Form**: The contact form needs a backend service (see below)

### Contact Form Setup

Since Hostinger shared hosting doesn't support server-side Node.js, integrate a form service:

**Recommended Services:**
1. **Formspree** (https://formspree.io) - Free tier available
2. **Web3Forms** (https://web3forms.com) - Free and simple
3. **EmailJS** (https://www.emailjs.com) - Client-side email sending
4. **Netlify Forms** - If you switch to Netlify

Update the form action in `src/components/sections/contact-form.tsx` with your chosen service.

## Customization

### Colors and Branding

- Update the color scheme in `src/app/globals.css`
- Modify the gradient colors in the CSS variables
- Update the brand name and logo in components

### Content

All company information is centralized in `src/data/company-info.ts`:
- Contact details (email, phone, WhatsApp)
- Social media links (LinkedIn, Instagram, TikTok, Twitter)
- Services offered
- Certifications and training
- Company philosophy and values

To update:
1. Edit `src/data/company-info.ts` with your information
2. The changes will automatically reflect across the entire website

### Images

- Replace placeholder images in the portfolio and featured work sections
- Add real project images to the Portfolio page
- Add profile/team photos to the About page
- All images should be optimized for web (compressed, proper format)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   ├── layout.tsx        # Layout wrapper
│   └── theme-toggle.tsx  # Theme toggle
├── lib/                  # Utility functions
│   ├── theme-provider.tsx # Theme provider
│   └── utils.ts          # Utility functions
├── types/                # TypeScript types
├── data/                 # Static data
└── hooks/                # Custom hooks
```

## License

This project is licensed under the MIT License.

## Contact Information

**Anike Brands**
- Email: Theanikedesign@gmail.com
- Phone/WhatsApp: +234 906 016 0288
- LinkedIn: https://www.linkedin.com/in/olamidefatosin/
- Instagram: https://www.instagram.com/anikebrands
- TikTok: https://www.tiktok.com/@anikebrands
- Twitter: https://x.com/anikemide

## About Anike Brands

Founded by Olamide Fatosin, a Brand Identity Designer with a B.A. in Linguistics, Anike Brands specializes in:
- Brand Identity Design & Strategy
- Visual Communication & Collateral Design
- Brand Strategy & Positioning
- Motion & Digital Design
- Social Media Design & Strategy
- Event & Experiential Branding
- Print & Production Management

We blend the art of design with the science of communication to create brands that not only look good but speak clearly to the right audience.