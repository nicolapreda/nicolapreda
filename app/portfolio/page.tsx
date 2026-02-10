import Link from "next/link";
import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";

export const metadata = {
  title: "PORTFOLIO - NICOLA PREDA",
  description: "Esplora i progetti di Nicola Preda. Sport, Eventi, Promote e Web Design. Una selezione dei migliori lavori di videomaking e fotografia.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "PORTFOLIO - NICOLA PREDA",
    description: "Esplora i progetti di Nicola Preda. Sport, Eventi, Promote e Web Design. Una selezione dei migliori lavori di videomaking e fotografia.",
    images: ["https://www.predanicola.it/assets/portfolio_preview.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-primary w-full overflow-x-hidden">
      {/* FIXED BACKGROUND TITLE */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-end pointer-events-none z-0">
        <h1 className="text-[12vw] sm:text-[15vw] leading-none font-black text-white/40 tracking-tighter select-none">
          PORTFOLIO
        </h1>
      </div>

      {/* SCROLLABLE CONTENT */}
      {/* z-10 to float above the fixed title */}
      <main className="relative z-10 pt-32 pb-40 px-6 sm:px-12 flex flex-col items-center">
        {/* DECORATION */}
        <Image
          src="/assets/3d_detail.webp"
          alt=""
          width={384}
          height={384}
          className="absolute top-20 right-0 w-64 md:w-96 opacity-100 pointer-events-none mix-blend-overlay z-0"
        />

        {/* TITLE SECTION (Restored) */}
        <div className="text-center mb-16 sm:mb-24 text-white">
          <h1 className="text-[12vw] sm:text-[10vw] leading-none font-black tracking-tight uppercase">
            PROGETTI
          </h1>
          <h1 className="text-[18vw] sm:text-[15vw] leading-[0.6] font-cursive font-light text-white opacity-90 -mt-2 sm:-mt-6">
            Selezionati
          </h1>
        </div>

        {/* CARDS CONTAINER */}
        <div className="w-full max-w-4xl space-y-12">
          {/* CARD 1: EVENTI */}
          <Link
            href="/eventi"
            className="group block relative bg-white rounded-3xl p-2 sm:p-4 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 mb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Progetto 01
              </span>
            </div>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="/assets/eventi/glocky/DSC00893.webp"
                alt="Eventi"
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter">
                  Eventi
                </h2>
                <p className="text-white/80 font-sans font-medium text-lg sm:text-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Eventi, Concerti & Atmosfere
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 2: SPORT */}
          <Link
            href="/sport"
            className="group block relative bg-white rounded-3xl p-2 sm:p-4 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            {/* "Tab" or Folder Header Visual */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 mb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Progetto 02
              </span>
            </div>

            {/* Card Content */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="/assets/sport/galacticos4.jpg"
                alt="Sport"
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter">
                  Sport
                </h2>
                <p className="text-white/80 font-sans font-medium text-lg sm:text-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Galacticos, Albinoleffe & Azione
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 3: PROMOTE */}
          <Link
            href="/promote"
            className="group block relative bg-white rounded-3xl p-2 sm:p-4 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 mb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Progetto 03
              </span>
            </div>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="/assets/promote/promote_copertina.webp"
                alt="Promote"
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter">
                  Promote
                </h2>
                <p className="text-white/80 font-sans font-medium text-lg sm:text-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Aziendale, Social & Branding
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 4: WEB */}
          <Link
            href="/web"
            className="group block relative bg-white rounded-3xl p-2 sm:p-4 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 mb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Progetto 04
              </span>
            </div>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="/assets/web/web_copertina.webp"
                alt="Web"
                fill
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter">
                  Web
                </h2>
                <p className="text-white/80 font-sans font-medium text-lg sm:text-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Esperienze Digitali & Sviluppo
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* MARQUEE DIVIDER */}
        <div className="w-[100vw] overflow-hidden whitespace-nowrap py-6 bg-white text-black border-y-2 border-black -mx-6 sm:-mx-12 my-24 transform -rotate-1 shadow-xl">
           <div className="inline-flex animate-infinite-scroll items-center">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center">
                    <span className="text-4xl font-black italic tracking-tighter uppercase mx-12">
                        DOVE LE STORIE INCONTRANO LA CREATIVITÀ
                    </span>
                    <Image src="/assets/Star-5.webp" alt="star" width={48} height={48} className="w-12 h-12 mx-4 animate-spin-slow" />
                </div>
            ))}
            </div>
        </div>

        {/* "BARE" FIX: CTA */}
        <div className="text-center text-white pb-12">
          <p className="text-xl font-bold uppercase tracking-widest mb-6">
            Non hai trovato quello che cerchi?
          </p>
          <Link
            href="/contatti"
            className="inline-block px-10 py-4 border-2 border-white text-white rounded-full font-black uppercase hover:bg-white hover:text-primary transition-all text-xl tracking-tighter hover:scale-105"
          >
            Parliamone
          </Link>
        </div>
      </main>
    </div>
  );
}
