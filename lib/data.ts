import raw from '../data/listings.json';
export type Listing = { slug:string; name:string; url:string; logo_url:string|null; one_liner:string; trades_served:string[]; starting_price_usd:number|null; billing_unit:string; included_volume:string; overage:string; free_trial:string; human_backup:boolean|null; integrations:string[]; languages:string[]; sms_followup:boolean|null; key_features:string[]; source_url:string; last_verified:string; verified_by:string; verification_status:'verified'|'partial'|'unverified'; unverified_fields:string[]; notes:string; featured:boolean; featured_until:string|null; affiliate_url:string|null };
export const listings = raw as Listing[];
export const SITE = 'https://missedcallfix.vercel.app';
export const TRADES: Record<string,{name:string;blurb:string}> = {
  hvac:{name:'HVAC',blurb:'No-heat and no-cool calls spike at night and on weekends. Look for after-hours answering, urgent-call transfer and booking.'},
  plumbing:{name:'Plumbing',blurb:'Burst pipes do not wait. Prioritize emergency routing, call-back texts and dispatch integration.'},
  electrical:{name:'Electrical',blurb:'Estimates and service calls compete for the same phone. Look for lead qualification and calendar booking.'},
  cleaning:{name:'Cleaning',blurb:'Recurring bookings and quote requests. Look for SMS follow-up, low monthly minimums and simple scheduling.'},
};
export const price = (l:Listing) => l.starting_price_usd===null ? 'Not published' : l.starting_price_usd===0 ? '$0 tier' : `$${l.starting_price_usd}/mo`;
