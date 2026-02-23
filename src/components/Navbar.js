"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const leftLinks = [
        { name: "Home", href: "/" },
        { name: "Infertility", href: "/infertility" },
        { name: "Services", href: "/services" },
    ];

    const rightLinks = [
        { name: "Meet Dr. Shilpi", href: "/meet-dr-shilpi" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    const allLinks = [...leftLinks, ...rightLinks];

    return (
        <nav className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>

                {/* Desktop Left Links */}
                <div className={styles.leftLinks}>
                    {leftLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Centered Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>THE GREEN NEST</span>
                </Link>

                {/* Desktop Right Links & CTA */}
                <div className={styles.rightLinks}>
                    {rightLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.ctaButton}>
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
                <div className={styles.mobileLinks}>
                    {allLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.mobileCtaBtn} onClick={() => setIsOpen(false)}>
                        Book Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}
