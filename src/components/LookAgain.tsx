'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

type Lang = 'nl' | 'en';
const copy = {
  nl: {
    nav: ['De ervaring', 'Mijn werk'], intro: 'Een interactieve sollicitatie door Teynur Yuseinov',
    title: ['Je ziet beweging.', 'Maar zie je', 'het systeem?'], lead: 'Ik ben Teynur: Node.js backend engineer. Ik vertaal menselijke flows naar veilige, testbare services die onder de oppervlakte blijven werken.', cta: 'Kijk zelf',
    note: 'JOB BATTLE · IN THE POCKET · THE MISSING LINK',
    exp: 'Eén moment. Twee perspectieven.', expText: 'Links zie je wat een camera kan registreren. Rechts ontdek je het verhaal achter die bewegingen.',
    hint: 'Scroll verder. Het verhaal ontvouwt zich vanzelf.', touch: 'Scroll verder. Elke beweging onthult meer context.',
    system: 'De waarneming', human: 'Het verhaal', pause: 'Pauzeren', play: 'Afspelen', reset: 'Opnieuw', timeline: 'Kies een moment', slider: 'Vergelijk waarneming en verhaal',
    facts: ['Een persoon en een object.', 'Het object beweegt omhoog.', 'Een tweede persoon nadert.', 'Het object komt terug.'],
    tech: [
      {status:'Event aanvaard', event:'balloon.held', state:'owner: PERSON_01', result:'200 · persisted'},
      {status:'State transition', event:'balloon.released', state:'owner: null', result:'event published'},
      {status:'Relatie opgelost', event:'holder.detected', state:'holder: PERSON_02', result:'state consistent'},
      {status:'Flow voltooid', event:'balloon.returned', state:'owner: PERSON_01', result:'200 · idempotent'},
    ],
    stories: ['Een kind houdt een ballon vast.', 'De ballon glipt weg. Het kind kan er niet meer bij.', 'Een voorbijganger ziet het en vangt het touwtje.', 'Ze geeft de ballon terug. Een klein gebaar, een groot verschil.'],
    beats: ['Vasthouden', 'Loslaten', 'Opmerken', 'Teruggeven'],
    takeaway: 'De interface toont wat gebeurt.', takeaway2: 'De backend zorgt dat het klopt.', explanation: 'Mijn kracht zit achter de ervaring: events vertalen naar voorspelbare state, heldere API-contracten en services die veilig, testbaar en observeerbaar blijven.',
    approach: 'Hoe ik backend bouw', principles: [['Modelleer het echte probleem.', 'Ik begin bij de flow en domeinregels. Wat is een event, welke state verandert en welke fout mag nooit stil verdwijnen?'], ['Veilig en testbaar.', 'TypeScript, validatie, tests en duidelijke grenzen maken een Node.js-service betrouwbaar en eenvoudiger om samen te onderhouden.'], ['Ship, observe, improve.', 'Een backend is pas klaar als ze betrouwbaar draait. Ik denk mee over logging, debugging, CI/CD, containers en cloud deployment.']],
    fitEyebrow: 'THE MISSING LINK · NODE.JS BACKEND', fitTitle: 'Wat je niet ziet, moet werken.', fitBody: 'Ik bouw de Node.js-laag achter digitale producten: duidelijke API’s, veilige data en betrouwbare delivery.',
    fitValues: [['API CONTRACTS', 'Eén request. Een duidelijk antwoord.', 'Types, validatie en heldere REST- of GraphQL-contracten.'], ['DATA & SECURITY', 'State met duidelijke regels.', 'Datamodellen, authenticatie en sterke foutafhandeling.'], ['DELIVERY', 'Betrouwbaar naar productie.', 'Tests, Docker, CI/CD en observability.']],
    offerLabel: 'MIJN RICHTING', offerRole: 'Node.js Backend Engineer', offerSkills: ['TypeScript & Node.js', 'REST & GraphQL APIs', 'Databases & authentication', 'Docker · AWS · CI/CD'], offerLine: 'Geen klassieke sollicitatiebrief, maar een werkende event-driven vertelling van hoe ik flows analyseer, modelleer en betrouwbaar maak.',
    proof: 'Van input naar betrouwbare output', proofTitle: 'Het Fossielenspoor', proofLead: 'Input, state en feedback in één fysieke ervaring.', proofBody: 'Kinderen draaien aan een carrousel; het systeem vertaalt die input naar licht, geluid en verhalen. Een tastbare flow waarin elke actie een betrouwbare reactie nodig heeft.',
    proofDetail: 'Ik realiseerde het zelfstandig, van logica tot constructie. Toen het systeem niet robuust genoeg was, herbouwde ik het. Dat is backend ownership: fouten zichtbaar maken, oorzaken oplossen en zorgen dat de volledige flow blijft werken.', project: 'Bekijk het bewijs', imageAlt: 'De fysieke interactieve installatie Het Fossielenspoor van Teynur Yuseinov',
    closing: 'Developer. Builder. Problem solver.', closingText: 'Ik wil bij In The Pocket groeien als Node.js backend engineer en betrouwbare services bouwen met TypeScript, cloud tooling en een team dat kwaliteit samen draagt.', portfolio: 'Bekijk mijn volledige portfolio', footer: 'Creatieve Job Battle-sollicitatie voor de rol Node.js Back-End Engineer bij In The Pocket.', fictional: 'Geïllustreerde, fictieve scène', top: 'Naar boven', skip: 'Naar de inhoud',
  },
  en: {
    nav: ['The experience', 'My work'], intro: 'An interactive application by Teynur Yuseinov',
    title: ['You see movement.', 'But do you see', 'the system?'], lead: 'I’m Teynur, a Node.js backend engineer. I translate human flows into secure, testable services that keep working beneath the surface.', cta: 'See for yourself',
    note: 'JOB BATTLE · IN THE POCKET · THE MISSING LINK',
    exp: 'One moment. Two perspectives.', expText: 'On the left, see what a camera can record. On the right, discover the story behind those movements.',
    hint: 'Keep scrolling. The story unfolds by itself.', touch: 'Keep scrolling. Each movement reveals more context.',
    system: 'The observation', human: 'The story', pause: 'Pause', play: 'Play', reset: 'Restart', timeline: 'Choose a moment', slider: 'Compare observation and story',
    facts: ['A person and an object.', 'The object moves upwards.', 'A second person approaches.', 'The object returns.'],
    tech: [
      {status:'Event accepted', event:'balloon.held', state:'owner: PERSON_01', result:'200 · persisted'},
      {status:'State transition', event:'balloon.released', state:'owner: null', result:'event published'},
      {status:'Relation resolved', event:'holder.detected', state:'holder: PERSON_02', result:'state consistent'},
      {status:'Flow completed', event:'balloon.returned', state:'owner: PERSON_01', result:'200 · idempotent'},
    ],
    stories: ['A child is holding a balloon.', 'The balloon slips away. The child cannot reach it.', 'A passer-by notices and catches the string.', 'She gives the balloon back. A small gesture makes a difference.'],
    beats: ['Holding', 'Losing', 'Noticing', 'Returning'],
    takeaway: 'The interface shows what happens.', takeaway2: 'The backend makes it correct.', explanation: 'My strength lives behind the experience: translating events into predictable state, clear API contracts and services that remain secure, testable and observable.',
    approach: 'How I build backend', principles: [['Model the real problem.', 'I start with the flow and domain rules. What is an event, which state changes and which failure must never disappear silently?'], ['Secure and testable.', 'TypeScript, validation, tests and clear boundaries make a Node.js service reliable and easier to maintain together.'], ['Ship, observe, improve.', 'A backend is only done when it runs reliably. I think about logging, debugging, CI/CD, containers and cloud deployment.']],
    fitEyebrow: 'THE MISSING LINK · NODE.JS BACKEND', fitTitle: 'What stays unseen must work.', fitBody: 'I build the Node.js layer behind digital products: clear APIs, secure data and reliable delivery.',
    fitValues: [['API CONTRACTS', 'One request. One clear response.', 'Types, validation and clear REST or GraphQL contracts.'], ['DATA & SECURITY', 'State with clear rules.', 'Data models, authentication and strong error handling.'], ['DELIVERY', 'Reliably into production.', 'Tests, Docker, CI/CD and observability.']],
    offerLabel: 'MY DIRECTION', offerRole: 'Node.js Backend Engineer', offerSkills: ['TypeScript & Node.js', 'REST & GraphQL APIs', 'Databases & authentication', 'Docker · AWS · CI/CD'], offerLine: 'Not a traditional cover letter, but a working event-driven story showing how I analyse, model and stabilise flows.',
    proof: 'From input to reliable output', proofTitle: 'Het Fossielenspoor', proofLead: 'Input, state and feedback in one physical experience.', proofBody: 'Children turn a carousel; the system translates that input into light, sound and stories. A tangible flow where every action needs a reliable response.',
    proofDetail: 'I built it independently, from logic to construction. When the system was not robust enough, I rebuilt it. That is backend ownership: expose failures, solve root causes and keep the complete flow working.', project: 'Explore the proof', imageAlt: 'The physical interactive installation Het Fossielenspoor by Teynur Yuseinov',
    closing: 'Developer. Builder. Problem solver.', closingText: 'I want to grow at In The Pocket as a Node.js backend engineer and build reliable services with TypeScript, cloud tooling and a team that owns quality together.', portfolio: 'View my full portfolio', footer: 'Creative Job Battle application for the Node.js Back-End Engineer role at In The Pocket.', fictional: 'Illustrated, fictional scene', top: 'Back to top', skip: 'Skip to content',
  },
};
type Copy = typeof copy.nl;
const ease = [0.22, 1, 0.36, 1] as const;

