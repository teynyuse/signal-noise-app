# Look Again — The Missing Link

**An interactive application for the Node.js Back-End Engineer role at In The Pocket.**

Created by [Teynur Yuseinov](https://www.teynuryuseinov.be/en) as part of Arteveldehogeschool's LYOB Job Battle.

## The idea

**You see movement. But do you see the system?**

A digital experience shows people what happens. A reliable backend makes sure the underlying events, state changes and responses make sense.

*Look Again* explores that distinction through a fictional story: a child loses a red balloon, a passer-by notices and returns it. As visitors scroll, they see the same sequence through two perspectives — what a system might observe and what the moment means to a person.

This is a **frontend storytelling prototype communicating my backend engineering approach**, not a deployed backend service or a real AI detection system. The event names, statuses and technical outputs in the story are illustrative.

## Explore the experience

- **Scroll-driven narrative:** four chapters — holding, losing, noticing and returning — unfold as the visitor scrolls.
- **Two perspectives:** an illustrated comparison contrasts a technical observation with the human story behind it.
- **Continuous visual thread:** the red balloon follows the page journey, connecting its different sections.
- **Backend thinking:** subsequent sections introduce domain modelling, secure and testable services, API contracts, data and security, and delivery.
- **Project example:** *Het Fossielenspoor* illustrates how physical input, system state and feedback connect in a real interactive installation.
- **Bilingual content:** switch between English and Dutch.
- **Motion accessibility:** animations take the user's reduced-motion preference into account.

## Why In The Pocket?

Rather than writing a conventional cover letter, I wanted to make my way of thinking tangible. The experience connects a human story to engineering questions:

- Which event occurred, and what state should change?
- How do we keep data, API responses and error handling predictable?
- How can services remain secure, testable, observable and maintainable?

These are **themes explored by the presentation**; the project does not claim to implement the API, authentication, database, Docker pipeline or cloud infrastructure mentioned in its content.

## Built with

| Technology | Role |
| --- | --- |
| Next.js 16 (App Router) | Application framework |
| React 19 + TypeScript | Component architecture and type safety |
| Motion | Scroll-linked animation and scene transitions |
| CSS | Layout, visual design and responsive styling |
| Next.js Image | Project image rendering |

The project also lists `lucide-react`, Tailwind CSS and its Turbopack integration as dependencies. The active experience is implemented in `src/components/LookAgain.tsx`.

## Run locally

### Requirements

- Node.js and npm compatible with the installed Next.js version

### Setup

```bash
 git clone https://github.com/teynyuse/signal-noise-app.git
 cd signal-noise-app
 npm ci
 npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

To run the production build locally:

```bash
npm run start
```

**Required image:** `src/components/LookAgain.tsx` references `/fossielenspoor.jpg`. Ensure `public/fossielenspoor.jpg` is present; it was not included in the supplied project snapshot.

## Project structure

```text
src/
├── app/
│   ├── globals.css        # Main styles and responsive design
│   ├── layout.tsx         # Page metadata and root layout
│   ├── page.tsx           # Renders LookAgain
│   └── split.css          # Comparison interaction styles
├── components/
│   └── LookAgain.tsx      # Current interactive experience
└── lib/
    └── story.ts          # Earlier eight-frame story data
```

The repository also contains `src/components/SignalNoise.tsx`, `src/lib/mock-events.ts` and a `src.backup/` directory from earlier iterations. They are **not the current page entry point**.

## Project status and limitations

This is a concept and portfolio demonstration built around an illustrated, fictional scenario. It does not connect to cameras, external AI models, real event streams, a database or live backend APIs. Labels such as `200 · persisted` and `200 · idempotent` are narrative examples, not measured runtime results.

The current frontend is a demonstration of engineering interests and communication, rather than proof of implemented production backend infrastructure.

## About

**Teynur Yuseinov** — interactive developer with an interest in connecting clear interfaces to dependable systems.

- [Portfolio](https://www.teynuryuseinov.be/en)
- [Het Fossielenspoor](https://www.teynuryuseinov.be/en/work/het-fossielenspoor)

---

*Independent creative application for In The Pocket's Node.js Back-End Engineer role. Not an official In The Pocket product or affiliated project.*
