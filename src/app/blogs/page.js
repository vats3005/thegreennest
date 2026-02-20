import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import styles from "./page.module.css";

export const metadata = {
    title: "Blogs | The Green Nest",
    description:
        "Read expert insights on fertility, women's health, and wellness from Dr. Shilpi Srivastava and The Green Nest team.",
};

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <div className={styles.container}>
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
