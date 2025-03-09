import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jesulayomi Michael Aina",
    template: `%s | Jesulayomi Michael Aina`,
  },
  description: "Jesulayomi is a software engineer, building full-stack software and web applications. Contact via email or LinkedIn for any requests.",
  applicationName: "Jesulayomi Michael Aina\'s Portfolio website",
  authors: [{
    name: "Jesulayomi Michael Aina",
    url: "https://www.jesulayomi.tech",
  }],
  generator: "Next.js",
  keywords: [
    'portfolio', 'devops', 'backend', 'software', 'engineer', 'showcase',
    'programming', 'projects', 'aina', 'jesulayomi', 'about', 'skills',
    'experience', 'education', 'contact', 'alx', 'github', 'engineering',
    'python', 'javascript', 'django', 'c', 'react', 'flask', 'mysql', 'html',
    'digitalocean', 'shell', 'bash', 'nginx', 'haproxy', 'certbot', 'css',
    'jinja', 'jquery', 'markdown', 'ubuntu', 'focal', 'get.tech', 'namecheap',
    'schub', 'nextjs', 'framer-motion', 'tailwindcss', 'typescript',
  ],
  creator: "Jesulayomi Michael Aina",
  publisher: "Jesulayomi Michael Aina",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: 'profile',
    title: 'Jesulayomi Michael Aina\'s Portfolio website.',
    description: 'Jesulayomi Michael Aina is a software engineer specializing in web application development in all stages of the Software development life cycle',
    url: 'https://jesulayomi.tech/',
    siteName: 'Jesulayomi Michael Aina',
    images: [{
      url: '/JesulayomiAina.png'
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    "images": "https://example.com/og.png"
  },
  metadataBase: new URL("https://www.jesulayomi.tech")
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
