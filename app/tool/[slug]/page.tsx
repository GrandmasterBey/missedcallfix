import Link from 'next/link';
import { notFound } from 'next/navigation';
import { listings, price, TRADES } from '../../../lib/data';
export const dynamicParams=false;
export function generateStaticParams(){ return listings.map(l=>({slug:l.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const l=listings.find(x=>x.slug===slug); return l?{title:`${l.name} pricing & features`,description:`${l.name}: ${l.one_liner} Starting price ${price(l)}, checked ${l.last_verified}.`,alternates:{canonical:`/tool/${l.slug}/`}}:{}; }
const yn=(b:boolean|null)=>b===null?'Unverified':b?'Yes':'No';
export default async function Tool({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const l=listings.find(x=>x.slug===slug); if(!l) notFound();
 const U=(f:string,v:React.ReactNode)=>l.unverified_fields.includes(f)?<>{v} <span className="badge b-unverified">unverified</span></>:v;
 return <><p><Link href="/">← All tools</Link></p><h1>{l.name}{l.featured&&<> <span className="badge feat">Featured (paid)</span></>}</h1><p>{l.one_liner}</p>
 <p><span className={`badge b-${l.verification_status}`}>{l.verification_status}</span> Checked {l.last_verified} against <a href={l.source_url} rel="nofollow noopener">{l.source_url}</a></p>
 <div className="card"><dl>
  <dt>Starting price</dt><dd>{U('starting_price_usd',price(l))}</dd><dt>Billing unit</dt><dd>{U('billing_unit',l.billing_unit)}</dd>
  <dt>Included volume</dt><dd>{l.included_volume}</dd><dt>Overage</dt><dd>{l.overage}</dd><dt>Free trial</dt><dd>{U('free_trial',l.free_trial)}</dd>
  <dt>Human agents</dt><dd>{yn(l.human_backup)}</dd><dt>SMS follow-up</dt><dd>{yn(l.sms_followup)}</dd>
  <dt>Integrations</dt><dd>{l.integrations.length?l.integrations.join(', '):'None confirmed'}</dd>
  <dt>Trades</dt><dd>{l.trades_served.map(t=><Link key={t} href={`/for/${t}/`} style={{marginRight:8}}>{TRADES[t].name}</Link>)}</dd>
  <dt>Key features</dt><dd><ul style={{margin:0,paddingLeft:18}}>{l.key_features.map(f=><li key={f}>{f}</li>)}</ul></dd>
  {l.notes&&<><dt>Notes</dt><dd>{l.notes}</dd></>}
 </dl></div>
 {l.unverified_fields.length>0&&<p><small>We could not confirm these on the vendor&apos;s page: {l.unverified_fields.join(', ')}.</small></p>}
 <p><a href={l.url} rel="nofollow noopener">Visit {l.name} →</a> <small>(not an affiliate link)</small></p>
 <p><small>Is this your product? See <Link href="/about/">how to request corrections</Link>.</small></p></>; }
