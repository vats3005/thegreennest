import Image from "next/image";
import styles from "./page.module.css";

export default function MeetDrShilpi() {
    return (
        <div className={styles.container}>
            <section className={styles.profileSection}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/dr-shilpi.jpg" // Ensure this file exists in public/
                        alt="Dr. Shilpi Srivastava"
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
