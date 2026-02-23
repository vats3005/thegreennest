import styles from "./Mission.module.css";
import Image from "next/image";

export default function Mission() {
    return (
        <section className={styles.missionSection}>
            {/* Background Texture/Shapes */}
            <div className={`${styles.blob} ${styles.blobTopLeft}`}></div>
            <div className={`${styles.blob} ${styles.blobTopRight}`}></div>
            <div className={`${styles.blob} ${styles.blobBottomRight}`}></div>
            <div className={`${styles.blob} ${styles.blobBottomLeft}`}></div>

            {/* SVG Leaves for texture */}
            <svg className={styles.leafTopLeft} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50 Q 80 50 150 150 Q 50 120 0 50" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="2" fill="none" />
                <path d="M20 30 Q 100 20 180 100 Q 80 80 20 30" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="2" fill="none" />
                <path d="M-20 80 Q 50 100 100 180 Q 20 150 -20 80" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="2" fill="none" />
            </svg>

            <svg className={styles.leafBottomRight} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 150 Q 120 150 50 50 Q 150 80 200 150" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="2" fill="none" />
                <path d="M180 170 Q 100 180 20 100 Q 120 120 180 170" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="2" fill="none" />
            </svg>

            <div className={styles.container}>
                {/* Top Section: Text only */}
                <div className={styles.topRow}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Our Mission</h2>
                        <p className={styles.description}>
                            We believe each woman is unique. Our mission is to
                            provide a safe, welcoming environment combined with
                            medical expertise to help you achieve optimal health
                            and wellness at every stage of your journey.
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Stats Grid */}
                <div className={styles.statsGrid}>
                    {/* Left Column - Large Card */}
                    <div className={`${styles.statCard} ${styles.cardLarge} ${styles.bgLightGreen}`}>
                        <svg className={styles.cardLeaf1} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20 Q 40 20 80 80 Q 20 60 0 20" stroke="rgba(44, 76, 59, 0.15)" strokeWidth="1.5" fill="none" />
                            <path d="M-10 40 Q 30 30 70 70" stroke="rgba(44, 76, 59, 0.15)" strokeWidth="1.5" fill="none" />
                        </svg>
                        <div className={styles.statNumberLarge}>5000+</div>
                        <div className={styles.statLabel}>Happy Patients</div>
                        <svg className={styles.cardLeaf2} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 80 Q 60 80 20 20 Q 80 40 100 80" stroke="rgba(44, 76, 59, 0.15)" strokeWidth="1.5" fill="none" />
                        </svg>
                    </div>

                    {/* Middle Column - Two Stacked Cards */}
                    <div className={styles.middleColumn}>
                        <div className={`${styles.statCard} ${styles.cardSmall} ${styles.bgBeige}`}>
                            <div className={styles.statNumberMedium}>24+</div>
                            <div className={styles.statLabel}>Years of Experience</div>
                        </div>
                        <div className={`${styles.statCard} ${styles.cardSmall} ${styles.bgLightGreen}`}>
                            <div className={styles.statNumberMedium}>95%</div>
                            <div className={styles.statLabel}>Success Rate</div>
                        </div>
                    </div>

                    {/* Right Column - Tall Card */}
                    <div className={`${styles.statCard} ${styles.cardTall} ${styles.bgBeige}`}>
                        <svg className={styles.cardLeaf3} width="80" height="150" viewBox="0 0 80 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 0 Q 70 50 20 120 Q 0 60 40 0" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="1.5" fill="none" />
                            <path d="M60 20 Q 80 70 40 140" stroke="rgba(44, 76, 59, 0.1)" strokeWidth="1.5" fill="none" />
                        </svg>
                        <div className={styles.statNumberMedium}>24/7</div>
                        <div className={styles.statLabel}>Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
