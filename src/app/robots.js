export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://thegreennest.vercel.app/sitemap.xml",
    };
}
