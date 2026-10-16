import './globals.css';
import Link from 'next/link';
import { SITE } from '../lib/data';
export const metadata = { metadataBase: new URL(SITE), title: { default: 'MissedCallFix: AI receptionists for HVAC, plumbing, electrical & cleaning', template: '%s | MissedCallFix' }, description: 'Neutral, date-stamped directory of AI receptionists and answering services for home-service trades. Prices checked against vendor pricing pages.', verification: { google: 'RDe_0GTHXsoTp8tLlnTFpiUyhOMZoFVA_DWJe01to8U' } };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <header><Link className="logo" href="/">MissedCallFix</Link><nav>
      <Link href="/for/hvac/">HVAC</Link><Link href="/for/plumbing/">Plumbing</Link><Link href="/for/electrical/">Electrical</Link><Link href="/for/cleaning/">Cleaning</Link><Link href="/faq/">FAQ</Link><Link href="/about/">Methodology</Link><Link href="/featured/">Get Featured</Link></nav></header>
    <main>{children}</main>
    <footer>Prices are checked against each vendor&apos;s own page and date-stamped; they change often, so confirm before you buy. Listings marked <b>Featured</b> are paid placements and are always labeled. <Link href="/about/">Methodology</Link> · <Link href="/newsletter/">Newsletter</Link> · <a href="/llms.txt">llms.txt</a> · <a href="/data/listings.json">Data (JSON)</a></footer>
  </body></html>;
}
