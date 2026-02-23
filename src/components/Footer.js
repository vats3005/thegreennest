import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.column}>
                    <h3 className={styles.brandName}>THE GREEN NEST</h3>
                    <p className={styles.tagline}>
                        Compassionate care for every stage of your journey.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/meet-dr-shilpi">Meet Dr. Shilpi</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Services</h4>
                    <ul>
                        <li><Link href="/infertility">Infertility Treatments</Link></li>
                        <li><Link href="/services">Wellness Checkups</Link></li>
                        <li><Link href="/services">Counseling</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <a href="tel:+917888368297">+91 7888368297</a>
                        </li>
                        <li>
                            <a href="mailto:thegreennest6@gmail.com">thegreennest6@gmail.com</a>
                        </li>
                        <li>SCO 49, Phase 6, Mohali</li>
                        <li>Punjab, India</li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} The Green Nest. All rights reserved.
            </div>
        </footer>
    );
}
