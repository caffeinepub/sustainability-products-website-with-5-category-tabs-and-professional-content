# GE3S Newsletter Source Links

## Current State
The site has 12 newsletters in `src/frontend/src/content/newsletterContent.ts`. Each newsletter has: id, issueNumber, date, subject, excerpt, heroImage, category, body, serviceSpotlight, sustainabilityFact. No sources/references field exists.

## Requested Changes (Diff)

### Add
- `sources` field to the `Newsletter` interface: `{ label: string; url: string }[]`
- Real external reference links for all 12 newsletters (UN, WHO, IEA, IRENA, UNEP, etc.)
- ge3s.org link as a source in each newsletter
- A "References" section rendered at the bottom of each newsletter detail view

### Modify
- Newsletter interface and newsletterContent.ts: add sources to all 12 newsletters
- NewsletterDetail.tsx: render References section before email footer

### Remove
- Nothing

## Implementation Plan
1. Add sources field to Newsletter interface
2. Populate sources for all 12 newsletters with 3-5 relevant external links + ge3s.org
3. Update NewsletterDetail.tsx to render a References section with numbered clickable links
