import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noir Atelier — Luxury Digital Agency',
  description:
    'Noir Atelier crafts cinematic digital products for ambitious brands in the AI era.',
  keywords: ['Luxury agency', 'Web3 design', 'AI creative studio', 'Digital products'],
  openGraph: {
    title: 'Noir Atelier — Luxury Digital Agency',
    description:
      'Cinematic digital experiences blending strategy, design, and advanced product engineering.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
