import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zela Alerte - L\'alerte citoyenne entre tes mains',
  description: "Restez informé des coupures d'électricité, d'eau et d'internet dans votre zone grâce aux rapports de la communauté",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}