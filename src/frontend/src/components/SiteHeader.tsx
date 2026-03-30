import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { CartDrawer } from "./CartDrawer";

interface SiteHeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TABS = [
  { id: "products", title: "Products" },
  { id: "blog", title: "Blog" },
  { id: "newsletter", title: "Newsletter" },
  { id: "about", title: "About Us" },
  { id: "contact", title: "Contact Us" },
];

export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/ge3s-logo.dim_200x200.png"
                alt="GE3S"
                className="h-9 w-9 md:h-11 md:w-11 rounded-lg object-contain"
              />
              <img
                src="/assets/generated/ge3s-logo.dim_320x80.png"
                alt="GE3S"
                className="h-7 w-auto md:h-8 hidden sm:block"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {TABS.map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  data-ocid={`nav.${tab.id}.link`}
                  onClick={() => handleTabClick(tab.id)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </nav>

            {/* Right side: Cart + Mobile Menu */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                data-ocid="cart.open_modal_button"
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label={`Open cart, ${totalItems} items`}
              >
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border/40">
              <div className="flex flex-col gap-2">
                {TABS.map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-md text-left transition-all duration-200
                      ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }
                    `}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
