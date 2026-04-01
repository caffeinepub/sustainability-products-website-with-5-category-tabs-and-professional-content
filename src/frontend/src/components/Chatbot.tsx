import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, MessageCircle, Send, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
  showContactBtn?: boolean;
}

interface ChatbotProps {
  onNavigateToContact: () => void;
}

const WELCOME: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I\u2019m the GE3S Assistant. Ask me about our products, services, or how to place an order.",
};

interface FAQ {
  keywords: string[];
  answer: string;
  showContactBtn?: boolean;
}

const FAQS: FAQ[] = [
  {
    keywords: [
      "what products",
      "product offer",
      "product range",
      "categories",
      "catalog",
    ],
    answer:
      "We offer products across 6 sustainability categories:\n\n\u2022 **Waste Management** \u2013 Smart bins, compactors, recycling systems\n\u2022 **Water Treatment** \u2013 Filtration, purification, desalination\n\u2022 **Renewable Energy** \u2013 Solar panels, inverters, off-grid systems\n\u2022 **Energy & Environment Monitoring** \u2013 Weather stations, air quality monitors, ADCPs\n\u2022 **Eco-friendly Construction Materials** \u2013 Low-carbon, sustainable building materials\n\u2022 **Battery Energy Storage System (BESS)** \u2013 Residential to utility-scale storage\n\nBrowse all categories under the Products tab.",
  },
  {
    keywords: ["pricing", "price", "cost", "how much", "priced"],
    answer:
      "All prices are shown in **AED and USD, excluding VAT**. Click any product card to see its detailed price. Large or custom systems display a **Request a Quote** option instead of a fixed price.\n\nNeed a formal quotation? Visit our Contact Us page.",
    showContactBtn: true,
  },
  {
    keywords: ["lead time", "delivery", "how long", "when will", "shipping"],
    answer:
      "Lead times vary by product and order size:\n\n\u2022 **Standard equipment**: typically 4\u20138 weeks\n\u2022 **Custom or large-scale systems**: 8\u201312 weeks or more\n\u2022 **BESS & industrial plants**: subject to project scope\n\nFor an accurate delivery estimate, please contact us directly.",
    showContactBtn: true,
  },
  {
    keywords: ["specification", "specs", "datasheet", "technical", "details"],
    answer:
      "Click any product card to view its full specifications. For official datasheets, compliance certificates, or engineering documents, please reach out via our Contact Us form.",
    showContactBtn: true,
  },
  {
    keywords: ["sku", "stock keeping unit", "product code", "part number"],
    answer:
      "Every product has a unique **SKU (Stock Keeping Unit)** code, visible on both the product card and the detail view. Include the SKU when contacting us to speed up your enquiry.",
  },
  {
    keywords: [
      "bess",
      "battery energy storage",
      "battery storage",
      "energy storage",
    ],
    answer:
      "Our **Battery Energy Storage System (BESS)** range covers residential (5\u201320 kWh), commercial (50\u2013500 kWh), containerized, and grid-scale solutions using lithium-ion LFP chemistry.\n\nAll BESS systems are priced on a **Request a Quote** basis.",
    showContactBtn: true,
  },
  {
    keywords: [
      "solar",
      "renewable",
      "photovoltaic",
      "pv panel",
      "inverter",
      "off-grid",
    ],
    answer:
      "Our **Renewable Energy** range includes solar panels, string and microinverters, mounting structures, off-grid systems, and hybrid solar+BESS solutions.\n\nPrices are shown in AED & USD (excl. VAT). Click any product for details.",
  },
  {
    keywords: [
      "water treatment",
      "water filter",
      "water purif",
      "desalin",
      "wastewater",
      "filtration",
    ],
    answer:
      "Our **Water Treatment** line covers RO systems, UV purification, industrial filtration, desalination plants, and wastewater treatment. Smaller units carry fixed prices; large-scale plants are quoted on request.",
    showContactBtn: true,
  },
  {
    keywords: [
      "waste management",
      "waste",
      "compactor",
      "recycling",
      "garbage",
    ],
    answer:
      "Our **Waste Management** category includes smart sensor bins, industrial compactors, recycling sorting systems, organic waste processors, and e-waste stations.\n\nBrowse the Products tab for full listings.",
  },
  {
    keywords: [
      "monitoring",
      "air quality",
      "weather station",
      "sensor",
      "adcp",
      "doppler",
      "indoor air",
      "ambient",
    ],
    answer:
      "Our **Energy & Environment Monitoring** products include Automated Weather Stations, Acoustic Doppler Current Profilers (ADCPs), Ambient Air Quality Systems, Indoor Air Quality Monitors (CO\u2082, VOC, PM2.5), and energy sub-metering analyzers.",
  },
  {
    keywords: [
      "construction",
      "green building",
      "insulation",
      "sustainable material",
      "eco material",
      "low carbon",
    ],
    answer:
      "Our **Eco-friendly Construction Materials** include sustainable insulation panels, green concrete alternatives, recycled aggregates, low-carbon facade systems, and energy-efficient glazing \u2014 all meeting UAE Estidama and LEED standards.",
  },
  {
    keywords: [
      "who are you",
      "about ge3s",
      "about you",
      "company",
      "about global energy",
      "ge3s",
    ],
    answer:
      "**Global Energy and Environmental Engineering Services (GE3S)** is a UAE-based sustainability company providing end-to-end environmental and energy solutions across the Middle East, covering renewable energy, monitoring, waste, water, construction, and battery storage.",
  },
  {
    keywords: [
      "location",
      "where are you",
      "address",
      "dubai",
      "office",
      "uae",
      "middle east",
    ],
    answer:
      "We are headquartered in **Dubai, UAE**, serving clients across the GCC and the wider Middle East.\n\nVisit our Contact Us page for our full address, phone number, and email.",
    showContactBtn: true,
  },
  {
    keywords: [
      "services",
      "what do you do",
      "what you offer",
      "consultancy",
      "advisory",
    ],
    answer:
      "GE3S offers: **Product Supply**, **Engineering Consultancy**, **Installation Support**, **Sustainability Advisory** (ESG, net-zero roadmaps), and **After-Sales Support**.\n\nContact us to discuss your project requirements.",
    showContactBtn: true,
  },
  {
    keywords: ["request a quote", "get a quote", "quotation", "quote"],
    answer:
      "To request a quote, go to the **Products** tab, click any product, and select **Request a Quote** on the detail view.\n\nAlternatively, fill in our **Contact Us** form with the product name, SKU, and requirements \u2014 we respond within 1 business day.",
    showContactBtn: true,
  },
  {
    keywords: [
      "how to order",
      "place an order",
      "buy",
      "purchase",
      "add to cart",
      "order",
    ],
    answer:
      "\u2022 **Standard products**: Browse Products \u2192 Add to Cart \u2192 checkout\n\u2022 **Large systems**: Click Request a Quote on the product detail page\n\u2022 **Bulk orders**: Contact us directly for volume pricing",
    showContactBtn: true,
  },
  {
    keywords: ["payment", "invoice", "checkout", "pay", "bank transfer", "b2b"],
    answer:
      "We support standard **B2B payment terms**: bank transfer (TT), letter of credit (LC) for large orders, and cheque for UAE clients.\n\nPayment terms are confirmed at the time of order.",
    showContactBtn: true,
  },
];

