# Website audit and founder content map

Date: 2026-09-11. Scope: the existing local project, before content migration.

## Outcome

The site has 16 main sections plus a navbar and footer. It is a single-page speaker-booking template with partially replaced names, portraits, social links, and company references. Its layouts are reusable, but the visitor journey and much of the evidence still belong to the original template.

Recommended direction: a founder portfolio introducing Prasanna, his perspective, the company he leads, selected work, insights, and business enquiries. Education and junior roles remain in reference notes rather than dedicated public sections, in accordance with the user's preference.

This audit changes no application source. Recommendations below are proposed changes, not implemented features.

## Inspection and limitations

- Read the page composition, root layout, global stylesheet, every section component, shared buttons, image registry, package configuration, TypeScript configuration, and Next configuration.
- Checked all 30 image references in src/lib/images.ts: every referenced file exists.
- Inventoried public image files and inspected the hero portrait, About portrait, first headshot, and first stage photograph visually. Other images were inventoried, not individually visually inspected.
- TypeScript check passed: node node_modules/typescript/bin/tsc --noEmit --incremental false.
- Local Next.js preview started successfully after sandbox process-start approval. An HTTP GET to http://127.0.0.1:3000 returned 200; rendered HTML confirmed all 16 sections, the six section IDs, and the current speaker-oriented page title/headings. This verifies server rendering, not browser layout or client interactions.
- No browser automation tool or installed Playwright/Puppeteer package was available. Responsive findings below are based on source layout constraints, not measured browser screenshots.
- No contact or subscription messages were sent. Contact delivery is not verified. Environment variable values were not opened or printed.

## Application structure

- Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons.
- src/app/page.tsx determines the entire homepage order.
- src/app/layout.tsx owns title, description, favicon, fonts, and document language.
- src/app/globals.css owns colors, reusable surfaces/buttons, smooth scrolling, ticker, marquee, rotation, and floating animations.
- src/components contains one component per section, plus shared ui/Button.tsx.
- src/lib/images.ts centralizes images. Copy, links, statistics, services, and testimonials are otherwise distributed across components.
- Four interactive client components: VideoSection, MediaKit, FeaturedTestimonial, Contact. VideoSection is client-marked but has no implemented player interaction.
- No separate project/article pages, content management system, local API route, or newsletter implementation was found in the source tree.
- Main anchor IDs: hero, work, about, beyond, media-kit, contact. The work anchor currently identifies SpeakingTopics, not a portfolio gallery.

## Existing visual system

