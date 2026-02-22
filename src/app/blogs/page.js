import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import styles from "./page.module.css";

const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
    title: "Fertility & Women's Health Blog",
    description:
        "Read expert insights on fertility, IVF, ICSI, women's health, and wellness from Dr. Shilpi Srivastava and The Green Nest team in Mohali.",
    alternates: {
        canonical: `${SITE_URL}/blogs`,
    },
    openGraph: {
        title: "Fertility & Women's Health Blog | The Green Nest",
        description:
            "Expert articles on fertility treatments, IVF, ICSI, and women's health by Dr. Shilpi Srivastava.",
        url: `${SITE_URL}/blogs`,
        images: [{ url: "/dr-shilpi.jpg", alt: "The Green Nest Health Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fertility & Women's Health Blog | The Green Nest",
        description:
            "Expert insights on fertility, IVF, and women's health from Dr. Shilpi Srivastava.",
        images: ["/dr-shilpi.jpg"],
    },
};

export default function BlogsPage() {
    const posts = getAllPosts();

    const collectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "The Green Nest Blog",
        url: `${SITE_URL}/blogs`,
        description:
            "Expert insights on fertility, women's health, and wellness from Dr. Shilpi Srivastava.",
        publisher: {
            "@type": "MedicalClinic",
            name: "The Green Nest",
            url: SITE_URL,
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${SITE_URL}/blogs/${post.slug}`,
                name: post.title,
            })),
        },
    };

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />
            {/* Page Header */}
            <section className={styles.header}>
                <h1 className={styles.title}>Our Blog</h1>
                <p className={styles.subtitle}>
                    Expert insights on fertility, women&apos;s health, and your
                    wellness journey
                </p>
            </section>

            {/* Blog Grid */}
            {posts.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>No blog posts yet. Check back soon!</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blogs/${post.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.cardMeta}>
                                    <span className={styles.category}>
                                        {post.category}
                                    </span>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.readTime}>
                                        {post.readTime} min read
                                    </span>
                                </div>
                                <h2 className={styles.cardTitle}>
                                    {post.title}
                                </h2>
                                <p className={styles.cardExcerpt}>
                                    {post.excerpt}
                                </p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.author}>
                                        {post.author}
                                    </span>
                                    <span className={styles.date}>
                                        {new Date(
                                            post.date
                                        ).toLocaleDateString("en-IN", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.cardArrow}>→</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
