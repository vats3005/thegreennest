// Contact page metadata — exported from layout since the page uses "use client"
const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
    title: "Contact Us – Book an Appointment at The Green Nest, Mohali",
    description:
        "Get in touch with The Green Nest IVF & infertility clinic in Mohali. Book an appointment with Dr. Shilpi Srivastava. Visit us at SCO 49, Phase 6, Mohali or call +91 7888368297.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact Us – Book an Appointment | The Green Nest, Mohali",
        description:
            "Book your consultation at The Green Nest, Mohali. IVF & infertility specialist Dr. Shilpi Srivastava. SCO 49, Phase 6, Mohali.",
        url: `${SITE_URL}/contact`,
        images: [{ url: "/dr-shilpi.jpg", alt: "Contact The Green Nest clinic in Mohali" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact The Green Nest – IVF Clinic, Mohali",
        description:
            "Book an appointment with Dr. Shilpi Srivastava. Call +91 7888368297 or visit SCO 49, Phase 6, Mohali.",
        images: ["/dr-shilpi.jpg"],
    },
};

export default function ContactLayout({ children }) {
    return children;
}
