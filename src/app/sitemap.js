import { getAllSlugs } from "@/lib/blog";

const SITE_URL = "https://thegreennest.vercel.app";

export default function sitemap() {
    const blogSlugs = getAllSlugs();

    const staticPages = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/meet-dr-shilpi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/infertility`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];

    const blogPages = blogSlugs.map((slug) => ({
        url: `${SITE_URL}/blogs/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
