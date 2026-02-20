import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

/**
 * Get all blog posts sorted by date (newest first).
 * Returns frontmatter + slug for each post.
 */
export function getAllPosts() {
    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".md"));

    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Estimate read time (~200 words per minute)
        const wordCount = fileContents.split(/\s+/).length;
        const readTime = Math.max(1, Math.ceil(wordCount / 200));

        return {
            slug,
            title: data.title || "Untitled",
            date: data.date || "",
            category: data.category || "General",
            excerpt: data.excerpt || "",
            author: data.author || "The Green Nest",
            coverImage: data.coverImage || "",
            readTime,
        };
    });

    // Sort by date descending
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug. Returns frontmatter + HTML content.
 */
export function getPostBySlug(slug) {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const htmlContent = marked(content);

    const wordCount = content.split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        category: data.category || "General",
        excerpt: data.excerpt || "",
        author: data.author || "The Green Nest",
        coverImage: data.coverImage || "",
        readTime,
        content: htmlContent,
    };
}

/**
 * Get all slugs for generateStaticParams.
 */
export function getAllSlugs() {
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(blogsDirectory)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
}
