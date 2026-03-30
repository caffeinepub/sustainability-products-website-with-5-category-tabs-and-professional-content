# GE3S Website – Product Pricing

## Current State
Product cards display name, description, category image, and an Add to Cart button. No pricing is shown anywhere. ProductGroup has only `name` and `description` fields.

## Requested Changes (Diff)

### Add
- `price` field to `ProductGroup` interface: `{ aed: string; usd: string; isQuote: boolean; note?: string }`
- UAE market pricing (incl. 5% VAT) in AED and USD for all products across all 6 categories
- Product detail modal/drawer that opens when user clicks a product card, showing full description, pricing, and a CTA
- "Request a Quote" label for large-scale/custom systems (BESS containers, grid storage, large water treatment, MRFs, wind turbines, etc.)

### Modify
- `catalogueContent.ts` – add `price` to every ProductGroup
- `CategorySection.tsx` – product cards become clickable; clicking opens a detail modal with pricing info

### Remove
- Nothing removed

## Implementation Plan
1. Update `ProductGroup` interface in `catalogueContent.ts` to include `price`
2. Add pricing data for all ~50 products across 6 categories (AED + USD incl. VAT, or isQuote=true)
3. In `CategorySection.tsx`, add a Dialog-based product detail modal
4. Product card click opens the modal showing: image, name, description, AED price, USD price, VAT note, Add to Cart button
5. Cards show a small "View Details" hint but no price on the card itself
