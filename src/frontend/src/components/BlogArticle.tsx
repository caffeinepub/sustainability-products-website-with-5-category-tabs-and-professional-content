import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { type BlogPost, blogContent } from "../content/blogContent";

interface BlogArticleProps {
  postId: string;
  onBack: () => void;
}

const categoryColors: Record<string, string> = {
  "Circular Economy": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Water Security": "bg-blue-100 text-blue-800 border-blue-200",
  "Renewable Energy": "bg-amber-100 text-amber-800 border-amber-200",
  "Smart Cities": "bg-violet-100 text-violet-800 border-violet-200",
  "Sustainable Construction": "bg-teal-100 text-teal-800 border-teal-200",
};

export function BlogArticle({ postId, onBack }: BlogArticleProps) {
  const post: BlogPost | undefined = blogContent.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-4 text-primary hover:underline"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const colorClass =
    categoryColors[post.category] ||
    "bg-primary/10 text-primary border-primary/20";

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-8 md:py-12"
      data-ocid="blog.panel"
    >
      {/* Back button */}
      <div className="container mx-auto px-4 mb-6">
        <button
          type="button"
          data-ocid="blog.secondary_button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </button>
      </div>

      {/* Hero image */}
      <div className="w-full max-h-96 overflow-hidden mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover max-h-96"
        />
      </div>

      {/* Article header */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorClass}`}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium border-l-4 border-primary pl-5 italic">
            {post.excerpt}
          </p>

          {/* Article body */}
          <div className="space-y-10">
            {post.body.map((section) => (
              <motion.section
                key={section.heading ?? section.paragraphs[0].slice(0, 40)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((para) => (
                    <p
                      key={para.slice(0, 60)}
                      className="text-base text-foreground/80 leading-[1.85] tracking-wide"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-14 pt-8 border-t border-border">
            <button
              type="button"
              data-ocid="blog.secondary_button"
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
