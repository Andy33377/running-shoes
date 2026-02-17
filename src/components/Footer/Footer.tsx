import { footerLinks } from "../../data/mockData";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Fleet Feet</h3>
            <ul className={styles.links}>
              {footerLinks.fleetFeet.map((label) => (
                <li key={label}>
                  <a href="/">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Own a Franchise</h3>
            <ul className={styles.links}>
              {footerLinks.franchise.map((label) => (
                <li key={label}>
                  <a href="/">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Help & More</h3>
            <ul className={styles.links}>
              {footerLinks.help.map((label) => (
                <li key={label}>
                  <a href="/">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              Join our newsletter for the latest deals, events and more.
            </h3>
            <form
              className={styles.newsletter}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address (required)"
                className={styles.emailInput}
                required
              />
              <button
                type="submit"
                className={styles.submitBtn}
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
            <div className={styles.social}>
              <a href="/" aria-label="Facebook">
                <img
                  src="/images/facebook.svg"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
              <a href="/" aria-label="Instagram">
                <img
                  src="/images/inst.svg"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
              <a href="/" aria-label="LinkedIn">
                <img
                  src="/images/linked.svg"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
              <a href="/" aria-label="X (Twitter)">
                <img
                  src="/images/twitter.svg"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
              <a href="/" aria-label="YouTube">
                <img
                  src="/images/youtube.svg"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <a href="/" className={styles.logoLink}>
          <img
            src="/images/footer-logo.jpeg"
            alt="Fleet Feet"
            className={styles.logoImg}
          />
        </a>
        <div className={styles.policies}>
          <a href="/">Website Accessibility Policy</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <span>Your Privacy Choices</span>
          <a href="/">California Collection Notice</a>
          <a href="/">Cookie Policy</a>
        </div>
        <p className={styles.copyright}>
          © 2026 Fleet Feet. All Rights Reserved. Site by NM
        </p>
      </div>
    </footer>
  );
}

function FreeShippingBlock() {
  return (
    <div className={styles.shippingContent}>
      <img
        src="/images/bg-runing-footer.jpg"
        alt="Runner on a path"
        className={styles.shippingImage}
      />
      <div className={styles.shippingTextBlock}>
        <h2 className={styles.shippingTitle}>Free Shipping & Returns</h2>
        <p className={styles.shippingText}>
          Not sure about buying a new pair? Don&apos;t sweat it. Get free
          shipping on orders over $99 when you shop on fleetfeet.com.
        </p>
        <p className={styles.shippingText}>
          If you don&apos;t like how your new gear looks, fits or feels,
          we&apos;ll take it back within 30 days. That&apos;s our Happy Fit
          Guarantee.
        </p>
      </div>
    </div>
  );
}
