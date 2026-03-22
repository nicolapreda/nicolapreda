import Link from "next/link";
import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";
import { projects } from "./projects";

export const metadata = {
  title: "WEB - NICOLA PREDA",
  description: "Web Design e Sviluppo. Creazione di siti web moderni, veloci e ottimizzati per convertire e comunicare il tuo brand.",
  openGraph: {
    ...layoutMetadata.openGraph,
    title: "WEB - NICOLA PREDA",
    description: "Web Design e Sviluppo. Creazione di siti web moderni, veloci e ottimizzati per convertire e comunicare il tuo brand.",
    images: ["https://www.predanicola.it/assets/final_site_preview_1767115401406.webp"],
  },
};

export default function WebPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 sm:px-12 border-b-4 border-white">
        <div className="max-w-7xl mx-auto">
        <span className="font-bold tracking-[0.35em] uppercase text-white/40 text-xs">
          Portfolio — Sviluppo Web
        </span>

        <div className="mt-6 leading-none">
          <h1 className="font-black uppercase text-[18vw] sm:text-[13vw] md:text-[10vw] tracking-tighter text-white leading-[0.85]">
            WEB
          </h1>
          <h1 className="font-black uppercase text-[18vw] sm:text-[13vw] md:text-[10vw] tracking-tighter text-white leading-[0.85] -mt-3">
            FOLIO
          </h1>
        </div>

        <div className="mt-12 max-w-3xl space-y-6 text-lg sm:text-xl leading-relaxed text-white/70">
          <p>
            In molti mi conoscono come{" "}
            <span className="text-white font-bold">videomaker e fotografo</span>,
            un percorso che porto avanti con passione da oltre due anni.
            Ma c'è un lato del mio lavoro che pochi conoscono:{" "}
            <span className="text-white font-bold">il codice</span>.
          </p>
          <p>
            Ho studiato programmazione per lungo tempo, sviluppando competenze
            avanzate che mi permettono di andare oltre i limiti dei classici
            template. Realizzo siti web{" "}
            <span className="text-white font-bold">100% custom</span>, costruiti
            riga per riga, per offrire prodotti digitali unici, veloci e
            totalmente manipolabili.
          </p>
          <p className="font-bold uppercase text-sm tracking-[0.25em] text-white/40 pt-2">
            Alta qualità tecnica e design su misura, senza prezzi spropositati.
          </p>
        </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <div className="flex flex-col divide-y divide-white/10">
        {projects.map((project, index) => (
          <section
            key={project.id}
            className="py-20 px-6 sm:px-12 relative overflow-hidden group"
          >
            {/* Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: project.themeColor }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-bold text-xs tracking-[0.3em] uppercase text-white/30">
                      0{index + 1} ——
                    </span>
                    <span className="font-bold text-xs tracking-[0.2em] uppercase text-white/50">
                      {project.id}
                    </span>
                  </div>

                  <h2 className="font-black uppercase text-5xl sm:text-6xl tracking-tighter text-white leading-none mb-3">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/50 font-medium leading-snug mb-8 border-l-2 border-white/20 pl-4">
                    {project.tagline}
                  </p>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/60 text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-white/50 inline-block flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                  >
                    Visita il sito
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Screenshot */}
                <div className="flex-1 w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 sm:h-80 lg:h-[420px] border-2 border-white/20 overflow-hidden relative group-hover:border-white/60 transition-all duration-500"
                  >
                    <Image
                      src={project.image}
                      alt={`Preview of ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="border-2 border-white px-6 py-2 text-xs font-black uppercase tracking-[0.25em]">
                        View Project ↗
                      </span>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="py-20 text-center border-t border-white/10">
        <Link
          href="/"
          className="font-bold uppercase text-xs tracking-[0.3em] text-white/40 hover:text-white transition-colors"
        >
          ← Torna alla Home
        </Link>
      </div>

    </main>
  );
}
