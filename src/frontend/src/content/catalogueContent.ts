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
  price: ProductPrice;
  image?: string;
}

export interface CategoryContent {
  id: string;
  title: string;
  icon: string;
  headline: string;
  intro: string;
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
    productGroups: [
      {
        sku: "GE-WM-001",
        name: "Automated Sorting Systems",
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
    productGroups: [
      {
        sku: "GE-WT-001",
        name: "Reverse Osmosis Systems",
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
    productGroups: [
      {
        sku: "GE-RE-001",
        name: "Monocrystalline Solar Panels",
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
    productGroups: [
      {
        sku: "GE-EM-001",
        name: "Air Quality Monitoring Stations",
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
        name: "Weather Monitoring",
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
    productGroups: [
      {
        sku: "GE-CM-001",
        name: "Recycled Steel & Rebar",
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
    productGroups: [
      {
        sku: "GE-BS-001",
        name: "Lithium-Ion BESS Containers",
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
