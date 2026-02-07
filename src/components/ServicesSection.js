import Link from "next/link";
import styles from "./ServicesSection.module.css";

// SVG Icons based on the image provided
const HeartIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const UserIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <div clipPath="circle(50% at 50% 50%)"><circle cx="12" cy="7" r="4"></circle></div>
    </svg>
);

// Simplifying icons for direct embedding if needed, or using standards.
// Let's use simpler standard shapes that look like the image.
// Image 1: Heart-ish shape. 
// Image 2: Person icon.
// Image 3: Ribbon/Badge.

const Icons = {
    General: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.28 3.6-1.28 5.14 0 .34.66-.41 1.77-1.14 1.77H5c-1 0-1.5-1-1.5-1.77C5.07 12.72 7.18 12.72 8.67 14c1 .86 2.33 1 3.33 1s2.33-.14 3.33-1z"></path>
            {/* Retrying a proper heart icon for General Gynecology */}
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    ),
    Pregnancy: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    Infertility: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
    ),
    Arrow: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    )
};

export default function ServicesSection() {
    const services = [
        {
            title: "General Gynecology",
            description: "Treating irregular periods, white discharge, fibroids, endometriosis, and prolapse uterus.",
            icon: <Icons.General />
        },
        {
            title: "Pregnancy Care",
            description: "Comprehensive antenatal checkups, dietary advice, and high-risk pregnancy management.",
            icon: <Icons.Pregnancy />
        },
        {
            title: "Infertility Treatment",
            description: "Advanced treatments including IUI, IVF, ICSI, and personalized fertility solutions.",
            icon: <Icons.Infertility />
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>Comprehensive women's healthcare under one roof</p>
                </div>

                <div className={styles.cardsGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>

                <Link href="/services" className={styles.viewAllButton}>
                    View All Services
                    <span className={styles.arrowIcon}><Icons.Arrow /></span>
                </Link>
            </div>
        </section>
    );
}
