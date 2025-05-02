import type { Metadata } from "next";
import "./globals.css"
import ParticlesBackground from "@/components/background/ParticlesBackground";
import { Roboto } from 'next/font/google';
import "../lib/fontowesome";
import FooterLayout from "@/components/layout/Footer"
import ResponsiveNavbar from '@/components/layout/Navbar'
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: '800',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "AliRaza | Portfolio",
  description: "Welcome to the portfolio of AliRaza, a passionate developer showcasing his skills, projects, and experiences. Explore my work and learn more about my expertise in web development and software engineering.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <main className={roboto.className}>
          <div className="relative z-50 cursor-pointer">
            <ResponsiveNavbar />
          </div>
        </main>
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
