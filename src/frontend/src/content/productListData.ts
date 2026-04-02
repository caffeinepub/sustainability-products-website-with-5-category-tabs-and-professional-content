import { catalogueContent } from "./catalogueContent";

export interface ProductListItem {
  sku: string;
  category: string;
  name: string;
  description: string;
  priceAed: string;
  priceUsd: string;
  isQuote: boolean;
  priceNote: string;
  supplier: string;
  leadTime: string;
}

const categoryMeta: Record<string, { supplier: string; leadTime: string }> = {
  "waste-management": {
    supplier: "Veolia Environmental Services",
    leadTime: "6–10 weeks",
  },
  "water-treatment": {
    supplier: "Grundfos A/S",
    leadTime: "4–8 weeks",
  },
  "renewable-energy": {
    supplier: "SunPower Corp",
    leadTime: "3–6 weeks",
  },
  monitoring: {
    supplier: "Vaisala Oyj",
    leadTime: "2–4 weeks",
  },
  construction: {
    supplier: "LafargeHolcim Ltd",
    leadTime: "4–6 weeks",
  },
  bess: {
    supplier: "CATL (Contemporary Amperex Technology)",
    leadTime: "12–20 weeks",
  },
};

const supplierOverrides: Record<string, string> = {
  "Automated Sorting Systems": "Tomra Sorting Solutions",
  "Organic Waste Digesters": "BioHiTech Global",
  "Compaction & Baling Equipment": "Wastequip LLC",
  "Hazardous Waste Containment": "Justrite Safety Group",
  "Waste-to-Energy Gasification": "Enerkem Inc.",
  "Leachate Treatment Systems": "Suez Water Technologies",
  "Smart Collection Bins": "Bigbelly Inc.",
  "Material Recovery Facilities (MRF)": "CP Group",
  "Reverse Osmosis Systems": "Pentair plc",
  "UV Disinfection Units": "Xylem Inc. (Wedeco)",
  "Biological Wastewater Treatment": "Veolia Water Technologies",
  "Electrocoagulation Systems": "Powell Water Systems",
  "Ultrafiltration Membranes": "DuPont Water Solutions",
  "Ozone Generation Equipment": "Xylem Inc. (OZOGroup)",
  "Ion Exchange Resins": "Dow Chemical Company",
  "Clarification & Sedimentation": "WesTech Engineering",
  "Activated Carbon Filtration": "Calgon Carbon Corporation",
  "Monocrystalline Solar Panels": "LONGi Green Energy",
  "Solar Inverters & Optimizers": "SMA Solar Technology",
  "Wind Turbine Systems": "Vestas Wind Systems",
  "Battery Energy Storage (BESS)": "CATL (Contemporary Amperex Technology)",
  "Solar Mounting Structures": "Schletter Group",
  "Hybrid Power Systems": "ABB Ltd",
  "Solar Water Heating": "Viessmann Group",
  "Charge Controllers & Combiners": "Victron Energy BV",
  "Solar Street Lights": "Jinhua Sunmaster Solar Technology Co., Ltd.",
  "LED Lights": "Philips Lighting (Signify)",
  "Solar Daylighting Systems": "Solatube International Inc.",
  "Air Quality Monitoring Stations": "Thermo Fisher Scientific",
  "Water Quality Sensors": "Hach Company",
  "Energy Management Systems (EMS)": "Schneider Electric SE",
  "Greenhouse Gas Analyzers": "Picarro Inc.",
  "Noise & Vibration Monitors": "Brüel & Kjær (HBK)",
  "Weather & Meteorological Stations": "Vaisala Oyj",
  "Smart Power Meters": "Landis+Gyr Group",
  "Soil & Groundwater Sensors": "Hach Company",
  "Thermal Imaging Cameras": "FLIR Systems (Teledyne)",
  "Weather Monitoring": "Vaisala Oyj",
  "Acoustic Doppler Current Profilers (ADCPs)": "Teledyne RD Instruments",
  "Ambient Air Quality Monitoring": "Thermo Fisher Scientific",
  "Indoor Air Quality Monitoring": "Honeywell International",
  "Recycled Steel & Rebar": "Emirates Steel Industries",
  "Low-Carbon Concrete Mixes": "LafargeHolcim Ltd",
  "Reclaimed & FSC-Certified Timber": "Timber Holdings International",
  "Recycled Insulation Materials": "Knauf Insulation GmbH",
  "Permeable Paving Systems": "CEMEX UAE",
  "Green Roofing Systems": "Bauder Ltd",
  "Recycled Plastic Lumber": "Axion International",
  "Natural & Clay Plasters": "Lime Green Products Ltd",
  "Bamboo Flooring & Panels": "Moso International BV",
  "Recycled Glass Aggregates": "Strategic Materials Inc.",
  "Lithium-Ion BESS Containers": "CATL (Contemporary Amperex Technology)",
  "Vanadium Flow Battery Systems": "Invinity Energy Systems",
  "Behind-the-Meter BESS": "Tesla Energy (Powerpack)",
  "Grid-Scale Energy Storage": "Fluence Energy LLC",
  "Battery Management Systems (BMS)": "Nuvation Energy Inc.",
  "Hybrid Solar-BESS Solutions": "SMA Solar Technology",
  "UPS & Critical Power BESS": "Eaton Corporation",
  "EV Fleet Charging BESS": "ABB Ltd",
  "Microgrid & Island Mode BESS": "Schneider Electric SE",
};

const leadTimeOverrides: Record<string, string> = {
  "Automated Sorting Systems": "On request",
  "Organic Waste Digesters": "On request",
  "Waste-to-Energy Gasification": "On request",
  "Leachate Treatment Systems": "On request",
  "Material Recovery Facilities (MRF)": "On request",
  "Reverse Osmosis Systems": "On request",
  "Biological Wastewater Treatment": "On request",
  "Clarification & Sedimentation": "On request",
  "Wind Turbine Systems": "On request",
  "Battery Energy Storage (BESS)": "On request",
  "Hybrid Power Systems": "On request",
  "Energy Management Systems (EMS)": "On request",
  "Acoustic Doppler Current Profilers (ADCPs)": "On request",
  "Lithium-Ion BESS Containers": "On request",
  "Vanadium Flow Battery Systems": "On request",
  "Behind-the-Meter BESS": "On request",
  "Grid-Scale Energy Storage": "On request",
  "Hybrid Solar-BESS Solutions": "On request",
  "EV Fleet Charging BESS": "On request",
  "Microgrid & Island Mode BESS": "On request",
  "Solar Street Lights": "3–5 weeks",
  "LED Lights": "1–3 weeks",
  "Solar Daylighting Systems": "3–4 weeks",
};

export const productListData: ProductListItem[] = catalogueContent.flatMap(
  (category) => {
    const meta = categoryMeta[category.id] ?? {
      supplier: "GE3S Partner",
      leadTime: "4–6 weeks",
    };
    return category.productGroups.map((product) => ({
      sku: product.sku,
      category: category.title,
      name: product.name,
      description: product.description,
      priceAed: product.price.isQuote
        ? "Request Quote"
        : (product.price.aed ?? ""),
      priceUsd: product.price.isQuote
        ? "Request Quote"
        : (product.price.usd ?? ""),
      isQuote: product.price.isQuote,
      priceNote: product.price.note ?? "",
      supplier: supplierOverrides[product.name] ?? meta.supplier,
      leadTime: leadTimeOverrides[product.name] ?? meta.leadTime,
    }));
  },
);
