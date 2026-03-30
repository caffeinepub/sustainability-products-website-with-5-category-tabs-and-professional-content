import { Droplets, Leaf, Recycle, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Metric {
  id: string;
  label: string;
  value: number;
  displayValue: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  trackColor: string;
  iconBg: string;
}

const metrics: Metric[] = [
  {
    id: "waste-diversion",
    label: "Waste Diversion Rate",
    value: 94,
    displayValue: "94%",
    description: "Material recovered from waste streams",
    icon: <Recycle size={22} />,
    color: "bg-emerald-500",
    trackColor: "bg-emerald-100 dark:bg-emerald-900/30",
    iconBg:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  {
    id: "water-purification",
    label: "Water Purification Efficiency",
    value: 99.7,
    displayValue: "99.7%",
    description: "Contaminant removal in treated water",
    icon: <Droplets size={22} />,
    color: "bg-blue-500",
    trackColor: "bg-blue-100 dark:bg-blue-900/30",
    iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    id: "energy-uptime",
    label: "Renewable Energy Uptime",
    value: 97.2,
    displayValue: "97.2%",
    description: "System availability & reliability",
    icon: <Zap size={22} />,
    color: "bg-amber-500",
    trackColor: "bg-amber-100 dark:bg-amber-900/30",
    iconBg:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
  {
    id: "carbon-reduction",
    label: "Carbon Reduction Achievement",
    value: 86,
    displayValue: "86%",
    description: "Emissions reduced vs. baseline",
    icon: <Leaf size={22} />,
    color: "bg-green-600",
    trackColor: "bg-green-100 dark:bg-green-900/30",
    iconBg:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  },
];

function MetricCard({
  metric,
  index,
  animate,
}: { metric: Metric; index: number; animate: boolean }) {
  const ocids = [
    "impact-charts.item.1",
    "impact-charts.item.2",
    "impact-charts.item.3",
    "impact-charts.item.4",
  ];

  return (
    <div
      data-ocid={ocids[index]}
      className="group bg-card border border-border rounded-2xl p-6 md:p-7 hover:shadow-md hover:border-primary/30 transition-all duration-300"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl ${metric.iconBg} group-hover:scale-110 transition-transform duration-300`}
          >
            {metric.icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide leading-none mb-1">
              {metric.label}
            </p>
            <p className="text-xs text-muted-foreground/70 leading-snug">
              {metric.description}
            </p>
          </div>
        </div>
        {/* Large percentage */}
        <span className="font-display text-3xl md:text-4xl font-bold text-foreground tabular-nums leading-none ml-2 flex-shrink-0">
          {metric.displayValue}
        </span>
      </div>

      {/* Progress bar track */}
      <div
        className={`relative h-3 rounded-full overflow-hidden ${metric.trackColor}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${metric.color}`}
          style={{
            width: animate ? `${metric.value}%` : "0%",
            transitionDelay: `${index * 120 + 200}ms`,
          }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-muted-foreground/60">0%</span>
        <span className="text-[10px] text-muted-foreground/60">50%</span>
        <span className="text-[10px] text-muted-foreground/60">100%</span>
      </div>
    </div>
  );
}

export function ImpactCharts() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-ocid="impact-charts.section"
      className="bg-gradient-to-br from-secondary/30 via-background to-primary/5 border-y border-border/50"
    >
      <div className="container mx-auto px-4 py-14 md:py-16">
        {/* Section heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Live Data
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Performance Metrics
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Real-world results from deployed GE3S solutions across global
            installations.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              index={index}
              animate={animate}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-8">
          Metrics aggregated from installations across 40+ countries · Updated
          quarterly
        </p>
      </div>
    </section>
  );
}
