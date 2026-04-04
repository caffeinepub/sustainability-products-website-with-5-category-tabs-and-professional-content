import type { ProductGroup } from "../content/catalogueContent";

export function getCategoryAccentColor(id: string): string {
  const colors: Record<string, string> = {
    "waste-management": "#2d6a4f",
    "water-treatment": "#0077b6",
    "renewable-energy": "#e09510",
    monitoring: "#6a0dad",
    construction: "#556b2f",
    bess: "#0d6e8a",
  };
  return colors[id] ?? "#2d6a4f";
}

function getCategoryLightColor(id: string): string {
  const colors: Record<string, string> = {
    "waste-management": "#d8f3dc",
    "water-treatment": "#caf0f8",
    "renewable-energy": "#fff3cd",
    monitoring: "#ede7f6",
    construction: "#dde8c3",
    bess: "#cceef8",
  };
  return colors[id] ?? "#d8f3dc";
}

function getCategoryIcon(id: string): string {
  const icons: Record<string, string> = {
    "waste-management": "\u267b\ufe0f",
    "water-treatment": "\ud83d\udca7",
    "renewable-energy": "\u2600\ufe0f",
    monitoring: "\ud83d\udce1",
    construction: "\ud83c\udfd7\ufe0f",
    bess: "\ud83d\udd0b",
  };
  return icons[id] ?? "\ud83c\udf31";
}

function getCategoryTagline(id: string): string {
  const taglines: Record<string, string> = {
    "waste-management": "Transforming Waste into Opportunity",
    "water-treatment": "Pure Water for a Sustainable World",
    "renewable-energy": "Powering Tomorrow with Clean Energy",
    monitoring: "Intelligence for a Healthier Environment",
    construction: "Building Green for a Better Future",
    bess: "Reliable Energy Storage Solutions",
  };
  return taglines[id] ?? "Sustainable Solutions for a Better Tomorrow";
}

function getWhyChooseUs(
  id: string,
): Array<{ icon: string; title: string; text: string }> {
  const common = [
    {
      icon: "\u2713",
      title: "ISO Certified Quality",
      text: "All products meet international quality standards with full certification and documentation.",
    },
    {
      icon: "\ud83c\udde6\ud83c\uddea",
      title: "UAE Market Expertise",
      text: "Deep understanding of Gulf region regulations, climate conditions, and operational requirements.",
    },
    {
      icon: "\ud83d\udd27",
      title: "Technical Support",
      text: "Dedicated engineering team providing installation, commissioning, and after-sales support.",
    },
    {
      icon: "\ud83d\ude80",
      title: "Fast Delivery",
      text: "Regional warehouse stock and supplier partnerships ensuring swift delivery across the UAE and GCC.",
    },
  ];
  const extras: Record<
    string,
    Array<{ icon: string; title: string; text: string }>
  > = {
    "waste-management": [
      {
        icon: "\ud83c\udf0d",
        title: "ESG Compliance",
        text: "Helping organizations meet their Environmental, Social, and Governance reporting targets.",
      },
    ],
    "water-treatment": [
      {
        icon: "\ud83d\udca7",
        title: "Zero Liquid Discharge",
        text: "Tailored solutions to achieve zero liquid discharge for industrial and commercial facilities.",
      },
    ],
    "renewable-energy": [
      {
        icon: "\u26a1",
        title: "Energy Modelling",
        text: "Site-specific solar and renewable energy assessments to maximize ROI and system performance.",
      },
    ],
    monitoring: [
      {
        icon: "\ud83d\udcca",
        title: "Real-Time Analytics",
        text: "Cloud-connected platforms delivering live dashboards and automated compliance reporting.",
      },
    ],
    construction: [
      {
        icon: "\ud83c\udfc6",
        title: "LEED Support",
        text: "Products and documentation supporting LEED, Estidama Pearl, and green building certifications.",
      },
    ],
    bess: [
      {
        icon: "\ud83d\udd0b",
        title: "Grid Integration",
        text: "Seamless integration with existing grid infrastructure and renewable energy sources.",
      },
    ],
  };
  return [...common, ...(extras[id] ?? [])];
}

