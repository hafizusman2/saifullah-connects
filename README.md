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

The `/api/enquiry` route sends each submission by email (via [Resend](https://resend.com)) to
`saifullah@saifullahconnects.com`, with the submitter's address set as reply-to.

To enable actual delivery:

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.
3. Verify `saifullahconnects.com` in Resend, then set `ENQUIRY_FROM_EMAIL` (see `.env.example`)
   so the notification email is sent from your own domain instead of Resend's shared sender.

Without `RESEND_API_KEY` set, submissions are still validated and logged server-side, but no
email is sent — useful for local development.

## Brand

| Colour | Hex | Usage |
| --- | --- | --- |
| Deep navy | `#10263D` | Headlines, main text, footer |
| Dark teal | `#006D77` | Buttons, important links |
| White | `#FFFFFF` | Most backgrounds |
| Pale mint | `#EAF6F2` | Occasional background sections |
