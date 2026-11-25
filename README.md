# Proton Solutions

**Engineering Intelligence. Empowering Tomorrow.**  
*Building Intelligent Solutions for a Smarter Future.*

Official website for **Proton Solutions**, built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide Icons.

## Pages

- `/` — Home
- `/about` — About Us (Mission, Vision, Values & Approach)
- `/services` — Services (8 AI, Automation & Software Engineering capabilities)
- `/products` — Products & Solutions (dynamically loaded from administrator config)
- `/research` — Research & Innovation (6 R&D focus areas)
- `/careers` — Careers & Internships (role cards + application form with resume upload)
- `/contact` — Contact Us (validated contact form + configurable company channels)
- `/privacy-policy` — Privacy Policy
- `/terms-and-conditions` — Terms & Conditions

## Administrator Configuration

### 1. Company Email & Social Media Links
Edit `src/data/site-config.json` to update:
- `officialEmail` and `careersEmail`
- `headquartersLabel` and `responseSla`
- `socialLinks` (`platform`, `label`, `url`, `enabled`)

You can also override emails via environment variables:
- `NEXT_PUBLIC_OFFICIAL_EMAIL`
- `NEXT_PUBLIC_CAREERS_EMAIL`

### 2. Products & Solutions Catalog
Edit `src/data/products.json` directly to add, update, or change the development status of products.
Alternatively, set `ADMIN_API_TOKEN` in `.env.local` and send a `PUT /api/products` request with `Authorization: Bearer <ADMIN_API_TOKEN>`.

### 3. Form Submission Endpoints
- **Contact Form (`POST /api/contact`)**: Configure `CONTACT_WEBHOOK_URL` in `.env.local` to forward JSON inquiries to your CRM, Slack, or email relay.
- **Careers Form (`POST /api/careers`)**: Configure `CAREERS_WEBHOOK_URL` in `.env.local` to forward `multipart/form-data` applications and resume files.

## Development & Build

```bash
npm install
npm run dev
npm run build
```
