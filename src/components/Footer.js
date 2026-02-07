import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.column}>
                    <h3>The Green Nest</h3>
                    <p>Centre for Women</p>
                    <p>Headed by Dr. Shilpi Srivastava</p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/meet-dr-shilpi">Meet Dr. Shilpi</Link></li>
                        <li><Link href="/infertility">Infertility</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <p>123 Green Avenue, Health District</p>
                    <p>New Delhi, India</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Email: info@thegreennest.com</p>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} The Green Nest. All rights reserved.
            </div>
        </footer>
    );
}
