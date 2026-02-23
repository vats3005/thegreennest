import styles from "./InfertilityProcess.module.css";
import DecorativeShapes from "./DecorativeShapes";

export default function InfertilityProcess() {
    const steps = [
        {
            number: "1",
            title: "Initial Consultation",
            description: "Comprehensive evaluation of both partners, medical history review, and discussion of concerns."
        },
        {
            number: "2",
            title: "Diagnosis & Planning",
            description: "Complete investigations to identify issues and create a personalized treatment plan."
        },
        {
            number: "3",
            title: "Treatment & Support",
            description: "Implementation of treatment with continuous monitoring and emotional support."
        }
    ];

    return (
        <section className={styles.section}>
            <DecorativeShapes variant="E" />
            <div className={styles.container}>
                <h2 className={styles.title}>Your Journey to Parenthood</h2>
                <p className={styles.subtitle}>
                    We understand that infertility can be emotionally challenging. Our team provides
                    comprehensive support throughout your journey.
                </p>

                <div className={styles.processGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.number}>{step.number}</div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
