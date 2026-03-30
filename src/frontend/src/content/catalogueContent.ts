export interface ProductPrice {
  aed?: string;
  usd?: string;
  isQuote: boolean;
  note?: string;
}

export interface ProductGroup {
  name: string;
  description: string;
  price: ProductPrice;
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
        name: "Automated Sorting Systems",
        description:
          "AI-powered optical sorters and robotic picking systems that achieve 95%+ material purity for plastics, metals, paper, and glass streams with throughput capacities from 5 to 50 tons per hour.",
        price: {
          isQuote: true,
          note: "Price on application – custom industrial systems",
        },
      },
      {
        name: "Organic Waste Digesters",
        description:
          "Modular anaerobic digestion units converting food waste and agricultural residues into biogas and nutrient-rich digestate, with capacities ranging from 500 kg to 20 tons daily input.",
        price: {
          isQuote: true,
          note: "Price on application – capacity-dependent",
        },
      },
      {
        name: "Compaction & Baling Equipment",
        description:
          "Heavy-duty balers and compactors reducing waste volume by up to 90%, featuring automated tie systems and IoT monitoring for optimized logistics and storage efficiency.",
        price: {
          aed: "AED 38,000 – 185,000",
          usd: "USD 10,350 – 50,400",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Hazardous Waste Containment",
        description:
          "UN-certified storage solutions including double-walled tanks, spill containment pallets, and climate-controlled cabinets for safe handling of chemical, medical, and electronic waste.",
        price: {
          aed: "AED 5,800 – 73,500",
          usd: "USD 1,580 – 20,000",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Waste-to-Energy Gasification",
        description:
          "Advanced thermal conversion systems processing non-recyclable waste into syngas for power generation, achieving energy recovery rates exceeding 70% with minimal emissions.",
        price: {
          isQuote: true,
          note: "Price on application – large-scale system",
        },
      },
      {
        name: "Leachate Treatment Systems",
        description:
          "Multi-stage filtration and biological treatment units for landfill leachate, meeting discharge standards through reverse osmosis, activated carbon, and advanced oxidation processes.",
        price: {
          isQuote: true,
          note: "Price on application – site-specific design",
        },
      },
      {
        name: "Smart Collection Bins",
        description:
          "Solar-powered compacting bins with fill-level sensors and route optimization software, reducing collection frequency by 60% and operational costs by up to 40%.",
        price: {
          aed: "AED 3,900 – 19,500",
          usd: "USD 1,060 – 5,310",
          isQuote: false,
          note: "incl. 5% VAT per unit",
        },
      },
      {
        name: "Material Recovery Facilities (MRF)",
        description:
          "Turnkey single-stream and dual-stream recycling plants with integrated conveyors, screens, magnets, and quality control systems processing 10-100 tons per hour.",
        price: { isQuote: true, note: "Price on application – turnkey plant" },
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
        name: "Reverse Osmosis Systems",
        description:
          "High-efficiency membrane filtration units removing 95-99% of dissolved solids, available in capacities from 1,000 to 500,000 gallons per day with energy recovery devices and automated cleaning cycles.",
        price: {
          isQuote: true,
          note: "Price on application – capacity-dependent",
        },
      },
      {
        name: "UV Disinfection Units",
        description:
          "Chemical-free pathogen inactivation systems achieving 4-log reduction of bacteria and viruses using low-pressure or medium-pressure UV lamps with real-time intensity monitoring.",
        price: {
          aed: "AED 5,800 – 36,800",
          usd: "USD 1,580 – 10,020",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Biological Wastewater Treatment",
        description:
          "Moving bed biofilm reactors (MBBR) and membrane bioreactors (MBR) providing compact, high-performance treatment with BOD/COD removal rates exceeding 95% and minimal sludge production.",
        price: {
          isQuote: true,
          note: "Price on application – large-scale plant",
        },
      },
      {
        name: "Electrocoagulation Systems",
        description:
          "Advanced electrochemical treatment for heavy metal removal, oil-water separation, and color reduction in industrial effluents, operating with minimal chemical addition and low energy consumption.",
        price: {
          aed: "AED 37,000 – 184,000",
          usd: "USD 10,080 – 50,100",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Ultrafiltration Membranes",
        description:
          "Hollow-fiber and spiral-wound UF modules for turbidity removal, bacteria elimination, and pre-treatment applications with flux rates up to 100 LMH and automated backwash systems.",
        price: {
          aed: "AED 15,500 – 73,500",
          usd: "USD 4,220 – 20,000",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Ozone Generation Equipment",
        description:
          "On-site ozone production systems for oxidation of organic compounds, taste and odor control, and disinfection, with concentrations up to 12% by weight and integrated off-gas destruction.",
        price: {
          aed: "AED 19,400 – 73,500",
          usd: "USD 5,280 – 20,000",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Ion Exchange Resins",
        description:
          "Selective removal of hardness, nitrates, heavy metals, and organics using strong acid cation, weak base anion, and specialty resins with regeneration systems and automated valve control.",
        price: {
          aed: "AED 7,400 – 36,800",
          usd: "USD 2,015 – 10,020",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Clarification & Sedimentation",
        description:
          "Lamella plate settlers, tube settlers, and dissolved air flotation (DAF) systems achieving 90%+ suspended solids removal with minimal footprint and polymer dosing optimization.",
        price: {
          isQuote: true,
          note: "Price on application – plant-scale system",
        },
      },
      {
        name: "Activated Carbon Filtration",
        description:
          "Granular and powdered activated carbon systems for adsorption of chlorine, VOCs, pesticides, and pharmaceuticals, with pressure or gravity configurations and thermal or steam regeneration options.",
        price: {
          aed: "AED 9,500 – 55,000",
          usd: "USD 2,590 – 14,980",
          isQuote: false,
          note: "incl. 5% VAT",
        },
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
        name: "Monocrystalline Solar Panels",
        description:
          "High-efficiency photovoltaic modules with 21-23% conversion efficiency, bifacial options for 10-30% additional yield, and 25-year performance warranties with degradation rates below 0.5% annually.",
        price: {
          aed: "AED 1,540 – 4,200",
          usd: "USD 419 – 1,144",
          isQuote: false,
          note: "incl. 5% VAT per panel",
        },
      },
      {
        name: "Solar Inverters & Optimizers",
        description:
          "String inverters, microinverters, and power optimizers with 98%+ efficiency, integrated MPPT tracking, grid-tie capabilities, and remote monitoring via cloud-based platforms.",
        price: {
          aed: "AED 1,960 – 19,400",
          usd: "USD 534 – 5,285",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Wind Turbine Systems",
        description:
          "Horizontal-axis wind turbines from 10 kW to 3 MW capacity with direct-drive or geared drivetrains, advanced blade aerodynamics, and predictive maintenance systems for maximum uptime.",
        price: {
          isQuote: true,
          note: "Price on application – capacity & site specific",
        },
      },
      {
        name: "Battery Energy Storage (BESS)",
        description:
          "Lithium-ion and flow battery systems providing 50 kWh to 10 MWh capacity with integrated battery management, thermal control, and fire suppression for peak shaving and grid stabilization.",
        price: {
          isQuote: true,
          note: "Price on application – system size dependent",
        },
      },
      {
        name: "Solar Mounting Structures",
        description:
          "Ground-mount, rooftop, and carport racking systems engineered for wind and snow loads, with fixed-tilt or single/dual-axis tracking options to maximize energy capture throughout the day.",
        price: {
          aed: "AED 3,900 – 36,800",
          usd: "USD 1,062 – 10,020",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Hybrid Power Systems",
        description:
          "Integrated solar-wind-battery-diesel configurations with intelligent load management, seamless switching, and fuel savings up to 80% for off-grid and microgrid applications.",
        price: {
          isQuote: true,
          note: "Price on application – custom configuration",
        },
      },
      {
        name: "Solar Water Heating",
        description:
          "Evacuated tube and flat-plate collectors with glycol or drainback systems, providing 60-80% of domestic hot water needs with payback periods of 3-7 years in most climates.",
        price: {
          aed: "AED 5,600 – 28,500",
          usd: "USD 1,525 – 7,765",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Charge Controllers & Combiners",
        description:
          "MPPT and PWM charge controllers for battery-based systems, DC combiners with surge protection, and monitoring accessories for optimized charging and system protection.",
        price: {
          aed: "AED 980 – 9,450",
          usd: "USD 267 – 2,574",
          isQuote: false,
          note: "incl. 5% VAT",
        },
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
        name: "Air Quality Monitoring Stations",
        description:
          "Multi-parameter analyzers measuring PM2.5, PM10, NOx, SO2, CO, O3, and VOCs with MCERTS or EPA-approved methods, data logging, and real-time alerts for threshold exceedances.",
        price: {
          aed: "AED 19,400 – 110,000",
          usd: "USD 5,285 – 29,960",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Water Quality Sensors",
        description:
          "Inline and submersible probes for pH, conductivity, turbidity, dissolved oxygen, ORP, and chlorine with automatic temperature compensation, self-cleaning mechanisms, and 4-20mA or Modbus output.",
        price: {
          aed: "AED 3,900 – 19,400",
          usd: "USD 1,062 – 5,285",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Energy Management Systems (EMS)",
        description:
          "Cloud-based platforms integrating smart meters, sub-meters, and IoT sensors to track electricity, gas, water, and thermal energy with AI-driven analytics for anomaly detection and optimization recommendations.",
        price: {
          isQuote: true,
          note: "Price on application – enterprise platform",
        },
      },
      {
        name: "Greenhouse Gas Analyzers",
        description:
          "NDIR and laser-based instruments for continuous CO2, CH4, and N2O measurement in stack emissions, ambient air, and process streams with accuracy to ±2% and automated calibration routines.",
        price: {
          aed: "AED 37,800 – 184,000",
          usd: "USD 10,300 – 50,100",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Noise & Vibration Monitors",
        description:
          "Class 1 sound level meters and vibration sensors with octave band analysis, long-term logging, and compliance reporting for construction sites, industrial facilities, and transportation corridors.",
        price: {
          aed: "AED 5,600 – 28,500",
          usd: "USD 1,525 – 7,765",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Weather & Meteorological Stations",
        description:
          "Professional-grade sensors for temperature, humidity, wind speed/direction, solar radiation, barometric pressure, and precipitation with wireless connectivity and integration to SCADA systems.",
        price: {
          aed: "AED 11,500 – 55,000",
          usd: "USD 3,130 – 14,980",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Smart Power Meters",
        description:
          "Three-phase and single-phase meters with 0.5% accuracy class, harmonic analysis, power factor measurement, and Modbus/BACnet protocols for building and industrial energy monitoring.",
        price: {
          aed: "AED 980 – 5,600",
          usd: "USD 267 – 1,525",
          isQuote: false,
          note: "incl. 5% VAT per unit",
        },
      },
      {
        name: "Soil & Groundwater Sensors",
        description:
          "Multiparameter probes for soil moisture, temperature, EC, and pH, plus groundwater level loggers and sampling equipment for environmental site assessment and remediation monitoring.",
        price: {
          aed: "AED 5,600 – 36,800",
          usd: "USD 1,525 – 10,020",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Thermal Imaging Cameras",
        description:
          "Handheld and fixed-mount infrared cameras with 160x120 to 640x480 resolution for energy audits, electrical inspections, and building envelope analysis with temperature range -20°C to 1200°C.",
        price: {
          aed: "AED 3,900 – 73,500",
          usd: "USD 1,062 – 20,020",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Weather Monitoring",
        description:
          "Comprehensive weather monitoring systems with ultrasonic anemometers, tipping bucket rain gauges, pyranometers, and multi-parameter data loggers providing real-time meteorological data with cellular, Wi-Fi, or satellite connectivity for remote and urban deployments.",
        price: {
          aed: "AED 19,400 – 110,000",
          usd: "USD 5,285 – 29,960",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Acoustic Doppler Current Profilers (ADCPs)",
        description:
          "High-precision acoustic Doppler instruments for river flow, tidal current, and oceanographic surveys, measuring velocity profiles from 0.1 m/s to 20 m/s across depths from 0.5 m to 1,000 m with built-in wave and turbulence analysis capabilities.",
        price: {
          isQuote: true,
          note: "Price on application – survey-grade instruments",
        },
      },
      {
        name: "Ambient Air Quality Monitoring",
        description:
          "Fixed and mobile ambient air quality monitoring stations measuring criteria pollutants (PM2.5, PM10, NO2, SO2, CO, O3) and toxic air contaminants to EPA, EU, and regional standards, with cloud-based data management, public dashboards, and regulatory reporting tools.",
        price: {
          aed: "AED 37,800 – 184,000",
          usd: "USD 10,300 – 50,100",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Indoor Air Quality Monitoring",
        description:
          "Multi-sensor IAQ monitors measuring CO2, TVOC, PM2.5, temperature, humidity, and formaldehyde for offices, schools, and healthcare facilities, with real-time displays, HVAC integration via BACnet/Modbus, and WELL Building Standard compliance reporting.",
        price: {
          aed: "AED 1,960 – 11,000",
          usd: "USD 534 – 2,995",
          isQuote: false,
          note: "incl. 5% VAT per unit",
        },
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
        name: "Recycled Steel & Rebar",
        description:
          "Structural steel and reinforcing bars manufactured from 90%+ post-consumer scrap with equivalent strength to virgin steel (Grade 60/420 MPa) and EPD-verified 70% lower embodied carbon.",
        price: {
          aed: "AED 2,800 – 4,700 / tonne",
          usd: "USD 763 – 1,280 / tonne",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Low-Carbon Concrete Mixes",
        description:
          "Portland-limestone cement and supplementary cementitious materials (fly ash, slag, silica fume) reducing CO2 emissions by 30-60% while maintaining compressive strengths from 3,000 to 8,000 psi.",
        price: {
          aed: "AED 580 – 1,150 / m³",
          usd: "USD 158 – 313 / m³",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Reclaimed & FSC-Certified Timber",
        description:
          "Salvaged wood from deconstructed buildings and sustainably harvested lumber with FSC or PEFC certification, available in dimensional lumber, engineered wood, and architectural millwork grades.",
        price: {
          aed: "AED 1,960 – 7,400 / m³",
          usd: "USD 534 – 2,015 / m³",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Recycled Insulation Materials",
        description:
          "Cellulose, denim, and mineral wool insulation made from 75-85% recycled content with R-values from R-13 to R-60, fire resistance ratings, and low VOC emissions for healthy indoor air quality.",
        price: {
          aed: "AED 58 – 230 / m²",
          usd: "USD 16 – 63 / m²",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Permeable Paving Systems",
        description:
          "Porous concrete, permeable pavers, and grid systems allowing 80-100% stormwater infiltration, reducing runoff and heat island effect while supporting vehicular and pedestrian loads.",
        price: {
          aed: "AED 195 – 580 / m²",
          usd: "USD 53 – 158 / m²",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Green Roofing Systems",
        description:
          "Extensive and intensive vegetated roof assemblies with waterproofing membranes, drainage layers, growing media, and native plant selections providing insulation, stormwater management, and biodiversity.",
        price: {
          aed: "AED 390 – 1,150 / m²",
          usd: "USD 106 – 313 / m²",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Recycled Plastic Lumber",
        description:
          "Composite decking, fencing, and structural members made from 95%+ post-consumer HDPE and LDPE with no maintenance requirements, 50-year lifespan, and resistance to rot, insects, and moisture.",
        price: {
          aed: "AED 290 – 770 / linear m",
          usd: "USD 79 – 210 / linear m",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Natural & Clay Plasters",
        description:
          "Lime-based and earthen plasters with zero VOCs, breathable properties for moisture regulation, and thermal mass benefits, available in smooth, textured, and pigmented finishes.",
        price: {
          aed: "AED 115 – 385 / m²",
          usd: "USD 31 – 105 / m²",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Bamboo Flooring & Panels",
        description:
          "Rapidly renewable bamboo products with Janka hardness ratings exceeding oak (1,300-1,800), strand-woven construction for dimensional stability, and formaldehyde-free adhesives.",
        price: {
          aed: "AED 230 – 580 / m²",
          usd: "USD 63 – 158 / m²",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Recycled Glass Aggregates",
        description:
          "Crushed post-consumer glass for concrete, terrazzo, and landscaping applications, providing colorful aesthetics, diverting waste from landfills, and meeting ASTM C33 gradation standards.",
        price: {
          aed: "AED 115 – 575 / tonne",
          usd: "USD 31 – 157 / tonne",
          isQuote: false,
          note: "incl. 5% VAT",
        },
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
        name: "Lithium-Ion BESS Containers",
        description:
          "Containerized LFP (Lithium Iron Phosphate) and NMC battery systems from 500 kWh to 5 MWh per unit, featuring integrated BMS, thermal management, fire suppression, and remote monitoring for utility and C&I applications.",
        price: {
          isQuote: true,
          note: "Price on application – utility & C&I scale",
        },
      },
      {
        name: "Vanadium Flow Battery Systems",
        description:
          "Long-duration flow battery systems with 4–12 hour discharge capability, 20,000+ cycle life, and independent power/energy scaling for applications requiring daily deep cycling and long operational life.",
        price: {
          isQuote: true,
          note: "Price on application – long-duration storage",
        },
      },
      {
        name: "Behind-the-Meter BESS",
        description:
          "Commercial and industrial battery systems optimizing demand charge reduction, peak shaving, and time-of-use arbitrage, with typical payback periods of 3–6 years and integration with existing solar PV systems.",
        price: {
          isQuote: true,
          note: "Price on application – site-specific design",
        },
      },
      {
        name: "Grid-Scale Energy Storage",
        description:
          "Utility-class BESS platforms from 10 MWh to 500 MWh with turnkey EPC services, grid-forming inverter capabilities, and ancillary service participation including frequency regulation, voltage support, and capacity markets.",
        price: {
          isQuote: true,
          note: "Price on application – utility-scale system",
        },
      },
      {
        name: "Battery Management Systems (BMS)",
        description:
          "Advanced BMS hardware and firmware providing cell-level monitoring, state-of-charge/health estimation, balancing, and protection for lithium, lead-acid, and flow battery chemistries with CAN, Modbus, and SCADA integration.",
        price: {
          aed: "AED 19,400 – 110,000",
          usd: "USD 5,285 – 29,960",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "Hybrid Solar-BESS Solutions",
        description:
          "Integrated solar PV and battery storage packages with single-point control, intelligent energy dispatch algorithms, and zero-export functionality for C&I customers targeting high renewable self-consumption rates.",
        price: {
          isQuote: true,
          note: "Price on application – integrated system",
        },
      },
      {
        name: "UPS & Critical Power BESS",
        description:
          "Uninterruptible power supply systems using advanced battery chemistries, providing seamless switchover in <10 ms, runtime from 15 minutes to 8 hours, and modular expansion for data centers, hospitals, and critical infrastructure.",
        price: {
          aed: "AED 37,800 – 367,500",
          usd: "USD 10,300 – 100,100",
          isQuote: false,
          note: "incl. 5% VAT",
        },
      },
      {
        name: "EV Fleet Charging BESS",
        description:
          "Battery buffer systems enabling high-power EV fleet charging without costly grid upgrades, supporting DC fast charging up to 350 kW per station with smart scheduling and demand management software.",
        price: {
          isQuote: true,
          note: "Price on application – fleet size dependent",
        },
      },
      {
        name: "Microgrid & Island Mode BESS",
        description:
          "Black-start capable battery systems for islanded microgrids and remote communities, integrating with diesel gensets, solar, and wind to provide stable power with up to 100% renewable penetration.",
        price: {
          isQuote: true,
          note: "Price on application – remote site project",
        },
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
