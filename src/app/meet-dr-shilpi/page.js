import Image from "next/image";
import styles from "./page.module.css";

const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
    title: "Dr. Shilpi Srivastava – Fertility Specialist & Gynaecologist in Mohali",
    description:
        "Meet Dr. Shilpi Srivastava, a leading fertility specialist and gynaecologist with 24+ years of experience at The Green Nest, Mohali. MBBS, DGO, Fellowship in Reproductive Medicine.",
    alternates: {
        canonical: `${SITE_URL}/meet-dr-shilpi`,
    },
    openGraph: {
        title: "Dr. Shilpi Srivastava – Fertility Specialist & Gynaecologist in Mohali",
        description:
            "Meet Dr. Shilpi Srivastava, a leading fertility specialist with 24+ years of experience. MBBS, DGO, Fellowship in Reproductive Medicine at The Green Nest, Mohali.",
        url: `${SITE_URL}/meet-dr-shilpi`,
        images: [
            {
                url: "/dr-shilpi.jpg",
                width: 500,
                height: 600,
                alt: "Dr. Shilpi Srivastava – Fertility Specialist at The Green Nest",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dr. Shilpi Srivastava – Fertility Specialist in Mohali",
        description:
            "24+ years of experience in women's health and infertility treatment. MBBS, DGO, Fellowship in Reproductive Medicine.",
        images: ["/dr-shilpi.jpg"],
    },
};

const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
        "@type": "Physician",
        name: "Dr. Shilpi Srivastava",
        image: `${SITE_URL}/dr-shilpi.jpg`,
        url: `${SITE_URL}/meet-dr-shilpi`,
        description:
            "Dr. Shilpi Srivastava is a Fertility Specialist & Gynaecologist with over 24 years of clinical experience. She heads The Green Nest clinic in Mohali.",
        medicalSpecialty: ["Obstetrics and Gynecology", "Reproductive Endocrinology"],
        qualifications: "MBBS, DGO (Seth GS Medical College Mumbai), Fellowship in Reproductive Medicine (DY Patil University)",
        hasCredential: [
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                educationalLevel: "MBBS",
                recognizedBy: { "@type": "Organization", name: "RNT Medical College, Udaipur" },
            },
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "diploma",
                educationalLevel: "DGO",
                recognizedBy: { "@type": "Organization", name: "Seth GS Medical College, Mumbai" },
            },
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "fellowship",
                educationalLevel: "Fellowship in Reproductive Medicine",
                recognizedBy: { "@type": "Organization", name: "DY Patil University, Navi Mumbai" },
            },
        ],
        worksFor: {
            "@type": "MedicalClinic",
            name: "The Green Nest",
            url: SITE_URL,
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "SCO 49, Phase 6",
            addressLocality: "Mohali",
            addressRegion: "Punjab",
            addressCountry: "IN",
        },
        telephone: "+917888368297",
        availableService: [
            { "@type": "MedicalTherapy", name: "IVF (In Vitro Fertilization)" },
            { "@type": "MedicalTherapy", name: "ICSI" },
            { "@type": "MedicalTherapy", name: "IUI (Intrauterine Insemination)" },
            { "@type": "MedicalProcedure", name: "Infertility Counseling" },
            { "@type": "MedicalProcedure", name: "General Gynecology" },
            { "@type": "MedicalProcedure", name: "Pregnancy Care" },
        ],
    },
};

export default function MeetDrShilpi() {
    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
            />
            <section className={styles.profileSection}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/dr-shilpi.jpg"
                        alt="Dr. Shilpi Srivastava – Fertility Specialist & Gynaecologist at The Green Nest, Mohali"
                        width={500}
                        height={600}
                        className={styles.profileImage}
                        priority
                    />
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.header}>
                        <h1 className={styles.name}>Dr. Shilpi Srivastava</h1>
                        <p className={styles.designation}>Fertility Specialist & Gynaecologist</p>
                    </div>

                    <div className={styles.bio}>
                        <p style={{ marginBottom: "20px" }}>
                            Dr. Shilpi Srivastava completed her M.B.B.S. from RNT Medical College, Udaipur following which she obtained a Diploma in Gynaecology and Obstetrics from the prestigious Seth GS Medical College, Mumbai. After completing her Senior Residency from BJRM Hospital, New Delhi, she did her fellowship in Reproductive Medicine from DY Patil University, Navi Mumbai with postings at D.Y. Patil and Leelawati Hospital.
                        </p>
                        <p style={{ marginBottom: "20px" }}>
                            In all her academic endeavours, Dr. Srivastava has ranked at the top of her batch. She has also been associated with KEM, Wadia and Cooper Hospital and has worked with renowned Dr. Hrishikesh Pai and Dr. Nandita Palshetkar.
                        </p>
                        <p>
                            With an experience of 24+ years, Dr. Srivastava has been helping women achieve good health and wellness using the most effective techniques in the field. Her speciality is in counseling of infertile couples.
                        </p>
                    </div>

                    <div className={styles.credentialsGrid}>
                        <div className={styles.credentialCard}>
                            <div className={styles.credentialTitle}>M.B.B.S.</div>
                            <div className={styles.credentialText}>RNT Medical College, Udaipur</div>
                        </div>
                        <div className={styles.credentialCard}>
                            <div className={styles.credentialTitle}>D.G.O (Diploma)</div>
                            <div className={styles.credentialText}>Seth GS Medical College, Mumbai</div>
                        </div>
                        <div className={styles.credentialCard}>
                            <div className={styles.credentialTitle}>Fellowship</div>
                            <div className={styles.credentialText}>Reproductive Medicine, DY Patil University</div>
                        </div>
                        <div className={styles.credentialCard}>
                            <div className={styles.credentialTitle}>Experience</div>
                            <div className={styles.credentialText}>24+ Years of Clinical Excellence</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
