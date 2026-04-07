import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

interface FooterProps {
  onNavigate?: (tabId: string) => void;
  onNavigateToProducts?: (categoryId: string) => void;
}

const productLinks = [
  { id: "waste-management", label: "Waste Management" },
  { id: "water-treatment", label: "Water Treatment" },
  { id: "renewable-energy", label: "Renewable Energy" },
  { id: "monitoring", label: "Energy & Environmental Monitoring" },
  { id: "construction", label: "Eco-friendly Construction Materials" },
  { id: "bess", label: "Battery Energy Storage System" },
];

const siteLinks = [
  { id: "blog", label: "Blog" },
  { id: "newsletter", label: "Newsletter" },
  { id: "brochures", label: "Brochures" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/ge3s",
    label: "GE3S on LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/ge3s_official",
    label: "@ge3s_official",
    color: "hover:text-[#1DA1F2]",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ge3s.official",
    label: "GE3S Official",
    color: "hover:text-[#1877F2]",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ge3s_official",
    label: "@ge3s_official",
    color: "hover:text-[#E1306C]",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@ge3s",
    label: "GE3S Channel",
    color: "hover:text-[#FF0000]",
  },
];

export function Footer({ onNavigate, onNavigateToProducts }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "ge3s-app";

  return (
    <footer className="bg-gray-950 text-gray-300" data-ocid="footer.section">
      {/* Top green accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-500" />

      <div className="container mx-auto px-4 py-14">
        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 rounded-md bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-2xl font-bold text-green-400 tracking-tight">
                  GE3S
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-snug ml-11">
                Global Energy and Environmental
                <br />
                Engineering Services
              </p>
              <p className="text-xs italic text-green-400/80 ml-11 mt-1">
                Powering a Sustainable Future
              </p>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Dubai-based sustainability solutions provider offering advanced
              waste management, water treatment, renewable energy, environmental
              monitoring, eco-friendly construction materials, and energy
              storage systems.
            </p>

            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@ge3s.org"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
                data-ocid="footer.link"
              >
                <Mail className="w-4 h-4 text-green-500/70 group-hover:text-green-400 flex-shrink-0" />
                <span>info@ge3s.org</span>
              </a>
              <a
                href="https://ge3s.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
                data-ocid="footer.link"
              >
                <Globe className="w-4 h-4 text-green-500/70 group-hover:text-green-400 flex-shrink-0" />
                <span>ge3s.org</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Products */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest after:block after:mt-2 after:w-8 after:h-0.5 after:bg-green-500">
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateToProducts?.(link.id)}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors text-left leading-snug flex items-start gap-1.5 group"
                    data-ocid="footer.link"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-green-600/60 group-hover:bg-green-400 flex-shrink-0 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest after:block after:mt-2 after:w-8 after:h-0.5 after:bg-green-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(link.id)}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors text-left flex items-start gap-1.5 group"
                    data-ocid="footer.link"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-green-600/60 group-hover:bg-green-400 flex-shrink-0 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social & Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest after:block after:mt-2 after:w-8 after:h-0.5 after:bg-green-500">
              Connect With Us
            </h3>

            {/* Social icons */}
            <ul className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-sm text-gray-400 transition-colors ${social.color} group`}
                      data-ocid="footer.link"
                    >
                      <span className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-current transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Contact info */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-green-500/70 flex-shrink-0 mt-0.5" />
                <span>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-green-500/70 flex-shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {currentYear} Global Energy and Environmental Engineering
            Services. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-400 hover:text-green-400 transition-colors"
              data-ocid="footer.link"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
