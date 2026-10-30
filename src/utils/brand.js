// Single place to rename the brand or edit nav/footer links.
export const BRAND = {
    name: "YourBrand",
    tagline: "Turn what you know into a store that sells while you sleep.",
};

export const NAV_LINKS = [
    { label: "How it works", to: "/how-it-works" },
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
];

export const FOOTER_LINKS = {
    Product: NAV_LINKS,
    Resources: [
        { label: "Help center", to: "/help" },
        { label: "Contact", to: "/contact" },
    ],
    Legal: [
        { label: "Terms", to: "/terms" },
        { label: "Privacy", to: "/privacy" },
    ],
};
