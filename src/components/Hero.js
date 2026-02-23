"use client";
import Link from "next/link";
import ScrollVideo from "./ScrollVideo";
import styles from "./Hero.module.css";
console.log('Hero component loaded');

export default function Hero() {
    return (
        <section className={styles.heroWrapper}>
            {/* 
        The video file is expected at /public/hero-video.mp4 
        The user must place it there.
      */}
            <ScrollVideo src="/hero-video.mp4">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>The Green Nest</h1>
                    <p className={styles.subtitle}>Premium Gynaecology & Infertility Clinic in Mohali</p>
                    <p className={styles.tagline}>Where Life Begins with Care & Compassion</p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Book an Appointment
                    </Link>
                </div>
            </ScrollVideo>
        </section>
    );
}
