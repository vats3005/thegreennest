import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const SITE_URL = "https://thegreennest.vercel.app";

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Dynamic SEO metadata per blog post
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return { title: "Post Not Found | The Green Nest" };
    }
    return {
        title: `${post.title}`,
        description: post.excerpt,
        alternates: {
            canonical: `${SITE_URL}/blogs/${slug}`,
        },
        openGraph: {
            type: "article",
            title: `${post.title} | The Green Nest Blog`,
            description: post.excerpt,
            url: `${SITE_URL}/blogs/${slug}`,
            siteName: "The Green Nest",
            images: [
                {
                    url: "/dr-shilpi.jpg",
                    alt: post.title,
                },
            ],
            article: {
                publishedTime: post.date,
                authors: [post.author],
                section: post.category,
            },
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: ["/dr-shilpi.jpg"],
        },
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const blogPostJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        url: `${SITE_URL}/blogs/${slug}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blogs/${slug}`,
        },
        author: {
            "@type": "Physician",
            name: post.author,
            url: `${SITE_URL}/meet-dr-shilpi`,
            worksFor: {
                "@type": "MedicalClinic",
                name: "The Green Nest",
                url: SITE_URL,
            },
        },
        publisher: {
            "@type": "MedicalClinic",
            name: "The Green Nest",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/dr-shilpi.jpg`,
            },
        },
        articleSection: post.category,
        wordCount: post.content ? post.content.split(/\s+/).length : undefined,
        inLanguage: "en-IN",
    };

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
            />
            {/* Back Link */}
            <Link href="/blogs" className={styles.backLink}>
                ← Back to Blogs
            </Link>

            <article className={styles.article}>
                {/* Article Header */}
                <header className={styles.articleHeader}>
                    <div className={styles.meta}>
                        <span className={styles.category}>{post.category}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.readTime}>
                            {post.readTime} min read
                        </span>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.authorRow}>
                        <span className={styles.author}>{post.author}</span>
                        <span className={styles.date}>{formattedDate}</span>
                    </div>
                </header>

                {/* Article Content */}
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Bottom CTA */}
            <div className={styles.cta}>
                <p className={styles.ctaText}>
                    Have questions? We&apos;re here to help.
                </p>
                <Link href="/contact" className={styles.ctaButton}>
                    Book a Consultation
                </Link>
            </div>
        </div>
    );
}
