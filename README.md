# Scalix Labs Website

A modern, high-performance web application built for Scalix Labs, a growth partner focusing on scalable go-to-market systems. The website is designed to be highly interactive, visually striking, and optimized for lead generation.

## Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), React, and TypeScript.
- **Premium Design**: Styled with Tailwind CSS, featuring glassmorphism elements, dark mode aesthetics, and vibrant neon accents.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals, hover states, and dynamic interactive popups.
- **Lead Capture System**: Unified backend API using Prisma and SQLite to capture leads directly from multiple interactive forms across the site (Contact, Pricing, and Services Modals).
- **Email Notifications**: Server-side integration to forward captured leads securely without exposing credentials on the client side.
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Since we are using Prisma, make sure the database client is generated:

```bash
npx prisma generate
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router setup including global layouts and API routes.
- `components/`: Reusable, interactive UI elements (Navbar, Hero, Services, Pricing, Forms).
- `lib/`: Configuration files and shared utilities (like Prisma client setup).
- `prisma/`: Database schema and SQLite storage file.
- `public/`: Static assets like logos and icons.

## Lead Management

This project uses a local SQLite database (`dev.db`) managed by Prisma to store form submissions locally before firing off email notifications. The submission endpoint is located at `app/api/leads/route.ts`.
