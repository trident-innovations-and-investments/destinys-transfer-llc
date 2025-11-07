# Destiny's Transfer LLC - Website

A professional static website for Destiny's Transfer LLC, a trucking and logistics company specializing in Truckload (TL) and Less Than Truckload (LTL) delivery services.

## Overview

This is a Next.js 15 static website built with TypeScript and Tailwind CSS, following 2025 best practices. The site displays company information, services, locations & rates, and contact details.

## Features

- **Static Site Generation**: Fully static export for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Styling**: Tailored for the trucking/logistics industry
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: Latest React features

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── rates/              # Rates page
│   ├── contact/            # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── RateTable.tsx      # Rate display table
│   ├── ServiceCard.tsx    # Service feature cards
│   └── CoverageMap.tsx    # Coverage visualization
├── data/
│   ├── rates.ts           # Rate data
│   └── company.ts         # Company information
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

Generate a static export:

```bash
npm run build
```

The static files will be in the `out/` directory, ready to deploy to any static hosting service.

## Pages

- **Home** (`/`): Company overview, service highlights, and call-to-action
- **Services** (`/services`): Detailed service descriptions (TL, LTL, Short Haul, Hot Shot)
- **Rates** (`/rates`): Location-based rates and coverage information
- **Contact** (`/contact`): Contact information and business details

## Data Management

Company information and rates are stored in the `data/` directory:
- `data/company.ts`: Company details, contact info, services
- `data/rates.ts`: Rate tables and service pricing

Update these files to modify content without changing component code.

## Deployment

This static site can be deployed to:
- **Vercel**: Automatic deployment with Next.js
- **Netlify**: Static site hosting
- **GitHub Pages**: Free static hosting
- **Any static hosting service**: Upload the `out/` directory

## License

Private project for Destiny's Transfer LLC

