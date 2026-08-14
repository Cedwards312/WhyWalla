import { Link } from "react-router-dom";
import HeroSmall from "../components/shared/HeroSmall";
import { format } from "date-fns";
import { getPublishedPosts } from "@/lib/blogPosts";

export default function Blog() {
  const posts = getPublishedPosts();

  return (
    <>
      <HeroSmall
        pill="Clinic growth intelligence"
        headline='The blog that<br><span class="text-teal">earns your time.</span>'
        subheadline="Supply chain strategy, inventory best practices, regulatory updates, and operational intelligence for wellness clinic owners and practice managers."
      />

      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white border border-walla-border rounded-[10px] overflow-hidden no-underline hover:border-teal transition-colors"
              >
                <div className="bg-deep p-5 min-h-[82px] flex items-end">
                  <span className="text-[0.67rem] font-medium text-teal tracking-[0.09em] uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display font-bold text-[0.95rem] text-deep leading-[1.35] mb-2 tracking-tight">
                    {post.title}
                  </div>
                  <div className="text-[0.8rem] text-walla-muted leading-[1.65] font-light">
                    {post.excerpt}
                  </div>
                  <div className="text-[0.72rem] text-walla-muted/50 mt-3">
                    {post.publish_date ? format(new Date(post.publish_date), "MMMM yyyy") : ""} · {post.read_time_minutes} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
