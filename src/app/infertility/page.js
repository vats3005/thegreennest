import InfertilityProcess from "@/components/InfertilityProcess";
import TreatmentOptions from "@/components/TreatmentOptions";
import Link from "next/link";
import styles from "./page.module.css";

const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
    title: "Infertility Treatment in Mohali – IVF, ICSI, IUI",
    description:
        "Learn about infertility causes and advanced fertility treatments available at The Green Nest, Mohali. Expert IVF, ICSI, IUI treatment by Dr. Shilpi Srivastava for couples in Chandigarh Tricity.",
    alternates: {
        canonical: `${SITE_URL}/infertility`,
    },
    openGraph: {
        title: "Infertility Treatment in Mohali – IVF, ICSI, IUI | The Green Nest",
        description:
            "Expert infertility care in Mohali by Dr. Shilpi Srivastava. Advanced IVF, ICSI, IUI treatments with personalized fertility solutions for couples across Chandigarh Tricity.",
        url: `${SITE_URL}/infertility`,
        images: [{ url: "/dr-shilpi.jpg", alt: "Infertility treatment at The Green Nest, Mohali" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Infertility Treatment in Mohali – IVF, ICSI, IUI",
        description:
            "Advanced fertility treatments at The Green Nest. Personalized care by Dr. Shilpi Srivastava.",
        images: ["/dr-shilpi.jpg"],
    },
};

const infertilityJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Infertility Treatment in Mohali",
    url: `${SITE_URL}/infertility`,
    description:
        "Comprehensive information on infertility causes and advanced fertility treatments including IVF, ICSI, and IUI available at The Green Nest, Mohali.",
    mainEntity: {
        "@type": "MedicalCondition",
        name: "Infertility",
        alternateName: ["Male Factor Infertility", "Female Factor Infertility"],
        associatedAnatomy: {
            "@type": "AnatomicalStructure",
            name: "Reproductive System",
        },
        possibleTreatment: [
            { "@type": "MedicalTherapy", name: "Ovulation Induction (OI)" },
            { "@type": "MedicalTherapy", name: "Intrauterine Insemination (IUI)" },
            { "@type": "MedicalTherapy", name: "In Vitro Fertilization (IVF)" },
            { "@type": "MedicalTherapy", name: "Intracytoplasmic Sperm Injection (ICSI)" },
        ],
        riskFactor: [
            { "@type": "MedicalRiskFactor", name: "PCOS / Ovulation Disorders" },
            { "@type": "MedicalRiskFactor", name: "Blocked Fallopian Tubes" },
            { "@type": "MedicalRiskFactor", name: "Endometriosis" },
            { "@type": "MedicalRiskFactor", name: "Low Sperm Count" },
            { "@type": "MedicalRiskFactor", name: "Age-related Factors" },
        ],
    },
    specialty: {
        "@type": "MedicalSpecialty",
        name: "Reproductive Endocrinology",
    },
    lastReviewed: "2026-02-22",
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is infertility?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Infertility is defined as the inability to conceive after one year of regular, unprotected intercourse (or six months if the woman is over 35). It can be caused by male factors, female factors, or a combination of both. Common causes include ovulation disorders like PCOS, blocked fallopian tubes, endometriosis, low sperm count, and age-related factors.",
            },
        },
        {
            "@type": "Question",
            name: "What is IVF and how does it work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In Vitro Fertilization (IVF) is an advanced fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryo is then transferred to the uterus. IVF is recommended for blocked fallopian tubes, severe endometriosis, unexplained infertility, and cases where other treatments haven't succeeded.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between IVF and ICSI?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both IVF and ICSI are fertility treatments. In traditional IVF, sperm and eggs are placed together in a dish to fertilize naturally. In ICSI (Intracytoplasmic Sperm Injection), a single healthy sperm is directly injected into the egg. ICSI is primarily recommended for severe male factor infertility, low sperm count, poor sperm motility, or previous IVF failures.",
            },
        },
        {
            "@type": "Question",
            name: "What is IUI treatment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Intrauterine Insemination (IUI) is a fertility treatment where specially prepared, concentrated sperm is placed directly into the uterus during ovulation. It is often recommended as a first-line treatment for mild male factor infertility, unexplained infertility, or when cervical factors are involved.",
            },
        },
        {
            "@type": "Question",
            name: "What are the common causes of female infertility?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Common causes of female infertility include ovulation disorders such as PCOS (Polycystic Ovary Syndrome), blocked or damaged fallopian tubes, endometriosis, uterine fibroids, age-related decline in egg quality and quantity, and hormonal imbalances. A comprehensive fertility evaluation can help identify the specific cause.",
            },
        },
        {
            "@type": "Question",
            name: "Can low sperm count be treated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, low sperm count (oligospermia) is highly treatable. Treatment options range from lifestyle modifications and medications to assisted reproductive techniques like IUI for mild cases, and IVF with ICSI for moderate to severe cases. In rare cases of azoospermia, advanced sperm retrieval techniques like TESE or PESA can be used.",
            },
        },
        {
            "@type": "Question",
            name: "What is the first step in infertility treatment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The first step is a comprehensive initial consultation where both partners undergo a thorough evaluation including medical history review, physical examination, and diagnostic tests. This is followed by a diagnosis and personalized treatment plan designed specifically for your situation.",
            },
        },
        {
            "@type": "Question",
            name: "What fertility treatments are available at The Green Nest in Mohali?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Green Nest in Mohali offers a full range of fertility treatments including Ovulation Induction (OI), Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), ICSI for male factor infertility, male infertility evaluation and treatment, as well as advanced options like egg donation guidance, surrogacy guidance, and embryo freezing services.",
            },
        },
    ],
};

export default function InfertilityPage() {
    return (
        <div className={styles.pageWrapper}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(infertilityJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <h1 className={styles.mainTitle}>The Infertility Wing</h1>
                    <div className={styles.introText}>
                        <p style={{ marginBottom: "20px" }}>
                            A dedicated center for couples struggling to conceive, offering hope,
                            compassion, and cutting-edge fertility treatments.
                        </p>
                        <p style={{ marginBottom: "40px" }}>
                            With advanced technology, personalized care, and years of expertise, we
                            help turn dreams of parenthood into reality.
                        </p>
                    </div>
                    <Link href="/contact" className={styles.ctaButton}>
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

            <InfertilityProcess />

            <section className={styles.commonCauses}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Common Causes</h2>
                    <div className={styles.causesGrid}>
                        <div className={styles.causeCard}>
                            <h3>Male Factors</h3>
                            <ul>
                                <li>Low sperm count</li>
                                <li>Low motility</li>
                                <li>Hormonal imbalances</li>
                            </ul>
                        </div>
                        <div className={styles.causeCard}>
                            <h3>Female Factors</h3>
                            <ul>
                                <li>Ovulation disorders (PCOS)</li>
                                <li>Blocked fallopian tubes</li>
                                <li>Endometriosis</li>
                                <li>Age-related factors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <TreatmentOptions />
        </div>
    );
}
