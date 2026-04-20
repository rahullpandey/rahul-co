import Link from "next/link";

export default function TravelFooter() {
  return (
    <footer className="travel-footer">
      <div className="travel-footer-inner">
        <div className="travel-footer-grid">
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/private-jets">Private Jets</Link>
              </li>
              <li>
                <Link href="/villas">Villa Stays</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
              <li>
                <Link href="/concierge">Concierge</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>Contact</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4>Pay Safely</h4>
            <div className="travel-payment-row">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PAYPAL</span>
            </div>
          </div>
        </div>

        <div className="travel-footer-wordmark">RAHUL CO.</div>

        <div className="travel-footer-bottom">
          <p>&copy; 2026 Rahul Co.</p>
          <div>
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
