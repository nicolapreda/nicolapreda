import Script from "next/script";
import { metadata as layoutMetadata } from "../layout";
import ContactList from "../../components/ContactList"; // Assuming we want footer/contacts on all pages, though promote.ejs included footer which has contacts in it. But index.ejs has a BIG contact list. promote.ejs just ends with footer.

export const metadata = {
  title: "PROMOTE - NICOLA PREDA",
  description: "Video Corporate e Social Branding. Contenuti strategici per aziende e personal brand che vogliono distinguersi.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "PROMOTE - NICOLA PREDA",
    description: "Video Corporate e Social Branding. Contenuti strategici per aziende e personal brand che vogliono distinguersi.",
    images: ["/assets/promote-og.jpg"],
  },
};

export default function PromotePage() {
  return (
    <main className="bg-themeRed text-white min-h-screen pt-32 pb-20 px-6 sm:px-12 selection:bg-black selection:text-white">
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <div className="border-b-4 border-white pb-12 mb-24">
          <span className="font-bold tracking-widest uppercase mb-4 inline-block text-white/80">
            Services
          </span>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-8 tracking-tighter">
            Promote<br />
            <span className="text-black">
              Your<br />Business
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-sans font-medium max-w-2xl leading-relaxed opacity-90">
            Trasformo la tua attività in un brand che parla. Video, foto e
            strategia per connettersi davvero con il tuo pubblico locale.
          </p>
        </div>

        {/* CLIENT: GIAPPUGLIESE */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Giappugliese
              <span className="block text-lg font-bold tracking-widest font-sans mt-2 opacity-70">
                Food & Experience
              </span>
            </h2>

            <p className="max-w-md text-right md:text-left text-lg font-medium">
              Raccontare il gusto attraverso immagini vibranti. Un mix tra
              tradizione e innovazione culinaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-white p-2 rounded-sm shadow-xl">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DTBL7aagi2M/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "none",
                  display: "block",
                  margin: "0",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%",
                }}
              ></blockquote>
            </div>
            {/* Post 2 */}
            <div className="bg-white p-2 rounded-sm shadow-xl md:mt-12">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DS73oaxglBV/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "none",
                  display: "block",
                  margin: "0",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%",
                }}
              ></blockquote>
            </div>
            {/* Post 3 */}
            <div className="bg-white p-2 rounded-sm shadow-xl">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DS2w_uvAm0t/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "none",
                  display: "block",
                  margin: "0",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%",
                }}
              ></blockquote>
            </div>
          </div>
        </section>

        {/* CLIENT: HORIZON (Dark Mode Block) */}
        <section className="mb-32 -mx-6 sm:-mx-12 px-6 sm:px-12 py-24 bg-black text-white relative overflow-hidden group">
          {/* Background Graphic Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-themeRed blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="border-l-4 border-themeRed pl-8 mb-16">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2">
                Horizon
              </h2>
              <span className="text-xl font-bold tracking-widest text-gray-400">
                Corporate & Tech
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="grayscale hover:grayscale-0 transition-all duration-500">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DEOAxyXszez/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                ></blockquote>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-500">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DG0gOJPs_oD/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                ></blockquote>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-500">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DFDtAEvs0MC/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                ></blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT: MIRIAM (Editorial Layout) */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-4">
              Miriam
            </h2>
            <p className="font-bold tracking-widest uppercase">
              Fashion & Lifestyle
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 items-start">
            {/* Reel 1 */}
            <div className="w-full max-w-sm">
              <div className="border-2 border-white p-2">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DR5Ay41DB0C/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                ></blockquote>
              </div>
            </div>
            {/* Decorative Ampersand or Divider */}
            <div className="text-6xl font-serif italic opacity-50 sticky top-1/2">
              &
            </div>

            {/* Reel 2 */}
            <div className="w-full max-w-sm md:mt-24">
              <div className="border-2 border-white p-2">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DSA5FcWDDKH/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                ></blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
