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
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center border-b border-white/10">
        <div className="relative z-10 flex flex-col items-center justify-center">
            <h1 className="font-cursive text-[15vw] sm:text-[10rem] leading-none text-center text-white mb-[-0.2em] z-10">
                Web
            </h1>
            <h1 className="font-sans font-black text-[15vw] sm:text-[10rem] leading-none tracking-tighter uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 z-0">
                Folio
            </h1>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 text-lg sm:text-xl leading-relaxed text-white/80 mt-12">
            <p>
                In molti mi conoscono come <span className="text-white font-bold">filmmaker e fotografo</span>, un percorso che porto avanti con passione da oltre due anni. 
                Ma c'è un lato del mio lavoro che pochi conoscono: <span className="text-white font-bold">il codice</span>.
            </p>
            <p>
                Ho studiato programmazione per lungo tempo, sviluppando competenze avanzate che mi permettono di andare oltre i limiti dei classici template. 
                Realizzo siti web <span className="text-white font-bold">100% custom</span>, costruiti riga per riga, per offrire prodotti digitali unici, veloci e totalmente manipolabili.
            </p>
            <p className="font-serif italic text-white/60">
                Alta qualità tecnica e design su misura, senza prezzi spropositati.
            </p>
        </div>
      </section>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <section
            key={project.id}
            className={`py-20 px-6 sm:px-12 border-b border-white/10 relative overflow-hidden group ${
              index % 2 === 0 ? "bg-black" : "bg-neutral-900/50"
            }`}
          >
             {/* Background Glow Effect based on theme color */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: project.themeColor }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-sm font-mono text-white/50">0{index + 1}</span>
                     <div className="h-[1px] w-12 bg-white/30"></div>
                     <span className="text-sm font-bold uppercase tracking-widest text-white/80">{project.id}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                    {project.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-white/50 font-medium mb-8 border-l-2 border-white/20 pl-4 py-1">
                    {project.tagline}
                  </p>

                  <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group-hover:scale-105"
                  >
                    Visita il sito
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Project Screenshot */}
                <div className={`flex-1 w-full flex justify-center lg:justify-end ${index % 2 !== 0 ? "lg:order-1 lg:justify-start" : ""}`}>
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-64 sm:h-80 lg:h-[400px] rounded-lg border border-white/10 bg-neutral-900 overflow-hidden relative group-hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/5"
                    >
                         <Image
                            src={project.image}
                            alt={`Preview of ${project.title}`}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                         />
                         
                         {/* Hover Overlay */}
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-6 py-2 border border-white/50 rounded-full text-sm uppercase tracking-widest backdrop-blur-sm">
                                View Project
                            </span>
                         </div>
                    </a>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

       <div className="py-20 text-center">
         <Link
            href="/"
            className="inline-block text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
        >
            ← Torna alla Home
        </Link>
       </div>
    </main>
  );
}
