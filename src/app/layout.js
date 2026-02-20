import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "The Green Nest | Infertility Clinic",
  description: "Centre for Women - Headed by Dr. Shilpi Srivastava",
  verification: {
    google: "bevheu_QxCwDxsHnNXsvUfp7KkkCa1MbWQ3PxyA6TR8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7H55P09Y0M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7H55P09Y0M');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
