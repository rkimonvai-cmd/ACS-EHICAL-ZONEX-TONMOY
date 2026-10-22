import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ACS TONMOY STUDIO',
  description: 'Cyberpunk Premium Video Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-[#0a0a12] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}