import styles from "./Mission.module.css";

export default function Mission() {
    const stats = [
        { number: "24+", label: "Years of Experience" },
        { number: "5000+", label: "Happy Patients" },
        { number: "95%", label: "Success Rate" },
        { number: "24/7", label: "Support Available" },
    ];

    return (
        <section className={styles.missionSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Mission</h2>
                <p className={styles.description}>
                    We believe each woman is unique. Our mission is to provide a safe,
                    welcoming environment combined with medical expertise to help you
                    achieve optimal health and wellness at every stage of your journey.
                </p>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