export function generateBrochure(
  categoryId: string,
  categoryTitle: string,
  intro: string,
  products: ProductGroup[],
  applications: string[],
  coverImageUrl: string,
  aboutGE3S?: string,
): void {
  const accentColor = getCategoryAccentColor(categoryId);
  const lightColor = getCategoryLightColor(categoryId);
  const tagline = getCategoryTagline(categoryId);
  const icon = getCategoryIcon(categoryId);
  const whyChooseUs = getWhyChooseUs(categoryId);
  const logoUrl = `${window.location.origin}/assets/generated/ge3s-logo-new.png`;
  const year = new Date().getFullYear();

  const ge3sAbout =
    aboutGE3S ??
    "Global Energy and Environmental Engineering Services (GE3S) is a Dubai-based sustainability consultancy and solutions provider with deep expertise across waste management, water treatment, renewable energy, environmental monitoring, and green construction. Serving clients across the UAE and GCC, GE3S delivers end-to-end solutions built on international standards and regional expertise. Visit us at www.ge3s.org or contact info@ge3s.org.";

  const applicationsHTML = applications
    .map(
      (app) => `
    <div class="app-card" style="border-left: 4px solid ${accentColor}; background: ${lightColor}">
      <span class="app-check" style="color:${accentColor}">&#10004;</span>
      <span class="app-text">${app}</span>
    </div>
  `,
    )
    .join("");

  const whyHTML = whyChooseUs
    .map(
      (w) => `
    <div class="why-item">
      <div class="why-icon" style="background:${accentColor}">${w.icon}</div>
      <div class="why-content">
        <h4 class="why-title">${w.title}</h4>
        <p class="why-text">${w.text}</p>
      </div>
    </div>
  `,
    )
    .join("");

  // Build product pages: one product per "card", 2 cards per page
  const productPairs: ProductGroup[][] = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, i + 2));
  }

  const productPagesHTML = productPairs
    .map((pair, pairIdx) => {
      return `
      <section class="page products-page" style="page-break-after: always">
        <div class="page-header" style="background:${accentColor}">
          <span class="page-section-label">Product Portfolio</span>
          <span class="page-num">Products ${pairIdx * 2 + 1}&ndash;${Math.min(pairIdx * 2 + 2, products.length)} of ${products.length}</span>
        </div>
        <div class="products-grid">
          ${pair
            .map((product) => {
              const productImageHTML = product.image
                ? `<img src="${product.image}" alt="${product.name}" class="product-img" />`
                : "";

              const keyBenefitsHTML =
                (product.keyBenefits ?? []).length > 0
                  ? `<ul class="product-benefits">
                    ${product.keyBenefits!.map((b) => `<li>${b}</li>`).join("")}
                   </ul>`
                  : "";

              const typAppsHTML =
                (product.typicalApplications ?? []).length > 0
                  ? `<div class="product-apps-section">
                    <div class="product-apps-label" style="color:${accentColor}">Typical Applications</div>
                    <div class="product-apps-list">${product
                      .typicalApplications!.map(
                        (a) =>
                          `<span class="app-chip" style="background:${lightColor}; color:${accentColor}">${a}</span>`,
                      )
                      .join("")}</div>
                   </div>`
                  : "";

              const ctaHTML = `
                <div class="product-cta" style="background:${accentColor}">
                  <span class="cta-icon">&#128203;</span>
                  <span class="cta-text">Request a Quote</span>
                  <span class="cta-sub">Contact us at info@ge3s.org</span>
                </div>`;

              return `
              <div class="product-card" style="border-top: 4px solid ${accentColor}">
                ${productImageHTML}
                <div class="product-info">
                  <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-sku" style="background:${lightColor}; color:${accentColor}">SKU: ${product.sku}</span>
                  </div>
                  ${product.shortPitch ? `<p class="product-pitch">${product.shortPitch}</p>` : ""}
                  <p class="product-desc">${product.description}</p>
                  ${keyBenefitsHTML}
                  ${typAppsHTML}
                  ${ctaHTML}
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
      </section>
    `;
    })
    .join("");

  const coverLabelColor =
    accentColor === "#e09510" ? "#ffd166" : "rgba(255,255,255,0.75)";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${categoryTitle} &mdash; Global Energy and Environmental Engineering Services</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @page {
      size: A4;
      margin: 0;
    }

    body {
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      background: #f4f4f4;
      color: #1a1a1a;
      font-size: 14px;
      line-height: 1.6;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      background: #fff;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
    }

    @media print {
      body { background: #fff; }
      .page { margin: 0; box-shadow: none; page-break-after: always; }
      .no-print { display: none !important; }
    }

    @media screen {
      .page { margin: 20px auto; box-shadow: 0 4px 32px rgba(0,0,0,0.15); }
      .brochure-container { padding-top: 64px; }
    }

    /* PRINT BAR */
    .print-bar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 999;
      background: ${accentColor};
      color: #fff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      font-weight: 600;
      box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    }
    .print-bar .bar-title { font-size: 17px; }
    .print-bar .bar-actions { display: flex; gap: 12px; align-items: center; }
    .print-btn {
      background: #fff;
      color: ${accentColor};
      border: none;
      padding: 8px 22px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .print-btn:hover { opacity: 0.85; }
    .close-btn {
      background: rgba(255,255,255,0.2);
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    /* COVER */
    .cover-page { position: relative; overflow: hidden; display: flex; flex-direction: column; }
    .cover-bg {
      position: absolute; inset: 0;
      background-image: url('${coverImageUrl}');
      background-size: cover; background-position: center;
      filter: brightness(0.45);
    }
    .cover-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.92) 100%);
    }
    .cover-content {
      position: relative; z-index: 2;
      display: flex; flex-direction: column;
      height: 297mm; padding: 32px 36px; color: #fff;
    }
    .cover-logo-area { display: flex; align-items: center; gap: 12px; }
    .cover-logo { height: 44px; width: auto; object-fit: contain; filter: brightness(0) invert(1); }
    .cover-company-name { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; line-height: 1.3; max-width: 200px; }
    .cover-accent-bar { width: 60px; height: 4px; background: ${accentColor}; border-radius: 2px; margin: 8px 0 0 0; }
    .cover-main { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 16px; }
    .cover-icon { font-size: 48px; margin-bottom: 16px; }
    .cover-category-label { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: ${coverLabelColor}; margin-bottom: 8px; }
    .cover-title { font-size: 36px; font-weight: 800; line-height: 1.15; margin-bottom: 14px; letter-spacing: -0.01em; }
    .cover-tagline { font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.85); margin-bottom: 28px; font-style: italic; }
    .cover-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.2); margin-bottom: 18px; }
    .cover-footer { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,0.7); }
    .cover-website { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.9); letter-spacing: 0.02em; }
    .cover-year { font-size: 12px; background: ${accentColor}; color: #fff; padding: 4px 12px; border-radius: 20px; font-weight: 700; }

    /* PAGE HEADER */
    .page-header { padding: 16px 36px; display: flex; justify-content: space-between; align-items: center; color: #fff; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }

    /* INTRO PAGE */
    .intro-content { padding: 28px 36px; }
    .section-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: ${accentColor}; margin-bottom: 8px; }
    .section-title { font-size: 24px; font-weight: 800; color: #1a1a1a; margin-bottom: 14px; line-height: 1.2; }
    .intro-text { font-size: 13px; color: #444; line-height: 1.75; margin-bottom: 20px; }
    .intro-divider { width: 48px; height: 3px; background: ${accentColor}; border-radius: 2px; margin-bottom: 20px; }

    /* ABOUT GE3S BOX */
    .about-ge3s-box {
      border-left: 4px solid ${accentColor};
      background: ${lightColor};
      border-radius: 0 8px 8px 0;
      padding: 16px 18px;
      margin-bottom: 22px;
    }
    .about-ge3s-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${accentColor}; margin-bottom: 6px; }
    .about-ge3s-text { font-size: 12px; color: #333; line-height: 1.65; }

    /* WHY CHOOSE US */
    .why-heading { font-size: 15px; font-weight: 700; color: #1a1a1a; margin-bottom: 14px; }
    .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .why-item { display: flex; gap: 10px; align-items: flex-start; }
    .why-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #fff; }
    .why-title { font-size: 11.5px; font-weight: 700; color: #1a1a1a; margin-bottom: 2px; }
    .why-text { font-size: 11px; color: #666; line-height: 1.5; }

    /* PRODUCTS */
    .products-page { padding-bottom: 20px; }
    .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding: 18px 24px; }
    .product-card { border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; flex-direction: column; }
    .product-img { width: 100%; height: 120px; object-fit: cover; display: block; }
    .product-info { padding: 12px 13px; display: flex; flex-direction: column; flex: 1; }
    .product-header { margin-bottom: 6px; }
    .product-name { font-size: 13.5px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; line-height: 1.3; }
    .product-sku { font-family: 'Courier New', Courier, monospace; font-size: 9.5px; padding: 2px 7px; border-radius: 4px; font-weight: 600; }
    .product-pitch { font-size: 12px; color: ${accentColor}; font-weight: 600; line-height: 1.5; margin: 6px 0 7px; font-style: italic; }
    .product-desc { font-size: 11px; color: #555; line-height: 1.6; margin-bottom: 8px; }

    /* KEY BENEFITS */
    .product-benefits { list-style: none; margin: 0 0 8px 0; padding: 0; }
    .product-benefits li { font-size: 10.5px; color: #333; padding: 2px 0 2px 14px; position: relative; line-height: 1.45; }
    .product-benefits li::before { content: '\\2022'; color: ${accentColor}; font-weight: 900; position: absolute; left: 0; font-size: 13px; top: 0; }

    /* TYPICAL APPLICATIONS (per product) */
    .product-apps-section { margin-top: auto; margin-bottom: 8px; }
    .product-apps-label { font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 5px; }
    .product-apps-list { display: flex; flex-wrap: wrap; gap: 4px; }
    .app-chip { font-size: 9.5px; padding: 2px 8px; border-radius: 20px; font-weight: 600; white-space: nowrap; }

    /* REQUEST A QUOTE CTA */
    .product-cta {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px;
      border-radius: 6px;
      margin-top: auto;
      color: #fff;
    }
    .cta-icon { font-size: 14px; flex-shrink: 0; }
    .cta-text { font-size: 11.5px; font-weight: 700; flex: 1; }
    .cta-sub { font-size: 9.5px; opacity: 0.85; white-space: nowrap; }

    /* APPLICATIONS PAGE */
    .applications-page { min-height: 297mm; }
    .applications-content { padding: 28px 36px; }
    .app-intro { font-size: 13px; color: #555; margin-bottom: 20px; line-height: 1.7; }
    .app-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .app-card { display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: 8px; }
    .app-check { font-size: 15px; flex-shrink: 0; margin-top: 1px; font-weight: 700; }
    .app-text { font-size: 12.5px; color: #333; line-height: 1.5; font-weight: 500; }

    /* BACK COVER */
    .back-cover { min-height: 297mm; background: ${accentColor}; display: flex; flex-direction: column; position: relative; overflow: hidden; }
    .back-cover-pattern {
      position: absolute; inset: 0;
      background-image:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06) 0%, transparent 50%),
        repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px);
    }
    .back-cover-content { position: relative; z-index: 1; display: flex; flex-direction: column; height: 297mm; padding: 40px 44px; color: #fff; }
    .back-logo-row { display: flex; align-items: center; gap: 14px; margin-bottom: auto; }
    .back-logo { height: 52px; width: auto; object-fit: contain; filter: brightness(0) invert(1); }
    .back-company-name { font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.4; max-width: 220px; opacity: 0.9; }
    .back-main { text-align: center; padding: 28px 0; }
    .back-contact-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.7; margin-bottom: 14px; }
    .back-heading { font-size: 34px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
    .back-divider { width: 48px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 2px; margin: 0 auto 24px; }
    .contact-details { display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .contact-row { display: flex; align-items: center; gap: 10px; font-size: 14px; opacity: 0.92; }
    .contact-icon { font-size: 16px; width: 24px; text-align: center; }
    .contact-text { font-weight: 500; }
    .social-row { display: flex; justify-content: center; gap: 14px; margin-top: 24px; }
    .social-icon { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; }
    .back-footer { text-align: center; }
    .back-tagline { font-size: 13px; opacity: 0.7; font-style: italic; margin-bottom: 8px; }
    .back-copyright { font-size: 11px; opacity: 0.5; }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <span class="bar-title">${icon} ${categoryTitle} &mdash; Product Brochure</span>
    <div class="bar-actions">
      <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
      <button class="close-btn" onclick="window.close()">Close</button>
    </div>
  </div>

  <div class="brochure-container">

    <!-- COVER PAGE -->
    <div class="page cover-page">
      <div class="cover-bg"></div>
      <div class="cover-overlay"></div>
      <div class="cover-content">
        <div class="cover-logo-area">
          <img src="${logoUrl}" alt="GE3S Logo" class="cover-logo" />
          <div>
            <div class="cover-company-name">Global Energy and Environmental Engineering Services</div>
            <div class="cover-accent-bar"></div>
          </div>
        </div>
        <div class="cover-main">
          <div class="cover-icon">${icon}</div>
          <div class="cover-category-label">Product Catalogue</div>
          <h1 class="cover-title">${categoryTitle}</h1>
          <p class="cover-tagline">${tagline}</p>
          <div class="cover-divider"></div>
          <div class="cover-footer">
            <span class="cover-website">www.ge3s.org</span>
            <span class="cover-year">${year}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- INTRO + ABOUT GE3S + WHY CHOOSE US -->
    <section class="page" style="page-break-after: always">
      <div class="page-header" style="background:${accentColor}">
        <span>About GE3S &amp; Our ${categoryTitle}</span>
        <span>www.ge3s.org</span>
      </div>
      <div class="intro-content">
        <div class="section-eyebrow">Product Overview</div>
        <h2 class="section-title">${categoryTitle}</h2>
        <div class="intro-divider"></div>
        <p class="intro-text">${intro}</p>

        <div class="about-ge3s-box">
          <div class="about-ge3s-label">About Global Energy and Environmental Engineering Services (GE3S)</div>
          <p class="about-ge3s-text">${ge3sAbout}</p>
        </div>

        <h3 class="why-heading">Why Choose GE3S?</h3>
        <div class="why-grid">${whyHTML}</div>
      </div>
    </section>

    <!-- PRODUCT PAGES -->
    ${productPagesHTML}

    <!-- APPLICATIONS PAGE -->
    <section class="page applications-page" style="page-break-after: always">
      <div class="page-header" style="background:${accentColor}">
        <span>Applications</span>
        <span>www.ge3s.org</span>
      </div>
      <div class="applications-content">
        <div class="section-eyebrow">Where Our Products Are Used</div>
        <h2 class="section-title">Typical Applications</h2>
        <div class="intro-divider"></div>
        <p class="app-intro">Our ${categoryTitle.toLowerCase()} are deployed across a wide range of sectors and project types throughout the UAE and the wider GCC region. Below are the key application areas where our solutions deliver measurable impact.</p>
        <div class="app-grid">${applicationsHTML}</div>
      </div>
    </section>

    <!-- BACK COVER -->
    <div class="page back-cover">
      <div class="back-cover-pattern"></div>
      <div class="back-cover-content">
        <div class="back-logo-row">
          <img src="${logoUrl}" alt="GE3S Logo" class="back-logo" />
          <div class="back-company-name">Global Energy and Environmental Engineering Services</div>
        </div>
        <div class="back-main">
          <div class="back-contact-label">Request a Quote or Get in Touch</div>
          <h2 class="back-heading">Contact Us Today</h2>
          <div class="back-divider"></div>
          <div class="contact-details">
            <div class="contact-row"><span class="contact-icon">&#128205;</span><span class="contact-text">Dubai, United Arab Emirates</span></div>
            <div class="contact-row"><span class="contact-icon">&#128231;</span><span class="contact-text">info@ge3s.org</span></div>
            <div class="contact-row"><span class="contact-icon">&#127760;</span><span class="contact-text">www.ge3s.org</span></div>
            <div class="contact-row"><span class="contact-icon">&#128222;</span><span class="contact-text">+971 4 XXX XXXX</span></div>
          </div>
          <div class="social-row">
            <div class="social-icon">in</div>
            <div class="social-icon">f</div>
            <div class="social-icon">X</div>
            <div class="social-icon">&#9654;</div>
          </div>
        </div>
        <div class="back-footer">
          <p class="back-tagline">Sustainable Solutions for a Better Tomorrow</p>
          <p class="back-copyright">&copy; ${year} Global Energy and Environmental Engineering Services. All rights reserved.</p>
        </div>
      </div>
    </div>

  </div>
</body>
</html>`;

  const newWindow = window.open("", "_blank", "width=900,height=900");
  if (!newWindow) {
    alert(
      "Popup blocked! Please allow popups for this site to open the brochure.",
    );
    return;
  }
  newWindow.document.open();
  newWindow.document.write(html);
  newWindow.document.close();
}
