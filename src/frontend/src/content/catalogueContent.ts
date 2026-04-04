export interface ProductPrice {
  aed?: string;
  usd?: string;
  isQuote: boolean;
  note?: string;
}

export interface ProductGroup {
  sku: string;
  name: string;
  description: string;
  shortPitch: string;
  keyBenefits: string[];
  typicalApplications: string[];
  price: ProductPrice;
  image?: string;
}

export interface CategoryContent {
  id: string;
  title: string;
  icon: string;
  headline: string;
  intro: string;
  aboutGE3S: string;
  productGroups: ProductGroup[];
  applications: string[];
}

export const catalogueContent: CategoryContent[] = [
  {
    id: "waste-management",
    title: "Waste Management Products",
    icon: "/assets/generated/icon-waste.dim_256x256.png",
    headline: "Advanced Waste Management Solutions",
    intro:
      "Our comprehensive waste management portfolio delivers innovative technologies for collection, processing, and resource recovery. From municipal solid waste to industrial byproducts, we provide integrated systems that maximize diversion rates while minimizing environmental impact.",
    aboutGE3S:
      "Global Energy and Environmental Engineering Services (GE3S) is a Dubai-based sustainability consultancy and solutions provider with deep expertise in waste management, water treatment, renewable energy, environmental monitoring, and green construction. Serving clients across the UAE and GCC since over a decade, GE3S brings together certified engineers, environmental scientists, and project managers to deliver end-to-end solutions that meet the highest international standards. Visit us at www.ge3s.org or contact info@ge3s.org.",
    productGroups: [
      {
        sku: "GE-WM-001",
        name: "Automated Sorting Systems",
        shortPitch:
          "Transform your materials recovery with AI-powered optical sorting that delivers 95%+ material purity, slashing contamination and maximising the value of every tonne processed.",
        keyBenefits: [
          "95%+ material purity for plastics, metals, paper & glass",
          "Throughput 5–50 tonnes/hour to match your scale",
          "Robotic picking arms reduce manual labour and injury risk",
          "Real-time AI calibration adapts to changing waste streams",
        ],
        typicalApplications: [
          "Municipal Recycling Facilities (MRFs)",
          "Industrial waste sorting lines",
          "C&D debris separation plants",
          "E-waste component recovery",
        ],
        description:
          "AI-powered optical sorters and robotic picking systems that achieve 95%+ material purity for plastics, metals, paper, and glass streams with throughput capacities from 5 to 50 tons per hour.",
        price: {
          isQuote: true,
          note: "Price on application – custom industrial systems",
        },
        image:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-002",
        name: "Organic Waste Digesters",
        shortPitch:
          "Turn food and agricultural waste into a revenue-generating resource — biogas for energy and nutrient-rich digestate for agriculture — in one compact, modular system.",
        keyBenefits: [
          "Converts 500 kg to 20 tonnes/day of organic waste",
          "Produces biogas for heat or electricity generation",
          "Digestate certified for agricultural reuse",
          "Modular design — start small and scale up",
        ],
        typicalApplications: [
          "Hotels, resorts & hospitality groups",
          "Food processing and manufacturing facilities",
          "Farms and agri-industrial estates",
          "Municipality organic waste programmes",
        ],
        description:
          "Modular anaerobic digestion units converting food waste and agricultural residues into biogas and nutrient-rich digestate, with capacities ranging from 500 kg to 20 tons daily input.",
        price: {
          isQuote: true,
          note: "Price on application – capacity-dependent",
        },
        image:
          "https://images.unsplash.com/photo-1611273686780-b5e22e574e0c?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-003",
        name: "Compaction & Baling Equipment",
        shortPitch:
          "Reduce waste volume by up to 90% and slash logistics costs with heavy-duty compactors and balers — built tough for 24/7 commercial and industrial operations.",
        keyBenefits: [
          "Up to 90% volume reduction for storage & transport",
          "Automated tie systems for high-throughput baling",
          "IoT monitoring for predictive maintenance",
          "Wide range for retail, warehousing & industrial use",
        ],
        typicalApplications: [
          "Supermarkets, shopping malls & retail chains",
          "Warehouses and logistics hubs",
          "Industrial manufacturing plants",
          "Hospitality and food service operations",
        ],
        description:
          "Heavy-duty balers and compactors reducing waste volume by up to 90%, featuring automated tie systems and IoT monitoring for optimized logistics and storage efficiency.",
        price: {
          aed: "AED 36,200 – 176,200",
          usd: "USD 9,860 – 48,000",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-004",
        name: "Hazardous Waste Containment",
        shortPitch:
          "Protect your site, your team, and the environment with UN-certified containment engineered to the highest safety standards for chemical, medical, and electronic waste.",
        keyBenefits: [
          "UN-certified double-walled tanks and spill pallets",
          "Climate-controlled cabinets for temperature-sensitive waste",
          "Compatible with chemical, medical, and e-waste streams",
          "Supports EHS compliance and audit readiness",
        ],
        typicalApplications: [
          "Hospitals, clinics & pharmaceutical facilities",
          "Chemical manufacturing & processing plants",
          "Electronics repair and e-waste recyclers",
          "Laboratories and research institutions",
        ],
        description:
          "UN-certified storage solutions including double-walled tanks, spill containment pallets, and climate-controlled cabinets for safe handling of chemical, medical, and electronic waste.",
        price: {
          aed: "AED 5,524 – 70,000",
          usd: "USD 1,505 – 19,050",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1605000797498-28e6b9e0d9d1?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-005",
        name: "Waste-to-Energy Gasification",
        shortPitch:
          "Don't bury your waste — convert it. Our gasification systems recover over 70% of the energy locked in non-recyclable waste, turning a liability into a power source.",
        keyBenefits: [
          "70%+ energy recovery rate from non-recyclable waste",
          "Syngas output for on-site power generation",
          "Minimal emissions — meets IFC & EU standards",
          "Reduces landfill dependency significantly",
        ],
        typicalApplications: [
          "Industrial estates with high non-recyclable waste volumes",
          "Remote facilities requiring off-grid power",
          "Municipalities targeting zero-waste-to-landfill",
          "Petrochemical and refinery residue management",
        ],
        description:
          "Advanced thermal conversion systems processing non-recyclable waste into syngas for power generation, achieving energy recovery rates exceeding 70% with minimal emissions.",
        price: {
          isQuote: true,
          note: "Price on application – large-scale system",
        },
        image:
          "https://images.unsplash.com/photo-1548247416-ec9c79db39da?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-006",
        name: "Leachate Treatment Systems",
        shortPitch:
          "Protect your soil, groundwater, and regulatory standing with multi-stage leachate treatment systems engineered to meet the strictest UAE and international discharge standards.",
        keyBenefits: [
          "Multi-stage RO, activated carbon & advanced oxidation",
          "Achieves discharge compliance for UAE & international regs",
          "Modular for existing landfill retrofits",
          "Automated monitoring and control systems included",
        ],
        typicalApplications: [
          "Municipal and private landfill sites",
          "Construction waste disposal facilities",
          "Mining and industrial waste lagoons",
          "Composting and transfer station leachate",
        ],
        description:
          "Multi-stage filtration and biological treatment units for landfill leachate, meeting discharge standards through reverse osmosis, activated carbon, and advanced oxidation processes.",
        price: {
          isQuote: true,
          note: "Price on application – site-specific design",
        },
        image:
          "https://images.unsplash.com/photo-1580910051081-cc7b0a7c88a9?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-007",
        name: "Smart Collection Bins",
        shortPitch:
          "Cut collection trips by 60% and operational costs by 40% with solar-powered smart bins that tell you exactly when — and only when — they need emptying.",
        keyBenefits: [
          "Solar-powered compaction extends capacity 5x",
          "Fill-level sensors trigger only when needed",
          "Route optimisation software reduces fuel & labour",
          "Sleek, vandal-resistant design for public spaces",
        ],
        typicalApplications: [
          "Public parks, promenades & smart city deployments",
          "Shopping malls and retail districts",
          "Airports, metro stations & transport hubs",
          "University and corporate campuses",
        ],
        description:
          "Solar-powered compacting bins with fill-level sensors and route optimization software, reducing collection frequency by 60% and operational costs by up to 40%.",
        price: {
          aed: "AED 3,715 – 18,570",
          usd: "USD 1,010 – 5,060",
          isQuote: false,
          note: "excl. VAT per unit",
        },
        image:
          "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WM-008",
        name: "Material Recovery Facilities (MRF)",
        shortPitch:
          "A complete, turnkey recycling plant engineered to your waste stream — from tipping floor to baled commodity — processing 10 to 100 tonnes per hour with maximum uptime.",
        keyBenefits: [
          "Single-stream and dual-stream configurations available",
          "Integrated conveyors, screens, magnets & optical sorters",
          "10–100 tonnes/hour scalable throughput",
          "Full EPC delivery with commissioning and training",
        ],
        typicalApplications: [
          "Municipal waste authorities and concession holders",
          "Industrial zone waste management operators",
          "Free zone and logistics park waste facilities",
          "Construction & demolition recycling operators",
        ],
        description:
          "Turnkey single-stream and dual-stream recycling plants with integrated conveyors, screens, magnets, and quality control systems processing 10-100 tons per hour.",
        price: { isQuote: true, note: "Price on application – turnkey plant" },
        image:
          "https://images.unsplash.com/photo-1581092160607-ee67df537f3e?w=600&h=400&fit=crop&auto=format",
      },
    ],
    applications: [
      "Municipal solid waste management and recycling programs",
      "Industrial manufacturing waste reduction and resource recovery",
      "Commercial property waste optimization and compliance",
      "Construction and demolition debris processing",
      "Healthcare and pharmaceutical waste treatment",
      "Agricultural waste valorization and composting operations",
    ],
  },
  {
    id: "water-treatment",
    title: "Water Treatment Products",
    icon: "/assets/generated/icon-water.dim_256x256.png",
    headline: "Comprehensive Water & Wastewater Treatment",
    intro:
      "Our water treatment technologies address the full spectrum of purification challenges, from potable water production to industrial process water and wastewater remediation. Engineered for reliability and efficiency, our systems ensure regulatory compliance while reducing operational costs.",
    aboutGE3S:
      "Global Energy and Environmental Engineering Services (GE3S) is a Dubai-based sustainability solutions provider with specialist expertise in water and wastewater treatment across the GCC. Our team of licensed environmental engineers and water specialists designs, supplies, and commissions treatment systems for municipal authorities, industrial clients, and developers — ensuring every solution is engineered for the region's unique climate and regulatory landscape. Learn more at www.ge3s.org.",
    productGroups: [
      {
        sku: "GE-WT-001",
        name: "Reverse Osmosis Systems",
        shortPitch:
          "Achieve 95–99% removal of dissolved solids and produce consistently pure water at any scale — from a single building to a full industrial plant.",
        keyBenefits: [
          "95–99% dissolved solids removal",
          "Energy recovery devices lower operating costs",
          "1,000 to 500,000 GPD capacity range",
          "Automated CIP cleaning cycles minimise downtime",
        ],
        typicalApplications: [
          "Desalination and brackish water treatment",
          "Pharmaceutical and food-grade water production",
          "Industrial boiler and process water pre-treatment",
          "Hotel and resort water purification systems",
        ],
        description:
          "High-efficiency membrane filtration units removing 95-99% of dissolved solids, available in capacities from 1,000 to 500,000 gallons per day with energy recovery devices and automated cleaning cycles.",
        price: {
          isQuote: true,
          note: "Price on application – capacity-dependent",
        },
        image:
          "https://images.unsplash.com/photo-1504393524553-b855bce32c67?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-002",
        name: "UV Disinfection Units",
        shortPitch:
          "Eliminate pathogens without chemicals — UV disinfection delivers a 4-log reduction in bacteria and viruses, protecting your water and your people safely and sustainably.",
        keyBenefits: [
          "4-log pathogen reduction (99.99% kill rate)",
          "Zero chemical addition — no disinfection by-products",
          "Real-time UV intensity monitoring and alarm",
          "Low maintenance, long-life lamp technology",
        ],
        typicalApplications: [
          "Drinking water final disinfection stage",
          "Swimming pool and spa water treatment",
          "Food and beverage process water",
          "Aquaculture and fish farm water systems",
        ],
        description:
          "Chemical-free pathogen inactivation systems achieving 4-log reduction of bacteria and viruses using low-pressure or medium-pressure UV lamps with real-time intensity monitoring.",
        price: {
          aed: "AED 5,524 – 35,050",
          usd: "USD 1,505 – 9,545",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-003",
        name: "Biological Wastewater Treatment",
        shortPitch:
          "Compact, high-performance biological treatment that achieves 95%+ BOD/COD removal — making treated water reusable for irrigation, cooling, and non-potable applications.",
        keyBenefits: [
          "MBBR and MBR technologies for superior effluent quality",
          "95%+ BOD/COD removal rates",
          "Compact footprint versus conventional systems",
          "Treated effluent meets UAE Class A reuse standards",
        ],
        typicalApplications: [
          "Commercial and residential wastewater recycling",
          "Industrial effluent treatment before discharge",
          "Irrigation water recovery for landscaping",
          "Hospitality sector wastewater management",
        ],
        description:
          "Moving bed biofilm reactors (MBBR) and membrane bioreactors (MBR) providing compact, high-performance treatment with BOD/COD removal rates exceeding 95% and minimal sludge production.",
        price: {
          isQuote: true,
          note: "Price on application – large-scale plant",
        },
        image:
          "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-004",
        name: "Electrocoagulation Systems",
        shortPitch:
          "Remove heavy metals, oils, and color from industrial wastewater using electrochemical power — no harsh chemicals, low energy, and outstanding compliance results.",
        keyBenefits: [
          "Removes heavy metals, oils & suspended colour",
          "Minimal chemical addition reduces OPEX",
          "Compact skid-mounted units for fast deployment",
          "Suitable for challenging industrial effluent streams",
        ],
        typicalApplications: [
          "Metal plating and finishing industries",
          "Oil & gas produced water treatment",
          "Textile dyeing and laundry effluent",
          "Automotive workshop wastewater management",
        ],
        description:
          "Advanced electrochemical treatment for heavy metal removal, oil-water separation, and color reduction in industrial effluents, operating with minimal chemical addition and low energy consumption.",
        price: {
          aed: "AED 35,240 – 175,240",
          usd: "USD 9,600 – 47,715",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1611273686780-b5e22e574e0c?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-005",
        name: "Ultrafiltration Membranes",
        shortPitch:
          "A reliable pre-treatment barrier that removes turbidity, bacteria, and colloids in a single pass — protecting downstream RO membranes and extending overall system life.",
        keyBenefits: [
          "Removes bacteria, turbidity & colloids in one pass",
          "Automated backwash systems reduce maintenance",
          "Ideal RO pre-treatment to extend membrane life",
          "Hollow-fiber and spiral-wound module options",
        ],
        typicalApplications: [
          "RO pre-treatment in desalination plants",
          "Surface water and groundwater polishing",
          "Reuse water applications for landscaping",
          "Beverage and dairy process water",
        ],
        description:
          "Hollow-fiber and spiral-wound UF modules for turbidity removal, bacteria elimination, and pre-treatment applications with flux rates up to 100 LMH and automated backwash systems.",
        price: {
          aed: "AED 14,762 – 70,000",
          usd: "USD 4,020 – 19,050",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-006",
        name: "Ozone Generation Equipment",
        shortPitch:
          "On-site ozone production destroys organics, controls taste and odour, and disinfects — all without chemical storage or handling risks, and with superior results.",
        keyBenefits: [
          "Up to 12% ozone concentration by weight",
          "Destroys organic compounds, taste & odour effectively",
          "No chemical storage — ozone generated on demand",
          "Integrated off-gas destruction for operator safety",
        ],
        typicalApplications: [
          "Drinking water taste and odour control",
          "Cooling tower water treatment",
          "Wastewater reuse polishing",
          "Swimming pool and water park treatment",
        ],
        description:
          "On-site ozone production systems for oxidation of organic compounds, taste and odor control, and disinfection, with concentrations up to 12% by weight and integrated off-gas destruction.",
        price: {
          aed: "AED 18,476 – 70,000",
          usd: "USD 5,030 – 19,050",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-007",
        name: "Ion Exchange Resins",
        shortPitch:
          "Selectively strip out hardness, nitrates, heavy metals, and organics with precision resins that regenerate on-site — giving you consistent, ultra-pure water reliably.",
        keyBenefits: [
          "Selective removal of hardness, nitrates & heavy metals",
          "Regenerable resins for long operational life",
          "Automated valve control minimises operator intervention",
          "Suitable for ultrapure and potable water applications",
        ],
        typicalApplications: [
          "Boiler feed water and steam generation",
          "Semiconductor and pharmaceutical ultrapure water",
          "Nitrate removal from drinking water sources",
          "Mining and industrial effluent metal recovery",
        ],
        description:
          "Selective removal of hardness, nitrates, heavy metals, and organics using strong acid cation, weak base anion, and specialty resins with regeneration systems and automated valve control.",
        price: {
          aed: "AED 7,050 – 35,050",
          usd: "USD 1,920 – 9,545",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-008",
        name: "Clarification & Sedimentation",
        shortPitch:
          "Achieve 90%+ suspended solids removal with minimal chemical use and a compact footprint — the ideal primary treatment step for any scale of water or wastewater plant.",
        keyBenefits: [
          "90%+ suspended solids removal efficiency",
          "Lamella plates and DAF units for compact designs",
          "Polymer dosing optimisation reduces chemical costs",
          "Scalable from small plants to large utility schemes",
        ],
        typicalApplications: [
          "Raw water pre-treatment for drinking water plants",
          "Industrial stormwater and surface runoff management",
          "Wastewater primary treatment",
          "Mining and quarrying process water clarification",
        ],
        description:
          "Lamella plate settlers, tube settlers, and dissolved air flotation (DAF) systems achieving 90%+ suspended solids removal with minimal footprint and polymer dosing optimization.",
        price: {
          isQuote: true,
          note: "Price on application – plant-scale system",
        },
        image:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-WT-009",
        name: "Activated Carbon Filtration",
        shortPitch:
          "Remove chlorine, VOCs, pesticides, and pharmaceuticals with high-capacity activated carbon that reliably polishes water to the highest purity standards.",
        keyBenefits: [
          "Adsorbs chlorine, VOCs, pesticides & pharmaceuticals",
          "Granular and powdered carbon options available",
          "Thermal and steam regeneration to extend media life",
          "Pressure and gravity flow configurations",
        ],
        typicalApplications: [
          "Municipal drinking water final polishing",
          "Industrial process water purification",
          "Removal of emerging contaminants from effluent",
          "Odour control in wastewater treatment plants",
        ],
        description:
          "Granular and powdered activated carbon systems for adsorption of chlorine, VOCs, pesticides, and pharmaceuticals, with pressure or gravity configurations and thermal or steam regeneration options.",
        price: {
          aed: "AED 9,050 – 52,380",
          usd: "USD 2,467 – 14,270",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop&auto=format",
      },
    ],
    applications: [
      "Municipal drinking water treatment plants",
      "Industrial process water purification and recycling",
      "Wastewater treatment and discharge compliance",
      "Desalination and brackish water conversion",
      "Food and beverage production water quality",
      "Pharmaceutical and semiconductor ultrapure water systems",
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Products",
    icon: "/assets/generated/icon-renewable.dim_256x256.png",
    headline: "Clean Energy Generation & Storage",
    intro:
      "Our renewable energy solutions enable the transition to sustainable power generation through solar, wind, and energy storage technologies. Designed for commercial, industrial, and utility-scale applications, our products deliver reliable clean energy with optimized return on investment.",
    aboutGE3S:
      "GE3S is an Abu Dhabi- and Dubai-based engineering services company specialising in renewable energy system design, procurement, and commissioning across the UAE and GCC. From rooftop solar to utility-scale storage, our certified engineers provide bankable energy assessments, EPC project management, and long-term O&M support — helping clients achieve energy independence and sustainability targets. Contact us at info@ge3s.org or visit www.ge3s.org.",
    productGroups: [
      {
        sku: "GE-RE-001",
        name: "Monocrystalline Solar Panels",
        shortPitch:
          "The UAE's 3,000+ hours of annual sunshine is your most valuable asset — harness it with 21–23% efficiency monocrystalline panels backed by a 25-year performance warranty.",
        keyBenefits: [
          "21–23% conversion efficiency — top-tier performance",
          "Bifacial options add 10–30% additional energy yield",
          "Degradation below 0.5%/year for reliable long-term output",
          "25-year performance and 12-year product warranties",
        ],
        typicalApplications: [
          "Commercial and industrial rooftop solar",
          "Ground-mount utility-scale solar farms",
          "Solar carport and shade structure installations",
          "Residential and mixed-use developments",
        ],
        description:
          "High-efficiency photovoltaic modules with 21-23% conversion efficiency, bifacial options for 10-30% additional yield, and 25-year performance warranties with degradation rates below 0.5% annually.",
        price: {
          aed: "AED 1,467 – 4,000",
          usd: "USD 399 – 1,090",
          isQuote: false,
          note: "excl. VAT per panel",
        },
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-002",
        name: "Solar Inverters & Optimizers",
        shortPitch:
          "Squeeze every kilowatt-hour from your solar array with 98%+ efficient inverters and smart optimizers that monitor, protect, and maximise performance from every panel.",
        keyBenefits: [
          "98%+ conversion efficiency minimises energy loss",
          "Integrated MPPT tracking per string or module",
          "Cloud monitoring with real-time performance data",
          "Grid-tie and off-grid configurations available",
        ],
        typicalApplications: [
          "Commercial and industrial grid-tied solar systems",
          "Residential rooftop solar with net metering",
          "Off-grid and hybrid solar installations",
          "Utility-scale central inverter stations",
        ],
        description:
          "String inverters, microinverters, and power optimizers with 98%+ efficiency, integrated MPPT tracking, grid-tie capabilities, and remote monitoring via cloud-based platforms.",
        price: {
          aed: "AED 1,867 – 18,476",
          usd: "USD 509 – 5,033",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-003",
        name: "Wind Turbine Systems",
        shortPitch:
          "Diversify your renewable energy mix with wind power — from small commercial installations to multi-megawatt utility turbines — engineered for the region's wind conditions.",
        keyBenefits: [
          "10 kW to 3 MW per turbine — right-sized for your site",
          "Direct-drive and geared drivetrain options",
          "Advanced blade aerodynamics for low wind-speed sites",
          "Predictive maintenance systems ensure maximum uptime",
        ],
        typicalApplications: [
          "Coastal industrial and port facilities",
          "Remote and off-grid power generation",
          "Wind-solar hybrid microgrid systems",
          "Utility wind farm development",
        ],
        description:
          "Horizontal-axis wind turbines from 10 kW to 3 MW capacity with direct-drive or geared drivetrains, advanced blade aerodynamics, and predictive maintenance systems for maximum uptime.",
        price: {
          isQuote: true,
          note: "Price on application – capacity & site specific",
        },
        image:
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-004",
        name: "Battery Energy Storage (BESS)",
        shortPitch:
          "Store the sun, shift the load, and stabilise the grid — our BESS solutions from 50 kWh to 10 MWh give you energy independence and resilience around the clock.",
        keyBenefits: [
          "50 kWh to 10 MWh scalable capacity",
          "Integrated BMS, thermal management & fire suppression",
          "Peak shaving reduces energy bills significantly",
          "Seamless solar PV integration for self-consumption",
        ],
        typicalApplications: [
          "Commercial and industrial behind-the-meter storage",
          "Solar self-consumption optimisation",
          "Grid frequency regulation and ancillary services",
          "Remote and off-grid backup power",
        ],
        description:
          "Lithium-ion and flow battery systems providing 50 kWh to 10 MWh capacity with integrated battery management, thermal control, and fire suppression for peak shaving and grid stabilization.",
        price: {
          isQuote: true,
          note: "Price on application – system size dependent",
        },
        image:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2107b5?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-005",
        name: "Solar Mounting Structures",
        shortPitch:
          "A solar system is only as strong as its foundation — our engineered mounting structures handle UAE wind loads and extreme heat while maximising your energy capture every hour of the day.",
        keyBenefits: [
          "Engineered for UAE wind loads and extreme temperatures",
          "Fixed-tilt and single/dual-axis tracker options",
          "Ground-mount, rooftop & carport configurations",
          "Hot-dip galvanised or anodised aluminium finish",
        ],
        typicalApplications: [
          "Commercial rooftop and flat-roof installations",
          "Ground-mount solar farm projects",
          "Solar carport over parking structures",
          "Agrivoltaic and dual-use land applications",
        ],
        description:
          "Ground-mount, rooftop, and carport racking systems engineered for wind and snow loads, with fixed-tilt or single/dual-axis tracking options to maximize energy capture throughout the day.",
        price: {
          aed: "AED 3,714 – 35,048",
          usd: "USD 1,011 – 9,543",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-006",
        name: "Hybrid Power Systems",
        shortPitch:
          "Cut your diesel consumption by up to 80% with intelligent hybrid systems that blend solar, wind, batteries, and gensets — delivering stable, low-cost power wherever you operate.",
        keyBenefits: [
          "Up to 80% fuel savings versus diesel-only systems",
          "Intelligent load management for seamless switching",
          "Off-grid and microgrid capable",
          "Modular design allows phased investment",
        ],
        typicalApplications: [
          "Remote construction sites and labour camps",
          "Telecom towers and remote infrastructure",
          "Desert and offshore energy-independent facilities",
          "Island and community microgrid projects",
        ],
        description:
          "Integrated solar-wind-battery-diesel configurations with intelligent load management, seamless switching, and fuel savings up to 80% for off-grid and microgrid applications.",
        price: {
          isQuote: true,
          note: "Price on application – custom configuration",
        },
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-007",
        name: "Solar Water Heating",
        shortPitch:
          "Use the UAE's abundant sun to cover 60–80% of your hot water energy needs — with payback periods as short as 3 years and no moving parts to maintain.",
        keyBenefits: [
          "60–80% of DHW energy needs met by solar",
          "Evacuated tube and flat-plate collector options",
          "3–7 year typical payback in GCC climates",
          "No moving parts — low maintenance for decades",
        ],
        typicalApplications: [
          "Hotels and serviced apartment blocks",
          "Schools, hospitals and healthcare facilities",
          "Residential villas and multi-unit buildings",
          "Industrial process heating applications",
        ],
        description:
          "Evacuated tube and flat-plate collectors with glycol or drainback systems, providing 60-80% of domestic hot water needs with payback periods of 3-7 years in most climates.",
        price: {
          aed: "AED 5,333 – 27,143",
          usd: "USD 1,452 – 7,395",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-008",
        name: "Charge Controllers & Combiners",
        shortPitch:
          "Protect your battery bank, optimise charging efficiency, and monitor every amp flowing through your system with intelligent MPPT controllers and combiners built for the field.",
        keyBenefits: [
          "MPPT technology maximises battery charge efficiency",
          "Surge and over-voltage protection included",
          "DC combiners for multi-string solar arrays",
          "Compact and field-serviceable designs",
        ],
        typicalApplications: [
          "Off-grid solar battery systems",
          "Telecom and remote monitoring power stations",
          "Rural electrification and community solar projects",
          "Marine and mobile renewable energy systems",
        ],
        description:
          "MPPT and PWM charge controllers for battery-based systems, DC combiners with surge protection, and monitoring accessories for optimized charging and system protection.",
        price: {
          aed: "AED 933 – 9,000",
          usd: "USD 254 – 2,451",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-RE-009",
        name: "Solar Street Lights",
        shortPitch:
          "Illuminate any street or outdoor space entirely off-grid — intelligent solar street lights that dim when nobody is watching and shine when it counts, with 3–5 days of battery autonomy.",
        keyBenefits: [
          "All-in-one solar, battery & LED in one weatherproof unit",
          "Motion-sensing dimming from 100% to 30% saves battery",
          "3–5 cloudy-day autonomy with LiFePO4 battery",
          "IP66 die-cast aluminium — built for UAE coastal climate",
        ],
        typicalApplications: [
          "Residential streets and villa community roads",
          "Car parks, logistics yards & perimeter lighting",
          "Parks, walkways and promenade lighting",
          "Remote roads and desert highways",
        ],
        description:
          "All-in-one solar street lighting systems with monocrystalline PV panel, lithium iron phosphate (LiFePO4) battery, and high-luminance LED lamp. Features intelligent motion sensing with dimming from 100% to 30% during low-traffic hours, extending battery life. IP66-rated housing with corrosion-resistant die-cast aluminum, pole heights from 4–10 m, lumen output 3,000–12,000 lm, and autonomy of 3–5 cloudy days. Ideal for roads, car parks, residential streets, and commercial areas across the UAE.",
        price: {
          aed: "AED 1,850 – 6,800",
          usd: "USD 504 – 1,852",
          isQuote: false,
          note: "excl. VAT per unit",
        },
        image: "/assets/generated/product-solar-street-light.dim_600x400.jpg",
      },
      {
        sku: "GE-RE-010",
        name: "LED Lights",
        shortPitch:
          "Reduce your lighting energy bill by up to 70% with high-efficacy LED fixtures that last 50,000+ hours — available for every indoor and outdoor application.",
        keyBenefits: [
          "130–180 lm/W efficacy — up to 70% energy savings",
          "50,000+ hour rated lifespan reduces replacement costs",
          "CRI ≥ 80 for true, vibrant colour rendering",
          "DALI/0-10V dimming, IP65 outdoor rating, DLC/CE certified",
        ],
        typicalApplications: [
          "Offices, retail shops & hospitality interiors",
          "Warehouses, factories & high-bay industrial facilities",
          "Outdoor street, road & car park lighting",
          "Healthcare, education & institutional buildings",
        ],
        description:
          "Commercial and industrial LED lighting solutions including LED panels, high-bay fittings, tri-proof linear lights, streetlights, and retrofit bulbs. Delivering 130–180 lm/W efficacy, CRI ≥ 80, and a rated lifespan of 50,000+ hours, these fixtures reduce energy consumption by up to 70% versus conventional lighting. Available in colour temperatures from 3000 K (warm white) to 6500 K (daylight), with DALI/0-10 V dimming, IP65 ratings for outdoor use, and DLC/CE certifications. Suitable for offices, warehouses, factories, streets, and hospitality environments.",
        price: {
          aed: "AED 55 – 2,750",
          usd: "USD 15 – 749",
          isQuote: false,
          note: "excl. VAT per fixture",
        },
        image: "/assets/generated/product-led-lights.dim_600x400.jpg",
      },
      {
        sku: "GE-RE-011",
        name: "Solar Daylighting Systems",
        shortPitch:
          "Bring the warmth and energy of natural sunlight deep into any interior space — zero operating energy, zero electricity cost, and ESTIDAMA Pearl credit eligible.",
        keyBenefits: [
          "Zero operating energy — sunlight delivered for free",
          "100–1,500 lux delivered up to 9.3 m² per unit",
          "Optional hybrid LED module for night-time continuity",
          "ESTIDAMA Pearl-credit eligible in the UAE",
        ],
        typicalApplications: [
          "Offices, schools & commercial interior daylighting",
          "Basements, car parks & deep-floor-plate buildings",
          "Retail stores, showrooms & museums",
          "Warehouses seeking natural lighting compliance",
        ],
        description:
          "Tubular daylighting devices (TDDs) and hybrid solar fiber-optic systems that harvest natural sunlight from rooftop collectors and transmit it indoors via highly reflective tubes or optical fibers, eliminating artificial lighting during daylight hours. Dome diameters from 250–530 mm deliver 100–1,500 lux to interior spaces up to 9.3 m² per unit. The optional hybrid LED module maintains illumination at night with the same fixture. ESTIDAMA Pearl-credit eligible, zero operating energy, and effective in UAE's high solar irradiance environment (GHI > 2,000 kWh/m²/year).",
        price: {
          aed: "AED 1,285 – 5,500",
          usd: "USD 350 – 1,498",
          isQuote: false,
          note: "excl. VAT per unit",
        },
        image: "/assets/generated/product-solar-daylight.dim_600x400.jpg",
      },
    ],
    applications: [
      "Commercial rooftop and ground-mount solar installations",
      "Utility-scale solar and wind farms",
      "Off-grid and remote power systems",
      "Industrial energy cost reduction and demand management",
      "Electric vehicle charging infrastructure",
      "Microgrid and community energy projects",
    ],
  },
  {
    id: "monitoring",
    title: "Energy and Environment Monitoring Products",
    icon: "/assets/generated/icon-monitoring.dim_256x256.png",
    headline: "Real-Time Environmental & Energy Intelligence",
    intro:
      "Our monitoring solutions provide actionable data for environmental compliance, energy optimization, and operational efficiency. From air quality sensors to comprehensive energy management platforms, we deliver the insights needed to drive sustainability performance and regulatory adherence.",
    aboutGE3S:
      "GE3S is a specialist environmental and energy monitoring consultant with over a decade of experience designing, deploying, and operating monitoring networks across the UAE and wider Gulf region. Our team of accredited environmental scientists and instrument engineers provides turnkey monitoring solutions — from sensor selection and network design to data management, reporting, and regulatory liaison. Reach us at info@ge3s.org or www.ge3s.org.",
    productGroups: [
      {
        sku: "GE-EM-001",
        name: "Air Quality Monitoring Stations",
        shortPitch:
          "Know exactly what's in the air above your site — certified multi-parameter stations delivering real-time PM2.5, NOx, SO2, and VOC data with automatic exceedance alerts.",
        keyBenefits: [
          "Measures PM2.5, PM10, NOx, SO2, CO, O3 & VOCs",
          "MCERTS / EPA-approved measurement methods",
          "Real-time threshold alerts for instant action",
          "Integrated data logger and remote communications",
        ],
        typicalApplications: [
          "Industrial fence-line monitoring and compliance",
          "Smart city ambient air quality networks",
          "Construction site dust control management",
          "Port and logistics facility emission monitoring",
        ],
        description:
          "Multi-parameter analyzers measuring PM2.5, PM10, NOx, SO2, CO, O3, and VOCs with MCERTS or EPA-approved methods, data logging, and real-time alerts for threshold exceedances.",
        price: {
          aed: "AED 18,476 – 104,762",
          usd: "USD 5,033 – 28,533",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1611273686780-b5e22e574e0c?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-002",
        name: "Water Quality Sensors",
        shortPitch:
          "Continuous, reliable water quality data in your pipes, tanks, or watercourse — multi-parameter probes that self-clean, auto-compensate, and integrate directly into your control system.",
        keyBenefits: [
          "Measures pH, conductivity, turbidity, DO, ORP & chlorine",
          "Automatic temperature compensation for accurate readings",
          "Self-cleaning mechanisms for reduced maintenance",
          "4-20mA and Modbus output for SCADA integration",
        ],
        typicalApplications: [
          "Water and wastewater treatment plant process control",
          "Distribution network water quality surveillance",
          "Industrial cooling and process water monitoring",
          "Marine, coastal and inland waterway surveys",
        ],
        description:
          "Inline and submersible probes for pH, conductivity, turbidity, dissolved oxygen, ORP, and chlorine with automatic temperature compensation, self-cleaning mechanisms, and 4-20mA or Modbus output.",
        price: {
          aed: "AED 3,714 – 18,476",
          usd: "USD 1,011 – 5,033",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-003",
        name: "Energy Management Systems (EMS)",
        shortPitch:
          "See where every kilowatt goes — an AI-powered EMS that tracks all your energy streams, flags anomalies, and delivers clear optimisation recommendations to cut bills and carbon.",
        keyBenefits: [
          "Integrates electricity, gas, water & thermal metering",
          "AI anomaly detection flags waste instantly",
          "Automated reports for ISO 50001 & sustainability audits",
          "Cloud dashboard accessible from any device",
        ],
        typicalApplications: [
          "Corporate headquarters and commercial buildings",
          "Industrial manufacturing energy optimisation",
          "Hospital and university campus energy management",
          "Hotel and hospitality sustainability programmes",
        ],
        description:
          "Cloud-based platforms integrating smart meters, sub-meters, and IoT sensors to track electricity, gas, water, and thermal energy with AI-driven analytics for anomaly detection and optimization recommendations.",
        price: {
          isQuote: true,
          note: "Price on application – enterprise platform",
        },
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-004",
        name: "Greenhouse Gas Analyzers",
        shortPitch:
          "Measure CO₂, CH₄, and N₂O at stack or ambient levels with ±2% accuracy — the certified data you need for carbon accounting, trading, and regulatory reporting.",
        keyBenefits: [
          "NDIR and laser-based analysis for ±2% accuracy",
          "Continuous CO₂, CH₄ and N₂O measurement",
          "Automated calibration routines ensure data integrity",
          "Suitable for stack, ambient & process gas streams",
        ],
        typicalApplications: [
          "Industrial stack emissions monitoring",
          "Carbon credit verification and reporting",
          "Fugitive methane detection at oil & gas facilities",
          "Agriculture and waste facility GHG inventories",
        ],
        description:
          "NDIR and laser-based instruments for continuous CO2, CH4, and N2O measurement in stack emissions, ambient air, and process streams with accuracy to ±2% and automated calibration routines.",
        price: {
          aed: "AED 36,000 – 175,238",
          usd: "USD 9,810 – 47,714",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-005",
        name: "Noise & Vibration Monitors",
        shortPitch:
          "Protect your licence to operate — Class 1 noise and vibration monitors with long-term logging and automated compliance reporting for construction, industry, and transport.",
        keyBenefits: [
          "Class 1 sound level measurement with octave band analysis",
          "Vibration sensors with structural damage alert thresholds",
          "Continuous long-term logging for permit compliance",
          "Weatherproof housing for permanent or temporary deployment",
        ],
        typicalApplications: [
          "Construction site noise and vibration management",
          "Industrial facility boundary noise compliance",
          "Road and rail infrastructure impact assessment",
          "Demolition and blasting vibration control",
        ],
        description:
          "Class 1 sound level meters and vibration sensors with octave band analysis, long-term logging, and compliance reporting for construction sites, industrial facilities, and transportation corridors.",
        price: {
          aed: "AED 5,333 – 27,143",
          usd: "USD 1,452 – 7,395",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-006",
        name: "Weather & Meteorological Stations",
        shortPitch:
          "Professional-grade weather data at your site — wireless multi-parameter stations delivering temperature, wind, solar radiation, and pressure to your SCADA or cloud platform in real time.",
        keyBenefits: [
          "Measures temperature, humidity, wind, solar radiation & pressure",
          "Wireless connectivity — 4G, Wi-Fi or satellite options",
          "SCADA and cloud data platform integration",
          "Rugged housing rated for desert and coastal UAE climates",
        ],
        typicalApplications: [
          "Solar and wind farm resource assessment and monitoring",
          "Construction site and outdoor event weather management",
          "Agriculture, irrigation and horticulture operations",
          "Aviation, port and marine operations support",
        ],
        description:
          "Professional-grade sensors for temperature, humidity, wind speed/direction, solar radiation, barometric pressure, and precipitation with wireless connectivity and integration to SCADA systems.",
        price: {
          aed: "AED 10,952 – 52,381",
          usd: "USD 2,981 – 14,267",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1504608524841-42584f0b59b0?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-007",
        name: "Smart Power Meters",
        shortPitch:
          "Visibility is the first step to savings — smart metering with 0.5% accuracy class and harmonic analysis gives facility teams the data they need to act on energy waste immediately.",
        keyBenefits: [
          "0.5% accuracy class for reliable billing and reporting",
          "Harmonic analysis and power factor measurement",
          "Modbus / BACnet for seamless BMS and SCADA integration",
          "Single and three-phase models for any circuit",
        ],
        typicalApplications: [
          "Building sub-metering and tenant billing",
          "Industrial energy monitoring and demand management",
          "Solar PV generation and export monitoring",
          "Data centre and critical infrastructure power tracking",
        ],
        description:
          "Three-phase and single-phase meters with 0.5% accuracy class, harmonic analysis, power factor measurement, and Modbus/BACnet protocols for building and industrial energy monitoring.",
        price: {
          aed: "AED 933 – 5,333",
          usd: "USD 254 – 1,452",
          isQuote: false,
          note: "excl. VAT per unit",
        },
        image:
          "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-008",
        name: "Soil & Groundwater Sensors",
        shortPitch:
          "Understand what's happening beneath the surface — multi-parameter soil and groundwater sensors trusted by environmental scientists for site assessment, remediation, and compliance.",
        keyBenefits: [
          "Measures moisture, temperature, EC & pH in soil",
          "Groundwater level loggers for aquifer and flood management",
          "Suitable for site contamination and remediation monitoring",
          "Wireless telemetry for remote data access",
        ],
        typicalApplications: [
          "Environmental site assessment and due diligence",
          "Contaminated land remediation monitoring",
          "Agricultural irrigation scheduling and optimisation",
          "Groundwater and aquifer level management",
        ],
        description:
          "Multiparameter probes for soil moisture, temperature, EC, and pH, plus groundwater level loggers and sampling equipment for environmental site assessment and remediation monitoring.",
        price: {
          aed: "AED 5,333 – 35,048",
          usd: "USD 1,452 – 9,543",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-009",
        name: "Thermal Imaging Cameras",
        shortPitch:
          "See the invisible — thermal cameras that reveal energy losses, electrical hotspots, and building defects in seconds, saving costly reactive maintenance and improving safety.",
        keyBenefits: [
          "160×120 to 640×480 resolution for fine defect detection",
          "Temperature range -20°C to 1200°C",
          "Electrical, mechanical & building envelope inspections",
          "Handheld and fixed-mount options available",
        ],
        typicalApplications: [
          "Building energy audits and envelope inspections",
          "Electrical panel and switchgear hotspot detection",
          "Industrial process temperature profiling",
          "Solar PV panel fault and delamination detection",
        ],
        description:
          "Handheld and fixed-mount infrared cameras with 160x120 to 640x480 resolution for energy audits, electrical inspections, and building envelope analysis with temperature range -20°C to 1200°C.",
        price: {
          aed: "AED 3,714 – 70,000",
          usd: "USD 1,011 – 19,067",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1608096299210-db7e38487075?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-010",
        name: "Weather Monitoring Systems",
        shortPitch:
          "Site-specific real-time meteorological data via ultrasonic anemometers, pyranometers, and tipping-bucket rain gauges — connected by cellular, Wi-Fi, or satellite to your platform of choice.",
        keyBenefits: [
          "Ultrasonic anemometry — no moving parts to maintain",
          "Pyranometers for solar irradiance data",
          "Cellular, Wi-Fi or satellite connectivity options",
          "Suitable for remote desert and urban deployments",
        ],
        typicalApplications: [
          "Solar and renewable energy resource monitoring",
          "Smart city and urban heat island studies",
          "Flood early warning and stormwater management",
          "Remote agricultural and environmental monitoring",
        ],
        description:
          "Comprehensive weather monitoring systems with ultrasonic anemometers, tipping bucket rain gauges, pyranometers, and multi-parameter data loggers providing real-time meteorological data with cellular, Wi-Fi, or satellite connectivity for remote and urban deployments.",
        price: {
          aed: "AED 18,476 – 104,762",
          usd: "USD 5,033 – 28,533",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1504608524841-42584f0b59b0?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-011",
        name: "Acoustic Doppler Current Profilers (ADCPs)",
        shortPitch:
          "Survey-grade acoustic Doppler instruments that map velocity profiles from surface to seabed — trusted for river flow studies, tidal surveys, and oceanographic research.",
        keyBenefits: [
          "Velocity profiles from 0.1 to 20 m/s across 0.5–1,000 m depth",
          "Built-in wave and turbulence analysis capabilities",
          "Vessel-mounted, moored, or bottom-tracking configurations",
          "Used for regulatory flow discharge measurements",
        ],
        typicalApplications: [
          "River flow measurement and flood modelling",
          "Coastal and tidal current surveys",
          "Offshore and nearshore marine site assessments",
          "Dredging and marine construction monitoring",
        ],
        description:
          "High-precision acoustic Doppler instruments for river flow, tidal current, and oceanographic surveys, measuring velocity profiles from 0.1 m/s to 20 m/s across depths from 0.5 m to 1,000 m with built-in wave and turbulence analysis capabilities.",
        price: {
          isQuote: true,
          note: "Price on application – survey-grade instruments",
        },
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-012",
        name: "Ambient Air Quality Monitoring",
        shortPitch:
          "Fixed and mobile certified monitoring stations measuring all key criteria pollutants — giving regulators, developers, and operators the compliant data they need to manage air quality.",
        keyBenefits: [
          "Measures PM2.5, PM10, NO2, SO2, CO & O3 to EPA/EU standards",
          "Fixed and mobile configurations for any deployment",
          "Cloud data management with public dashboard capability",
          "Automated regulatory reporting tool included",
        ],
        typicalApplications: [
          "Urban and smart city air quality management",
          "Industrial zone and free zone regulatory compliance",
          "Environmental impact assessment monitoring",
          "Traffic and transport corridor air quality studies",
        ],
        description:
          "Fixed and mobile ambient air quality monitoring stations measuring criteria pollutants (PM2.5, PM10, NO2, SO2, CO, O3) and toxic air contaminants to EPA, EU, and regional standards, with cloud-based data management, public dashboards, and regulatory reporting tools.",
        price: {
          aed: "AED 36,000 – 175,238",
          usd: "USD 9,810 – 47,714",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1611273686780-b5e22e574e0c?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-EM-013",
        name: "Indoor Air Quality Monitoring",
        shortPitch:
          "Create healthier, more productive indoor environments — multi-sensor IAQ monitors that track CO₂, VOCs, PM2.5, and humidity, integrating directly with your HVAC system.",
        keyBenefits: [
          "Monitors CO₂, TVOC, PM2.5, temperature, humidity & HCHO",
          "Real-time display and mobile app visibility",
          "BACnet/Modbus HVAC integration for automated ventilation",
          "WELL Building Standard compliance reporting",
        ],
        typicalApplications: [
          "Offices seeking WELL or LEED indoor quality credits",
          "Schools and universities to protect student health",
          "Hospitals and healthcare facilities infection control",
          "Hotels and residential towers occupant wellbeing",
        ],
        description:
          "Multi-sensor IAQ monitors measuring CO2, TVOC, PM2.5, temperature, humidity, and formaldehyde for offices, schools, and healthcare facilities, with real-time displays, HVAC integration via BACnet/Modbus, and WELL Building Standard compliance reporting.",
        price: {
          aed: "AED 1,867 – 10,476",
          usd: "USD 509 – 2,852",
          isQuote: false,
          note: "excl. VAT per unit",
        },
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&auto=format",
      },
    ],
    applications: [
      "Industrial emissions monitoring and regulatory compliance",
      "Building energy management and LEED certification",
      "Environmental impact assessment and remediation",
      "Smart city air quality and noise monitoring networks",
      "Water treatment plant process control and optimization",
      "Manufacturing energy efficiency and ISO 50001 programs",
    ],
  },
  {
    id: "construction",
    title: "Eco-Friendly Construction Materials",
    icon: "/assets/generated/icon-construction.dim_256x256.png",
    headline: "Sustainable Building Materials for Green Construction",
    intro:
      "Our eco-friendly construction materials combine superior performance with reduced environmental impact. From recycled content products to low-carbon alternatives, we supply the building industry with materials that meet stringent green building standards while delivering durability and cost-effectiveness.",
    aboutGE3S:
      "GE3S is a Dubai-based green building and sustainability consultancy with hands-on expertise supplying eco-friendly construction materials across the UAE and GCC. We work closely with developers, main contractors, and procurement teams to source, specify, and certify sustainable materials that satisfy LEED, BREEAM, Estidama Pearl, and local authority requirements. Reach our materials team at info@ge3s.org or visit www.ge3s.org.",
    productGroups: [
      {
        sku: "GE-CM-001",
        name: "Recycled Steel & Rebar",
        shortPitch:
          "The same strength as virgin steel — with 70% less embodied carbon. Our recycled rebar is EPD-verified and a straightforward route to LEED Materials & Resources credits.",
        keyBenefits: [
          "90%+ post-consumer scrap content",
          "Grade 60 / 420 MPa — full structural strength",
          "EPD-verified 70% lower embodied carbon",
          "LEED and Estidama Pearl materials credits eligible",
        ],
        typicalApplications: [
          "Residential, commercial & infrastructure structural frames",
          "Green building projects targeting LEED or Estidama credits",
          "Bridges, roads, and civil engineering works",
          "Industrial and warehouse construction",
        ],
        description:
          "Structural steel and reinforcing bars manufactured from 90%+ post-consumer scrap with equivalent strength to virgin steel (Grade 60/420 MPa) and EPD-verified 70% lower embodied carbon.",
        price: {
          aed: "AED 2,667 – 4,476 / tonne",
          usd: "USD 727 – 1,219 / tonne",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-002",
        name: "Low-Carbon Concrete Mixes",
        shortPitch:
          "Cut the carbon out of your concrete without cutting corners — our Portland-limestone and SCM blends reduce CO₂ by 30–60% while meeting all compressive strength requirements.",
        keyBenefits: [
          "30–60% CO₂ reduction versus standard OPC mixes",
          "Compressive strengths from 3,000 to 8,000 psi",
          "Fly ash, slag & silica fume supplementary blends",
          "Supports LEED and Estidama Pearl concrete credits",
        ],
        typicalApplications: [
          "Commercial and mixed-use building structures",
          "Infrastructure and civil engineering works",
          "Green certification project requirements",
          "Large pours where lower heat of hydration is beneficial",
        ],
        description:
          "Portland-limestone cement and supplementary cementitious materials (fly ash, slag, silica fume) reducing CO2 emissions by 30-60% while maintaining compressive strengths from 3,000 to 8,000 psi.",
        price: {
          aed: "AED 552 – 1,095 / m³",
          usd: "USD 150 – 298 / m³",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-003",
        name: "Reclaimed & FSC-Certified Timber",
        shortPitch:
          "Beautiful, responsibly sourced timber with a story to tell — salvaged and FSC/PEFC-certified wood for structural, interior, and architectural applications.",
        keyBenefits: [
          "FSC or PEFC chain-of-custody certification available",
          "Salvaged wood from responsibly deconstructed buildings",
          "Available in dimensional lumber, engineered wood & millwork",
          "Contributes to LEED Materials & Resources credits",
        ],
        typicalApplications: [
          "Interior fit-out and architectural feature elements",
          "Structural timber framing for low-rise buildings",
          "Hospitality, retail and high-end residential interiors",
          "Outdoor decking, cladding and landscape structures",
        ],
        description:
          "Salvaged wood from deconstructed buildings and sustainably harvested lumber with FSC or PEFC certification, available in dimensional lumber, engineered wood, and architectural millwork grades.",
        price: {
          aed: "AED 1,867 – 7,048 / m³",
          usd: "USD 509 – 1,919 / m³",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-004",
        name: "Recycled Insulation Materials",
        shortPitch:
          "High-performance thermal insulation from 75–85% recycled content — better for the planet, better for occupant health, and better for your building's energy performance rating.",
        keyBenefits: [
          "75–85% recycled content from cellulose, denim & mineral wool",
          "R-values from R-13 to R-60 for any climate zone",
          "Fire resistance rated and low VOC for healthy IAQ",
          "Supports LEED Indoor Environmental Quality credits",
        ],
        typicalApplications: [
          "Residential and commercial building thermal insulation",
          "Cold store and refrigerated warehouse insulation",
          "Acoustic insulation for partitions and floors",
          "Attic and roof insulation in green building projects",
        ],
        description:
          "Cellulose, denim, and mineral wool insulation made from 75-85% recycled content with R-values from R-13 to R-60, fire resistance ratings, and low VOC emissions for healthy indoor air quality.",
        price: {
          aed: "AED 55 – 219 / m²",
          usd: "USD 15 – 60 / m²",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-005",
        name: "Permeable Paving Systems",
        shortPitch:
          "Let the rain back into the ground — permeable paving solutions that handle full vehicular loads while achieving 80–100% stormwater infiltration and reducing urban heat island effects.",
        keyBenefits: [
          "80–100% stormwater infiltration rate",
          "Reduces urban heat island effect significantly",
          "Suitable for pedestrian and vehicular loading",
          "Supports LEED Sustainable Sites storm water credits",
        ],
        typicalApplications: [
          "Car parks, driveways & pedestrian plazas",
          "Municipal streetscaping and town square projects",
          "Stormwater management and SUDS schemes",
          "Green building outdoor space treatments",
        ],
        description:
          "Porous concrete, permeable pavers, and grid systems allowing 80-100% stormwater infiltration, reducing runoff and heat island effect while supporting vehicular and pedestrian loads.",
        price: {
          aed: "AED 186 – 552 / m²",
          usd: "USD 50 – 150 / m²",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-006",
        name: "Green Roofing Systems",
        shortPitch:
          "Turn your rooftop into a living, working asset — vegetated roof systems that insulate, manage stormwater, support biodiversity, and cool the building below.",
        keyBenefits: [
          "Extensive (low-maintenance) and intensive options",
          "Improves roof insulation and reduces cooling load",
          "Manages stormwater runoff at source",
          "Contributes to biodiversity and LEED Sustainable Sites",
        ],
        typicalApplications: [
          "Commercial and mixed-use building rooftops",
          "Podium decks and terrace gardens in urban towers",
          "Retail and hospitality outdoor amenity spaces",
          "Urban heat island mitigation projects",
        ],
        description:
          "Extensive and intensive vegetated roof assemblies with waterproofing membranes, drainage layers, growing media, and native plant selections providing insulation, stormwater management, and biodiversity.",
        price: {
          aed: "AED 371 – 1,095 / m²",
          usd: "USD 101 – 298 / m²",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-007",
        name: "Recycled Plastic Lumber",
        shortPitch:
          "Durable, zero-maintenance structural and decking members made from 95%+ recycled HDPE — immune to rot, insects, and moisture with a 50-year lifespan.",
        keyBenefits: [
          "95%+ post-consumer HDPE and LDPE content",
          "50-year lifespan — no painting, sealing or preserving",
          "Resistant to rot, insects, moisture & UV degradation",
          "Diverts plastic waste from landfill — circular economy",
        ],
        typicalApplications: [
          "Outdoor decking, boardwalks & marinas",
          "Fencing, edging & landscape structures",
          "Agricultural and equestrian facilities",
          "Coastal and marine exposure environments",
        ],
        description:
          "Composite decking, fencing, and structural members made from 95%+ post-consumer HDPE and LDPE with no maintenance requirements, 50-year lifespan, and resistance to rot, insects, and moisture.",
        price: {
          aed: "AED 276 – 733 / linear m",
          usd: "USD 75 – 200 / linear m",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-008",
        name: "Natural & Clay Plasters",
        shortPitch:
          "Breathable, zero-VOC lime and earthen plasters that naturally regulate humidity, improve air quality, and bring authentic natural warmth to any interior or exterior surface.",
        keyBenefits: [
          "Zero VOC emissions — contributes to LEED IEQ credits",
          "Breathable — passively regulates indoor humidity",
          "Natural thermal mass improves comfort and energy efficiency",
          "Pigmented finishes — smooth, textured & exposed aggregate",
        ],
        typicalApplications: [
          "Luxury residential and hospitality interior finishes",
          "Heritage restoration and conservation projects",
          "Healthy homes and biophilic design interiors",
          "Exterior facades in traditional and contemporary styles",
        ],
        description:
          "Lime-based and earthen plasters with zero VOCs, breathable properties for moisture regulation, and thermal mass benefits, available in smooth, textured, and pigmented finishes.",
        price: {
          aed: "AED 110 – 367 / m²",
          usd: "USD 30 – 100 / m²",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-009",
        name: "Bamboo Flooring & Panels",
        shortPitch:
          "Harder than oak, renewing every 5 years, and formaldehyde-free — strand-woven bamboo flooring and panels are the premium sustainable choice for beautiful, durable interiors.",
        keyBenefits: [
          "Janka hardness 1,300–1,800 — harder than most hardwoods",
          "Rapidly renewable — bamboo matures in 5 years",
          "Formaldehyde-free adhesives for healthy indoor air",
          "Dimensionally stable strand-woven construction",
        ],
        typicalApplications: [
          "Residential and commercial flooring",
          "Wall cladding and decorative panels",
          "Hospitality, restaurant and retail interiors",
          "Furniture, cabinetry and fit-out elements",
        ],
        description:
          "Rapidly renewable bamboo products with Janka hardness ratings exceeding oak (1,300-1,800), strand-woven construction for dimensional stability, and formaldehyde-free adhesives.",
        price: {
          aed: "AED 219 – 552 / m²",
          usd: "USD 60 – 150 / m²",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1558618587-fad5d8e7f109?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-CM-010",
        name: "Recycled Glass Aggregates",
        shortPitch:
          "Add colour, character, and circular economy credentials to your project — crushed post-consumer glass aggregates for concrete, terrazzo, and landscaping that meet ASTM C33 standards.",
        keyBenefits: [
          "100% post-consumer glass — full circular economy material",
          "Vibrant colour options for decorative concrete & terrazzo",
          "Meets ASTM C33 gradation standards",
          "Reduces primary aggregate consumption and landfill",
        ],
        typicalApplications: [
          "Architectural concrete and exposed aggregate finishes",
          "Terrazzo flooring and decorative surfaces",
          "Landscaping, groundcover and drainage layers",
          "Green building material credits and EPD documentation",
        ],
        description:
          "Crushed post-consumer glass for concrete, terrazzo, and landscaping applications, providing colorful aesthetics, diverting waste from landfills, and meeting ASTM C33 gradation standards.",
        price: {
          aed: "AED 110 – 548 / tonne",
          usd: "USD 30 – 150 / tonne",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1513002749461-2f12f6db70fb?w=600&h=400&fit=crop&auto=format",
      },
    ],
    applications: [
      "LEED, BREEAM, and Living Building Challenge certified projects",
      "Net-zero energy and carbon-neutral building construction",
      "Affordable housing and community development",
      "Commercial office and retail green building retrofits",
      "Educational and institutional sustainable campus projects",
      "Infrastructure and civil engineering with environmental constraints",
    ],
  },
  {
    id: "bess",
    title: "BESS (Battery Energy Storage System)",
    icon: "/assets/generated/icon-bess.dim_256x256-transparent.png",
    headline: "Industrial-Grade Battery Energy Storage Systems",
    intro:
      "Our Battery Energy Storage Systems (BESS) provide scalable, reliable energy storage for commercial, industrial, and utility-scale applications. From grid stabilization to behind-the-meter optimization, our solutions integrate seamlessly with renewable energy sources and existing grid infrastructure to maximize energy independence and reduce costs.",
    aboutGE3S:
      "GE3S is a UAE-based energy storage specialist with a proven track record in BESS design, procurement, and project management across commercial, industrial, and utility sectors in the Gulf region. Our engineers hold international certifications in energy storage system design and safety, delivering bankable solutions compliant with IEC, NFPA, and local DEWA/ADDC interconnection requirements. Contact us at info@ge3s.org or www.ge3s.org.",
    productGroups: [
      {
        sku: "GE-BS-001",
        name: "Lithium-Ion BESS Containers",
        shortPitch:
          "Containerised LFP battery systems from 500 kWh to 5 MWh — complete with BMS, fire suppression, and remote monitoring, ready to deploy at your utility or C&I site.",
        keyBenefits: [
          "LFP chemistry — safe, long-life, thermally stable",
          "500 kWh to 5 MWh per container unit",
          "Integrated BMS, thermal management & fire suppression",
          "Remote SCADA monitoring for full operational visibility",
        ],
        typicalApplications: [
          "Utility-scale grid frequency regulation",
          "Industrial peak shaving and demand charge reduction",
          "Solar farm storage and curtailment reduction",
          "Critical infrastructure backup power",
        ],
        description:
          "Containerized LFP (Lithium Iron Phosphate) and NMC battery systems from 500 kWh to 5 MWh per unit, featuring integrated BMS, thermal management, fire suppression, and remote monitoring for utility and C&I applications.",
        price: {
          isQuote: true,
          note: "Price on application – utility & C&I scale",
        },
        image:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2107b5?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-002",
        name: "Vanadium Flow Battery Systems",
        shortPitch:
          "Built for deep daily cycling — vanadium flow batteries deliver 4–12 hour discharge with a 20,000+ cycle life, making them the ideal choice for long-duration energy storage.",
        keyBenefits: [
          "4–12 hour discharge capability for long-duration needs",
          "20,000+ cycle life — more than 25 years of daily use",
          "Independent power and energy scaling",
          "No capacity degradation or thermal runaway risk",
        ],
        typicalApplications: [
          "Long-duration grid storage and renewable integration",
          "Industrial facilities with daily deep-cycling loads",
          "Microgrid anchor storage for remote communities",
          "Ports and heavy logistics with continuous power demand",
        ],
        description:
          "Long-duration flow battery systems with 4–12 hour discharge capability, 20,000+ cycle life, and independent power/energy scaling for applications requiring daily deep cycling and long operational life.",
        price: {
          isQuote: true,
          note: "Price on application – long-duration storage",
        },
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-003",
        name: "Behind-the-Meter BESS",
        shortPitch:
          "Let your battery work while the grid charges high tariffs — commercial BESS with intelligent dispatch algorithms that deliver peak shaving, demand charge savings, and solar self-consumption optimisation.",
        keyBenefits: [
          "Peak shaving reduces demand charge significantly",
          "Time-of-use arbitrage maximises savings",
          "Integrates with existing solar PV installations",
          "3–6 year typical payback for C&I customers",
        ],
        typicalApplications: [
          "Shopping malls, offices & commercial buildings",
          "Factories and industrial manufacturing facilities",
          "Hospitals and data centres avoiding peak tariffs",
          "Cold storage and logistics facilities",
        ],
        description:
          "Commercial and industrial battery systems optimizing demand charge reduction, peak shaving, and time-of-use arbitrage, with typical payback periods of 3–6 years and integration with existing solar PV systems.",
        price: {
          isQuote: true,
          note: "Price on application – site-specific design",
        },
        image:
          "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-004",
        name: "Grid-Scale Energy Storage",
        shortPitch:
          "From 10 MWh to 500 MWh, our utility-class BESS platforms support grid-forming operation, frequency regulation, and capacity markets — delivered as a complete EPC turnkey project.",
        keyBenefits: [
          "10 MWh to 500 MWh — true utility-scale capacity",
          "Grid-forming inverter capability",
          "Ancillary service participation — frequency, voltage & capacity",
          "Full EPC turnkey delivery with long-term O&M",
        ],
        typicalApplications: [
          "National and regional grid stabilisation projects",
          "Renewable energy integration at utility scale",
          "Frequency regulation and spinning reserve replacement",
          "Power island support for new development zones",
        ],
        description:
          "Utility-class BESS platforms from 10 MWh to 500 MWh with turnkey EPC services, grid-forming inverter capabilities, and ancillary service participation including frequency regulation, voltage support, and capacity markets.",
        price: {
          isQuote: true,
          note: "Price on application – utility-scale system",
        },
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-005",
        name: "Battery Management Systems (BMS)",
        shortPitch:
          "The intelligent brain of every battery system — advanced BMS hardware providing cell-level protection, state estimation, and balancing for safe, optimised battery operation.",
        keyBenefits: [
          "Cell-level monitoring, balancing & protection",
          "State-of-charge and state-of-health estimation",
          "Compatible with Li-ion, lead-acid & flow chemistries",
          "CAN, Modbus & SCADA protocol integration",
        ],
        typicalApplications: [
          "Battery system retrofits and upgrades",
          "Custom battery pack design and manufacturing",
          "Research, testing and battery development labs",
          "EV and mobility battery monitoring integration",
        ],
        description:
          "Advanced BMS hardware and firmware providing cell-level monitoring, state-of-charge/health estimation, balancing, and protection for lithium, lead-acid, and flow battery chemistries with CAN, Modbus, and SCADA integration.",
        price: {
          aed: "AED 18,476 – 104,762",
          usd: "USD 5,033 – 28,533",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-006",
        name: "Hybrid Solar-BESS Solutions",
        shortPitch:
          "One controller, one platform, maximum self-consumption — our integrated solar-plus-storage packages eliminate grid dependence and deliver the highest renewable utilisation rates possible.",
        keyBenefits: [
          "Single-point control for solar PV and battery dispatch",
          "Intelligent energy dispatch for maximum self-consumption",
          "Zero-export functionality to meet DEWA requirements",
          "Remote monitoring and performance reporting included",
        ],
        typicalApplications: [
          "Commercial and industrial solar self-consumption optimisation",
          "Buildings targeting net-zero energy operation",
          "Free zones and campuses seeking energy independence",
          "Microgrids combining solar and storage",
        ],
        description:
          "Integrated solar PV and battery storage packages with single-point control, intelligent energy dispatch algorithms, and zero-export functionality for C&I customers targeting high renewable self-consumption rates.",
        price: {
          isQuote: true,
          note: "Price on application – integrated system",
        },
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-007",
        name: "UPS & Critical Power BESS",
        shortPitch:
          "Never lose power when it matters most — advanced battery UPS systems with <10 ms switchover, runtime from 15 minutes to 8 hours, and modular expansion for critical sites.",
        keyBenefits: [
          "Seamless switchover in less than 10 milliseconds",
          "Runtime from 15 minutes up to 8 hours",
          "Modular — expand capacity without downtime",
          "Advanced chemistry for long battery service life",
        ],
        typicalApplications: [
          "Data centres and server rooms",
          "Hospitals and healthcare critical systems",
          "Industrial control rooms and process automation",
          "Airport and transport infrastructure",
        ],
        description:
          "Uninterruptible power supply systems using advanced battery chemistries, providing seamless switchover in <10 ms, runtime from 15 minutes to 8 hours, and modular expansion for data centers, hospitals, and critical infrastructure.",
        price: {
          aed: "AED 36,000 – 350,000",
          usd: "USD 9,810 – 95,333",
          isQuote: false,
          note: "excl. VAT",
        },
        image:
          "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-008",
        name: "EV Fleet Charging BESS",
        shortPitch:
          "Deploy high-power EV fleet charging today — without a costly grid upgrade. Our battery buffer systems support DC fast charging up to 350 kW per station with smart demand management.",
        keyBenefits: [
          "Enables DC fast charging up to 350 kW without grid upgrades",
          "Smart scheduling optimises charging cost and battery life",
          "Scalable buffer capacity for growing EV fleets",
          "Reduces peak demand charges significantly",
        ],
        typicalApplications: [
          "Bus depots and commercial vehicle fleet operators",
          "Logistics and last-mile delivery fleet charging",
          "Public EV charging hub development",
          "Airport ground support equipment electrification",
        ],
        description:
          "Battery buffer systems enabling high-power EV fleet charging without costly grid upgrades, supporting DC fast charging up to 350 kW per station with smart scheduling and demand management software.",
        price: {
          isQuote: true,
          note: "Price on application – fleet size dependent",
        },
        image:
          "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop&auto=format",
      },
      {
        sku: "GE-BS-009",
        name: "Microgrid & Island Mode BESS",
        shortPitch:
          "Energy independence for remote sites — black-start capable BESS that integrates with solar, wind, and diesel to deliver stable, reliable power in fully islanded microgrids.",
        keyBenefits: [
          "Black-start capability — restores power independently",
          "Up to 100% renewable penetration in islanded mode",
          "Integrates with solar, wind and diesel gensets",
          "Ideal for remote communities with no grid access",
        ],
        typicalApplications: [
          "Remote desert and coastal sites off the main grid",
          "Island communities and tourism resort microgrids",
          "Mining and oil field remote power systems",
          "Military and government critical remote facilities",
        ],
        description:
          "Black-start capable battery systems for islanded microgrids and remote communities, integrating with diesel gensets, solar, and wind to provide stable power with up to 100% renewable penetration.",
        price: {
          isQuote: true,
          note: "Price on application – remote site project",
        },
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format",
      },
    ],
    applications: [
      "Utility-scale grid stabilization and frequency regulation",
      "Commercial and industrial peak shaving and demand charge management",
      "Renewable energy integration and solar self-consumption optimization",
      "Critical infrastructure UPS and backup power",
      "EV fleet charging infrastructure and depot management",
      "Off-grid and microgrid power supply for remote sites",
      "Capacity market participation and ancillary grid services",
      "Data center and hospital resilience power systems",
    ],
  },
];
