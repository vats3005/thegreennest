import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
    const reasons = [
        {
            title: "Expert Care",
            description: "24+ years of specialized experience in women's health and infertility treatment."
        },
        {
            title: "Personalized Approach",
            description: "Individual attention and customized treatment plans for each patient."
        },
        {
            title: "Advanced Technology",
            description: "State-of-the-art facilities and latest treatment methods."
        },
        {
            title: "Compassionate Environment",
            description: "Safe, welcoming space where you feel heard and supported."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose The Green Nest?</h2>
                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon} /> {/* Green dot icon per design */}
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardDescription}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
