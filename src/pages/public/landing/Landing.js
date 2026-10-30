import "./landing.css";
import { Link } from "react-router-dom";
import MarketingLayout from "../../../components/organisms/MarketingLayout";
import { BRAND } from "../../../utils/brand";

const KINDS = [
    { t: "Digital downloads", d: "Templates, presets, packs and files. Upload once, sell forever.", big: true },
    { t: "Ebooks", d: "Sell guides and books people can read right away." },
    { t: "Courses & memberships", d: "Lessons, communities and subscriptions in one place.", big: true },
    { t: "Event tickets", d: "Workshops, classes and meetups with simple ticketing." },
    { t: "Services", d: "Coaching, design and consulting, booked and paid online." },
    { t: "Physical goods", d: "Ship products too, from one store." },
];
const STEPS = [
    { t: "Create your store", d: "Sign up and add your details and payout account." },
    { t: "Add what you sell", d: "Upload a product, write a short description, set a price." },
    { t: "Share your link", d: "Post it anywhere your audience is and start getting paid." },
];
const TOOLS = [
    { t: "Your own store page", d: "One link that holds everything you sell." },
    { t: "Sales pages", d: "A focused page for each product to turn visitors into buyers." },
    { t: "Affiliates", d: "Let other people sell for you and pay them a share." },
    { t: "Discount codes", d: "Run launches and offers with codes you control." },
];
const FAQ = [
    { q: "What can I sell?", a: "Digital files, ebooks, courses, memberships, event tickets, services and physical goods." },
    { q: "How do I get paid?", a: "Customers pay at checkout and your earnings are paid out to the account you add." },
    { q: "Do I need a website?", a: "No. Your store gets its own link you can share anywhere." },
];

export default function Landing() {
    return (
        <MarketingLayout>
            <section className="lp-hero">
                <div className="mk-wrap lp-hero-in">
                    <div>
                        <p className="mk-eyebrow">The store for creators</p>
                        <h1>Sell what you know. <span>Get paid for it.</span></h1>
                        <p className="mk-lead">{BRAND.tagline} Set up in minutes, share one link, and keep growing.</p>
                        <div className="lp-actions">
                            <Link to="/register" className="mk-btn">Start selling free</Link>
                            <Link to="/how-it-works" className="mk-btn mk-btn--ghost">See how it works</Link>
                        </div>
                    </div>
                    <div className="lp-stack" aria-hidden="true">
                        <div className="lp-pcard c1"><b>Starter Guide</b><span>Ebook</span><em>$12</em></div>
                        <div className="lp-pcard c2"><b>Design Pack</b><span>Download</span><em>$25</em></div>
                        <div className="lp-pcard c3"><b>1:1 Coaching</b><span>Service</span><em>$80</em></div>
                        <div className="lp-toast">New sale <b>$25</b></div>
                    </div>
                </div>
            </section>

            <section className="mk-sec">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">Sell anything</p>
                    <h2 className="mk-h2">One store. Every kind of product.</h2>
                    <div className="lp-bento">
                        {KINDS.map((k) => (
                            <div key={k.t} className={`lp-tile ${k.big ? "big" : ""}`}>
                                <h3>{k.t}</h3><p>{k.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mk-sec lp-alt">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">Get started</p>
                    <h2 className="mk-h2">Live in three steps.</h2>
                    <ol className="lp-steps">
                        {STEPS.map((s, i) => (
                            <li key={s.t}><span>{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="lp-band">
                <div className="mk-wrap">
                    <h2 className="mk-h2">Get paid from anywhere.</h2>
                    <p className="mk-lead">Offer your customers familiar ways to pay, and send your earnings to your own account.</p>
                    <div className="lp-chips"><span>Local payments</span><span>International cards</span><span>Payouts to your bank</span></div>
                </div>
            </section>

            <section className="mk-sec">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">Grow</p>
                    <h2 className="mk-h2">Tools that help you sell more.</h2>
                    <div className="lp-tools">
                        {TOOLS.map((t) => (
                            <div key={t.t}><h3>{t.t}</h3><p>{t.d}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mk-sec lp-alt">
                <div className="mk-wrap lp-faq">
                    <h2 className="mk-h2">Questions, answered.</h2>
                    {FAQ.map((f) => (
                        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
                    ))}
                </div>
            </section>

            <section className="mk-sec">
                <div className="mk-wrap lp-cta">
                    <h2 className="mk-h2">Ready to open your store?</h2>
                    <p className="mk-lead">Create a free account and add your first product today.</p>
                    <Link to="/register" className="mk-btn">Start selling free</Link>
                </div>
            </section>
        </MarketingLayout>
    );
}