import { ArrowLeft, Mail } from "lucide-react";
import { newsletterContent } from "../content/newsletterContent";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface NewsletterDetailProps {
  newsletterId: string;
  onBack: () => void;
}

export function NewsletterDetail({
  newsletterId,
  onBack,
}: NewsletterDetailProps) {
  const newsletter = newsletterContent.find((n) => n.id === newsletterId);

  if (!newsletter) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Newsletter not found.</p>
        <Button onClick={onBack} className="mt-4">
          Back to Newsletters
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-8 px-4">
      {/* Back Button */}
      <div className="max-w-2xl mx-auto mb-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Newsletters
        </button>
      </div>

      {/* Email Wrapper */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Masthead / Header Banner */}
        <div className="relative">
          <img
            src="/assets/generated/newsletter-header-banner.dim_1200x300.jpg"
            alt="GE3S Newsletter Header"
            className="w-full object-cover h-36 md:h-44"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="flex items-center gap-2 mb-1">
              <Mail size={14} />
              <span className="text-xs font-medium uppercase tracking-widest opacity-80">
                GE3S Sustainability Newsletter
              </span>
            </div>
            <p className="text-sm font-semibold opacity-90">
              Issue #{String(newsletter.issueNumber).padStart(2, "0")} &mdash;{" "}
              {newsletter.date}
            </p>
          </div>
        </div>

        {/* Email Body */}
        <div className="px-8 py-8">
          {/* Meta Row */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
            <Badge variant="outline" className="text-xs">
              {newsletter.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {newsletter.date}
            </span>
          </div>

          {/* Subject Line */}
          <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-4">
            {newsletter.subject}
          </h1>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground italic border-l-4 border-primary/40 pl-4 mb-6">
            {newsletter.excerpt}
          </p>

          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={newsletter.heroImage}
              alt={newsletter.subject}
              className="w-full object-cover"
            />
          </div>

          {/* Body Sections */}
          {newsletter.body.map((section) => (
            <div key={section.heading ?? newsletter.id} className="mb-7">
              {section.heading && (
                <div className="bg-primary/10 border-l-4 border-primary rounded-r-md px-4 py-2 mb-3">
                  <h2 className="text-sm md:text-base font-semibold text-primary">
                    {section.heading}
                  </h2>
                </div>
              )}
              {section.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-sm leading-relaxed text-foreground/85 mb-3"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Sustainability Fact Box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">&#127807;</span>
              <div>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
                  Sustainability Fact
                </p>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  {newsletter.sustainabilityFact}
                </p>
              </div>
            </div>
          </div>

          {/* Service Spotlight */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              Featured GE3S Solution
            </p>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-3">
              {newsletter.serviceSpotlight.serviceName}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-5">
              {newsletter.serviceSpotlight.description}
            </p>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {newsletter.serviceSpotlight.ctaLabel}
            </Button>
          </div>

          {/* Email Divider */}
          <hr className="border-border mb-8" />

          {/* Newsletter Footer */}
          <div className="text-center">
            <img
              src="/assets/generated/ge3s-logo.dim_200x200.png"
              alt="GE3S"
              className="h-12 w-12 object-contain mx-auto mb-3 rounded-lg"
            />
            <p className="text-sm font-semibold text-foreground mb-1">GE3S</p>
            <p className="text-xs text-muted-foreground mb-3">
              Building a Sustainable Future
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="https://ge3s.org"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Website
              </a>
              <span className="text-muted-foreground text-xs">|</span>
              <a
                href="mailto:info@ge3s.org"
                className="text-xs text-primary hover:underline"
              >
                Contact Us
              </a>
              <span className="text-muted-foreground text-xs">|</span>
              <span className="text-xs text-muted-foreground">ge3s.org</span>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; 2026 GE3S. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
