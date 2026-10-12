import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'David Caamal | Portfolio & Project Showcase',
  description: 'Hub privado de proyectos Full Stack e Ingeniería de Software.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}