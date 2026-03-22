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

const backstageVideos = [
  "https://player.mediadelivery.net/embed/574592/10d196b2-4c8b-4601-8772-aad1d3850dee?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/b5697a48-ca9b-49c4-b0c6-c8c527fbf3a6?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/77c6b14f-8c2f-4601-bae9-bfd999e3c822?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/8263b380-ab15-4f8d-b64b-0536beb29ce4?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/529aec14-ca04-4d71-8743-6cc3e8c1dd13?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/61917614-eb52-4bf3-8c73-5c69b0a97ead?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const corporateHorizontal = [
  "https://player.mediadelivery.net/embed/574592/b6bbb482-642c-4efd-88cd-ecebbc24d7eb?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/6a8cbc3f-c236-4342-a481-23cb91b9b0a6?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/ba291232-5687-4a03-ac39-582b229d60f4?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/a6177b41-ad51-4b1d-b4fc-7fa52dcaa245?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const corporateVertical = [
  "https://player.mediadelivery.net/embed/574592/a83effbb-9040-4ac7-9de3-26c1ebf5322b?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/fa7c4536-1b2a-4352-a1fc-d7d3f77120a1?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/cd510999-03da-4363-be60-3e204875710e?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/458f2395-220a-4a09-92a1-ca8c42183649?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

const socialParlati = [
  "https://player.mediadelivery.net/embed/574592/2c76d5e8-5a8b-4fa5-8e66-25a476bcb64a?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  "https://player.mediadelivery.net/embed/574592/c23b86a1-3684-456f-b637-ff4e97db2df7?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
];

function VideoH({ src }: { src: string }) {
  return (
    <div className="relative w-full aspect-video border-2 border-white">
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
    <div className="relative w-full aspect-[9/16] border-2 border-white">
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
    <main className="bg-primary text-white min-h-screen pt-32 pb-24 selection:bg-white selection:text-primary overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="relative mb-40 pb-16 border-b-4 border-white">

          {/* top label */}
          <span className="font-bold tracking-[0.35em] uppercase text-white/50 text-xs">
            Services — Nicola Preda
          </span>

          {/* headline */}
          <div className="mt-6 leading-none">
            <h1 className="font-black uppercase text-[18vw] sm:text-[13vw] md:text-[11vw] tracking-tighter text-white leading-[0.85]">
              PROMOTE
            </h1>
            <h1 className="font-black uppercase text-[11vw] sm:text-[8vw] md:text-[6.5vw] tracking-tighter text-white/85 leading-[1.0] mt-1">
              Your Business
            </h1>
          </div>

          {/* badge + body */}
          <div className="flex flex-wrap items-start gap-6 mt-10">
            <span className="inline-block border-2 border-white px-4 py-1 text-xs font-black uppercase tracking-[0.25em] transform rotate-2 mt-1">
              Bergamo &amp; dintorni
            </span>
          </div>
          <p className="mt-6 text-lg sm:text-xl font-sans font-medium max-w-2xl leading-relaxed text-white/75">
            Trasformo la tua attività in un brand che parla. Video, foto e
            strategia per connettersi davvero con il tuo pubblico.
          </p>

          {/* deco star */}
          <Image
            src="/assets/Star-4.webp"
            alt=""
            width={88}
            height={88}
            className="absolute top-2 right-2 sm:right-10 opacity-70 animate-spin-slow pointer-events-none"
          />
        </div>

        {/* ── 01 · CORPORATE ───────────────────────────────────── */}
        <section className="mb-40">

          {/* section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <span className="font-bold tracking-[0.3em] uppercase text-white/40 text-xs">01 ——</span>
              <div className="mt-1">
                <h2 className="font-black uppercase text-7xl sm:text-9xl tracking-tighter text-white leading-none">
                  CORPORATE
                </h2>
                <p className="font-bold uppercase text-sm tracking-[0.3em] text-white/50 mt-3">
                  Brand Film
                </p>
              </div>
            </div>
          </div>

          {/* Orizzontale */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              <span className="font-bold uppercase text-sm tracking-[0.25em] text-white/60">Orizzontale</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {corporateHorizontal.map((src, i) => (
                <VideoH key={i} src={src} />
              ))}
            </div>
          </div>

          {/* Verticale */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              <span className="font-bold uppercase text-sm tracking-[0.25em] text-white/60">Verticale</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {corporateVertical.map((src, i) => (
                <VideoV key={i} src={src} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 · SOCIAL PARLATI ──────────────────────────────── */}
        <section className="mb-40 relative">

          <div className="mb-16">
            <span className="font-bold tracking-[0.3em] uppercase text-white/40 text-xs">02 ——</span>
            <h2 className="font-black uppercase text-7xl sm:text-9xl tracking-tighter text-white leading-none mt-1">
              SOCIAL<br />PARLATI
            </h2>
          </div>

          {/* 2 video verticali side by side */}
          <div className="grid grid-cols-2 gap-5 max-w-2xl">
            {socialParlati.map((src, i) => (
              <VideoV key={i} src={src} />
            ))}
          </div>

          {/* sottolineatura decorativa */}
          <Image
            src="/assets/sottolineatura.webp"
            alt=""
            width={320}
            height={24}
            className="mt-6 opacity-50"
          />
        </section>

        {/* ── 03 · BACKSTAGE (last) ────────────────────────────── */}
        <section className="relative">

          {/* top border + tape */}
          <div className="relative border-t-4 border-white pt-14 mb-16">
            <Image
              src="/assets/Tape.webp"
              alt=""
              width={180}
              height={44}
              className="absolute -top-6 right-12 opacity-75 rotate-[6deg] pointer-events-none"
            />
            <span className="font-bold tracking-[0.3em] uppercase text-white/40 text-xs">03 ——</span>
            <h2 className="font-black uppercase text-7xl sm:text-9xl tracking-tighter text-white leading-none mt-1">
              BACK<br />STAGE
            </h2>
            <p className="mt-4 text-white/50 font-sans text-xs uppercase tracking-[0.3em]">
              Dietro le quinte dei nostri lavori
            </p>
          </div>

          {/* 3 righe × 2 colonne = 6 video */}
          <div className="grid grid-cols-2 gap-5">
            {backstageVideos.map((src, i) => (
              <VideoV key={i} src={src} />
            ))}
          </div>

          {/* star deco bottom */}
          <div className="flex justify-end mt-10">
            <Image
              src="/assets/Star-5.webp"
              alt=""
              width={64}
              height={64}
              className="opacity-60 animate-spin-slow"
            />
          </div>
        </section>

      </div>
    </main>
  );
}
