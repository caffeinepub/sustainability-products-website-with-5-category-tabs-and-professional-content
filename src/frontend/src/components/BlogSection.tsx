import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { type BlogPost, blogContent } from "../content/blogContent";

interface BlogSectionProps {
  onSelectPost: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  "Circular Economy": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Water Security": "bg-blue-100 text-blue-800 border-blue-200",
  "Renewable Energy": "bg-amber-100 text-amber-800 border-amber-200",
  "Smart Cities": "bg-violet-100 text-violet-800 border-violet-200",
  "Sustainable Construction": "bg-teal-100 text-teal-800 border-teal-200",
};

function BlogCard({
  post,
  onSelect,
  index,
}: { post: BlogPost; onSelect: () => void; index: number }) {
  const colorClass =
    categoryColors[post.category] ||
    "bg-primary/10 text-primary border-primary/20";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-ocid={`blog.item.${index + 1}`}
      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${colorClass}`}
        >
          {post.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-3">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
          <button
            type="button"
            data-ocid={`blog.button.${index + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Read Article
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
            GE3S Knowledge Hub
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Sustainability Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert analysis, latest research, and actionable insights on the
            environmental challenges and innovations shaping our planet's
            future.
          </p>
        </motion.div>

        <div
          data-ocid="blog.list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogContent.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              index={i}
              onSelect={() => onSelectPost(post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
