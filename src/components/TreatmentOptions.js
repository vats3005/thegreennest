import styles from "./TreatmentOptions.module.css";

export default function TreatmentOptions() {
    const treatments = [
        {
            title: "Ovulation Induction (O.I)",
            description: "Medication-based treatment to stimulate egg production for natural conception or assisted reproduction."
        },
        {
            title: "Intrauterine Insemination (IUI)",
            description: "Placing specially prepared sperm directly into the uterus during ovulation."
        },
        {
            title: "In-Vitro Fertilization (IVF)",
            description: "Advanced fertility treatment where eggs are fertilized outside the body."
        },
        {
            title: "ICSI",
            description: "Specialized IVF technique for male factor infertility with direct sperm injection."
        },
        {
            title: "Male Infertility Treatment",
            description: "Comprehensive evaluation and treatment for male factor infertility."
        },
        {
            title: "Advanced Options",
            description: "Egg donation, surrogacy guidance, and embryo freezing services."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Treatment Options</h2>
                <div className={styles.grid}>
                    {treatments.map((treatment, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{treatment.title}</h3>
                            <p className={styles.cardDescription}>{treatment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
