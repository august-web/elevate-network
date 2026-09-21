import Link from "next/link";
import { site } from "@/lib/site";

const SOCIALS = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "Facebook", href: site.socials.facebook },
  { label: "LinkedIn", href: site.socials.linkedin },
];

/** Site footer — same grid and columns as the reference site. */
export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Elevate Network</div>
            <div className="footer-addr">
              Adenta, Accra
              <br />
              Engage · Empower · Enact
            </div>
          </div>

          <div className="footer-col">
            <h4>Our Work</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/programmes">Programmes</Link>
              </li>
              <li>
                <Link href="/impact">Impact</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Working alongside</h4>
            <ul>
              <li>Ministry of Education, Ghana</li>
              <li>Ghana Education Service</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.website} target="_blank" rel="noopener noreferrer">
                  elevate-network.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Elevate Network Foundation. A
            registered Ghanaian nonprofit.
          </span>
          <span>Photography — Power of You Festival</span>
        </div>
      </div>
    </footer>
  );
}