function Balloon({ x = 0, y = 0, string = 100, opacity = 1 }: { x?: number; y?: number; string?: number; opacity?: number }) {
  const reduced = useReducedMotion();
  return <motion.g initial={false} animate={{ x, y, opacity }} transition={{ duration: reduced ? 0 : 1.4, ease }}>
    <path d={`M0 40 C20 65 -14 ${string - 20} 0 ${string}`} fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M0-45C-54-45-50 23 0 44C50 23 54-45 0-45Z" fill="#594ba0" />
    <path d="m0 41-5 8h10Z" fill="#594ba0" />
    <path d="M-19-26q-13 13-9 28" stroke="#c9c1ee" strokeWidth="4" fill="none" strokeLinecap="round" />
  </motion.g>;
}

type Pose = 'rest' | 'hold' | 'miss' | 'catch' | 'receive';
type Emotion = 'calm' | 'sad' | 'worried' | 'focused' | 'happy';

function Person({ x, helper = false, child = false, pose = 'rest', emotion = 'calm' }: { x: number; helper?: boolean; child?: boolean; pose?: Pose; emotion?: Emotion }) {
  const reduced = useReducedMotion();
  const leftArm = pose === 'catch' ? 'M-19 278-43 247' : 'M-19 278-35 311';
  const rightArm = pose === 'miss' ? 'M19 278 60 220' : pose === 'hold' || pose === 'receive' ? 'M19 278 56 290' : 'M19 278 39 307';
  const hand = pose === 'catch' ? {cx:-43,cy:247} : pose === 'miss' ? {cx:60,cy:220} : pose === 'hold' || pose === 'receive' ? {cx:56,cy:290} : null;
  const mouth = emotion === 'happy' ? 'M4 252q7 8 14 0' : emotion === 'sad' ? 'M5 258q6-6 12 0' : emotion === 'worried' ? 'M6 256q5-3 10 0' : 'M6 255q5 2 10 0';
  return <motion.g initial={false} animate={{ x, scale: child ? .82 : 1 }} style={{transformOrigin:'0px 367px'}} transition={reduced?{duration:0}:{type:'spring',stiffness:58,damping:17,mass:.72}}>
    <ellipse cy="370" rx={child ? 30 : 34} ry="6" fill="#261f32" opacity=".12" />
    <path d="m-10 326-11 40m31-40 15 40" stroke="#261f32" strokeWidth="11" strokeLinecap="round" />
    <path d="M-23 267Q0 253 23 267l7 68h-60Z" fill={helper ? '#594ba0' : '#d9a75e'} />
    <path d="M-22 281h45" stroke={helper ? '#7667bd' : '#edc884'} strokeWidth="4" opacity=".75" />
    <motion.path animate={{ d: leftArm }} transition={{duration:reduced ? 0 : .75,ease}} stroke="#261f32" strokeWidth="9" strokeLinecap="round" fill="none" />
    <motion.path animate={{ d: rightArm }} transition={{duration:reduced ? 0 : .75,ease}} stroke="#261f32" strokeWidth="9" strokeLinecap="round" fill="none" />
    {hand && <motion.circle animate={{cx:hand.cx,cy:hand.cy}} r="5.5" fill={helper ? '#b98264' : '#e6b08c'} />}
    <circle cy="242" r="22" fill={helper ? '#b98264' : '#e6b08c'} />
    <path d={helper ? 'M-22 241q0-31 24-25 22 1 21 28-13-19-45-3' : 'M-22 244q-5-29 19-29 23 0 25 27-11-11-20-16-9 13-24 18'} fill="#261f32" />
    <motion.path animate={{d:emotion === 'sad' || emotion === 'worried' ? 'M1 237q5-4 10 0' : 'M1 238q5 2 10 0'}} stroke="#261f32" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="8" cy="244" r="2" fill="#261f32" />
    <motion.path animate={{d:mouth}} transition={{duration:.45}} stroke="#704b43" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="15" cy="249" r="3" fill="#d9897f" opacity=".35" />
  </motion.g>;
}

