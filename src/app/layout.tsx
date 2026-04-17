import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "../Themeprovider"; 
import Navbar from "@/src/component/Navbar"; 

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ 
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  title: "Zeliahu | Web Developer",
  description: "Portfolio of a visually stunning web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased overflow-x-hidden w-screen max-w-full bg-background text-foreground  transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}