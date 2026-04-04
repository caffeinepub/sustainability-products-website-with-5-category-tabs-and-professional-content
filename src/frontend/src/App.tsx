import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { BlogArticle } from "./components/BlogArticle";
import { BlogSection } from "./components/BlogSection";
import { BrochuresTab } from "./components/BrochuresTab";
import { Chatbot } from "./components/Chatbot";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { NewsletterDetail } from "./components/NewsletterDetail";
import { NewsletterSection } from "./components/NewsletterSection";
import { ProductList } from "./components/ProductList";
import { ProductsTab } from "./components/ProductsTab";
import { SiteHeader } from "./components/SiteHeader";
import { CartProvider } from "./contexts/CartContext";

type TabId =
  | "products"
  | "blog"
  | "newsletter"
  | "brochures"
  | "about"
  | "contact"
  | "productList";

function App() {
  const [activeTab, setActiveTab] = useState<TabId>("products");
  const [blogPostId, setBlogPostId] = useState<string | null>(null);
  const [newsletterId, setNewsletterId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleTabChange = (id: string) => {
    setActiveTab(id as TabId);
    if (id !== "blog") setBlogPostId(null);
    if (id !== "newsletter") setNewsletterId(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader
          activeTab={activeTab}
          onTabChange={handleTabChange}
          isAuthenticated={isAuthenticated}
        />

        <main className="flex-1">
          {activeTab === "products" && <ProductsTab />}

          {activeTab === "newsletter" &&
            (newsletterId ? (
              <NewsletterDetail
                newsletterId={newsletterId}
                onBack={() => setNewsletterId(null)}
              />
            ) : (
              <NewsletterSection
                onSelectNewsletter={(id) => setNewsletterId(id)}
              />
            ))}

          {activeTab === "blog" &&
            (blogPostId ? (
              <BlogArticle
                postId={blogPostId}
                onBack={() => setBlogPostId(null)}
              />
            ) : (
              <BlogSection onSelectPost={(id) => setBlogPostId(id)} />
            ))}

          {activeTab === "brochures" && <BrochuresTab />}
          {activeTab === "about" && <AboutUs />}
          {activeTab === "contact" && <ContactUs />}
          {activeTab === "productList" && (
            <ProductList
              isAuthenticated={isAuthenticated}
              onAuthenticate={() => setIsAuthenticated(true)}
            />
          )}
        </main>

        <Footer />
        <Chatbot onNavigateToContact={() => handleTabChange("contact")} />
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