function Scene({ beat, human }: { beat: number; human: boolean }) {
  const reduced = useReducedMotion();
  const balloon = [{x:285,y:174,string:130},{x:375,y:80,string:130},{x:520,y:113,string:115},{x:325,y:174,string:130}][beat];
  const helper = [880,760,560,400][beat];
  const childPose: Pose[] = ['hold','miss','rest','receive'];
  const childEmotion: Emotion[] = ['calm','sad','worried','happy'];
  const helperEmotion: Emotion[] = ['calm','calm','focused','happy'];
  return <svg viewBox="0 0 800 430" aria-hidden="true" className={human ? 'human-scene' : 'machine-scene'}>
    <rect width="800" height="430" fill={human ? '#eae7f0' : '#211d2b'} />
    <g stroke={human ? '#c9c1d7' : '#373140'} fill="none"><path d="M0 366h800M0 401h800M30 366V132h135v234m0-92V80h146v194m257 92V135h90v231m0-92V65h150v301" /><path d="M55 161h80m-80 30h80m58-79h84m-84 32h84m411-39h80m-80 30h80" /></g>
    <circle cx="647" cy="101" r="49" fill={human ? '#faf8fc' : '#322b40'} />
    {human ? <><Person x={240} child pose={childPose[beat]} emotion={childEmotion[beat]} /><Person x={helper} helper pose={beat===2?'catch':'rest'} emotion={helperEmotion[beat]} /><g className="tech-annotations">
      <rect x="204" y="214" width="72" height="160" rx="3" /><text x="204" y="205">PERSON_01 · 98%</text>
      {beat >= 2 && <><motion.rect initial={{x:820,opacity:0}} animate={{x:helper-35,opacity:1}} y="207" width="72" height="166" rx="3" transition={reduced?{duration:0}:{type:'spring',stiffness:55,damping:17,mass:.7}} /><motion.text initial={{x:820,opacity:0}} animate={{x:helper-35,opacity:1}} y="198" transition={reduced?{duration:0}:{type:'spring',stiffness:55,damping:17,mass:.7}}>PERSON_02 · 94%</motion.text></>}
      <path d="M285 174 375 80 520 113 325 174" className="motion-trace" />
    </g></> : <>
      <g stroke="#a699cf" fill="none"><rect x="209" y="213" width="65" height="159" /><path d="M240 231v118m-23-76h46m-23 76-17 20m17-20 17 20" /></g>
      <motion.g animate={{x:helper}} transition={{duration:reduced ? 0 : 1.4,ease}}><rect x="-31" y="213" width="65" height="159" stroke="#a699cf" fill="none" /><text x="-31" y="202">PERSON 02</text></motion.g>
      <motion.g animate={{x:balloon.x,y:balloon.y}} transition={{duration:reduced ? 0 : 1.4,ease}}><rect x="-43" y="-52" width="86" height="107" stroke="#c5b5ed" fill="none" /><circle r="5" fill="#594ba0" /><text x="-43" y="-63">OBJECT 01</text></motion.g>
      <text x="209" y="202">PERSON 01</text><path d="M285 174 375 80 520 113 325 174" stroke="#84759c" strokeDasharray="3 6" fill="none" />
    </>}
  </svg>;
}

function useScrollChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const [chapter, setChapter] = useState({ index: 0, direction: 1 });
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(progress, 'change', value => {
    const index = Math.max(0, Math.min(3, Math.floor(value * 4)));
    if (index === activeIndex.current) return;
    setChapter({ index, direction: Math.sign(index - activeIndex.current) });
    activeIndex.current = index;
  });
  return { ref, progress, ...chapter };
}

function chapterEntrance(direction: number, reduced: boolean | null, distance = 16) {
  return {
    initial: { opacity: reduced ? 1 : 0.85, y: reduced ? 0 : direction * distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.32, ease },
  };
}

function Experiment({ c }: { c: Copy }) {
  const { ref, progress, index: beat, direction } = useScrollChapter();
  const reduced = useReducedMotion();
  return <section id="experience" className="experience section">
    <div ref={ref} className="story-scroll">
      <div className="story-sticky">
        <div className="comparison story-stage" aria-label={c.human}>
          <Scene beat={beat} human />
          <div className="story-card unified-story-card" aria-live="polite">
            <div className="story-card-step"><strong>{c.beats[beat]}</strong></div>
            <motion.div className="story-card-copy" key={beat} {...chapterEntrance(direction, reduced, 8)}><small>{c.human}</small><p>{c.stories[beat]}</p></motion.div>
            <div className="observation-card"><span>BACKEND EVENT STREAM · LIVE</span><motion.div className="tech-readout" key={`event-${beat}`} {...chapterEntrance(direction, reduced, 6)}><strong>{c.tech[beat].status}</strong><dl><div><dt>Event</dt><dd>{c.tech[beat].event}</dd></div><div><dt>State</dt><dd>{c.tech[beat].state}</dd></div><div><dt>Result</dt><dd>{c.tech[beat].result}</dd></div></dl></motion.div><div className="observation-scan" aria-hidden="true"><i /><i /><i /></div></div>
          </div>
        </div>
        <div className="scroll-timeline" aria-label={c.timeline}><div className="scroll-track"><motion.span style={{scaleX:progress}} /></div>{c.beats.map((label,i) => <span key={label} className={beat===i?'active':''}><i /> <span className="sr-only">{label}</span></span>)}</div>
      </div>
    </div>
  </section>;
}