function matchFAQ(input: string): FAQ | null {
  const lower = input.toLowerCase();
  for (const faq of FAQS) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq;
    }
  }
  return null;
}

/**
 * Escape HTML special characters then convert **bold** markers and
 * newlines to HTML. Only called with trusted static FAQ strings.
 */
function toHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br />");
}

/** Renders a bot message bubble using a ref to set innerHTML imperatively. */
function BotTextBubble({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = toHtml(text);
    }
  }, [text]);
  return (
    <div
      ref={ref}
      className="px-3 py-2 rounded-xl rounded-tl-sm text-sm leading-relaxed bg-muted text-foreground"
    />
  );
}

export function Chatbot({ onNavigateToContact }: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: nextId.current++, role: "user", text };
    const match = matchFAQ(text);
    const botMsg: Message = match
      ? {
          id: nextId.current++,
          role: "bot",
          text: match.answer,
          showContactBtn: match.showContactBtn,
        }
      : {
          id: nextId.current++,
          role: "bot",
          text: "I\u2019m not sure about that \u2014 please visit our **Contact Us** page and our team will be happy to help!",
          showContactBtn: true,
        };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function handleContactClick() {
    onNavigateToContact();
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[360px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "480px" }}
            data-ocid="chatbot.panel"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">
                    GE3S Assistant
                  </p>
                  <p className="text-xs opacity-75 mt-0.5">Ask me anything</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                data-ocid="chatbot.close_button"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-3 py-3">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    {msg.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                    )}

                    {msg.role === "bot" ? (
                      <div className="flex flex-col gap-2 max-w-[82%] items-start">
                        <BotTextBubble text={msg.text} />
                        {msg.showContactBtn && (
                          <button
                            type="button"
                            onClick={handleContactClick}
                            className="text-xs text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
                            data-ocid="chatbot.link"
                          >
                            Go to Contact Us \u2192
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 max-w-[82%] items-end">
                        <div className="px-3 py-2 rounded-xl rounded-tr-sm text-sm leading-relaxed bg-primary text-primary-foreground">
                          {msg.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="px-3 py-3 border-t border-border shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your question\u2026"
                  className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 border border-border placeholder:text-muted-foreground"
                  data-ocid="chatbot.input"
                />
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="shrink-0 w-9 h-9 rounded-lg"
                  data-ocid="chatbot.submit_button"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
        data-ocid="chatbot.open_modal_button"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
