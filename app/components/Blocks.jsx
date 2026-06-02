import Icon from "./Icon";

export function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-intro ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Card({ icon, title, text, children, className = "" }) {
  return (
    <article className={`card ${className}`}>
      {icon && (
        <div className="icon-box">
          <Icon name={icon} />
        </div>
      )}
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {children}
    </article>
  );
}

export function CTA({ title, text, href = "/free-diagnosis", label = "Request a free diagnosis" }) {
  return (
    <section className="section">
      <div className="container cta-band">
        <div>
          <p className="eyebrow light">Diagnosis</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a className="btn btn-cyan" href={href}>
          {label} <Icon name="arrowRight" className="icon-sm" />
        </a>
      </div>
    </section>
  );
}

export function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map(([question, answer]) => (
        <details className="faq-item" key={question}>
          <summary>{question}<span>⌄</span></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
