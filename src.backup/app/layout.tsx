import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal / Noise — A creative introduction by Teynur Yuseinov",
  description: "A clear, scroll-driven interactive design experiment about turning information into meaning. An independent creative introduction for UUG.AI by Teynur Yuseinov.",
  openGraph: {
    title: "Signal / Noise — Make the complex feel simple",
    description: "Discover a small interactive experiment on clarity and purposeful frontend design by Teynur Yuseinov.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
