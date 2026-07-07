import { getLatestVideos } from "../lib/youtube";
import VideoCard from "../components/VideoCard";
import Link from "next/link";
import Image from "next/image";
import ContactList from "../components/ContactList";

export default async function Home() {
  const videos = await getLatestVideos();

  const birthDate = new Date(2005, 4, 7);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (today < new Date(today.getFullYear(), 4, 7)) {
    age--;
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-primary text-white">
        {/* Graffiti Wordmark */}
        <div className="relative z-10 flex flex-col items-center justify-center -mt-16 sm:-mt-24 px-6">
          <Image
            src="/assets/trimmed/nicola-preda-tag.png"
            alt="Nicola Preda"
            width={1299}
            height={1365}
            priority
            className="w-[78vw] max-w-[420px] sm:max-w-[560px] h-auto"
          />
        </div>

        {/* CTA button */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-max">
          <Link
            href="/portfolio"
            className="px-10 py-4 bg-white text-primary rounded-full font-black uppercase tracking-widest border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 block"
          >
            Esplora Portfolio
          </Link>
        </div>

        {/* Silhouette Image */}
        <Image
          src="/assets/trimmed/nicola-preda-sagoma-trimmed.png"
          alt="Silhouette"
          width={703}
          height={866}
          priority
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[45vh] sm:h-[52vh] w-auto z-20 pointer-events-none opacity-80"
        />
      </section>

      {/* SHOOTING REAL PEOPLE IN REAL LIGHT */}
      <section className="relative bg-white text-black pt-24 sm:pt-32 pb-40 sm:pb-56 px-4 sm:px-10 overflow-hidden">
        <Image
          src="/assets/red_artifact.png"
          alt=""
          width={738}
          height={588}
          className="absolute top-0 right-0 sm:top-4 sm:right-6 w-56 sm:w-72 md:w-96 pointer-events-none z-0"
        />
        <Image
          src="/assets/3d_dec.png"
          alt=""
          width={340}
          height={387}
          className="absolute bottom-0 -left-4 sm:left-0 w-28 sm:w-44 md:w-52 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto text-center sm:text-left relative z-10">
          <h2 className="font-sans font-black uppercase text-[18vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-tighter">
            Shooting
          </h2>
          <h2 className="font-sans font-black uppercase text-[18vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-tighter flex items-center flex-wrap gap-x-4 justify-center sm:justify-start">
            <Image
              src="/assets/trimmed/real-tag-black.png"
              alt="Real"
              width={1920}
              height={1038}
              className="h-[1.3em] w-auto inline-block"
            />
            People
          </h2>
          <h2 className="font-sans font-black uppercase text-[18vw] sm:text-[11vw] md:text-[9vw] leading-[0.88] tracking-tighter">
            <span className="relative z-10">In real</span>{" "}
            <span className="bg-primary text-white px-2 sm:px-4">Light.</span>
          </h2>
        </div>
      </section>

      {/* SCROLLING TEXT (dark) */}
      <div className="w-full overflow-hidden whitespace-nowrap py-6 bg-black text-white border-y-2 border-black">
        <div className="inline-flex animate-infinite-scroll items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-4xl font-black italic tracking-tighter uppercase mx-12">
                DOVE LE STORIE INCONTRANO LA CREATIVITÀ
              </span>
              <Image
                src="/assets/Star-5.webp"
                alt="star"
                width={48}
                height={48}
                className="w-12 h-12 mx-4 animate-spin-slow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* QUESTO SONO IO */}
      <section className="relative bg-black text-white" id="chi-sono">
        {/* Mobile: title + text, then photo */}
        <div className="sm:hidden">
          <div className="px-6 pt-14 pb-8 text-center">
            <Image
              src="/assets/questo%20sono%20io.png"
              alt="Questo sono io"
              width={1920}
              height={1920}
              className="w-60 h-auto mx-auto mb-6"
            />
            <p className="text-base text-gray-300 leading-relaxed max-w-md mx-auto">
              Ho {age} anni e amo intrecciare i fili delle mie storie con
              quelle degli altri per raccontarle attraverso la mia
              creatività. Nel mio lavoro fondo fotografia, video e direzione
              artistica per creare narrazioni visive potenti. La mia
              ambizione è lavorare su progetti che sfidano l'ordinario,
              portando un'estetica curata e un punto di vista personale.
            </p>
          </div>
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="/assets/nicola%20preda%20studio%20light.png"
              alt="Nicola Preda"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Desktop: combined image */}
        <div className="hidden sm:block relative w-full">
          <Image
            src="/assets/questo%20sono%20io%20+%20img.png"
            alt="Questo sono io - Nicola Preda"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <p className="absolute top-[clamp(8px,2.5vw,56px)] left-0 right-0 mx-auto max-w-3xl text-center text-[clamp(9px,1.9vw,20px)] text-gray-300 leading-relaxed px-12">
            Ho {age} anni e amo intrecciare i fili delle mie storie con
            quelle degli altri per raccontarle attraverso la mia creatività.
            Nel mio lavoro fondo fotografia, video e direzione artistica per
            creare narrazioni visive potenti. La mia ambizione è lavorare su
            progetti che sfidano l'ordinario, portando un'estetica curata e
            un punto di vista personale.
          </p>
        </div>
      </section>

      {/* SCROLLING TEXT (red) */}
      <div className="w-full overflow-hidden whitespace-nowrap py-5 bg-themeRed text-white border-y-4 border-black">
        <div className="inline-flex animate-infinite-scroll items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl font-black italic tracking-tighter uppercase mx-8">
                NICOLA PREDA
              </span>
              <span className="text-themeYellow text-2xl font-black mx-6">
                ✦
              </span>
              <span className="text-2xl font-black italic tracking-tighter uppercase mx-8">
                VIDEOMAKER &amp; FOTOGRAFO
              </span>
              <span className="text-themeYellow text-2xl font-black mx-6">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CARDS ORIZZONTALI */}
      {/* EVENTI */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 bg-white text-black p-8 sm:p-16 flex flex-col gap-4 order-2 md:order-1">
          <span className="bg-primary text-white px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            LIFESTYLE
          </span>
          <Link href="/eventi" className="block w-fit">
            <Image
              src="/assets/trimmed/eventi-tag.png"
              alt="Eventi"
              width={1832}
              height={830}
              className="h-16 sm:h-24 md:h-28 w-auto"
            />
          </Link>
          <p className="text-xl max-w-2xl">
            Fotografia e video per eventi, club e concerti. Seguo l'azione da
            dentro la serata, tra luci, pubblico e performance. Il risultato
            sono contenuti dinamici, ottimizzati per social e comunicazione,
            che restituiscono l'energia reale dell'evento.🪩
          </p>
          <div className="mt-4">
            <Link
              href="/eventi"
              className="inline-block border-b-2 border-black pb-1 font-bold tracking-widest uppercase text-sm hover:text-primary hover:border-primary transition-colors"
            >
              Scopri il progetto &rarr;
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto order-1 md:order-2">
          <Image
            src="/assets/eventi/glocky/DSC00893.webp"
            alt="Eventi"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MARKETING */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
          <Image
            src="/assets/promote/promote_copertina.webp"
            alt="Marketing"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 bg-primary text-white p-8 sm:p-16 flex flex-col gap-4">
          <span className="bg-white text-black px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            BUSINESS
          </span>
          <Link href="/promote" className="block w-fit">
            <Image
              src="/assets/trimmed/marketing-tag.png"
              alt="Marketing"
              width={458}
              height={167}
              className="h-16 sm:h-24 md:h-28 w-auto invert"
            />
          </Link>
          <p className="text-xl max-w-2xl">
            Video corporate, contenuti social parlati e branding per aziende.
            Aiuto i brand a raccontare la loro storia con un linguaggio visivo
            moderno e coinvolgente. 🚀
          </p>
          <div className="mt-4">
            <Link
              href="/promote"
              className="inline-block border-b-2 border-white pb-1 font-bold tracking-widest uppercase text-sm hover:border-black transition-colors"
            >
              Scopri il progetto &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SPORT */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 bg-white text-black p-8 sm:p-16 flex flex-col gap-4 order-2 md:order-1">
          <span className="bg-primary text-white px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            FOCUS
          </span>
          <Link href="/sport" className="block w-fit">
            <Image
              src="/assets/trimmed/sport-tag.png"
              alt="Sport"
              width={1747}
              height={857}
              className="h-16 sm:h-24 md:h-28 w-auto"
            />
          </Link>
          <p className="text-xl max-w-2xl">
            Racconto lo sport da bordocampo, catturando la tensione, la gioia
            e la fatica. Dal progetto Galacticos alle collaborazioni
            professionistiche, trasformo l'azione in immagini iconiche. ⚽️
          </p>
          <div className="mt-4">
            <Link
              href="/sport"
              className="inline-block border-b-2 border-black pb-1 font-bold tracking-widest uppercase text-sm hover:text-primary hover:border-primary transition-colors"
            >
              Scopri il progetto &rarr;
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto order-1 md:order-2">
          <Image
            src="/assets/sport/galacticos4.webp"
            alt="Sport"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WEB */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
          <Image
            src="/assets/web/web_copertina.webp"
            alt="Web"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 bg-primary text-white p-8 sm:p-16 flex flex-col gap-4 relative">
          <span className="bg-white text-black px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            DIGITAL
          </span>
          <div className="relative w-fit">
            <a href="https://web.predanicola.it" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/assets/trimmed/web-png-tag.png"
                alt="Web"
                width={1610}
                height={948}
                className="h-16 sm:h-24 md:h-28 w-auto invert"
              />
            </a>
            <Image
              src="/assets/Star-4.webp"
              alt=""
              width={80}
              height={80}
              className="absolute -top-6 -right-10 w-10 sm:w-14 pointer-events-none"
            />
          </div>
          <p className="text-xl max-w-2xl">
            Landing Page performanti e siti vetrina. Metto in luce il tuo
            valore per trasformare i visitatori in clienti e generare lead di
            qualità. 🎯
          </p>
          <div className="mt-4">
            <a
              href="https://web.predanicola.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b-2 border-white pb-1 font-bold tracking-widest uppercase text-sm hover:border-black transition-colors"
            >
              Scopri il progetto &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SCROLLING TEXT SEPARATOR (dark) */}
      <div className="w-full overflow-hidden whitespace-nowrap py-6 bg-black text-white border-y-2 border-black">
        <div className="inline-flex animate-infinite-scroll items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-4xl font-black italic tracking-tighter uppercase mx-12">
                DOVE LE STORIE INCONTRANO LA CREATIVITÀ
              </span>
              <Image
                src="/assets/Star-5.webp"
                alt="star"
                width={48}
                height={48}
                className="w-12 h-12 mx-4 animate-spin-slow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* YOUTUBE SECTION */}
      <section className="py-32 bg-white text-black px-8 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <p className="text-primary font-bold tracking-widest uppercase mb-4 text-xl">
              Il mio canale
            </p>
            <h2 className="text-5xl sm:text-7xl font-black uppercase text-black tracking-tighter">
              Ultimi su YouTube
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@nicolapreda"
            target="_blank"
            className="hidden md:block px-10 py-4 bg-red-600 text-white rounded-full font-bold uppercase hover:bg-black hover:text-white transition-all text-lg tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap"
          >
            Vai al Canale
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {videos && videos.length > 0 ? (
            videos.map((video) => <VideoCard key={video.id} video={video} />)
          ) : (
            /* FALLBACK / PLACEHOLDERS */
            <div className="col-span-1 md:col-span-3 text-center py-20 border-2 border-dashed border-gray-300 rounded-3xl">
              <p className="text-gray-500 mb-6 text-xl">
                Video non disponibili al momento.
              </p>
              <a
                href="https://www.youtube.com/@nicolapreda"
                target="_blank"
                className="text-primary hover:underline font-bold text-lg"
              >
                Vai al canale YouTube &rarr;
              </a>
            </div>
          )}
        </div>

        <div className="mt-16 text-center md:hidden">
          <a
            href="https://www.youtube.com/@nicolapreda"
            target="_blank"
            className="inline-block px-10 py-4 bg-red-600 text-white rounded-full font-bold uppercase hover:bg-black transition-all text-lg tracking-wider shadow-xl whitespace-nowrap"
          >
            Vai al Canale
          </a>
        </div>
      </section>

      {/* BIG LIST CONTACTS */}
      <ContactList />
    </main>
  );
}
