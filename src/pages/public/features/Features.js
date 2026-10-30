import "./features.css";
import { Link } from "react-router-dom";
import MarketingLayout from "../../../components/organisms/MarketingLayout";

const FEATURES = [
    {
        id: "products", icon: "📁", t: "Digital products & ebooks",
        d: "Turn files into income. Upload once, set a price, and every buyer gets their download right after paying.",
        points: ["Sell PDFs, templates, packs, audio and more", "Automatic delivery after payment", "Set your own price for each product"],
    },
    {
        id: "courses", icon: "🎓", t: "Courses & memberships",
        d: "Teach what you know. Organise your lessons, keep your content for paying students and sell access your way.",
        points: ["Lessons in a clear, ordered layout", "Content only buyers can open", "Sell one-time access or a membership"],
    },
    {
        id: "payments", icon: "💳", t: "Payments & payouts",
        d: "Customers pay at checkout and your earnings go to the payout account you add. No payment setup to wrestle with.",
        points: ["A simple, trusted checkout", "Every sale recorded in your dashboard", "Earnings sent to your payout account"],
    },
    {
        id: "store", icon: "🏪", t: "Store & landing pages",
        d: "Get one link for everything you sell, plus a focused page for each product that helps visitors say yes.",
        points: ["Your own store page, ready to share", "A sales page for every product", "Make it look like your brand"],
    },
    {
        id: "affiliates", icon: "🤝", t: "Affiliates",
        d: "Let other people sell for you. Invite them, set a commission and pay only when a sale happens.",
        points: ["Invite anyone by email", "You choose the commission", "Track the sales each affiliate brings"],
    },
];

function Visual({ id }) {
    if (id === "products")
        return (
            <div className="ft-vis">
                <div className="ft-file"><span>📄</span><div><b>Starter-Guide.pdf</b><small>Digital download</small></div></div>
                <div className="ft-row"><em>$12</em><i>Delivered instantly</i></div>
            </div>
        );
    if (id === "courses")
        return (
            <div className="ft-vis">
                {["1. Welcome", "2. The basics", "3. Your first win"].map((l, i) => (
                    <div className="ft-lesson" key={l}><span>{l}</span><i>{i === 0 ? "Open" : "Open"}</i></div>
                ))}
                <div className="ft-bar"><div /></div>
            </div>
        );
    if (id === "payments")
        return (
            <div className="ft-vis">
                <div className="ft-row"><span>Customer paid</span><em>$25</em></div>
                <div className="ft-arrow">↓</div>
                <div className="ft-row"><span>Payout sent to you</span><i>Done</i></div>
            </div>
        );
    if (id === "store")
        return (
            <div className="ft-vis">
                <div className="ft-grid"><div /><div /><div /><div /><div /><div /></div>
                <div className="ft-link">yourstore/your-name</div>
            </div>
        );
    return (
        <div className="ft-vis">
            <small className="ft-sample">Sample</small>
            <div className="ft-row"><span>Ada · 3 sales</span><em>$18 earned</em></div>
            <div className="ft-row"><span>Tobi · 1 sale</span><em>$6 earned</em></div>
        </div>
    );
}

export default function Features() {
    return (
        <MarketingLayout>
            <section className="ft-hero">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">Features</p>
                    <h1>Five tools. <span>One store.</span></h1>
                    <p className="mk-lead">Everything you need to sell what you know and get paid, without stitching together a dozen apps.</p>
                </div>
            </section>

            <section className="mk-sec" style={{ paddingTop: 24 }}>
                <div className="mk-wrap ft-layout">
                    <nav className="ft-index" aria-label="Features">
                        {FEATURES.map((f) => (
                            <a key={f.id} href={`#${f.id}`}>{f.icon} {f.t}</a>
                        ))}
                    </nav>
                    <div className="ft-list">
                        {FEATURES.map((f) => (
                            <article className="ft-card" id={f.id} key={f.id}>
                                <div>
                                    <span className="ft-icon" aria-hidden="true">{f.icon}</span>
                                    <h2>{f.t}</h2>
                                    <p>{f.d}</p>
                                    <ul>{f.points.map((p) => (<li key={p}>{p}</li>))}</ul>
                                </div>
                                <div aria-hidden="true"><Visual id={f.id} /></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mk-sec ft-alt">
                <div className="mk-wrap ft-cta">
                    <h2 className="mk-h2">Start with all five, free.</h2>
                    <p className="mk-lead">Create an account and open your store today.</p>
                    <div className="ft-actions">
                        <Link to="/register" className="mk-btn">Start selling free</Link>
                        <Link to="/how-it-works" className="mk-btn mk-btn--ghost">See how it works</Link>
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
