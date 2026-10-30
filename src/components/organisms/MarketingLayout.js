import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/marketing.css";
import { BRAND, NAV_LINKS, FOOTER_LINKS } from "../../utils/brand";
import { APP_PAGES } from "../../utils/navigationRoutes";

// Wrap every public marketing page in this: <MarketingLayout>...</MarketingLayout>
export default function MarketingLayout({ children }) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div className="mk">
            <header className={`mk-nav ${open ? "open" : ""}`}>
                <div className="mk-wrap mk-nav-in">
                    <Link to="/" className="mk-logo" onClick={close}>
                        {BRAND.name}<i>.</i>
                    </Link>
                    <button className="mk-burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
                        {open ? "✕" : "☰"}
                    </button>
                    <nav className="mk-links" aria-label="Main">
                        {NAV_LINKS.map((l) => (
                            <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
                        ))}
                    </nav>
                    <div className="mk-cta-nav">
                        <Link to={APP_PAGES.login} onClick={close}>Log in</Link>
                        <Link to="/register" className="mk-btn" onClick={close}>Start selling</Link>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className="mk-foot">
                <div className="mk-wrap">
                    <div className="mk-foot-grid">
                        <div>
                            <div className="mk-logo">{BRAND.name}<i>.</i></div>
                            <p style={{ color: "var(--mu)", maxWidth: 260, fontSize: 14 }}>{BRAND.tagline}</p>
                        </div>
                        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                            <div key={title}>
                                <h4>{title}</h4>
                                <ul>
                                    {links.map((l) => (
                                        <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <small>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}