- Near-black background (#0d0d0d), white text, muted gray (#878c92), red (#e90c3c) accents, gold (#cfa377) secondary accents.
- Purple Dechub logo (#6A14D1) is already used in navbar/footer; most other visual accents remain red.
- Rethink Sans for body and primary headings, Playfair Display italic for highlighted words.
- Large headings, generous vertical padding, rounded cards, thin translucent borders, subtle gradients, and blurred surfaces.
- Common content width is max-w-7xl, but other sections use max-w-4xl, max-w-6xl, bespoke padding, or fixed geometry.
- Moving elements include logo and testimonial strips, a stage gallery, orbiting flags, and floating experience cards.
- Preserve typography, rounded surfaces, and the portrait-led identity where practical. A switch to purple is an optional design decision, not a requirement of content replacement.

## Complete section inventory and mapping

| Order | Component / current format | Current content | Proposed founder use | Decision |
| --- | --- | --- | --- | --- |
| Header | Navbar.tsx: fixed translucent bar, logo, name, three links, socials, CTA | Speaking / About / Contact; Book Prasanna | About / Expertise / Dechub / Work / Contact; Let's Connect | Keep and rewrite; add mobile navigation |
| 1 | Hero.tsx: full-width portrait, oversized name, short intro, two CTAs | AI expert/international speaker; Book to Speak; View Talks | Founder of Dechub; design, marketing, AI, and digital transformation; Let's Connect / Explore My Work | Keep; 35-55 word supporting copy |
| 2 | LogoTicker.tsx: animated seven-logo trust strip | NAS Summit, Success Resources, Nas Daily, Intel, Deutsche Welle, Propellus, LSCS | Relevant associations with precise labels, such as career experience at Titan versus company work through Dechub | Replace assets and attribution, or omit until ready |
| 3 | VideoSection.tsx: 16:9 thumbnail with imitation player controls | Watch Prasanna in Action; on-stage description | Founder introduction or a specific relevant video | Optional; requires actual video URL/source and working playback |
| 4 | OnStage.tsx: badge, centered headline, CTA, four-image moving gallery | Global speaking appearances; Daniel/event captions | Selected work gallery, using actual project imagery | Repurpose and move after company/expertise; captions and project links needed |
| 5 | SpeakingTopics.tsx: four editorial rows with title, two tags, description | Four keynotes/workshops with durations | Areas of Focus: Brand Strategy; Digital Experiences; AI & Automation; Marketing & Growth | Strong reuse; replace duration tags with discipline labels |
| 6 | About.tsx: large heading, portrait, biography, tag groups, three stats | Speaker bio, event platforms, countries, audience statistics | Meet the Founder; multidisciplinary approach; brief Titan experience; current business focus | Keep and move directly after Hero; roughly 120-180 words; remove unsupported badges/stats |
| 7 | GlobalReach.tsx: text, four stats, rotating flag circle | Speaking worldwide, 10+ countries, 50+ events, 100,000+ attendees | India & UAE focus; profile-reported experience across US, Gulf, and Asian markets | Merge into About by default; optional standalone section after geography clarification |
| 8 | BeyondStage.tsx: two large service cards, callout, three-step strip | Done-for-you LinkedIn work, AI cohort, post-event services | Building Dechub: company belief, business capabilities, talent perspective | Keep reusable cards; remove unverified cohort/package promises and duplicate process |
| 9 | PostEvent.tsx: four icon cards and CTA | Event follow-up workshops, sprints, advisory, onboarding | How We Work: Discover; Design; Integrate; Grow, attributed to Dechub | Repurpose; 20-35 words per step |
| 10 | MediaKit.tsx: keynote card, seven-photo selector, downloads, contact | Speaker resources, keynote formats, assets | Optional founder resources / portraits / company overview | Omit from initial page unless actual resources are supplied; keep component available |
| 11 | IdealFit.tsx: two contrasting list cards | Event audience inclusion/exclusion | Who I Work With / Industries: business audiences and retail, real estate, healthcare, hospitality | Optional; merge with company section if repetitive; use positive factual framing |
| 12 | FeaturedTestimonial.tsx: selectable large quotes and stacked quote cards | Daniel/Danny testimonials | Verified Prasanna or clearly attributed Dechub testimonials | Omit until supplied; never just replace names |
| 13 | TestimonialsMarquee.tsx: two continuously moving quote rows | Eight template testimonials; mixed Prasanna and Danny references | Additional verified feedback | Omit for now; one future testimonial section is sufficient |
| 14 | QuoteSection.tsx: centered large quotation | Unattributed client quote about clarity | Founder Philosophy: discipline, practical thinking, continuous improvement | Repurpose as editorial prose; do not fabricate a verbatim founder quote |
| 15 | ExperienceCards.tsx: three floating overlapping image cards | Keynotes, workshops, global events | Insights: linked articles/posts about branding, AI, and customer experience | Repurpose with normal responsive cards and real links; roughly 30-50 words per card |
| 16 | Contact.tsx: narrow centered form and email CTA | Event booking fields and Request Booking | Business enquiry: name, email, company, area of interest, message; optional phone | Keep integration, rewrite fields, improve validation and error states |
| Footer | Footer.tsx: brand, anchor links, socials, newsletter, legal row | Speaker title; obsolete page labels; newsletter mockup | Founder summary, final anchor map, company and social links, contact | Keep; remove inactive subscription until integrated; resolve legal destinations |

## Critical content findings

1. Metadata still identifies Prasanna as an international speaker. Hero and footer repeat that positioning. The collected information does not establish the existing speaking claims.
2. About describes Dechub as a LinkedIn-first platform, which conflicts with the company's supplied story and wider services.
3. About claims an appearance alongside Robert Kiyosaki and lists event platforms and countries from the template.
4. Event counts and audience totals repeat across About, GlobalReach, and ExperienceCards. They are not evidence about Prasanna.
5. Both testimonial components contain original-template names and stories. Some quotes have already had Prasanna substituted into them; this does not make them verified endorsements.
6. The AI cohort, signature keynote, workshop durations, post-event packages, and response-time promise lack support in the supplied material.
7. The stage gallery retains Daniel-specific captions. The first inspected photograph contains National Achievers Congress 2025 and Success Resources event branding. It must not be presented as evidence of Prasanna's speaking history.
8. Hero alt text is still Daniel Paul. Page title, descriptions, image alt text, download labels, and navigation must be included in migration, not just visible paragraphs.
9. The logo strip asserts relationships with seven organizations from the template. Any replacement strip should distinguish employment, company project work, and personal clients.

## Link and interaction findings

| Feature | Source-observed status | Follow-up |
| --- | --- | --- |
| Header/footer LinkedIn, Instagram, YouTube | Correct supplied URLs; external links open a new tab | Preserve |
| Header and footer circular logo | /images/logo.png with matching background and padding | Preserve |
| Hero company link | Label says dechub.in; destination is LinkedIn company profile | Point to website or relabel |
| Anchor navigation | Six existing targets found; smooth scroll enabled | Update both header/footer with revised section IDs; add sticky-header scroll offset |
| Video play control | No handler, video element, or embed | Implement for supplied video or omit |
| Headshot thumbnails | useState selection changes preview | Reusable; ensure accessible names/selected state |
| Download All | No handler | Needs real archive/download flow |
| Download Logo | Downloads Success Resources logo | Replace with Dechub asset if section retained |
| Bio and one-pager buttons | No handlers | Create actual resources before exposing |
| Featured quote selection | Dots update active quote; small-card clicks select different authors' main quotes | Rebuild mapping if retained |
| Contact submission | Real POST code to Web3Forms using NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY | Delivery untested; do not assume recipient from visible email |
| Contact failure handling | No try/catch around fetch/JSON; no pending disable/duplicate-submit protection | Add robust success/error/pending behavior |
| Footer subscription | No subscription handler or service; email lacks name | Remove until a real destination exists |
| Terms / Privacy | Both href="#" | Supply real destinations if published |

## Responsive and accessibility findings

These are source-level concerns requiring browser checks during implementation:

- Navbar hides links, socials, and CTA below lg, with no mobile menu replacement.
- Navbar uses 210px side padding from md upward; at a 1024px viewport that leaves only about 604px before inner padding for all desktop content. Crowding is likely.
- Video wrapper uses 170px side padding from md, making tablet presentation disproportionately narrow.
- GlobalReach uses a fixed 416px graphic and a nowrap heading; both can exceed mobile content width. Main overflow-x-hidden may conceal clipping instead of resolving it.
- ExperienceCards keeps three absolute-positioned 28%-width cards at all widths, with 280px minimum image height and a 600px stage. Mobile cards will be very narrow.
- About portrait uses nested height:100% containers inside a min-height wrapper; actual resolved image height needs browser verification.
- Some sections apply horizontal padding on both outer section and spotlight-content, while others use different widths. Alignment should be normalized.
- Testimonial text sits in fixed-height or absolute layouts; long copy may collide or overflow when wrapping changes.
- Continuous animations have no prefers-reduced-motion override. Only the stage strip pauses on hover; moving text also needs a usable pause/reduced-motion approach if retained.
- Header social icon links lack explicit accessible names; form inputs rely on placeholders rather than persistent labels.
- Contact status is not an aria-live region. Inactive testimonial panels are visually transparent but not explicitly hidden from assistive technology.
- Existing markup has a main landmark and a single hero h1. New sections should retain a logical heading hierarchy and visible focus states.

## Image inventory and performance

- All 30 centrally registered assets exist. This does not validate image ownership, accuracy of captions, or runtime rendering.
- Hero and About portraits plus the first headshot were inspected; the stage asset was inspected separately from those portraits.
- Seven existing headshots are registered. The gallery could support future founder resources, but it is not necessary for the initial narrative.
- Referenced stage originals are roughly 3.4-3.9 MB each. Several portraits/headshots are roughly 1.7-2.8 MB each. next/image is used, so these source sizes are not necessarily browser transfer sizes; optimize actual delivery and sizes props during implementation.
- Old and alternate portraits remain in public/images, including a roughly 15 MB old About image. Unreferenced files do not automatically load on the homepage; do not describe the full asset directory size as page weight.
- No project-specific images for the proposed Titan/Fastrack/Tree Builders/Tanishq portfolio were identified by filename. Collect/confirm project artwork before building those cards; don't substitute event photographs.
- The current asset list contains no actual video file or downloadable bio/one-pager document.

## Proposed page order

1. Hero: Prasanna EL, Founder of Dechub; short positioning; connect and work CTAs.
2. Meet the Founder: multidisciplinary perspective, brief Titan experience, practical leadership.
3. Areas of Focus: four rows covering brand strategy, digital experiences, AI/automation, marketing/growth.
4. Building Dechub: founding belief, connected services, business/talent focus; company link.
5. Selected Work: real project cards with organization, challenge, contribution, and supported result.
6. How We Work: Dechub's discovery, design, integration, and growth process.
7. Insights: three linked posts/articles with short summaries.
8. Founder Philosophy: concise personal values, potentially Karate as background context.
9. Contact: business enquiry and public business email.
10. Footer: updated links, founder identity, socials.

Optional later additions: verified association strip, a real introduction video, client testimonials, and useful downloadable resources. Geographic context can live in About; sector lists can live in Building Dechub. This avoids repeating the same claims in multiple standalone sections.

## Content readiness

Ready for drafting: name, founder positioning, company philosophy, multidisciplinary experience, broad expertise, short Titan background, public social links, business email, and personal values.

Needs accurate attribution: company projects/results, company capabilities, geography, and banner statistics. The founder date and Director role date describe potentially different milestones; don't conflate them.

Needs additional assets/detail: project artwork, exact personal project contributions, a specific video URL if included, verified testimonials, downloadable resources, legal destinations, and any actual speaking/workshop offering.

No dedicated college section, junior-role timeline, birthday, connection date, or follower counter is needed for this founder-focused page.

## Implementation and verification sequence

1. Settle the proposed section map and CTA wording; preserve useful visual patterns.
2. Centralize portfolio copy and links to reduce inconsistent names and claims.
3. Rewrite metadata, Hero, About, company, expertise, and Contact around founder positioning.
4. Repurpose supported layouts; remove inactive/unsupported sections from page composition without deleting reusable components unnecessarily.
5. Add confirmed project/insight assets and destinations.
6. Update all anchors, alt text, downloads, and accessible labels together.
7. Correct mobile navigation and fixed-size layout issues.
8. Run TypeScript/build checks as appropriate, browser checks at phone/tablet/desktop widths, keyboard navigation, link checks, and mocked form success/error tests. Send no external messages during verification without explicit authorization.

Reference material: docs/portfolio-content-notes.md.
