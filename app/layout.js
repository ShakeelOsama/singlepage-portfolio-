import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Hamza Noor | Full Stack Developer | Crafting Digital Excellence",
    template: "%s | Hamza Noor Portfolio"
  },
  description: "Award-winning Full Stack Developer specializing in React.js, Next.js, and scalable solutions. Transform your ideas into stunning, high-performance digital products.",
  keywords: ["Full Stack Developer", "React.js", "Next.js", "Web Development", "UI/UX Design", "Portfolio", "Hamza Noor"],
  authors: [{ name: "Hamza Noor" }],
  creator: "Hamza Noor",
  publisher: "Hamza Noor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hamzanoor.dev'), // Update this to your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hamzanoor.dev',
    title: 'Hamza Noor | Full Stack Developer',
    description: 'Award-winning Full Stack Developer specializing in React.js, Next.js, and scalable solutions.',
    siteName: 'Hamza Noor Portfolio',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamza Noor - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Noor | Full Stack Developer',
    description: 'Award-winning Full Stack Developer specializing in React.js, Next.js, and scalable solutions.',
    images: ['/logo.jpg'],
    creator: '@hamzanoor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hamza Noor",
    "jobTitle": "Full Stack Developer",
    "description": "Award-winning Full Stack Developer specializing in React.js, Next.js, and scalable solutions.",
    "url": "https://hamzanoor.dev",
    "image": "https://hamzanoor.dev/logo.jpg",
    "sameAs": [
      "https://github.com/hamzanoor",
      "https://linkedin.com/in/hamzanoor"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Web Development",
      "UI/UX Design"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
