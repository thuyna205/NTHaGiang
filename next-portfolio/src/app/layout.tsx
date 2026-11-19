import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nguyễn Thị Hà Giang - Digital Marketing Portfolio',
  description: 'Portfolio chuyên viên Digital Marketing, Content Planner và Creative Lead',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF4EB] text-[#2D241E] antialiased selection:bg-[#F97316] selection:text-white">
        {children}
      </body>
    </html>
  );
}
