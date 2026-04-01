import { newsletterContent } from "../content/newsletterContent";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface NewsletterSectionProps {
  onSelectNewsletter: (id: string) => void;
}

export function NewsletterSection({
  onSelectNewsletter,
}: NewsletterSectionProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-white inline-block" />
            Monthly Newsletter
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Global Energy and Environmental Engineering Services Newsletter
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Insights, Updates &amp; Solutions from the forefront of sustainable
            development in the Middle East and beyond.
          </p>
        </div>
      </div>

      {/* Newsletter Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletterContent.map((newsletter) => (
            <div
              key={newsletter.id}
              className="bg-background rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col cursor-pointer"
              onClick={() => onSelectNewsletter(newsletter.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  onSelectNewsletter(newsletter.id);
              }}
            >
              {/* Card Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={newsletter.heroImage}
                  alt={newsletter.subject}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
                    Issue #{String(newsletter.issueNumber).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {newsletter.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {newsletter.date}
                  </span>
                </div>

                <h2 className="text-base font-semibold leading-snug mb-2 line-clamp-2">
                  {newsletter.subject}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1 mb-4">
                  {newsletter.excerpt}
                </p>

                <Button
                  size="sm"
                  className="w-full mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectNewsletter(newsletter.id);
                  }}
                >
                  Read Issue
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
