'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Listing } from '../lib/data';
const fmt=(l:Listing)=>l.starting_price_usd===null?'Not published':l.starting_price_usd===0?'$0 tier':`$${l.starting_price_usd}`;
export default function Directory({ items, fixedTrade }: { items: Listing[]; fixedTrade?: string }) {
  const [trade,setTrade]=useState(fixedTrade||''); const [max,setMax]=useState(''); const [unit,setUnit]=useState(''); const [trial,setTrial]=useState(false); const [human,setHuman]=useState(false); const [integ,setInteg]=useState(''); const [sort,setSort]=useState('price');
  const units=[...new Set(items.map(i=>i.billing_unit))].sort();
  const rows=useMemo(()=>items.filter(l=>(!trade||l.trades_served.includes(trade))&&(!max||(l.starting_price_usd!==null&&l.starting_price_usd<=+max))&&(!unit||l.billing_unit===unit)&&(!trial||!/^unverified/i.test(l.free_trial))&&(!human||l.human_backup===true)&&(!integ||l.integrations.some(x=>x.startsWith(integ))))
    .sort((a,b)=>Number(b.featured)-Number(a.featured)||(sort==='name'?a.name.localeCompare(b.name):(a.starting_price_usd??1e9)-(b.starting_price_usd??1e9))),[items,trade,max,unit,trial,human,integ,sort]);
  return <>
    <div className="filters" role="search">
      {!fixedTrade&&<select aria-label="Trade" value={trade} onChange={e=>setTrade(e.target.value)}><option value="">All trades</option><option value="hvac">HVAC</option><option value="plumbing">Plumbing</option><option value="electrical">Electrical</option><option value="cleaning">Cleaning</option></select>}
      <select aria-label="Max price" value={max} onChange={e=>setMax(e.target.value)}><option value="">Any price</option><option value="30">≤ $30/mo</option><option value="50">≤ $50/mo</option><option value="100">≤ $100/mo</option><option value="200">≤ $200/mo</option></select>
      <select aria-label="Billing unit" value={unit} onChange={e=>setUnit(e.target.value)}><option value="">Any billing unit</option>{units.map(u=><option key={u}>{u}</option>)}</select>
      <select aria-label="Integration" value={integ} onChange={e=>setInteg(e.target.value)}><option value="">Any integration</option><option>ServiceTitan</option><option>Jobber</option><option>Housecall Pro</option><option>Google Calendar</option></select>
      <label><input type="checkbox" checked={trial} onChange={e=>setTrial(e.target.checked)}/> Trial/free tier</label>
      <label><input type="checkbox" checked={human} onChange={e=>setHuman(e.target.checked)}/> Human agents</label>
      <select aria-label="Sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="price">Sort: price</option><option value="name">Sort: name</option></select>
    </div>
    <p style={{fontSize:14}}>{rows.length} of {items.length} tools</p>
    <div className="tw"><table><thead><tr><th>Tool</th><th>From</th><th>Billing</th><th>Included</th><th>Trial</th><th>Checked</th></tr></thead><tbody>
      {rows.map(l=><tr key={l.slug}><td><Link href={`/tool/${l.slug}/`}><b>{l.name}</b></Link>{l.featured&&<> <span className="badge feat">Featured (paid)</span></>}<br/><small>{l.one_liner}</small></td><td>{fmt(l)}</td><td>{l.billing_unit}</td><td>{l.included_volume}</td><td>{l.free_trial}</td><td><span className={`badge b-${l.verification_status}`}>{l.verification_status}</span><br/><small>{l.last_verified}</small></td></tr>)}
    </tbody></table></div></>;
}