function Reflection({ c, lang }: { c: Copy; lang: Lang }) {
  const { ref, progress, index: step, direction } = useScrollChapter();
  const reduced = useReducedMotion();
  const backgrounds = lang === 'nl' ? ['CONTEXT', 'MENS', 'WERKT', 'VOELT'] : ['CONTEXT', 'PERSON', 'WORKS', 'FEELS'];
  return <section ref={ref} className="reflection-scroll">
    <div className="reflection-sticky">
        {step === 0 ? <motion.div className="reflection-content reflection-opening" key="opening" {...chapterEntrance(direction, reduced)}>
          <h2>{c.takeaway}<br /><em>{c.takeaway2}</em></h2><p>{c.explanation}</p>
        </motion.div> : <motion.div className="reflection-content reflection-principle" key={step} {...chapterEntrance(direction, reduced)}>
          <span className="reflection-glyph" aria-hidden="true">{['◉','＋','✳'][step-1]}</span><h2>{c.principles[step-1][0]}</h2><p>{c.principles[step-1][1]}</p>
        </motion.div>}
      <span className="reflection-backdrop" aria-hidden="true">{backgrounds[step]}</span>
      <div className="reflection-progress" aria-hidden="true"><motion.span style={{scaleX:progress}} /></div>
    </div>
  </section>;
}

