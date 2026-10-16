import { listings, SITE, TRADES } from '../lib/data';
export const dynamic='force-static';
export default function sitemap(){ const p=['','faq/','about/','featured/','newsletter/',...Object.keys(TRADES).map(t=>`for/${t}/`),...listings.map(l=>`tool/${l.slug}/`)];
 return p.map(x=>({url:`${SITE}/${x}`,lastModified:'2026-10-15'})); }
