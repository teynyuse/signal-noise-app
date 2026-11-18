import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Look Again — Teynur Yuseinov × In The Pocket',
  description: 'An interactive application for the Node.js Back-End Engineer role at In The Pocket. Teynur Yuseinov translates human flows into reliable backend services.',
  openGraph: {
    title: 'Look Again — The Missing Link for In The Pocket',
    description: 'A working event-driven application case by Node.js backend engineer Teynur Yuseinov.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