function Fit({ c }: { c: Copy }) {
  const { ref, progress, index: step, direction } = useScrollChapter();
  const reduced = useReducedMotion();
  const flows = [['REQUEST','VALIDATE','SERVICE','RESPONSE'],['TOKEN','POLICY','DATABASE','AUDIT'],['COMMIT','TEST','BUILD','DEPLOY']];
  return <section className="fit section" aria-labelledby="fit-title">
    <h2 id="fit-title" className="sr-only">{c.fitEyebrow}</h2>
    <div ref={ref} className="fit-scroll"><div className="fit-sticky">
      {step === 0 ? (
        <motion.div key="fit-intro" className="fit-heading" {...chapterEntrance(direction, reduced)}>
          <h2>{c.fitTitle}</h2>
          <p>{c.fitBody}</p>
        </motion.div>
      ) : (
        <motion.div key={step} className="fit-focus" {...chapterEntrance(direction, reduced)}>
          <article>
            <h3>{c.fitValues[step - 1][1]}</h3>
            <p>{c.fitValues[step - 1][2]}</p>
          </article>
          <div className="backend-flow" aria-hidden="true">
            {flows[step - 1].map((item, index, flow) => (
              <motion.div key={item} {...chapterEntrance(direction, reduced, 8)}
                transition={{ duration: reduced ? 0 : .32, delay: reduced ? 0 : index * .045, ease }}>
                <i>{String(index + 1).padStart(2, '0')}</i>
                <strong>{item}</strong>
                {index < flow.length - 1 && <span />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      <div className="fit-timeline" aria-hidden="true"><motion.i style={{scaleX:progress}} /></div>
    </div></div>
    <motion.div className="offer" initial={{opacity:reduced?1:0,y:reduced?0:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.7,ease}}><div><span>{c.offerLabel}</span><h3>{c.offerRole}</h3><p>{c.offerLine}</p></div><ul>{c.offerSkills.map(skill => <li key={skill}>{skill}</li>)}</ul></motion.div>
  </section>;
}

export function LookAgain() {
  const [lang, setLang] = useState<Lang>('en');
  const [heroFloat, setHeroFloat] = useState(true);
  const c = copy[lang];
  const reduced = useReducedMotion();
  const journey = useRef<HTMLDivElement>(null);
  const { scrollYProgress:journeyProgress } = useScroll({target:journey,offset:['start start','end end']});
  const smoothJourney = useSpring(journeyProgress, { stiffness: 155, damping: 28, mass: .55 });
  const balloonProgress = reduced ? journeyProgress : smoothJourney;
  const keyframes = [0,.08,.15,.19,.22,.25,.4375,.58,.625,.76,.8125,.94,1];
  const balloonX = useTransform(balloonProgress, keyframes, ['70vw','70vw','68vw','56vw','43vw','35.5vw','35.5vw','47vw','47vw','65vw','65vw','35.5vw','35.5vw']);
  const balloonY = useTransform(balloonProgress, keyframes, ['45svh','40svh','23svh','14svh','25svh','42svh','42svh','19svh','19svh','26svh','26svh','42svh','42svh']);
  const balloonScale = useTransform(balloonProgress, [0,.08,.19,.25,.85,.94,1], [1.08,1.12,.96,.82,.82,.68,.68]);
  const balloonRotate = useTransform(balloonProgress, keyframes, [0,-2,-7,4,-3,0,0,-4,0,3,0,0,0]);
  const detectionOpacity = useTransform(balloonProgress, [0,.23,.27], [0,0,1]);
  useMotionValueEvent(balloonProgress, 'change', latest => setHeroFloat(latest < .075));
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <main id="main">
      <div className="balloon-journey" ref={journey}>
      <div className="journey-overlay" aria-hidden="true">
        <div className="journey-frame">
          <motion.div className="journey-balloon" style={{x:balloonX,y:balloonY,scale:balloonScale,rotate:reduced ? 0 : balloonRotate}}>
            <div className={`journey-balloon-inner${heroFloat && !reduced?' is-floating':''}`}>
              <motion.div className="journey-detection" style={{opacity:detectionOpacity}}><span>OBJECT_01 · 97%</span></motion.div>
              <svg viewBox="-60 -60 120 285"><Balloon string={195} /></svg>
            </div>
          </motion.div>
        </div>
      </div>
      <section id="top" className="hero section">
        <div className="hero-language-bar"><div className="hero-language language" role="group" aria-label={lang==='nl'?'Taal':'Language'}>{(['en','nl'] as const).map(l => <button key={l} type="button" lang={l} aria-label={l==='nl'?'Nederlands':'English'} aria-pressed={lang===l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}</div></div>
        <div className="hero-layout"><div className="hero-copy"><h1 key={lang}>{c.title.map((line,i) => <span className="title-mask" key={line}><motion.span initial={{y:reduced?0:'105%'}} animate={{y:0}} transition={{delay:i*.12,duration:.85,ease}} className={i===2?'accent':''}>{line}</motion.span></span>)}</h1></div>
        <div className="hero-object" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div></div>
        <a className="hero-scroll-cue" href="#experience" aria-label={lang==='nl'?'Scroll naar de ervaring':'Scroll to the experience'}><span>{lang==='nl'?'Scroll verder':'Keep scrolling'}</span><span aria-hidden="true">↓</span></a>
      </section>
      <Experiment c={c} />
      </div>
      <Reflection c={c} lang={lang} />
      <Fit c={c} />
    <section id="work" className="closing-work">
      <motion.a className="closing-project" href={`https://www.teynuryuseinov.be/${lang}/work/het-fossielenspoor`} target="_blank" rel="noreferrer" initial={{opacity:0,scale:.985}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.15}} transition={{duration:1,ease}}>
        <Image src="/fossielenspoor.jpg" alt={c.imageAlt} width={1600} height={1000} sizes="100vw" />
        <div className="closing-project-copy"><span>{c.proof}</span><h2>{c.proofTitle}</h2><p>{c.proofLead}</p></div>
        <span className="closing-project-link">{c.project}<b aria-hidden="true">↗</b></span>
      </motion.a>
      <motion.div className="closing-signature" initial={{opacity:0,y:90}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:1,ease}}>
        <h2>Teynur<br />Yuseinov<span>.</span></h2>
        <a className="closing-portfolio" href={`https://www.teynuryuseinov.be/${lang}`} target="_blank" rel="noreferrer"><span>{lang==='nl'?<>Bekijk mijn<br /><strong>volledige portfolio</strong></>:<>View my<br /><strong>full portfolio</strong></>}</span></a>
        <div className="closing-meta"><span>© 2026 Teynur Yuseinov</span><a href="#top">{c.top} ↑</a></div>
      </motion.div>
    </section>
    </main>
  </>;
}
