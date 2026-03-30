import {
  Award,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pioneering advanced environmental technologies and solutions that address today's most pressing sustainability challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Operating with transparency, honesty, and accountability in every project, partnership, and product we deliver.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Embedding environmental stewardship into everything we do — from our solutions to our own operational practices.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Building lasting relationships with clients, communities, and stakeholders to co-create a greener future together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Setting the highest standards for quality, performance, and impact in all our products, services, and consulting engagements.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Environmental Consulting & Impact Assessments",
    description:
      "Comprehensive EIA studies, environmental due diligence, and regulatory compliance support for projects across the Middle East.",
  },
  {
    icon: Zap,
    title: "Energy Audits & Efficiency Solutions",
    description:
      "In-depth energy audits identifying savings opportunities, with implementation support for efficiency upgrades and ISO 50001 compliance.",
  },
  {
    icon: Leaf,
    title: "Renewable Energy Systems",
    description:
      "End-to-end solar, wind, and battery storage solutions from feasibility through commissioning for commercial and industrial clients.",
  },
  {
    icon: Heart,
    title: "Waste Management & Circular Economy",
    description:
      "Waste stream analysis, circular economy strategy, and technology procurement for municipalities and industrial facilities.",
  },
  {
    icon: Globe,
    title: "Water Treatment & Conservation",
    description:
      "Design and supply of treatment systems for drinking water, wastewater, and industrial process water across diverse sectors.",
  },
  {
    icon: Award,
    title: "Green Building & Sustainable Construction",
    description:
      "LEED, BREEAM, and Estidama advisory services plus procurement of eco-friendly materials for high-performance buildings.",
  },
  {
    icon: Zap,
    title: "Carbon Footprint Assessment & Reduction",
    description:
      "GHG inventory development, science-based target setting, and decarbonization roadmaps aligned with Paris Agreement goals.",
  },
  {
    icon: Shield,
    title: "ESG Reporting & Sustainability Strategy",
    description:
      "Materiality assessments, ESG disclosures aligned with GRI, CDP, and TCFD frameworks, and stakeholder engagement support.",
  },
];

const certifications = [
  "ISO-Certified Processes",
  "UAE Green Economy Partner",
  "USGBC Member",
  "Dubai Clean Energy Strategy Aligned",
  "GRI Standards Reporter",
  "CDP Accredited",
];

export function AboutUs() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-6">
              <Leaf size={14} />
              UAE-Based Sustainability Leaders
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Green Economy, Energy & Environmental Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              GE3S is a leading UAE-based sustainability consultancy and
              solutions provider, founded to accelerate the transition to a
              green economy across the Middle East and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
              <Leaf className="text-primary-foreground" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To drive sustainable development across the Middle East and beyond
              by delivering innovative environmental and energy solutions that
              create economic value while protecting natural resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-accent/50 border border-border rounded-2xl p-8"
          >
            <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-5">
              <Globe className="text-background" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A world where economic growth and environmental stewardship go
              hand in hand — where every development decision contributes to a
              cleaner, more resilient planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-accent/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision, project, and partnership
              at GE3S.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background rounded-xl p-6 border border-border shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Integrated sustainability services spanning consulting, technology,
            and implementation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Certifications & Affiliations
            </h2>
            <p className="text-primary-foreground/70">
              Recognized by leading international sustainability and standards
              bodies.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="px-5 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 text-sm font-medium"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              About GE3S
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                GE3S (Green Economy, Energy & Environmental Solutions) was
                founded with a singular purpose: to bridge the gap between
                economic ambition and environmental responsibility across the
                Middle East. Based in Dubai's vibrant Jumeirah Lakes Towers
                business district, we serve clients across the UAE, Saudi
                Arabia, Qatar, Oman, Bahrain, and beyond.
              </p>
              <p>
                Our team of sustainability engineers, environmental scientists,
                and energy specialists brings decades of combined expertise to
                every engagement. We work with governments, municipalities, real
                estate developers, industrial operators, and financial
                institutions to embed sustainability into the core of their
                operations and growth strategies.
              </p>
              <p>
                From designing a solar plant to conducting an environmental
                impact assessment, from procuring advanced water treatment
                systems to developing a company-wide ESG strategy — GE3S
                delivers integrated, measurable results that align with the UAE
                Vision 2031, Dubai Clean Energy Strategy 2050, and the global
                push toward net zero.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
