import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import HeroSmall from "../components/shared/HeroSmall";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, "-publish_date"),
  });

  return (
    <>
      <HeroSmall
        pill="Clinic growth intelligence"
        headline='The blog that<br><span class="text-teal">earns your time.</span>'
        subheadline="Supply chain strategy, inventory best practices, regulatory updates, and operational intelligence for wellness clinic owners and practice managers."
      />

      <section className="bg-white px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-cream border border-walla-border rounded-[10px] overflow-hidden animate-pulse">
                  <div className="bg-deep/20 h-20" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-deep/10 rounded w-3/4" />
                    <div className="h-3 bg-deep/5 rounded w-full" />
                    <div className="h-3 bg-deep/5 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </>
  );
}