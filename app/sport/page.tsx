import Link from "next/link";
import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";
import InstagramEmbed from "../../components/InstagramEmbed"; // Use the helper to ensure script loads

export const metadata = {
  title: "SPORT - NICOLA PREDA",
  description: "Fotografia e Video Sportivi. Il racconto della competizione, dal progetto Galacticos alle collaborazioni con club professionistici.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "SPORT - NICOLA PREDA",
    description: "Fotografia e Video Sportivi. Il racconto della competizione, dal progetto Galacticos alle collaborazioni con club professionistici.",
    images: ["https://www.predanicola.it/assets/galacticos_1.png"],
  },
};

export default function SportPage() {
  return (
    <main className="bg-primary text-white min-h-screen pt-32 pb-20 px-6 sm:px-12">
        <InstagramEmbed />
      <div className="max-w-7xl mx-auto">
        {/* HEADER / INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="lg:sticky lg:top-32">
            <span className="font-bold tracking-widest uppercase border-b-2 border-white pb-1 mb-6 inline-block">
              Portfolio
            </span>
            <h1 className="text-7xl md:text-9xl font-serif italic mb-2">
              Sport
            </h1>
            <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-12 tracking-tighter">
              Photo
            </h1>

            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-lg mb-12">
              "Catturare l'istante in cui la passione diventa azione. La
              tensione, la gioia, la fatica: racconto lo sport da bordocampo,
              principalmente a <span className="text-yellow-400">Bergamo</span> e
              provincia."
            </p>
          </div>

          {/* RIGHT COLUMN: HERO IMAGES */}
          <div className="flex flex-col gap-8">
            <div className="group relative">
              <Image
                src="/assets/sport/galacticos4.webp"
                alt="Galacticos"
                width={600}
                height={400}
                className="w-full h-auto object-cover border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* PROJECT: GALACTICOS */}
        <section className="relative w-full py-24 overflow-hidden border-t-2 border-white">
          {/* DECORATIVE TAPE TOP LEFT */}
          <Image
            src="/assets/Tape.png"
            alt="Tape"
            width={192}
            height={48}
            className="absolute top-10 left-[-50px] w-48 rotate-45 opacity-80 z-10 mix-blend-screen"
          />

          <div className="relative z-0">
            {/* HEADER WITH TAPE */}
            <div className="relative mb-20">
              <h2 className="text-[12vw] sm:text-[8rem] leading-none font-black text-white mix-blend-overlay transform -rotate-2 origin-bottom-left">
                GALACTICOS
              </h2>
              <span className="absolute top-0 right-0 sm:right-20 bg-white text-primary px-4 py-1 font-bold text-xl uppercase transform rotate-3 shadow-lg">
                Vele Blu
              </span>
              <p className="mt-4 text-xl sm:text-2xl font-bold tracking-widest uppercase ml-2 sm:ml-4 text-white">
                Passion Project
              </p>
            </div>

            {/* COLLAGE SECTION 1 (Vertical Layout) */}
            <div className="flex flex-col gap-16 mb-32 items-center max-w-5xl mx-auto">
              {/* Large Image */}
              <div className="relative group w-full">
                <Image
                  src="/assets/Tape.png"
                  alt="Tape"
                  width={96}
                  height={24}
                  className="absolute -top-6 -left-6 w-24 z-20 rotate-[-15deg] drop-shadow-md opacity-70"
                />
                <div className="relative transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                  <Image
                    src="/assets/sport/galacticos4.webp"
                    alt="Galacticos"
                    width={800}
                    height={600}
                    className="w-full h-auto shadow-[10px_10px_0px_rgba(255,255,255,0.5)] border-4 border-white transform rotate-1"
                  />
                </div>
              </div>

              {/* Text Card */}
              <div className="relative w-full md:w-3/4">
                <div className="bg-white text-primary p-8 md:p-12 shadow-[10px_10px_0px_rgba(255,255,255,1)] transform -rotate-1">
                  <p className="uppercase font-bold text-2xl md:text-3xl mb-6 leading-tight">
                    "L'esperienza con questa squadra è iniziata come progetto
                    personale..."
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-800">
                    In questi due anni ho scattato migliaia di foto ad ogni
                    singola partita. Assieme ad Andrea abbiamo realizzato un
                    profilo Instagram degno di una squadra di Serie A. Tutto
                    questo semplicemente per{" "}
                    <span className="bg-primary text-white px-1">PASSIONE</span>. ⚽️
                  </p>
                </div>
              </div>
            </div>

            {/* COLLAGE SECTION 2 (Feed Intro) */}
            <div className="relative mb-16 text-center">
              <h3 className="text-4xl sm:text-6xl font-black uppercase text-white transform rotate-1 inline-block border-b-4 border-white pb-2">
                Il Nostro Feed
              </h3>
            </div>

            {/* INSTAGRAM OFFICIAL EMBED */}
            <div className="relative max-w-7xl mx-auto mt-20 mb-32 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Post 1 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DTLawTujgmx/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 2 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform -rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DO6YBmaDSi0/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                 {/* Post 3 */}
                 <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DS5S9M8k7Xw/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 4 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSrqwxvlf24/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 5 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform -rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSQOlqWlD7l/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 6 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSQNObQgMiy/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 7 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSM92lCCJ7T/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 8 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform -rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSLLVX-Fgim/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
                {/* Post 9 */}
                <div className="bg-white p-2 shadow-[8px_8px_0px_#ffffff] transform rotate-1 transition-transform hover:z-10 hover:scale-[1.02]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DSH5kjaCPHo/"
                    data-instgrm-version="14"
                    style={{ background: "#FFF", borderRadius: "3px", width: "100%" }}
                  ></blockquote>
                </div>
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://www.instagram.com/galacticos_veleblu/"
                  target="_blank"
                  className="inline-block bg-[#0095f6] hover:bg-[#1877f2] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-colors border-2 border-white"
                >
                  Visualizza profilo completo su Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT: ALBINOLEFFE (Rich Layout) */}
        <section className="py-32 border-t-2 border-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 right-[-10%] w-96 h-96 bg-white rounded-full blur-[100px]"></div>
          </div>

          {/* PROJECT HEADER */}
          <div className="relative z-10 mb-24 text-right px-6 sm:px-12">
            <span className="bg-white text-blue-900 px-4 py-1 font-bold text-lg uppercase shadow-lg inline-block transform -rotate-2 mb-4">
              Professional Collaboration
            </span>
            <h2 className="text-[12vw] sm:text-[8rem] leading-none font-black text-white mix-blend-overlay transform rotate-1 origin-bottom-right">
              ALBINOLEFFE
            </h2>
          </div>

          {/* CONTENT GRID */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* LEFT: DESCRIPTION CARD */}
              <div className="lg:col-span-5 relative z-20 mt-12">
                <div className="bg-white text-blue-900 p-8 shadow-[12px_12px_0px_rgba(255,255,255,0.2)] transform rotate-1 border-4 border-white/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-black uppercase mb-6 leading-none tracking-tight">
                    Serie C <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      Official Photographer
                    </span>
                  </h3>
                  <p className="text-lg leading-relaxed font-medium text-gray-700 mb-6">
                    Seguire una squadra professionistica richiede precisione,
                    tempismo e occhio per il dettaglio. Non è solo sport: è la
                    storia di una società, dei suoi tifosi e della passione che
                    brucia in campo.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded">
                      Matchday
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase rounded">
                      Editorial
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: IMAGE GRID LAYOUT */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
                {/* Floating decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 border-4 border-white/20 rounded-full animate-pulse"></div>

                {/* Images */}
                <div className="space-y-6 mt-12">
                  <div className="group relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white transform hover:-translate-y-1 transition-all">
                    <Image
                      src="/assets/sport/albinoleffe1.JPG.webp"
                      alt="Albinoleffe 1"
                      width={400}
                     height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="group relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white transform hover:-translate-y-1 transition-all">
                    <Image
                      src="/assets/sport/albinoleffe3.JPG.webp"
                      alt="Albinoleffe 3"
                        width={400}
                     height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white transform hover:-translate-y-1 transition-all">
                    <Image
                      src="/assets/sport/albinoleffe5.JPG.webp"
                      alt="Albinoleffe 5"
                        width={400}
                     height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="group relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white transform hover:-translate-y-1 transition-all">
                    <Image
                      src="/assets/sport/albinoleffe2.JPG.webp"
                      alt="Albinoleffe 2"
                        width={400}
                     height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="group relative overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,1)] border-2 border-white transform hover:-translate-y-1 transition-all">
                    <Image
                      src="/assets/sport/albinoleffe4.JPG.webp"
                      alt="Albinoleffe 4"
                        width={400}
                     height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
