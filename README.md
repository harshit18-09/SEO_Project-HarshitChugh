# NBA Programmatic SEO Website

A server-side rendered Next.js application demonstrating SEO optimization and programmatic page generation for NBA teams and players.

## Live Demo
[Deployed on Vercel](https://seo-project-harshit-chugh.vercel.app/) 

## Overview

This project generates SEO-optimized pages for:
- **NBA Teams** (`/teams/[team-slug]`)
- **NBA Player Profiles** (`/players/[player-slug]`)
- **NBA Player Statistics** (`/players/[player-slug]/stats`)

Each page is server-rendered with dynamic metadata, OpenGraph tags, and JSON-LD structured data.

## Lighthouse Audit

The deployed application was tested using Google Lighthouse (Desktop):

- Performance: 95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

This confirms that the application follows modern performance, accessibility, and SEO best practices.

## Tech Stack

- **Next.js 14** 
- **React** with **TypeScript**
- **Server-Side Rendering (SSR)**
- **JSON-LD** (Schema.org)
- **Vercel** (Deployment)

## Data Structure

The project uses local JSON datasets:
- `teams.json` - NBA team information
- `players.json` - NBA player profiles and statistics

Each entity includes a unique SEO-friendly slug and relational identifiers for scalable page generation.

## SEO Implementation

### Dynamic Metadata
- Custom `<title>` and `meta description` per page
- OpenGraph tags for social sharing
- Twitter cards for enhanced sharing

### Structured Data (JSON-LD)
- **SportsTeam** schema for team pages
- **Person** schema for player pages
- Enhanced semantic markup for search engines

### Server-Side Rendering
- All pages rendered on server
- Content visible without JavaScript
- Optimal crawlability for search engines

## Project Structure
```bash
NBA-SEO/
├── nba-seo-project/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── (other static assets)
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── teams/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── players/
│   │       └── [slug]/
│   │           ├── page.tsx
│   │           └── stats/
│   │               └── page.tsx
│   ├── components/
│   │   ├── PlayerCard.tsx
│   │   └── TeamCard.tsx
│   ├── data/
│   │   ├── players.json
│   │   └── teams.json
│   ├── lib/
│   │   ├── schema.ts
│   │   ├── seo.ts
│   │   └── types.ts
│   ├── .gitignore
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   └── postcss.config.mjs
└── image.png
```

## Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```
   
2. Build for production
    ```bash
    npm run build
    npm run start
    ```
## License
MIT
