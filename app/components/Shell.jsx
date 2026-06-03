import Icon from "./Icon";
import { navItems } from "../../src/data/site";

const footerColumns = [
  ["Quick access", [["Home", "/#home"], ["Free diagnosis", "/free-diagnosis"], ["Services", "/services"], ["Methodology", "/methodology"], ["Contact", "/contact"]]],
  ["Services", [["Digital audit", "/services#services"], ["Experience diagnosis", "/services#services"], ["Action plan", "/services#services"], ["Mystery Guest", "/mystery-guest"]]],
  ["Kaiori", [["Kaiori method", "/methodology"], ["What we audit", "/services#what-we-audit"], ["For hospitality", "/#sectors"], ["Work with us", "mailto:mabel@kaiori.com?subject=Kaiori%20-%20Work%20with%20us"]]],
  ["Legal", [["Legal notice", "/legal-notice"], ["Privacy policy", "/privacy-policy"], ["Cookies policy", "/cookies-policy"], ["Terms and conditions", "/terms-and-conditions"]]],
];

const footerSocialItems = [
  { label: "Email", href: "mailto:mabel@kaiori.com", icon: "mail" },
  { label: "Instagram pending setup", icon: "instagram" },
  { label: "LinkedIn pending setup", icon: "linkedin" },
  { label: "YouTube pending setup", icon: "youtube" },
];

export function Header() {
  const hrefFor = (href) => (href.startsWith("/") ? href : `/${href}`);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/#home" aria-label="Go to home" className="brand">
          <img src="/assets/brand/kaiori-logo-500.png" width="500" height="179" alt="Kaiori" />
        </a>
        <nav className="main-nav">
          {navItems.map(([label, href]) => (
            <a href={hrefFor(href)} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href="/free-diagnosis">
          Request a free diagnosis <Icon name="arrowRight" className="icon-sm" />
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <a href="/#home" aria-label="Go to Kaiori home">
            <img className="footer-logo" src="/assets/brand/kaiori-logo-500.png" width="500" height="179" alt="Kaiori" />
          </a>
          <p>Kaiori analyses the real customer experience and turns it into concrete business improvements.</p>
          <a className="btn btn-cyan footer-cta" href="/free-diagnosis">
            Request a diagnosis <Icon name="arrowRight" className="icon-sm" />
          </a>
        </div>
        <nav className="footer-columns">
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
        {/* <div className="footer-language" aria-label="Current language">
          English <Icon name="chevronDown" className="icon-sm" />
        </div> */}
      </div>
      <div className="container footer-bottom">
        <span>© {year} Kaiori. All rights reserved.</span>
        <div className="footer-social" aria-label="Contact channels">
          {footerSocialItems.map((item) =>
            item.href ? (
              <a href={item.href} aria-label={item.label} key={item.label}>
                <Icon name={item.icon} className="icon" />
              </a>
            ) : (
              <span className="social-disabled" aria-label={item.label} title={item.label} key={item.label}>
                <Icon name={item.icon} className="icon" />
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
