"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Layers2,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import {
  categoryLabels,
  demoEvents,
  targetEvent,
  type DemoEvent,
  type EventCategory,
} from "@/lib/mock-events";

type EventFilter = "all" | EventCategory;
const filters: { value: EventFilter; label: string }[] = [
  { value: "all", label: "All events" },
  { value: "delivery", label: "Delivery" },
  { value: "movement", label: "Movement" },
  { value: "system", label: "System" },
];

const portfolio = "https://www.teynuryuseinov.be/en";
const fossil = "https://www.teynuryuseinov.be/en/work/het-fossielenspoor";

function SectionIndex({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-index" aria-hidden="true">
      <span>{number}</span>
      <span className="index-line" />
      <span>{title}</span>
    </div>
  );
}

function ArrowLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a className={secondary ? "arrow-link arrow-link-secondary" : "arrow-link"} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function EventRow({ event, chosen, onSelect }: { event: DemoEvent; chosen: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      className={`event-row ${chosen ? "event-row-selected" : ""}`}
      onClick={onSelect}
      aria-pressed={chosen}
      aria-label={`${event.time}, ${event.title}. ${event.description}`}
    >
      <span className="event-time">{event.time}</span>
      <span className="event-main">
        <span className="event-name">{event.title}</span>
        <span className="event-camera">{event.camera}</span>
      </span>
      <span className={`event-category event-category-${event.category}`}>{categoryLabels[event.category]}</span>
      <ChevronRight size={17} className="event-chevron" strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}

export function SignalNoise() {
  const [filter, setFilter] = useState<EventFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [construction, setConstruction] = useState<"before" | "after">("after");
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState("idea");
  const selectionRef = useRef<HTMLDivElement>(null);

  const selectedEvent = demoEvents.find((event) => event.id === selectedId) ?? null;
  const isCorrect = selectedId === targetEvent.id;
  const visibleEvents = demoEvents.filter((event) => filter === "all" || event.category === filter);

  const updateProgress = useCallback(() => {
    const doc = document.documentElement;
    const total = Math.max(1, doc.scrollHeight - window.innerHeight);
    setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const nodes = document.querySelectorAll<HTMLElement>("[data-nav-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveAnchor(visible[0].target.id);
      },
      { rootMargin: "-24% 0px -52% 0px", threshold: [0, 0.15, 0.4] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const revealAnswer = () => {
    setFilter("delivery");
    setSelectedId(targetEvent.id);
    window.setTimeout(() => selectionRef.current?.focus({ preventScroll: true }), 0);
  };

  const resetDemo = () => {
    setFilter("all");
    setSelectedId(null);
  };

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollPercent / 100})` }} aria-hidden="true" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Signal / Noise — go to top">
          <span className="brand-symbol">S<span>/</span>N</span>
          <span className="brand-copy">SIGNAL <span>/</span> NOISE <small>A CREATIVE INTRODUCTION</small></span>
        </a>
        <nav className="header-nav" aria-label="Page sections">
          {[
            { id: "idea", title: "The idea" },
            { id: "experiment", title: "Try it" },
            { id: "approach", title: "My approach" },
            { id: "about", title: "About me" },
          ].map((link) => (
            <a key={link.id} className={activeAnchor === link.id ? "nav-active" : ""} href={`#${link.id}`}>{link.title}</a>
          ))}
        </nav>
        <span className="header-aside">FOR UUG.AI <span className="aside-dot" /> 2026</span>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="micro"><span className="micro-line" /> AN EXPERIMENT ABOUT BETTER INTERFACES</p>
            <h1 id="hero-title">Make the complex <em>feel simple.</em></h1>
            <p className="hero-lead">People rarely need more information. They need to understand what matters. This is a small interactive demonstration of that idea.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#idea">Discover the story <ArrowDown aria-hidden="true" size={19} /></a>
              <a className="plain-link" href="#experiment">Go straight to the interaction <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-illustration" aria-label="Illustration: twelve recorded events simplified into one useful answer">
            <div className="hero-art-top"><span>FROM INFORMATION</span><span>TO UNDERSTANDING</span></div>
            <div className="transform-art">
              <div className="art-noise" aria-hidden="true">
                {Array.from({ length: 12 }, (_, i) => <span key={i} className={i === 6 ? "art-noise-item art-noise-item-active" : "art-noise-item"} />)}
              </div>
              <div className="art-path" aria-hidden="true"><span /><ArrowRight size={24} strokeWidth={1.6} /></div>
              <div className="art-signal"><span className="art-signal-label">THE ANSWER</span><strong>09:06</strong><span>Package dropped off</span></div>
            </div>
            <div className="hero-art-bottom"><span>12 recorded moments</span><span>01 meaningful answer</span></div>
          </div>
          <a className="scroll-note" href="#idea"><ArrowDown size={15} aria-hidden="true"/> Scroll to explore the thinking</a>
        </section>

        <div className="manifesto-bar" aria-label="Design philosophy"><span>START WITH A PERSON</span><span>REMOVE WHAT DOESN'T HELP</span><span>MAKE THE NEXT STEP OBVIOUS</span></div>

        <section className="story-section wrap" id="idea" data-nav-section aria-labelledby="idea-title">
          <SectionIndex number="01" title="The idea" />
          <div className="section-grid">
            <div className="section-heading">
              <p className="eyebrow">THE PROBLEM</p>
              <h2 id="idea-title">A simple question should have a <em>simple answer.</em></h2>
              <p>Imagine looking through a fictional activity log because you want to know one thing: when was a package dropped off?</p>
            </div>
            <div className="question-example">
              <div className="question-label">THE PERSON'S QUESTION</div>
              <p className="question-main">“At what time was the package actually delivered?”</p>
              <div className="problem-divider" />
              <div className="problem-stats"><span><strong>12</strong><small>events recorded</small></span><span><strong>3</strong><small>event categories</small></span><span><strong>1</strong><small>answer needed</small></span></div>
              <p className="example-note">The information exists. The challenge is making it useful without forcing someone to decode everything.</p>
            </div>
          </div>
          <div className="section-end"><span>So I designed one small interaction.</span><a href="#experiment">Try it yourself <ArrowDown size={17} aria-hidden="true" /></a></div>
        </section>

        <section className="experiment-section" id="experiment" data-nav-section aria-labelledby="experiment-title">
          <div className="wrap">
            <SectionIndex number="02" title="The interaction" />
            <div className="experiment-header">
              <div><p className="eyebrow">THE MINI EXPERIMENT</p><h2 id="experiment-title">Find the <em>moment</em> that matters.</h2></div>
              <p>No technical knowledge needed. Filter the log, then select the event that answers the question. You can explore freely or reveal the answer.</p>
            </div>
            <div className="experiment-board">
              <div className="board-main">
                <div className="board-title-row"><div><span className="board-overline">FICTIONAL EVENT LOG / 09:00–09:12</span><h3>What time was the package left at the entrance?</h3></div><span className="demo-label">SIMULATED DATA</span></div>
                <div className="filter-toolbar"><span className="filter-label"><SlidersHorizontal size={17} aria-hidden="true" /> Show me</span><div className="filter-buttons" role="group" aria-label="Filter events by category">{filters.map((option) => <button className={filter === option.value ? "filter-button filter-active" : "filter-button"} type="button" key={option.value} onClick={() => { setFilter(option.value); setSelectedId(null); }} aria-pressed={filter === option.value}>{option.label}</button>)}</div></div>
                <div className="log-heading"><span>TIME / EVENT</span><span>{visibleEvents.length} OF {demoEvents.length} EVENTS</span></div>
                <div className="event-list">{visibleEvents.map((event) => <EventRow key={event.id} event={event} chosen={selectedId === event.id} onSelect={() => setSelectedId(event.id)} />)}</div>
                <div className="board-foot"><span>All times and events are invented for this demo.</span><button type="button" onClick={resetDemo}><RotateCcw size={14} aria-hidden="true" /> Reset</button></div>
              </div>
              <aside className="board-aside" aria-label="Selection feedback">
                <div className="aside-sticky">
                  <span className="board-overline">YOUR SELECTION</span>
                  <div className="feedback" ref={selectionRef} tabIndex={-1} aria-live="polite" aria-atomic="true">
                    {selectedEvent === null ? (
                      <><span className="feedback-symbol"><CircleHelp size={26} strokeWidth={1.5}/></span><h3>Nothing selected yet.</h3><p>Start with the <strong>Delivery</strong> filter. Then look for the moment the package was actually left, not just when the courier arrived.</p></>
                    ) : isCorrect ? (
                      <><span className="feedback-symbol feedback-success"><CheckCircle2 size={27} strokeWidth={1.6}/></span><p className="feedback-kicker">THAT'S THE SIGNAL</p><h3 className="answer-time">{selectedEvent.time}</h3><p>The package was dropped off at the entrance. One relevant event answered the question.</p></>
                    ) : (
                      <><span className="feedback-symbol"><CircleHelp size={26} strokeWidth={1.5}/></span><p className="feedback-kicker">NOT QUITE</p><h3>{selectedEvent.title}</h3><p>{selectedEvent.description} This isn't the completed drop-off. Try another event.</p></>
                    )}
                  </div>
                  <div className="aside-guidance"><span>NO DEAD ENDS</span><p>Prefer to see the solution immediately? That's fine. The experience shouldn't become an obstacle.</p><button type="button" onClick={revealAnswer}>Reveal the answer <ArrowRight size={17} aria-hidden="true" /></button></div>
                </div>
              </aside>
            </div>
            <div className="end-note"><Check size={18} aria-hidden="true" /><p><strong>The point:</strong> there were always twelve events. Only one answered the person's question. Good UX makes that distinction clear.</p></div>
          </div>
        </section>

        <section className="story-section wrap approach-section" id="approach" data-nav-section aria-labelledby="approach-title">
          <SectionIndex number="03" title="My approach" />
          <div className="section-grid approach-intro"><div className="section-heading"><p className="eyebrow">THE THINKING</p><h2 id="approach-title">Not more features. <em>Better decisions.</em></h2></div><div className="approach-text"><p>This is how I approach design and development: understand the audience, build something that works and give people a reason to care.</p><p>Clarity isn't making everything disappear. It's knowing what deserves attention.</p></div></div>
          <div className="principles" aria-label="My three design principles">
            <article><span className="principle-number">01 / PEOPLE</span><h3>Fit the audience.</h3><p>The person using the product matters more than the complexity behind it.</p></article>
            <article><span className="principle-number">02 / FUNCTION</span><h3>Make it work.</h3><p>An interaction must solve a real problem, not just look impressive.</p></article>
            <article><span className="principle-number">03 / FEELING</span><h3>Leave something behind.</h3><p>Even the simplest experience can feel thoughtful, surprising or memorable.</p></article>
          </div>
          <div className="project-proof">
            <div className="proof-copy">
              <p className="eyebrow">A REAL PROJECT, NOT A MOCKUP</p>
              <h3>I also build <em>beyond the screen.</em></h3>
              <p>Het Fossielenspoor started as a group assignment. Because I combine working with studying, I built it independently, from the first idea to the finished interactive installation.</p>
              <p>The physical structure wasn't stable enough at first. Rather than accepting it, I added an outer shell made with two layers of panels. The installation became sturdier.</p>
              <p className="proof-point">That process reflects how I work: build, evaluate, question and improve.</p>
              <ArrowLink href={fossil}>Explore Het Fossielenspoor</ArrowLink>
            </div>
            <div className="proof-demo">
              <div className="proof-demo-head"><span>ONE CONCRETE DESIGN ITERATION</span><span>THE FOSSIL TRAIL</span></div>
              <div className="construction-switch" role="group" aria-label="Compare installation construction">
                <button type="button" className={construction === "before" ? "selected" : ""} onClick={() => setConstruction("before")} aria-pressed={construction === "before"}>Before</button>
                <button type="button" className={construction === "after" ? "selected" : ""} onClick={() => setConstruction("after")} aria-pressed={construction === "after"}>After improvement</button>
              </div>
              <div className={`construction-drawing drawing-${construction}`} aria-label={construction === "before" ? "Diagram of the first, less sturdy installation casing" : "Diagram showing the reinforced casing with two surrounding panel layers"} role="img">
                <div className="construction-core"><span>INSTALLATION</span><strong>CORE</strong></div>
                <div className="construction-layer layer-one" /><div className="construction-layer layer-two" />
                <span className="drawing-pointer">{construction === "before" ? "INITIAL CASING" : "REINFORCED OUTER SHELL"}</span>
              </div>
              <div className="construction-caption" aria-live="polite"><span>{construction === "before" ? "01 / FIRST BUILD" : "02 / IMPROVED BUILD"}</span><p>{construction === "before" ? "The original casing moved too much and needed reinforcement." : "An additional two-layer outer shell made the physical construction sturdier."}</p></div>
              <p className="diagram-note">Simplified illustration of a real iteration; not a technical construction drawing.</p>
            </div>
          </div>
        </section>

        <section className="about-section" id="about" data-nav-section aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-mark" aria-hidden="true"><span>T.</span><small>THINK. BUILD. IMPROVE.</small></div>
            <div className="about-content">
              <p className="eyebrow">THE PERSON BEHIND THIS</p>
              <h2 id="about-title">Hi, I'm <em>Teynur.</em></h2>
              <p className="about-role">Software Developer / Interactive Designer · Ghent, Belgium</p>
              <p className="about-description">I like turning ideas into digital and interactive experiences that people can understand and enjoy. I'm persistent, critical of my own work and interested in the space where design and development meet.</p>
              <p className="about-description">I built this small experiment to show you how I think — not just to tell you what I know.</p>
              <div className="about-actions"><ArrowLink href={portfolio}>Visit my portfolio</ArrowLink><ArrowLink href={fossil} secondary={true}>See a real project</ArrowLink></div>
              <div className="about-note"><Layers2 size={17} aria-hidden="true"/><span>Independent creative introduction made for UUG.AI / LYOB Job Battle. Not an official UUG.AI product. All event data is simulated.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer wrap"><a className="footer-brand" href="#top">S/N <span>BACK TO TOP ↑</span></a><span>DESIGNED & DEVELOPED BY TEYNUR YUSEINOV</span><span>GHENT — 2026</span></footer>
    </div>
  );
}
