# Saifullah Connects

Marketing site for Saifullah Connects — connecting AI/software brands with relevant creators
through research-led, clearly agreed partnerships.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)

## Running locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Structure

- `src/app/page.tsx` — home page
- `src/app/contact/page.tsx` — contact page (enquiry form + FAQ)
- `src/app/privacy/page.tsx` — privacy notice
- `src/app/api/enquiry/route.ts` — contact form submission handler
- `src/components/` — shared Header, Footer, Logo, ContactForm
- `src/app/sitemap.ts`, `src/app/robots.ts` — SEO files

## Contact form backend

The `/api/enquiry` route currently validates submissions and logs them server-side — there's no
email or database provider wired up yet. Before relying on it in production, connect it to a
transactional email service (e.g. [Resend](https://resend.com)) or a database so enquiries are
actually captured and actioned.

## Brand

| Colour | Hex | Usage |
| --- | --- | --- |
| Deep navy | `#10263D` | Headlines, main text, footer |
| Dark teal | `#006D77` | Buttons, important links |
| White | `#FFFFFF` | Most backgrounds |
| Pale mint | `#EAF6F2` | Occasional background sections |
