export type Lens = 'signals' | 'story';

export type StoryFrame = {
  time: string;
  signal: string;
  insight: string;
  line: string;
  childX: number;
  helperX: number;
  balloonX: number;
  balloonY: number;
  balloonOwner: 'child' | 'helper' | 'none';
  helperVisible: boolean;
  highlight: 'child' | 'balloon' | 'helper';
};

// Original, invented illustrations. These are not real events or AI results.
export const frames: StoryFrame[] = [
  { time: '00:00', signal: 'One person, one red object', insight: 'Just another afternoon.', line: 'A child walks through the square with a balloon.', childX: 170, helperX: 730, balloonX: 271, balloonY: 155, balloonOwner: 'child', helperVisible: false, highlight: 'child' },
  { time: '00:01', signal: 'Object velocity increases', insight: 'Something changes.', line: 'A sudden gust catches the balloon.', childX: 196, helperX: 730, balloonX: 312, balloonY: 117, balloonOwner: 'none', helperVisible: false, highlight: 'balloon' },
  { time: '00:02', signal: 'Object moving away', insight: 'The balloon is gone.', line: 'The string slips out of the child’s hand.', childX: 219, helperX: 730, balloonX: 388, balloonY: 96, balloonOwner: 'none', helperVisible: false, highlight: 'balloon' },
  { time: '00:03', signal: 'New person enters frame', insight: 'Someone notices.', line: 'A passer-by sees what happened.', childX: 219, helperX: 696, balloonX: 485, balloonY: 94, balloonOwner: 'none', helperVisible: true, highlight: 'helper' },
  { time: '00:04', signal: 'Person changes direction', insight: 'A small decision.', line: 'Instead of walking past, she turns back.', childX: 219, helperX: 600, balloonX: 560, balloonY: 119, balloonOwner: 'none', helperVisible: true, highlight: 'helper' },
  { time: '00:05', signal: 'Object stops moving', insight: 'She catches it.', line: 'She reaches up and catches the string.', childX: 219, helperX: 532, balloonX: 566, balloonY: 128, balloonOwner: 'helper', helperVisible: true, highlight: 'balloon' },
  { time: '00:06', signal: 'People move closer', insight: 'The return.', line: 'She brings the balloon back.', childX: 244, helperX: 360, balloonX: 395, balloonY: 147, balloonOwner: 'helper', helperVisible: true, highlight: 'helper' },
  { time: '00:07', signal: 'Object near original person', insight: 'One little kindness.', line: 'The child leaves with a smile. A tiny moment, easily missed.', childX: 258, helperX: 386, balloonX: 320, balloonY: 151, balloonOwner: 'child', helperVisible: true, highlight: 'child' },
];

export const principles = [
  {
    key: 'audience',
    number: '01',
    title: 'For whom?',
    headline: 'Start with a person. Not a feature.',
    description: 'A clear interface begins by knowing who needs an answer. Good technology adapts to people, not the other way around.',
    note: 'My priority: an experience you understand without a manual.',
    pieces: ['WHO', 'NEEDS', 'THIS?'],
  },
  {
    key: 'function',
    number: '02',
    title: 'Does it work?',
    headline: 'Make every interaction earn its place.',
    description: 'Animations, controls and information need a purpose. If an element does not help, it should not compete for attention.',
    note: 'My priority: a clear path from question to answer.',
    pieces: ['LESS', 'BUT', 'BETTER'],
  },
  {
    key: 'feeling',
    number: '03',
    title: 'Does it stay?',
    headline: 'Leave someone with a feeling.',
    description: 'The best result is not always the most technical. Sometimes it is the moment when someone understands, smiles or looks twice.',
    note: 'My priority: a little unexpected magic, without losing clarity.',
    pieces: ['A', 'LITTLE', 'WOW'],
  },
] as const;

export type PrincipleKey = (typeof principles)[number]['key'];
