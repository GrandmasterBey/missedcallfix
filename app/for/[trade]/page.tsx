import Directory from '../../Directory';
import { listings, TRADES } from '../../../lib/data';
export const dynamicParams=false;
export function generateStaticParams(){ return Object.keys(TRADES).map(trade=>({trade})); }
export async function generateMetadata({params}:{params:Promise<{trade:string}>}){ const {trade}=await params; return {title:`Best AI receptionists for ${TRADES[trade].name} businesses`,alternates:{canonical:`/for/${trade}/`}}; }
export default async function Trade({params}:{params:Promise<{trade:string}>}){ const {trade}=await params; const t=TRADES[trade]; const items=listings.filter(l=>l.trades_served.includes(trade));
 return <><h1>AI receptionists for {t.name}</h1><p>{t.blurb}</p><Directory items={items} fixedTrade={trade}/></>; }
