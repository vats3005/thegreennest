import AllServices from "@/components/AllServices";

const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
    title: "Our Services – Gynecology, Fertility & Pregnancy Care in Mohali",
    description:
        "Explore comprehensive women's healthcare services at The Green Nest, Mohali: infertility treatment (IVF, ICSI, IUI), general gynecology, pregnancy care, adolescent health & wellness screening by Dr. Shilpi Srivastava.",
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: "Our Services – Gynecology, Fertility & Pregnancy Care | The Green Nest",
        description:
            "IVF, ICSI, IUI, general gynecology, pregnancy care, adolescent health & wellness services at The Green Nest, Mohali.",
        url: `${SITE_URL}/services`,
        images: [{ url: "/dr-shilpi.jpg", alt: "Women's healthcare services at The Green Nest" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services – The Green Nest, Mohali",
        description:
            "Comprehensive women's healthcare: IVF, gynecology, pregnancy care & more by Dr. Shilpi Srivastava.",
        images: ["/dr-shilpi.jpg"],
    },
};

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "The Green Nest – Our Services",
    url: `${SITE_URL}/services`,
    description:
        "Comprehensive women's healthcare services offered at The Green Nest clinic in Mohali.",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Women's Healthcare Services",
        itemListElement: [
            {
                "@type": "OfferCatalog",
                name: "Infertility Treatment",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Ovulation Induction (OI) and Monitoring" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Intrauterine Insemination (IUI)" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "In Vitro Fertilization (IVF)" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "ICSI for Male Factor Infertility" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTest", name: "Comprehensive Fertility Evaluation" } },
                ],
            },
            {
                "@type": "OfferCatalog",
                name: "General Gynecology",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Treatment for Irregular Periods" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Fibroids and Cyst Treatment" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Endometriosis Management" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Prolapse Uterus Treatment" } },
                ],
            },
            {
                "@type": "OfferCatalog",
                name: "Pregnancy Care (ANC)",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Regular Antenatal Checkups" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "High-Risk Pregnancy Management" } },
                ],
            },
            {
                "@type": "OfferCatalog",
                name: "Adolescent Health",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "PCOD Management and Treatment" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Puberty Counseling" } },
                ],
            },
            {
                "@type": "OfferCatalog",
                name: "Wellness Services",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTest", name: "Pap Smear and Cervical Screening" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Cervical Cancer Vaccination (HPV)" } },
                    { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Menopausal Hormone Therapy" } },
                ],
            },
        ],
    },
};

export default function ServicesPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            <AllServices />
        </main>
    );
}
