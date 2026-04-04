import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { motion } from "motion/react";
import { catalogueContent } from "../content/catalogueContent";
import {
  generateBrochure,
  getCategoryAccentColor,
} from "../utils/brochureGenerator";

const COVER_IMAGES: Record<string, string> = {
  "waste-management":
    "/assets/generated/brochure-cover-waste-management.dim_1200x800.jpg",
  "water-treatment":
    "/assets/generated/brochure-cover-water-treatment.dim_1200x800.jpg",
  "renewable-energy":
    "/assets/generated/brochure-cover-renewable-energy.dim_1200x800.jpg",
  monitoring: "/assets/generated/brochure-cover-monitoring.dim_1200x800.jpg",
  construction:
    "/assets/generated/brochure-cover-construction.dim_1200x800.jpg",
  bess: "/assets/generated/brochure-cover-bess.dim_1200x800.jpg",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "waste-management":
    "Automated sorting, organic digesters, compaction equipment, MRF systems, and smart collection bins for efficient waste management.",
  "water-treatment":
    "Reverse osmosis, UV disinfection, biological wastewater treatment, electrocoagulation, and desalination systems.",
  "renewable-energy":
    "Solar PV systems, wind turbines, solar street lights, LED lighting, solar daylighting, and hybrid energy solutions.",
  monitoring:
    "Air quality monitors, water quality sensors, noise measurement, weather monitoring, ADCPs, and IoT data platforms.",
  construction:
    "Recycled insulation, low-VOC coatings, photocatalytic concrete, bamboo composites, and cool roof systems.",
  bess: "Lithium-ion storage, vanadium redox batteries, containerized BESS, residential storage, and grid-scale solutions.",
};

export function BrochuresTab() {
  function handleDownload(categoryId: string) {
    const category = catalogueContent.find((c) => c.id === categoryId);
    if (!category) return;
    const coverImage = `${window.location.origin}${COVER_IMAGES[categoryId] ?? ""}`;
    generateBrochure(
      category.id,
      category.title,
      category.intro,
      category.productGroups,
      category.applications,
      coverImage,
      category.aboutGE3S,
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, oklch(0.72 0.14 145 / 0.4) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, oklch(0.58 0.12 200 / 0.3) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 py-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                Product Catalogues
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-foreground mb-4 leading-tight">
              Product Brochures
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Download detailed product catalogues for each category &mdash;
              includes full specifications, key benefits, typical applications,
              and company information. Opens in a new window for printing or
              saving as PDF.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brochure Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {catalogueContent.map((category, idx) => {
            const accentColor = getCategoryAccentColor(category.id);
            const coverImg = COVER_IMAGES[category.id] ?? "";
            const description =
              CATEGORY_DESCRIPTIONS[category.id] ??
              `${category.intro.slice(0, 120)}...`;

            return (
              <motion.div
                key={category.id}
                data-ocid={`brochures.item.${idx + 1}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
                className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Cover Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={coverImg}
                    alt={`${category.title} brochure cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(160deg, transparent 40%, ${accentColor}cc 100%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xl leading-tight drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: accentColor }}
                  />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className="text-xs font-semibold px-2.5 py-0.5 border-0"
                      style={{
                        background: `${accentColor}22`,
                        color: accentColor,
                      }}
                    >
                      {category.productGroups.length} Products
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PDF Ready
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {description}
                  </p>

                  <div
                    className="rounded-lg p-3 mb-5 text-xs"
                    style={{ background: `${accentColor}12` }}
                  >
                    <p
                      className="font-semibold mb-1"
                      style={{ color: accentColor }}
                    >
                      Brochure includes:
                    </p>
                    <ul className="space-y-0.5 text-muted-foreground">
                      <li>
                        &bull; Full product specifications &amp; descriptions
                      </li>
                      <li>
                        &bull; Key benefits &amp; engaging product highlights
                      </li>
                      <li>
                        &bull; Typical applications &amp; use cases per product
                      </li>
                      <li>&bull; About GE3S &amp; company information</li>
                      <li>&bull; Request a Quote contact details</li>
                    </ul>
                  </div>

                  <Button
                    data-ocid={`brochures.download_button.${idx + 1}`}
                    className="w-full font-semibold text-sm py-5 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: accentColor,
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => handleDownload(category.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-2xl border border-border/60 bg-muted/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-0.5">
              How to save as PDF
            </h4>
            <p className="text-sm text-muted-foreground">
              Click Download Brochure to open it in a new window. Use{" "}
              <kbd className="px-1.5 py-0.5 rounded text-xs bg-muted border border-border font-mono">
                Ctrl+P
              </kbd>{" "}
              (Windows) or{" "}
              <kbd className="px-1.5 py-0.5 rounded text-xs bg-muted border border-border font-mono">
                Cmd+P
              </kbd>{" "}
              (Mac) and choose{" "}
              <span className="font-medium text-foreground">Save as PDF</span>{" "}
              as the destination.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
