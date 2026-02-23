import styles from "./AllServices.module.css";
import DecorativeShapes from "./DecorativeShapes";

export default function AllServices() {
    const servicesData = [
        {
            title: "Infertility Treatment",
            subtitle: "Advanced fertility solutions to help you achieve parenthood",
            items: [
                "Ovulation Induction (O.I) and monitoring",
                "Intrauterine Insemination (IUI)",
                "In-Vitro Fertilization (IVF)",
                "ICSI for male factor infertility",
                "Comprehensive fertility evaluation"
            ]
        },
        {
            title: "General Gynecology",
            subtitle: "Comprehensive care for all gynecological concerns",
            items: [
                "Treatment for irregular periods and menstrual disorders",
                "Management of white discharge and infections",
                "Fibroids and cyst treatment",
                "Endometriosis management",
                "Prolapse uterus treatment"
            ]
        },
        {
            title: "Adolescent Health",
            subtitle: "Specialized care for young women's health",
            items: [
                "Puberty counseling and education",
                "Menstrual hygiene guidance",
                "PCOD management and treatment",
                "Nutritional counseling for adolescents"
            ]
        },
        {
            title: "Pregnancy Care (ANC)",
            subtitle: "Complete antenatal care for a healthy pregnancy",
            items: [
                "Regular antenatal checkups and monitoring",
                "Dietary advice and nutrition planning"
            ]
        },
        {
            title: "Wellness Services",
            subtitle: "Preventive care and health maintenance",
            items: [
                "Pap Smear and cervical screening",
                "Cervical Cancer Vaccination (HPV)",
                "Menopausal clinic and hormone therapy",
                "Contraception advice and family planning"
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <DecorativeShapes variant="C" />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Our Services</h1>
                    <p className={styles.subtitle}>Comprehensive women's healthcare tailored to your unique journey.</p>
                </div>

                <div className={styles.servicesGrid}>
                    {servicesData.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardSubtitle}>{service.subtitle}</p>
                            </div>
                            <ul className={styles.serviceList}>
                                {service.items.map((item, idx) => (
                                    <li key={idx} className={styles.serviceItem}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
