import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems } =
    useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">
              Enquiry Cart
            </h2>
            {totalItems > 0 && (
              <span className="inline-flex items-center justify-center h-6 min-w-6 px-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {totalItems}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="p-6 bg-secondary/30 rounded-full">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground">
              Your cart is empty
            </p>
            <p className="text-sm text-muted-foreground">
              Browse our product categories and add items to your enquiry cart.
            </p>
            <Button variant="outline" onClick={onClose} className="mt-2">
              Continue Browsing
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <div key={item.productName}>
                    <div className="flex flex-col gap-2 py-2">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            {item.productName}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {item.category}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productName)}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors flex-shrink-0"
                          aria-label={`Remove ${item.productName}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productName, item.quantity - 1)
                          }
                          className="h-7 w-7 flex items-center justify-center rounded-md border border-border text-foreground hover:bg-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productName, item.quantity + 1)
                          }
                          className="h-7 w-7 flex items-center justify-center rounded-md border border-border text-foreground hover:bg-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                    {index < items.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-border flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Total items in enquiry</span>
                <span className="font-semibold text-foreground">
                  {totalItems}
                </span>
              </div>
              <Button className="w-full" size="lg">
                Submit Enquiry
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="w-full text-muted-foreground hover:text-destructive hover:border-destructive/50"
              >
                <Trash2 size={14} className="mr-2" />
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
