import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Eco Quest — VR Geri Dönüşüm Deneyimi',
  description: 'Atıkları keşfet, doğru kutuya ayır ve görevlerle sürdürülebilir bir geleceği öğren.',
  metadataBase: new URL('https://denizstudiox.github.io/eco-quest-vr/'),
  openGraph: {
    title: 'Eco Quest — Geleceği Doğru Kutuya Bırak',
    description: 'Görev tabanlı VR geri dönüşüm ve çevre eğitimi deneyimi.',
    url: 'https://denizstudiox.github.io/eco-quest-vr/',
    siteName: 'Eco Quest',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Eco Quest VR geri dönüşüm deneyimi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco Quest — Geleceği Doğru Kutuya Bırak',
    description: 'Görev tabanlı VR geri dönüşüm ve çevre eğitimi deneyimi.',
    images: ['/og.png'],
  },
  icons: { icon: '/ecoquest-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={spaceGrotesk.variable}>{children}</body></html>;
}
