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

const SITE_URL = "https://thegreennest.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Green Nest | IVF & Infertility Clinic in Mohali – Dr. Shilpi Srivastava",
    template: "%s | The Green Nest",
  },
  description:
    "The Green Nest is a leading IVF & infertility clinic in Mohali, Chandigarh Tricity headed by Dr. Shilpi Srivastava (24+ yrs exp). Offering IVF, ICSI, IUI, gynecology & pregnancy care. Book your consultation today.",
  keywords: [
    "IVF clinic Mohali",
    "infertility treatment Chandigarh",
    "IVF doctor Mohali",
    "ICSI treatment Tricity",
    "IUI Mohali",
    "fertility specialist Chandigarh",
    "gynecologist Mohali",
    "Dr Shilpi Srivastava",
    "The Green Nest",
    "best IVF clinic Tricity",
    "infertility specialist Mohali",
    "pregnancy care Mohali",
    "PCOS treatment Chandigarh",
    "women health clinic Mohali",
  ],
  authors: [{ name: "Dr. Shilpi Srivastava" }],
  creator: "The Green Nest",
  publisher: "The Green Nest",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "The Green Nest",
    title: "The Green Nest | IVF & Infertility Clinic in Mohali – Dr. Shilpi Srivastava",
    description:
      "Leading IVF & infertility clinic in Mohali headed by Dr. Shilpi Srivastava. Offering IVF, ICSI, IUI, gynecology & pregnancy care for couples across Chandigarh Tricity.",
    images: [
      {
        url: "/dr-shilpi.jpg",
        width: 500,
        height: 600,
        alt: "Dr. Shilpi Srivastava – Fertility Specialist at The Green Nest, Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Green Nest | IVF & Infertility Clinic in Mohali",
    description:
      "Leading IVF & infertility clinic in Mohali headed by Dr. Shilpi Srivastava. Book your consultation today.",
    images: ["/dr-shilpi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "bevheu_QxCwDxsHnNXsvUfp7KkkCa1MbWQ3PxyA6TR8",
  },
};

// Global JSON-LD structured data
const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: "The Green Nest",
      alternateName: "The Green Nest – Centre for Women",
      url: SITE_URL,
      logo: `${SITE_URL}/dr-shilpi.jpg`,
      image: `${SITE_URL}/dr-shilpi.jpg`,
      description:
        "The Green Nest is a leading IVF & infertility clinic in Mohali offering advanced fertility treatments including IVF, ICSI, IUI along with comprehensive gynecological and pregnancy care.",
      telephone: "+917888368297",
      email: "thegreennest6@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SCO 49, Phase 6",
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160055",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.7046,
        longitude: 76.7026,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      medicalSpecialty: [
        "Obstetrics and Gynecology",
        "Reproductive Endocrinology",
      ],
      availableService: [
        { "@type": "MedicalTherapy", name: "In Vitro Fertilization (IVF)" },
        { "@type": "MedicalTherapy", name: "Intracytoplasmic Sperm Injection (ICSI)" },
        { "@type": "MedicalTherapy", name: "Intrauterine Insemination (IUI)" },
        { "@type": "MedicalProcedure", name: "General Gynecology" },
        { "@type": "MedicalProcedure", name: "Pregnancy Care (ANC)" },
        { "@type": "MedicalProcedure", name: "Adolescent Health" },
        { "@type": "MedicalProcedure", name: "Wellness & Preventive Screening" },
      ],
      priceRange: "$$",
      sameAs: [],
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: "Dr. Shilpi Srivastava",
      url: `${SITE_URL}/meet-dr-shilpi`,
      image: `${SITE_URL}/dr-shilpi.jpg`,
      description:
        "Dr. Shilpi Srivastava is a Fertility Specialist & Gynaecologist with 24+ years of experience heading The Green Nest clinic in Mohali.",
      medicalSpecialty: "Obstetrics and Gynecology",
      qualifications: "MBBS, DGO, Fellowship in Reproductive Medicine",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "SCO 49, Phase 6",
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      telephone: "+917888368297",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "The Green Nest",
      publisher: { "@id": `${SITE_URL}/#clinic` },
      inLanguage: "en-IN",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
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
