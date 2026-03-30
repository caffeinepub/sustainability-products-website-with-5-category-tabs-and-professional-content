interface CategoryHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

const categoryHighlights: CategoryHighlight[] = [
  {
    id: "waste-management",
    title: "Waste Management",
    description:
      "AI-powered sorting, anaerobic digestion, and smart collection systems for maximum resource recovery.",
    image: "/assets/generated/product-waste-management.dim_600x400.png",
    badge: "8 Product Lines",
  },
  {
    id: "water-treatment",
    title: "Water Treatment",
    description:
      "Reverse osmosis, UV disinfection, and biological treatment for potable and industrial water.",
    image: "/assets/generated/product-water-treatment.dim_600x400.png",
    badge: "9 Product Lines",
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Solar, wind, and energy storage solutions for commercial, industrial, and utility-scale projects.",
    image: "/assets/generated/product-renewable-energy.dim_600x400.png",
    badge: "8 Product Lines",
  },
  {
    id: "monitoring",
    title: "Monitoring Products",
    description:
      "Environmental sensors, GHG analyzers, and energy management systems for real-time operational intelligence.",
    image: "/assets/generated/product-monitoring.dim_600x400.png",
    badge: "9 Product Lines",
  },
  {
    id: "construction",
    title: "Construction Materials",
    description:
      "Eco-friendly recycled steel, low-carbon concrete, FSC timber, and sustainable building materials.",
    image: "/assets/generated/product-construction.dim_600x400.png",
    badge: "10 Product Lines",
  },
];

interface CategoryHighlightsProps {
  activeCategory: string;
  onCategorySelect: (id: string) => void;
}

export function CategoryHighlights({
  activeCategory,
  onCategorySelect,
}: CategoryHighlightsProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Explore Our Solutions
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          Click a category to browse our full product portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {categoryHighlights.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              data-ocid="category-highlights.tab"
              onClick={() => onCategorySelect(cat.id)}
              className={`
                group relative overflow-hidden rounded-2xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
                ${
                  isActive
                    ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                    : "hover:shadow-md hover:scale-[1.01]"
                }
              `}
              aria-pressed={isActive}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-semibold tracking-wide">
                  {cat.badge}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" />
                )}
              </div>

              {/* Text content */}
              <div
                className={`p-4 border border-t-0 rounded-b-2xl transition-colors duration-300 ${isActive ? "bg-primary/8 border-primary/30" : "bg-card border-border"}`}
              >
                <h3
                  className={`font-display text-base font-bold mb-1.5 transition-colors ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}
                >
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
                <div
                  className={`mt-3 text-xs font-semibold flex items-center gap-1 transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                >
                  {isActive ? "Currently viewing" : "View products"}
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
