import { Check, CheckCircle2, Mail, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import type {
  CategoryContent,
  ProductGroup,
} from "../content/catalogueContent";
import { useCart } from "../contexts/CartContext";

interface CategorySectionProps {
  content: CategoryContent;
}

const categoryImages: Record<string, string> = {
  "waste-management":
    "/assets/generated/product-waste-management.dim_600x400.png",
  "water-treatment":
    "/assets/generated/product-water-treatment.dim_600x400.png",
  "renewable-energy":
    "/assets/generated/product-renewable-energy.dim_600x400.png",
  "environmental-services":
    "/assets/generated/product-environmental-services.dim_600x400.png",
  monitoring: "/assets/generated/product-monitoring.dim_600x400.png",
  construction: "/assets/generated/product-construction.dim_600x400.png",
  bess: "/assets/generated/product-bess.dim_600x400.png",
};

const categoryBanners: Record<string, string> = {
  "waste-management":
    "/assets/generated/banner-waste-management.dim_1200x400.jpg",
  "water-treatment":
    "/assets/generated/banner-water-treatment.dim_1200x400.jpg",
  "renewable-energy":
    "/assets/generated/banner-renewable-energy.dim_1200x400.jpg",
  monitoring: "/assets/generated/banner-monitoring.dim_1200x400.jpg",
  construction: "/assets/generated/banner-construction.dim_1200x400.jpg",
  bess: "/assets/generated/banner-bess.dim_1200x400.jpg",
};

function PricingBlock({ product }: { product: ProductGroup }) {
  const { price } = product;
  if (!price) return null;

  if (price.isQuote) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-5">
        <Badge className="bg-amber-500 hover:bg-amber-500 text-white text-sm px-3 py-1 mb-3">
          Request a Quote
        </Badge>
        <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
          {price.note}
        </p>
        <a
          href="mailto:info@ge3s.org"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:underline"
        >
          <Mail size={14} />
          info@ge3s.org
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Indicative Price Range
      </p>
      <p className="text-2xl font-bold text-primary leading-tight">
        {price.aed}
      </p>
      <p className="text-base font-medium text-foreground/70 mt-1">
        {price.usd}
      </p>
      {price.note && (
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50" />
          {price.note}
        </p>
      )}
    </div>
  );
}

function ProductDetailModal({
  product,
  categoryTitle,
  categoryId,
  onClose,
}: {
  product: ProductGroup;
  categoryTitle: string;
  categoryId: string;
  onClose: () => void;
}) {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((item) => item.productName === product.name);
  const inCart = !!cartItem;
  const categoryImage = categoryImages[categoryId];

  const handleAddToCart = () => {
    addToCart(product.name, categoryTitle);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto p-0"
        data-ocid="product.dialog"
      >
        {/* Product Image */}
        {categoryImage && (
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img
              src={categoryImage}
              alt={categoryTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              data-ocid="product.close_button"
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            >
              <X size={16} />
            </button>
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/80 uppercase tracking-wider">
              {categoryTitle}
            </span>
          </div>
        )}

        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold text-foreground leading-snug">
              {product.name}
            </DialogTitle>
          </DialogHeader>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Pricing */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-primary inline-block" />
              Pricing (UAE Market)
            </h4>
            <PricingBlock product={product} />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAddToCart}
              data-ocid="product.submit_button"
              variant={inCart ? "outline" : "default"}
              className="flex-1 flex items-center justify-center gap-2"
            >
              {justAdded ? (
                <>
                  <Check size={15} /> Added!
                </>
              ) : inCart ? (
                <>
                  <ShoppingCart size={15} /> In Cart ({cartItem.quantity})
                </>
              ) : (
                <>
                  <ShoppingCart size={15} /> Add to Cart
                </>
              )}
            </Button>
            {product.price?.isQuote && (
              <Button
                asChild
                variant="outline"
                data-ocid="product.secondary_button"
                className="flex-1 flex items-center justify-center gap-2 border-amber-400 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30"
              >
                <a href="mailto:info@ge3s.org">
                  <Mail size={15} /> Request a Quote
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProductCard({
  product,
  category,
  categoryId,
  onViewDetails,
}: {
  product: ProductGroup;
  category: string;
  categoryId: string;
  onViewDetails: () => void;
}) {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((item) => item.productName === product.name);
  const inCart = !!cartItem;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product.name, category);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const categoryImage = categoryImages[categoryId];

  return (
    <article
      className="group bg-card border border-border rounded-xl hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col overflow-hidden"
      data-ocid="product.card"
    >
      {/* Clickable top area: image + content */}
      <button
        type="button"
        onClick={onViewDetails}
        className="w-full text-left flex flex-col"
        aria-label={`View details for ${product.name}`}
      >
        {/* Category thumbnail */}
        {categoryImage && (
          <div className="relative h-36 overflow-hidden">
            <img
              src={categoryImage}
              alt={category}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-white/80 uppercase tracking-wider">
              {category}
            </span>
          </div>
        )}

        {/* Card content */}
        <div className="p-5 pb-2">
          <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug text-left">
            {product.name}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 text-left">
            {product.description}
          </p>
          <p className="mt-2 text-xs text-primary/70 font-medium group-hover:text-primary transition-colors">
            View Details &amp; Pricing →
          </p>
        </div>
      </button>

      {/* Add to cart button (outside the details button) */}
      <div className="px-5 pb-5 pt-2 mt-auto">
        <button
          type="button"
          onClick={handleAddToCart}
          data-ocid="product.add_button"
          className={`
            w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
            transition-all duration-200 border
            ${
              justAdded
                ? "bg-primary/10 border-primary text-primary"
                : inCart
                  ? "bg-primary/5 border-primary/40 text-primary hover:bg-primary/10"
                  : "bg-transparent border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
            }
          `}
          aria-label={`Add ${product.name} to cart`}
        >
          {justAdded ? (
            <>
              <Check size={15} /> Added!
            </>
          ) : inCart ? (
            <>
              <ShoppingCart size={15} /> In Cart ({cartItem.quantity})
            </>
          ) : (
            <>
              <ShoppingCart size={15} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export function CategorySection({ content }: CategorySectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductGroup | null>(
    null,
  );
  const categoryBanner =
    categoryBanners[content.id] ?? categoryImages[content.id];

  return (
    <div className="animate-fade-in">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          categoryTitle={content.title}
          categoryId={content.id}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Category Header */}
      <div className="mb-12">
        {/* Banner image for the active category */}
        {categoryBanner && (
          <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 shadow-soft">
            <img
              src={categoryBanner}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white/15 backdrop-blur-sm rounded-xl border border-white/25 flex-shrink-0">
                  <img
                    src={content.icon}
                    alt={`${content.title} icon`}
                    className="h-12 w-12 md:h-14 md:w-14"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md leading-tight">
                    {content.headline}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Intro text */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {content.intro}
        </p>
      </div>

      {/* Product Groups Grid */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-primary inline-block" />
          Product Portfolio
        </h3>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.productGroups.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              category={content.title}
              categoryId={content.id}
              onViewDetails={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-br from-secondary/40 to-primary/5 rounded-2xl p-8 md:p-10 border border-border/50">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-primary inline-block" />
          Typical Applications
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {content.applications.map((application) => (
            <div key={application} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                {application}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
