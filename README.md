# LOOK AGAIN. — Interactive introduction for UUG.AI

An original, illustrated and scrollable one-page creative application by **Teynur Yuseinov** for UUG.AI's Creative Frontend Engineer role and Arteveldehogeschool's LYOB Job Battle.

**Idea:** A detection is not a story. A fictional eight-frame vignette of a lost red balloon becomes a human moment when the visitor scrubs time and changes perspective. The page is not meant to reproduce UUG.AI's real interface or data.

## Install over your existing Next.js project

From your **existing Next.js project's root** (the directory containing `package.json`):

```bash
unzip -o ~/Downloads/look-again-v3.zip -d .
npm run dev
```

Open http://localhost:3000. The archive contains only `src/` and documentation, **not** package.json or node_modules. No new dependencies are needed for this version.

Check it:

```bash
npx tsc --noEmit
npm run build
```

## What is interactive?

1. **Eight-frame illustrated story:** drag the native range slider (works with pointer, touch and keyboard), press play/pause or move to the next frame. Figures and the red balloon transition between moments.
2. **Switch lens:** toggles between a deliberately limited technical description and the story in human terms, while preserving the selected frame.
3. **Three design principles:** select audience, function or feeling; the typographic art and explanation change together.
4. **Fossielenspoor iteration:** switch Before/After to compare a schematic of an early, unstable construction with a reinforcing exterior shell. This is **an illustration of the decision**, not a project photograph.
5. **Normal scrolling:** anchor navigation and reading order work without scroll-jacking, locked screens or hidden steps.

## Who it is for

The original 30 September 2026 UUG.AI role asks for someone who can make video, timelines, AI output and complex information understandable. This prototype expresses an independent design perspective on that general challenge; it is not based on their actual video AI models.

## Files

- `src/components/LookAgain.tsx`: whole application, illustrated React SVG scene and working interactions.
- `src/lib/story.ts`: eight original frames and design-principle content.
- `src/app/globals.css`: art direction, interactions, layout, animations and reduced-motion handling.
- `src/app/page.tsx`, `layout.tsx`, `icon.svg`: entrypoint and metadata.

## Hand-in at LYOB

The Job Battle course specifies an **embedded file on Notion** (PDF, MP4 or image) by **18 November 2026 at 23:55**. Publish the site on Vercel and embed a short MP4 tour or screenshot PDF in Notion, in addition to adding the public URL. A public link alone is not an embedded file.

## Notes

- The story and all detection text are fictional. No cameras, AI, analytics, network requests, personal tracking or database are used.
- The project is independently made and is **not affiliated with or endorsed by UUG.AI**.
- No actual imagery from Het Fossielenspoor is included. Add real project images only if you own them and want to personalize the page further.
- Test mobile, Safari and reduced-motion mode before submitting.
