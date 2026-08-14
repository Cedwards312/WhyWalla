import yaml from "js-yaml";

const files = import.meta.glob("/content/blog/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
});

function parseFrontmatter(raw) {
	const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
	if (!match) return { data: {}, content: raw };
	return { data: yaml.load(match[1]) || {}, content: match[2] };
}

const allPosts = Object.entries(files)
	.map(([path, raw]) => {
		const id = path.split("/").pop().replace(/\.md$/, "");
		const { data, content } = parseFrontmatter(raw);
		return { id, ...data, body: content.trim() };
	})
	.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));

export const getPublishedPosts = () => allPosts.filter((p) => p.published);
export const getPostById = (id) => allPosts.find((p) => p.id === id);
