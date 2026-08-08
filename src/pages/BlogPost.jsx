import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = window.location.pathname.split("/blog/")[1];

  const { data: post, isLoading } = useQuery({
    queryKey: ["blogPost", postId],
    queryFn: async () => {
      const posts = await base44.entities.BlogPost.filter({ id: postId });
      return posts[0];
    },
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen px-5 py-20">
        <div className="max-w-[680px] mx-auto text-center">
          <h1 className="font-display font-bold text-2xl text-deep mb-4">Post not found</h1>
          <Link to="/blog" className="text-teal text-sm hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-deep px-5 pt-16 pb-12">
        <div className="max-w-[680px] mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-white/40 text-[0.8rem] mb-6 no-underline hover:text-white/60 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
          </Link>
          <span className="block text-[0.67rem] font-medium text-teal tracking-[0.09em] uppercase mb-4">
            {post.category}
          </span>
          <h1 className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {post.title}
          </h1>
          <p className="text-[0.88rem] text-white/50 font-light">
            {post.publish_date ? format(new Date(post.publish_date), "MMMM d, yyyy") : ""} · {post.read_time_minutes} min read
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="max-w-[680px] mx-auto">
          <div className="prose prose-sm max-w-none text-walla-text font-light leading-[1.85]">
            <ReactMarkdown>{post.body || post.excerpt}</ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}