"use client";
import styles from "./WhatsAppButton.module.css";

// Clinic WhatsApp number in international format (no +, no spaces)
const WHATSAPP_NUMBER = "917888368297";
const DEFAULT_MESSAGE =
    "Hi, I found The Green Nest online and would like to book a consultation with Dr. Shilpi.";

export default function WhatsAppButton() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    return (
        <a
            href={href}
            className={styles.fab}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with The Green Nest on WhatsApp"
        >
            <svg
                viewBox="0 0 32 32"
                width="30"
                height="30"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M16.04 4C9.42 4 4.04 9.38 4.04 16c0 2.1.55 4.15 1.6 5.96L4 28l6.2-1.62a11.93 11.93 0 0 0 5.84 1.5h.01c6.62 0 12-5.38 12-12s-5.39-12-12.01-12zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.91a9.82 9.82 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.9 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
            </svg>
            <span className={styles.label}>WhatsApp</span>
        </a>
    );
}
