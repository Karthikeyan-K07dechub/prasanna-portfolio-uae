# English and Arabic portfolio

## Behavior

- `/` is English by default; `/ar` is Arabic.
- The navbar language link is available on desktop and mobile.
- Both pages are pre-rendered with their correct document language, direction, title, description, and alternate-language links.
- Separate root layouts share `DocumentLayout`, `PortfolioPage`, and all active section components. Switching languages performs a full navigation and retains the section currently in view.
- English source strings are the translation keys. Arabic copy lives in `src/lib/ar.json`; `useLanguage()` selects the correct text during rendering. No runtime translation service is used.
- Arabic uses Noto Sans Arabic, logical spacing/alignment, RTL reading order, and direction-aware arrows. Photographs and logos are not mirrored.
- Existing colors, hero artwork, email addresses, and social destinations are preserved. English text embedded in project images remains part of the original artwork.

## Contact form

- Name, email, and message are required; phone is optional.
- Localized validation focuses the first invalid field. Status messages are announced accessibly.
- Names and messages accept either writing direction; phone numbers and email addresses remain LTR.
- Drafts are stored in this tab's session storage and restored across language navigation. They are cleared after success. If storage is blocked, the form still works but draft restoration is unavailable.
- Web3Forms receives the original field values, the existing sender/subject, and a language field. Network failures, HTTP errors, and a 20-second timeout show translated feedback. A submission guard prevents duplicate requests while sending.

## Verification

- Production build passes; both language pages are statically pre-rendered.
- TypeScript check passes.
- Headless Edge checked English and Arabic at 320, 390, 768, 1024, 1440, and 1920 pixels: no horizontal overflow, clipped text, or broken section links detected.
- Screenshots captured at 390 and 1440 pixels for every active section and footer. Representative desktop/mobile Arabic views visually reviewed.
- Mobile menu opening, Escape dismissal, anchor dismissal, bidirectional language navigation, section preservation, and draft restoration pass.
- Mocked form checks cover required validation, offline error, server error, sending state, duplicate prevention, payload preservation, success, and draft clearing. No real emails were sent.
- External link destinations match between languages. No browser runtime exceptions were recorded.
- Evidence: `docs/bilingual-checks.json`; browser runner: `docs/check-bilingual.cjs`. Run against a local production server on port 3100, or set `REVIEW_URL`. `SKIP_SCREENSHOTS=1` skips screenshot regeneration.

## Review notes

- A fluent Arabic editorial review is recommended before public launch, particularly for biography and business terminology.
- The pre-existing small/faded mobile hero portrait was preserved; it is independent of language support.
- Final-domain canonical URLs and a sitemap can be added once the production domain is established. Default framework 404 content is not localized by this change.
- Legacy components that are not mounted on the active portfolio were not translated.
