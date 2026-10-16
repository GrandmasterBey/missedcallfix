export const metadata={title:'FAQ'};
const Q:[string,string][]=[
['What is an AI receptionist?','Software that answers your business phone with a voice AI. It takes messages, answers common questions, books jobs and texts the caller, 24/7.'],
['What does it cost for a 1-truck HVAC shop?','Plans in this directory start at $0 to $49 a month for low volume. Most solo shops land between $49 and $150 a month once overage is counted. Check included minutes or calls against your real call volume.'],
['Per-minute vs. per-call billing?','Per-minute plans charge for talk time, so long calls cost more. Per-call (or per-conversation) plans charge a flat amount per call, so you can budget more easily if your calls run long.'],
['Do any integrate with ServiceTitan, Jobber or Housecall Pro?','Some vendors mention them on their pricing pages (filter by integration on the home page). Jobber and Housecall Pro also sell their own built-in AI receptionists. Confirm with the vendor how deep the integration goes.'],
['Is human backup available?','Some services, such as Ruby, PATLive, Posh and Abby, use live human receptionists or mix humans with AI. Use the "Human agents" filter.'],
['Can it book jobs and text customers?','Many can. Look at the SMS follow-up field and key features on each tool page.'],
['How do you verify prices?','We load each vendor\'s own pricing page and record what it shows, with the date. Anything we could not confirm is marked unverified. We never estimate prices.'],
['Is Featured paid?','Yes. Featured listings are paid placements, always labeled "Featured (paid)", and they never change a listing\'s data.'],
];
export default function F(){ const ld={"@context":"https://schema.org","@type":"FAQPage",mainEntity:Q.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
 return <><h1>FAQ</h1><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>{Q.map(([q,a])=><div className="card" key={q}><h2 style={{fontSize:18,margin:0}}>{q}</h2><p>{a}</p></div>)}</>; }
