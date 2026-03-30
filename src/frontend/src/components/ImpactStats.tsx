import { Droplets, Recycle, TreePine, Zap } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Recycle size={28} />,
    value: "2.4M+",
    label: "Tons Processed",
    sublabel: "Waste diverted from landfills annually",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: <Droplets size={28} />,
    value: "850M+",
    label: "Litres Treated",
    sublabel: "Clean water delivered every year",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Zap size={28} />,
    value: "1.2GW",
    label: "Clean Energy",
    sublabel: "Renewable capacity installed globally",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: <TreePine size={28} />,
    value: "680K+",
    label: "Tonnes CO₂ Saved",
    sublabel: "Carbon emissions reduced per year",
    color: "text-green-700 dark:text-green-400",
  },
];

export function ImpactStats() {
  return (
    <section className="bg-gradient-to-br from-primary/8 via-background to-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-4 py-14 md:py-16">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our Environmental Impact
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Measurable results that demonstrate our commitment to a sustainable
            planet.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`mb-4 p-3 rounded-xl bg-primary/8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              {/* Value */}
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1 tabular-nums">
                {stat.value}
              </span>
              {/* Label */}
              <span className="text-sm font-semibold text-foreground/80 mb-1">
                {stat.label}
              </span>
              {/* Sublabel */}
              <span className="text-xs text-muted-foreground leading-snug">
                {stat.sublabel}
              </span>
              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-primary rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
