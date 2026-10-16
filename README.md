# MissedCallFix (local build, not deployed)

This is a static Next.js site (`output: 'export'`). It lists AI receptionists for HVAC, plumbing, electrical and cleaning businesses.
- Data: `data/listings.json` (copied to `public/data/listings.json`). The schema follows `../directory-plan.md` and adds `key_features`, `verification_status` and `unverified_fields`.
- Raw vendor-page snapshots from 2026-10-15 are in `../research/*.html` and `*.txt`.
- Commands: `npm install` → `npm run build` writes the site to `out/`. Preview with `python3 -m http.server 4321 -d out`.
- After editing `data/listings.json`, run `cp data/listings.json public/data/` again.

## Placeholders still to swap
- `/featured`: the payment button is disabled. Add the Stripe link only after GO #4.
- `/newsletter`: the form is disabled and collects nothing. Wire it up only after GO #5.
- `/about` and `llms.txt`: the contact address says "to be published".
- `SITE` in `lib/data.ts`, `public/robots.txt` and `public/llms.txt` assume `missedcallfix.vercel.app`.

## Deploy steps (each needs explicit owner GO)
1. **GO #1** Create the GitHub repo `GrandmasterBey/missedcallfix`, then `git init && git add . && git commit && git push`. Add `node_modules`, `.next` and `out` to `.gitignore`.
2. **GO #2** Import the repo into Vercel (Hobby). Framework: Next.js. The static export deploys from `out/` automatically. Check that the domain/subdomain is available.
3. **GO #3** Submit `https://<domain>/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
4. **GO #4** Create a one-time $29 Stripe Payment Link and replace the disabled button in `app/featured/page.tsx`.
5. **GO #5** Pick a newsletter provider (double opt-in) and enable the form.
6. **GO #6 / #7** Every vendor outreach email or DM and every public post needs its own approval.

## Before launch
Re-verify prices that are older than 14 days. Resolve the `unverified_fields` entries, or keep them labeled.
