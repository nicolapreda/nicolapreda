import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  title: "NICOLA PREDA | Videomaker & Photographer",
  description: "Videomaker e Fotografo basato a Milano. Specializzato in video eventi, sport, corporate e produzione di contenuti social.",
  keywords: "Nicola Preda, Videomaker Milano, Fotografo Milano, Video Eventi, Galacticos, Video Corporate, Social Media Content",
  openGraph: {
    type: "website",
    url: "https://www.predanicola.it/",
    title: "NICOLA PREDA | Videomaker & Photographer",
    description: "Videomaker e Fotografo basato a Milano. Specializzato in video eventi, sport, corporate e produzione di contenuti social.",
    images: ["https://www.predanicola.it/assets/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.predanicola.it/",
    title: "NICOLA PREDA | Videomaker & Photographer",
    description: "Videomaker e Fotografo basato a Milano. Specializzato in video eventi, sport, corporate e produzione di contenuti social.",
    images: ["https://www.predanicola.it/assets/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Critical Assets */}
        <link rel="preload" as="font" href="/assets/SnellRoundhand.ttc" crossOrigin="anonymous" />
        <link rel="icon" href="/assets/FAVICON.webp" type="image/webp" />
      </head>
      <body className="bg-white text-black font-sans overflow-x-hidden">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XKWFQ6BLER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKWFQ6BLER');
          `}
        </Script>

        {/* Iubenda Scripts */}
        <Script id="iubenda-setup" strategy="afterInteractive">
          {`
            (function (w, d) { var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s, tag); }; if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) { w.attachEvent("onload", loader); } else { w.onload = loader; } })(window, document);
          `}
        </Script>
        <Script src="https://embeds.iubenda.com/widgets/272aedf3-8004-4513-ae52-41e72df1ffc6.js" strategy="lazyOnload" />

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
