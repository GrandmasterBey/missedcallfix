import Directory from './Directory';
import { listings } from '../lib/data';
export default function Home(){ const v=listings.filter(l=>l.verification_status==='verified').length;
  return <><h1>AI receptionists for home-service trades, compared</h1>
  <p>{listings.length} AI receptionists and answering services for HVAC, plumbing, electrical and cleaning businesses. Each price comes from the vendor&apos;s own pricing page and shows the date we checked it. {v} listings have price, billing unit and trial confirmed. The rest are marked <span className="badge b-partial">partial</span> or <span className="badge b-unverified">unverified</span>.</p>
  <Directory items={listings}/></>; }
