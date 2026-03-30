import { useState } from "react";
import { catalogueContent } from "../content/catalogueContent";
import { CategorySection } from "./CategorySection";

export function ProductsTab() {
  const [activeCategory, setActiveCategory] = useState(catalogueContent[0].id);

  const activeContent =
    catalogueContent.find((cat) => cat.id === activeCategory) ||
    catalogueContent[0];

  return (
    <div>
      {/* Sub-tab bar */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-background/95 backdrop-blur border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-0 py-0">
            {catalogueContent.map((cat) => (
              <button
                type="button"
                key={cat.id}
                data-ocid={`products.${cat.id}.tab`}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex-shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200
                  ${
                    activeCategory === cat.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }
                `}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category content */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <CategorySection content={activeContent} />
      </div>
    </div>
  );
}
