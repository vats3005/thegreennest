"use client";
import { useState } from "react";
import styles from "./page.module.css";

const SITE_URL = "https://thegreennest.vercel.app";

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact The Green Nest",
    url: `${SITE_URL}/contact`,
    mainEntity: {
        "@type": "MedicalClinic",
        name: "The Green Nest",
        url: SITE_URL,
        telephone: "+917888368297",
        email: "thegreennest6@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "SCO 49, Phase 6",
            addressLocality: "Mohali",
            addressRegion: "Punjab",
            postalCode: "160055",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 30.7046,
            longitude: 76.7026,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
            },
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+917888368297",
            contactType: "Appointments",
            availableLanguage: ["English", "Hindi"],
        },
    },
};

// Icons (Simple SVGs)
const MapPin = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const Phone = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const Clock = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

export default function ContactPage() {
    // START: Web3Forms Integration Logic
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setResult("Sending...");

        const formData = new FormData(event.target);

        // You need to replace this with your actual Web3Forms Access Key
        // Get one for free at https://web3forms.com/
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
                setStatus("success");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission Error", error);
            setResult("Something went wrong. Please try again.");
            setStatus("error");
        }
    };
    // END: Web3Forms Integration Logic

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            <div className={styles.header}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    We're here to help you on your journey to wellness. Reach out to us through any of the following channels.
                </p>
            </div>

            <div className={styles.grid}>
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}><MapPin /></div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>SCO 49, Phase 6, Mohali</p>
                            <p>Punjab, India</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}><Phone /></div>
                        <div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+917888368297" className={styles.phoneLink}>+91 7888368297</a></p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}><Clock /></div>
                        <div>
                            <h3>Clinic Hours</h3>
                            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Book an Appointment</h2>
                    <form onSubmit={onSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" className={styles.input} placeholder="Enter your name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone">Phone Number</label>
                            <input type="tel" name="phone" id="phone" className={styles.input} placeholder="Enter your phone number" required />
                        </div>

                        {/* NEW: Date and Time Fields */}
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="date">Preferred Date</label>
                                <input type="date" name="date" id="date" className={styles.input} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="time">Preferred Time</label>
                                <input type="time" name="time" id="time" className={styles.input} required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" className={styles.input} placeholder="Enter your email" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea name="message" id="message" className={styles.textarea} placeholder="How can we help you?"></textarea>
                        </div>

                        {/* Honeypot for spam protection */}
                        <input type="checkbox" name="botcheck" className={styles.hidden} style={{ display: 'none' }}></input>

                        <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>

                        {/* Result Message */}
                        {result && (
                            <p className={`${styles.resultMessage} ${status === "success" ? styles.success : styles.error}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13715.352601968858!2d76.70259850000001!3d30.7046485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8db9f1a0e1%3A0x704e6c271b12b5!2sPhase%206%2C%20Mohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}
