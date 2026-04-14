# Implementation Checklist

## Phase 1: Asset Preparation
- [x] T01: Copy all images to public/images/ with clean filenames
- [x] T02: Process logo — crop for header and generate favicon
- [x] T03: Re-encode best 5 videos to H.264/MP4 for web delivery
- [x] T04: Copy PDFs (Temple.pdf, ePapers, donation poster) to public/documents/

## Phase 2: Content Constants Update
- [x] T05: Update content.ts — site meta, nav items, hero slides, about section (2-tab data), contact info, footer
- [x] T06: Add new content constants — Atishay data, Yojanayen/donation schemes, Shantidhara pricing, documents list

## Phase 3: Existing Component Updates
- [x] T07: Update Header.tsx — use real logo image, update temple name
- [x] T08: Update HeroCarousel.tsx — point to real hero images
- [x] T09: Rework AboutSection.tsx — add tab/carousel for Temple + Mataji
- [x] T10: Update GallerySection.tsx — add category tabs (Photos/Events/Videos), update image data, add video support
- [x] T11: Update EventsSection.tsx — use real event data and images
- [x] T12: Rework DonationSection.tsx → YojnayenSection.tsx — Shantidhara + Mandir Nirman cards
- [x] T13: Update ContactSection.tsx — real address, phones, email, WhatsApp link
- [x] T14: Update Footer.tsx — real contact info, social links

## Phase 4: New Components
- [x] T15: Create AtishaySection.tsx — miracles timeline (replaces HighlightsSection)
- [x] T16: Create DocumentsSection.tsx — PDF download cards
- [x] T17: Create ShantidharaBooking.tsx — WhatsApp booking form
- [x] T18: Create DonationUPI.tsx — UPI payment section with bank details

## Phase 5: Page Assembly & Navigation
- [x] T19: Update page.tsx — add new sections in correct BRD order, remove HighlightsSection
- [x] T20: Update nav items in content.ts to match new section order/anchors

## Phase 6: Final Polish
- [x] T21: Update globals.css if any new styles needed
- [x] T22: Verify build succeeds with no errors
