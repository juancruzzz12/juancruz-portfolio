import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'juan cruz — software engineer',
  description: 'Juan Cruz’s personal website. Software engineering, projects, experience, and more.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
