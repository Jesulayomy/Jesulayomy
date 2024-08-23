import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jesulayomi Aina",
    template: `%s | Jesulayomi Aina`,
  },
  description: "Jesulayomi is a software engineer, building full-stack systems and applications.",
  keywords: [
    'portfolio', 'devops', 'backend', 'software', 'engineer', 'showcase',
    'programming', 'projects', 'aina', 'jesulayomi', 'about', 'skills',
    'experience', 'education', 'contact', 'alx', 'github', 'engineering',
    'python', 'javascript', 'django', 'c', 'react', 'flask', 'mysql', 'html',
    'digitalocean', 'shell', 'bash', 'nginx', 'haproxy', 'certbot', 'css',
    'jinja', 'jquery', 'markdown', 'ubuntu', 'focal', 'get.tech', 'namecheap',
    'schub', 'nextjs', 'framer-motion', 'tailwindcss', 'typescript',
  ],
  authors: [{
    name: "Jesulayomi Aina",
    url: "https://www.jesulayomi.tech",
  }],
  creator: "Jesulayomi Aina",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
