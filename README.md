# Digital Wave Agency - Digital Marketing Website

A modern, fully responsive digital marketing agency website built with Next.js 13 App Router, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized with Next.js static generation
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- **Easy Navigation**: Simple structure - max 5 clicks to reach any page
- **Smooth Animations**: Engaging user experience with Framer Motion

## Pages

1. **Home** - Hero section, services overview, testimonials, and CTA
2. **About** - Company story, values, and team statistics
3. **Services** - Individual pages for each service:
   - SEO Optimization
   - PPC Advertising
   - Social Media Marketing
   - Web Development
   - Content Writing
4. **Portfolio** - Case studies and success stories
5. **Contact** - Contact form and company information

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Start Production Server

```bash
npm run start
```

## Project Structure

```
project/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with navbar and footer
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── portfolio/page.tsx   # Portfolio page
│   ├── contact/page.tsx     # Contact page
│   └── services/            # Service pages
│       ├── seo/page.tsx
│       ├── ppc/page.tsx
│       ├── social-media/page.tsx
│       ├── web-development/page.tsx
│       └── content-writing/page.tsx
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── home/                # Home page components
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
└── public/                  # Static assets
```

## Customization

### Colors
The website uses a blue and cyan gradient color scheme. To customize colors, edit the Tailwind classes in the components.

### Content
- Update company information in `components/layout/Footer.tsx`
- Modify service descriptions in each service page
- Change testimonials in `components/home/Testimonials.tsx`
- Update portfolio projects in `app/portfolio/page.tsx`

### Images
All images are currently using Pexels URLs. Replace with your own images by updating the `src` attributes in the components.

## Key Features Implemented

✅ Responsive navigation with mobile menu
✅ Smooth scroll behavior
✅ Animated hero section with statistics
✅ Services grid with hover effects
✅ Client testimonials section
✅ Portfolio with case studies
✅ Contact form with validation
✅ SEO meta tags on all pages
✅ Fast page loads with static generation
✅ Clean, maintainable code structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for modification.
