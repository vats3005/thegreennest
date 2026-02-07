import InfertilityProcess from "@/components/InfertilityProcess";
import TreatmentOptions from "@/components/TreatmentOptions";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Understanding Infertility | The Green Nest",
    description: "Educational resources on infertility causes and treatments.",
};

export default function InfertilityPage() {
    return (
        <div className={styles.pageWrapper}>
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
