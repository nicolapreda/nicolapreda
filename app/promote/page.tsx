import Image from "next/image";
import { metadata as layoutMetadata } from "../layout";

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

const leonardoVideos = [
  "https://player.mediadelivery.net/embed/574592/b6bbb482-642c-4efd-88cd-ecebbc24d7eb?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/6a8cbc3f-c236-4342-a481-23cb91b9b0a6?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const spotVideos = [
  "https://player.mediadelivery.net/embed/574592/ba291232-5687-4a03-ac39-582b229d60f4?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const manentiVideo =
  "https://player.mediadelivery.net/embed/574592/a6177b41-ad51-4b1d-b4fc-7fa52dcaa245?autoplay=true&loop=true&muted=true&preload=true&responsive=true";

const corporateVertical = [
  "https://player.mediadelivery.net/embed/574592/a83effbb-9040-4ac7-9de3-26c1ebf5322b?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/fa7c4536-1b2a-4352-a1fc-d7d3f77120a1?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/cd510999-03da-4363-be60-3e204875710e?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/458f2395-220a-4a09-92a1-ca8c42183649?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const socialParlati = [
  "https://player.mediadelivery.net/embed/574592/2c76d5e8-5a8b-4fa5-8e66-25a476bcb64a?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/c23b86a1-3684-456f-b637-ff4e97db2df7?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/078ee9bf-b2c4-4804-9d31-96ff6adc4b57?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/d32f26a5-5df8-465b-94e2-5e2ff7b8010a?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const backstageVideos = [
  "https://player.mediadelivery.net/embed/574592/10d196b2-4c8b-4601-8772-aad1d3850dee?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/b5697a48-ca9b-49c4-b0c6-c8c527fbf3a6?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/77c6b14f-8c2f-4601-bae9-bfd999e3c822?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/8263b380-ab15-4f8d-b64b-0536beb29ce4?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/529aec14-ca04-4d71-8743-6cc3e8c1dd13?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/61917614-eb52-4bf3-8c73-5c69b0a97ead?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

function VideoH({ src }: { src: string }) {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={src}
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function VideoV({ src }: { src: string }) {
  return (
    <div className="relative w-full aspect-[9/16]">
      <iframe
        src={src}
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function PromotePage() {
  return (
    <main className="bg-primary text-white min-h-screen selection:bg-white selection:text-primary overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
        <Image
          src="/assets/red_artifact.png"
          alt=""
          width={738}
          height={588}
          className="absolute -top-4 right-0 w-40 sm:w-60 opacity-80 pointer-events-none"
        />
        <Image
          src="/assets/promote your business.png"
          alt="Promote Your Business"
          width={1400}
          height={700}
          priority
          className="w-full max-w-2xl h-auto relative z-10"
        />
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-32">

        {/* ── 01 · CORPORATE ───────────────────────────────────── */}
        <section className="mb-32 relative">

          {/* REPLACE → sostituire con <Image> font personalizzato */}
          <h2 className="font-black uppercase text-[12vw] sm:text-[11vw] md:text-[9vw] tracking-tighter leading-none mb-20">
            CORPORATE
          </h2>

          {/* Hotel Leonardo Da Vinci */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-24">
            <div className="md:col-span-2 flex flex-col gap-5">
              <VideoH src={leonardoVideos[0]} />
              <VideoH src={leonardoVideos[1]} />
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              {/* REPLACE → descrizione progetto Hotel Leonardo Da Vinci */}
              L&apos;Hotel Leonardo Da Vinci ci ha commissionato una serie di contenuti video orizzontali pensati per la homepage del loro sito. L&apos;obiettivo era trasmettere l&apos;eleganza e l&apos;atmosfera dell&apos;hotel in pochi secondi, catturando l&apos;attenzione del visitatore e invogliandolo a prenotare. Ogni clip curata nei dettagli: luce, ritmo e inquadratura per restituire il vero carattere della struttura.
            </p>
          </div>

          {/* Spot Arredamenti & Capelli */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-24">
            <p className="text-lg sm:text-xl leading-relaxed font-medium order-2 md:order-1">
              {/* REPLACE → descrizione progetto Spot Arredamenti & Capelli */}
              Spot realizzato per una realtà locale del mondo dell&apos;arredamento e dei capelli. Video breve e diretto, pensato per campagne social e canali digitali dell&apos;azienda. Il focus: mostrare il prodotto nel suo contesto naturale con un ritmo visivo capace di fermare il pollice e generare interesse immediato.
            </p>
            <div className="md:col-span-2 order-1 md:order-2">
              <VideoH src={spotVideos[0]} />
            </div>
          </div>

          {/* Autolavaggio Manenti */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-24">
            <div className="md:col-span-2">
              <VideoH src={manentiVideo} />
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              {/* REPLACE → descrizione progetto Autolavaggio Manenti */}
              Video corporate realizzato per l&apos;Autolavaggio Manenti per presentare l&apos;attività, i servizi offerti e il team. Un racconto visivo pensato per trasmettere professionalità e cura del dettaglio, da usare sui social e sul sito per attrarre nuovi clienti e rafforzare la fiducia di quelli già esistenti.
            </p>
          </div>

          {/* Video Corporate verticali */}
          <div className="relative">
            <Image
              src="/assets/Star-4.webp"
              alt=""
              width={88}
              height={88}
              className="absolute -top-10 right-0 w-14 sm:w-20 opacity-60 animate-spin-slow pointer-events-none"
            />
            <p className="text-lg sm:text-xl leading-relaxed font-medium max-w-3xl mb-12">
              {/* REPLACE → testo generico video corporate */}
              Ogni attività ha una storia da raccontare. Questi video corporate nascono per dare voce a imprese, professionisti e brand che vogliono presentarsi al meglio online. Formato verticale, ritmo social, messaggio chiaro: il trio perfetto per aumentare la visibilità, rafforzare la fiducia del cliente e differenziarsi dalla concorrenza.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {corporateVertical.map((src, i) => (
                <VideoV key={i} src={src} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 · VIDEO MARKETING ─────────────────────────────── */}
        <section className="mb-32 relative">

          <Image
            src="/assets/red_artifact.png"
            alt=""
            width={738}
            height={588}
            className="absolute -top-8 right-0 w-36 sm:w-52 opacity-70 pointer-events-none"
          />

          {/* REPLACE → sostituire con <Image> font personalizzato */}
          <h2 className="font-black uppercase text-[12vw] sm:text-[11vw] md:text-[9vw] tracking-tighter leading-none mb-20">
            VIDEO<br />MARKETING
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {socialParlati.map((src, i) => (
              <VideoV key={i} src={src} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              I video parlati sono il formato più efficace per costruire fiducia e autorevolezza online. Un volto, una voce, un messaggio: il titolare o il professionista parla direttamente al proprio pubblico, raccontando prodotti, servizi o storie in modo autentico. Il formato verticale li rende perfetti per Reels, TikTok e Storie.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Le persone comprano dalle persone. Un video parlato abbatte la distanza tra brand e cliente, aumenta il tasso di coinvolgimento e spinge all&apos;azione molto più di qualsiasi grafica statica. È il contenuto con il miglior rapporto qualità-risultato per chi vuole crescere sui social in modo concreto.
            </p>
          </div>
        </section>

        {/* ── 03 · BACKSTAGE ───────────────────────────────────── */}
        <section className="relative">

          {/* REPLACE → sostituire con <Image> font personalizzato */}
          <h2 className="font-black uppercase text-[12vw] sm:text-[11vw] md:text-[9vw] tracking-tighter leading-none mb-20">
            BACKSTAGE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {backstageVideos.map((src, i) => (
              <VideoV key={i} src={src} />
            ))}
          </div>

          <div className="flex justify-between items-end mt-10">
            <Image
              src="/assets/Star-4.webp"
              alt=""
              width={72}
              height={72}
              className="w-10 sm:w-16 opacity-50 animate-spin-slow"
            />
            <Image
              src="/assets/Star-5.webp"
              alt=""
              width={64}
              height={64}
              className="w-12 sm:w-16 opacity-60 animate-spin-slow"
            />
          </div>
        </section>

      </div>
    </main>
  );
}
