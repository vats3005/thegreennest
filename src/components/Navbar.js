"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

// Using a placeholder for logo if image not available, user can replace later
const LogoPlaceholder = () => (
    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        THE <span style={{ color: "var(--primary-green)" }}>Green</span> NEST
    </span>
);

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

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Meet Dr. Shilpi", href: "/meet-dr-shilpi" },
        { name: "Infertility", href: "/infertility" },
        { name: "Services", href: "/services" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    {/* If actual logo image is available, replace this */}
                    <LogoPlaceholder />
                </Link>

                {/* Desktop Links */}
                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
