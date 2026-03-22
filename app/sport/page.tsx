import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";

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

const albinoleffePhotos = [
  "/assets/sport/albinoleffe1.JPG.webp",
  "/assets/sport/albinoleffe2.JPG.webp",
  "/assets/sport/albinoleffe3.JPG.webp",
  "/assets/sport/albinoleffe4.JPG.webp",
  "/assets/sport/albinoleffe5.JPG.webp",
  "/assets/sport/albinoleffe6.JPG.webp",
  "/assets/sport/albinoleffe7.JPG.webp",
  "/assets/sport/albinoleffe8.JPG.webp",
];

export default function SportPage() {
  return (
    <main className="bg-primary text-white min-h-screen pt-32 pb-24 selection:bg-white selection:text-primary overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="relative mb-40 pb-16 border-b-4 border-white">
          <span className="font-bold tracking-[0.35em] uppercase text-white/50 text-xs">
            Portfolio — Fotografia
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mt-6">
            <div>
              <h1 className="font-black uppercase text-[22vw] sm:text-[14vw] lg:text-[10vw] tracking-tighter text-white leading-[0.85]">
                SPORT
              </h1>
              <p className="font-black uppercase text-[13vw] sm:text-[9vw] lg:text-[6.5vw] tracking-tighter text-white/85 leading-[0.85] -mt-2">
                PHOTO
              </p>
              <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed max-w-md text-white/75">
                Catturare l'istante in cui la passione diventa azione.
                Racconto lo sport da bordocampo, principalmente a{" "}
                <span className="text-yellow-300 font-bold">Bergamo</span> e provincia.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/sport/galacticos4.webp"
                alt="Sport Photo"
                width={700}
                height={480}
                className="w-full h-auto object-cover border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,0.4)]"
              />
              <span className="absolute -bottom-4 -right-2 bg-white text-primary px-4 py-1 font-black text-xs uppercase tracking-[0.25em] transform rotate-2">
                Bergamo &amp; provincia
              </span>
            </div>
          </div>
        </div>

        {/* ── 01 · GALACTICOS ──────────────────────────────────── */}
        <section className="mb-40">

          <div className="mb-14">
            <span className="font-bold tracking-[0.3em] uppercase text-white/40 text-xs">01 ——</span>
            <h2 className="font-black uppercase text-7xl sm:text-9xl tracking-tighter text-white leading-none mt-1">
              GALACTICOS
            </h2>
            <p className="font-bold uppercase text-sm tracking-[0.3em] text-white/50 mt-2">
              Vele Blu — Passion Project
            </p>
          </div>

          {/* Block 1: Opening quote */}
          <p className="font-medium text-lg sm:text-xl md:text-2xl leading-relaxed max-w-5xl mb-20 text-white">
            L'esperienza con questa squadra è iniziata come progetto personale e di gruppo
            dal primo giorno in cui mi sono avvicinato al mondo della fotografia, per poi
            consolidarsi all'interno della mia vita come un rituale, accompagnandosi al
            mio percorso di crescita personale e professionale.
          </p>

          {/* Block 2: Large photo + blob + small photo + text */}
          <div className="relative mb-24">
            <div className="absolute -left-10 top-1/3 z-10 pointer-events-none">
              <Image
                src="/assets/3d_detail.webp"
                alt=""
                width={140}
                height={140}
                className="opacity-90"
              />
            </div>

            <div className="relative ml-auto w-full sm:w-[80%] lg:w-[70%]">
              <Image
                src="/assets/sport/galacticos1.webp"
                alt="Galacticos"
                width={800}
                height={560}
                className="w-full h-auto object-cover border-4 border-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mt-10 items-start">
              <p className="font-medium text-base sm:text-lg leading-relaxed flex-1 max-w-sm text-white">
                In questi due anni ho scattato migliaia di foto ad ogni singola
                partita, ed assieme ad Andrea realizzato un profilo Instagram
                degno di una squadra di Serie A. Tutto questo semplicemente per
                passione. ⚽
              </p>
              <div className="relative flex-1 max-w-md">
                <Image
                  src="/assets/sport/galacticos2.webp"
                  alt="Galacticos"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Block 3: Paragraph + staggered collage */}
          <div className="mb-24">
            <p className="font-medium text-base sm:text-lg leading-relaxed max-w-4xl mb-14 text-white">
              Il sabato pomeriggio è diventato un rituale: vivere le emozioni del calcio di
              provincia nonostante effettivamente non giochi sul campo (consapevole
              anche di non avere due piedi che mi consentano di farlo) è per me
              rigenerante. Gli ultras, la preparazione, ma soprattutto gli aperitivi post
              partita che delle volte durano quasi fino alla mattina dopo, rendono il
              tutto ancora più magico. 🦋
            </p>

            <div className="grid grid-cols-2 gap-0 items-end">
              <div className="flex flex-col gap-0 pr-4">
                <div className="relative self-start w-[85%]">
                  <Image
                    src="/assets/sport/galacticos3.webp"
                    alt="Galacticos"
                    width={500}
                    height={380}
                    className="w-full h-auto object-cover border-4 border-white"
                  />
                </div>
                <div className="relative self-center w-[90%] -mt-8 ml-8">
                  <Image
                    src="/assets/sport/VAN09912_11zon.webp"
                    alt="Galacticos"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover border-4 border-white"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="relative w-[90%] ml-auto mt-12">
                  <Image
                    src="/assets/sport/galacticos5.webp"
                    alt="Galacticos"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover border-4 border-white"
                  />
                </div>
                <div className="flex justify-end mt-4 mr-4 pointer-events-none">
                  <Image
                    src="/assets/3d_detail.webp"
                    alt=""
                    width={110}
                    height={110}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Two candid photos */}
          <div className="mb-24">
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/assets/sport/VAN09692_11zon.webp"
                alt="Galacticos"
                width={500}
                height={360}
                className="w-full h-auto object-cover border-4 border-white"
              />
              <Image
                src="/assets/sport/VAN09765_11zon.webp"
                alt="Galacticos"
                width={500}
                height={360}
                className="w-full h-auto object-cover border-4 border-white"
              />
            </div>
          </div>

          {/* Block 5: Hoodies photo + equipment texts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Image
              src="/assets/sport/VAN09766_11zon.webp"
              alt="Galacticos Vele Blu"
              width={600}
              height={500}
              className="w-full h-auto object-cover border-4 border-white"
            />
            <div className="flex flex-col gap-10 justify-center">
              <p className="font-medium text-base sm:text-lg leading-relaxed text-white">
                Ho iniziato questa esperienza scattando con un 50mm e una Sony APS-C,
                provato obiettivi zoom con apertura a F6 portando la mia attrezzatura
                all'estremo con partite che si giocavano in condizioni di luminosità
                terribile.
              </p>
              <p className="font-medium text-base sm:text-lg leading-relaxed text-white">
                Adesso, dopo tanta esperienza, un cambio importante di attrezzatura
                (Sony A7IV e 70-200 F2.8) ed un netto miglioramento in post produzione
                stiamo ottenendo risultati incredibili. Il percorso di crescita è
                completamente documentato sul profilo Instagram:{" "}
                <span className="text-yellow-300 font-bold">@galacticos_veleblu</span> ⚽
              </p>
            </div>
          </div>

        </section>

        {/* ── 02 · ALBINOLEFFE ─────────────────────────────────── */}
        <section className="border-t-4 border-white pt-20">
          <div className="mb-16">
            <span className="font-bold tracking-[0.3em] uppercase text-white/40 text-xs">02 ——</span>
            <h2 className="font-black uppercase text-7xl sm:text-9xl tracking-tighter text-white leading-none mt-1">
              ALBINOLEFFE
            </h2>
            <p className="font-bold uppercase text-sm tracking-[0.3em] text-white/50 mt-2">
              Serie C — Professional Collaboration
            </p>
          </div>

          <div className="max-w-2xl mb-16">
            <p className="text-xl leading-relaxed text-white/80">
              Seguire una squadra professionistica richiede precisione,
              tempismo e occhio per il dettaglio. Non è solo sport: è la
              storia di una società, dei suoi tifosi e della passione che
              brucia in campo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {albinoleffePhotos.map((src, i) => (
              <div key={i} className="overflow-hidden border-2 border-white/60 hover:border-white transition-all">
                <Image
                  src={src}
                  alt={`Albinoleffe ${i + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-12">
            <Image
              src="/assets/Star-5.webp"
              alt=""
              width={56}
              height={56}
              className="opacity-60 animate-spin-slow"
            />
          </div>
        </section>

      </div>
    </main>
  );
}
