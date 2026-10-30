import "./howitworks.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import MarketingLayout from "../../../components/organisms/MarketingLayout";
import { BRAND } from "../../../utils/brand";

const STEPS = [
    { t: "Set up your store and payouts", d: "Create your account, add your details and choose where your earnings should be sent." },
    { t: "Add what you sell", d: "Upload your file or describe your service, set a price and make the page yours." },
    { t: "Share your link and get paid", d: "Post your link anywhere. After each sale the buyer gets access and your payout is handled." },
];
const KINDS = [
    { i: "📁", t: "Digital products", d: "Templates, packs, designs and bundles." },
    { i: "📘", t: "Ebooks", d: "Guides and books in any format." },
    { i: "🎓", t: "Courses & memberships", d: "Lessons and communities with protected content." },
    { i: "🎟️", t: "Tickets & training", d: "Events, workshops, webinars and classes." },
    { i: "🛠️", t: "Services", d: "Coaching, consulting and design sessions." },
    { i: "📦", t: "Physical goods", d: "Clothing, books, gadgets and more." },
];
const JOURNEY = [
    { t: "Customer pays", d: "They check out on your store or product page." },
    { t: "Payment is confirmed", d: "The sale is recorded and you are notified." },
    { t: "Buyer gets access", d: "Files, lessons or tickets are delivered automatically." },
    { t: "You get paid", d: "Your earnings go to the payout account you added." },
];
const NEEDS = [
    "Your payout account details",
    "A file, or a description of your service",
    "A price and a short description",
    "An email address to sign up with",
];

function Mock({ step }) {
    if (step === 0)
        return (
            <div className="hw-mock">
                <b>Payout details</b>
                {["Account name", "Bank", "Account number"].map((f) => (
                    <div className="hw-field" key={f}><small>{f}</small><div /></div>
                ))}
                <span className="mk-btn hw-fake">Save payout account</span>
            </div>
        );
    if (step === 1)
        return (
            <div className="hw-mock">
                <b>New product</b>
                <div className="hw-drop">Drop your file here</div>
                <div className="hw-field"><small>Title</small><div /></div>
                <div className="hw-price"><small>Price</small><em>$25</em></div>
            </div>
        );
    return (
        <div className="hw-mock">
            <b>Your store link</b>
            <div className="hw-link"><span>{BRAND.name.toLowerCase()}/your-store</span><i>Copy</i></div>
            <div className="hw-toast">New sale · <b>$25</b></div>
        </div>
    );
}

export default function HowItWorks() {
    const [step, setStep] = useState(0);
    return (
        <MarketingLayout>
            <section className="hw-hero">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">How it works</p>
                    <h1>From idea to first sale in <span>three simple steps.</span></h1>
                    <p className="mk-lead">No website, no code. Set up your store, add what you sell and share one link.</p>
                </div>
            </section>

            <section className="mk-sec" style={{ paddingTop: 24 }}>
                <div className="mk-wrap hw-steps">
                    <div className="hw-tabs">
                        {STEPS.map((s, i) => (
                            <button key={s.t} className={`hw-tab ${step === i ? "on" : ""}`} aria-pressed={step === i} onClick={() => setStep(i)}>
                                <b>{i + 1}</b>
                                <span><strong>{s.t}</strong><p>{s.d}</p></span>
                            </button>
                        ))}
                        <Link to="/register" className="mk-btn" style={{ justifySelf: "start" }}>Start selling free</Link>
                    </div>
                    <div className="hw-panel" aria-live="polite" aria-hidden="false"><Mock step={step} /></div>
                </div>
            </section>

            <section className="mk-sec hw-alt">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">What you can sell</p>
                    <h2 className="mk-h2">If people want it, you can sell it.</h2>
                    <div className="hw-kinds">
                        {KINDS.map((k) => (
                            <div className="hw-kind" key={k.t}>
                                <span aria-hidden="true">{k.i}</span>
                                <div><h3>{k.t}</h3><p>{k.d}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mk-sec">
                <div className="mk-wrap">
                    <p className="mk-eyebrow">The journey of a sale</p>
                    <h2 className="mk-h2">We handle everything after “buy”.</h2>
                    <ol className="hw-journey">
                        {JOURNEY.map((j, i) => (
                            <li key={j.t}><span>{i + 1}</span><h3>{j.t}</h3><p>{j.d}</p></li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="hw-band">
                <div className="mk-wrap hw-band-in">
                    <div>
                        <h2 className="mk-h2">Before you start</h2>
                        <p className="mk-lead">Have these ready and you can be live in one sitting.</p>
                    </div>
                    <ul className="hw-needs">
                        {NEEDS.map((n) => (<li key={n}>{n}</li>))}
                    </ul>
                </div>
            </section>

            <section className="mk-sec">
                <div className="mk-wrap hw-cta">
                    <h2 className="mk-h2">Ready to make your first sale?</h2>
                    <p className="mk-lead">Create a free account and open your store today.</p>
                    <Link to="/register" className="mk-btn">Start selling free</Link>
                </div>
            </section>
        </MarketingLayout>
    );
}
