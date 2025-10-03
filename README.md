# AnikeBrands Portfolio Website

A modern, responsive portfolio website for a graphics designer built with Next.js, Tailwind CSS, and Framer Motion.

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

## Deployment

The project is configured for static export and can be deployed to Hostinger:

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `out` directory to your Hostinger hosting account.

## Customization

### Colors and Branding

- Update the color scheme in `src/app/globals.css`
- Modify the gradient colors in the CSS variables
- Update the brand name and logo in components

### Content

- Update personal information in the About page
- Add your portfolio projects in the Portfolio page
- Customize services and pricing in the Services page
- Update contact information in the Contact page

### Images

- Replace placeholder images with your actual project images
- Add your profile photo to the About page
- Update social media links in the Footer and Contact page

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

## Support

For support or questions, please contact [your-email@example.com](mailto:your-email@example.com).