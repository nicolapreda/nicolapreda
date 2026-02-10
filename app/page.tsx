import { getLatestVideos, YOUTUBE_CHANNEL_ID } from "../lib/youtube";
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
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center -mt-32 sm:-mt-40">
          <h1 className="font-cursive text-[30vw] sm:text-[17vw] leading-none text-center text-white">
            Nicola
          </h1>
          <h1 className="font-sans font-black text-[30vw] sm:text-[17vw] leading-none tracking-tighter uppercase -mt-4 sm:-mt-8 text-center text-white">
            Preda
          </h1>
        </div>

        {/* Silhouette Image */}
        <Image
          src="/assets/sagoma.svg"
          alt="Silhouette"
          width={1920}
          height={1080}
          priority
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[230%] sm:w-full max-w-6xl z-20 pointer-events-none display-block opacity-80"
        />
      </section>

      {/* FLOATING CTA BUTTON (Fixed) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max shadow-2xl">
        <Link
          href="/portfolio"
          className="px-10 py-4 bg-white text-primary rounded-full font-black uppercase tracking-widest border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 block"
        >
          Esplora Portfolio
        </Link>
      </div>

      {/* INTRO / CHI SONO REDESIGN */}
      <section
        className="bg-white text-black pt-24 pb-16 px-6 sm:px-12 min-h-screen container mx-auto max-w-7xl relative overflow-hidden"
        id="chi-sono"
      >
        {/* DECORATION: 3D DETAIL */}
        <Image
          src="/assets/3d_detail.webp"
          alt=""
          width={384}
          height={384}
          className="absolute top-0 right-0 w-64 md:w-96 opacity-50 z-0 pointer-events-none mix-blend-multiply"
        />

        {/* TOP CATEGORIES */}
        <div className="border-t-2 border-primary py-4 flex flex-wrap justify-between text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase mb-16 relative z-10">
          <span>Produzione Video</span>
          <span>Fotografia</span>
          <span className="hidden sm:inline">Social Media</span>
          <span className="hidden sm:inline">Storytelling</span>
          <span>Direzione Creativa</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT COLUMN (Name + Photo + Contact) */}
          <div className="flex flex-col space-y-12">
            {/* Name Huge */}
            <div className="leading-[0.8]">
              <div className="flex items-start">
                <span className="font-cursive text-primary text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-light">
                  Nicola
                </span>
                <span className="text-3xl sm:text-5xl font-bold text-primary mt-4 ml-2">
                  (20)
                </span>
              </div>
              <div className="font-cursive text-primary text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-light ml-8 md:ml-16">
                Preda
              </div>
            </div>

            {/* Photo with Frame */}
            <div className="w-full max-w-md self-center md:self-start relative group">
              {/* The Frame */}
              <div className="border-[3px] border-primary p-6 inline-block transform transition-transform duration-500 group-hover:-rotate-1">
                {/* Vertically Cropped Image 3:4 */}
                <Image
                  src="/assets/chi-sono.webp"
                  alt="Nicola Preda"
                  width={400} // Approximate width
                  height={533} // Approximate height
                  className="w-full h-auto aspect-[3/4] object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-sm font-medium space-y-1 text-gray-500 pl-2">
              <p className="uppercase tracking-wider font-bold text-primary">Posizione</p>
              <p>Milano // Italia</p>
              <br />
              <p className="uppercase tracking-wider font-bold text-primary">Contatti</p>
              <p>nicola.preda05@gmail.com</p>
              <p>@nicolapreda_</p>
            </div>
          </div>

          {/* RIGHT COLUMN (Resume Details) */}
          <div className="flex flex-col justify-between space-y-16 pt-8 md:pt-32">
            <div className="space-y-16">
              {/* SECTION: ABOUT ME */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-gray-100 pb-8">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">
                  CHI SONO
                </h2>
                <div className="sm:col-span-2 text-lg leading-relaxed font-medium">
                  <p>
                    Ho {age} anni e amo intrecciare i fili delle mie storie con
                    quelle degli altri per raccontarle attraverso la mia
                    creatività. Nel mio lavoro fondo fotografia, video e
                    direzione artistica per creare narrazioni visive potenti. La
                    mia ambizione è lavorare su progetti che sfidano
                    l'ordinario, portando un'estetica curata e un punto di vista
                    personale.
                  </p>
                </div>
              </div>

              {/* SECTION: EXPERIENCE */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-gray-100 pb-8">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">
                  ESPERIENZA
                </h2>
                <div className="sm:col-span-2 space-y-8">
                  <div>
                    <h3 className="font-bold text-primary text-xl">
                      Artista freelance
                    </h3>
                    <p className="text-sm text-gray-600">
                      Freelance • giu 2024 - Presente
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Bergamo, Lombardia, Italia
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: EDUCATION */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-gray-100 pb-8">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">
                  FORMAZIONE
                </h2>
                <div className="sm:col-span-2 space-y-6">
                  <div>
                    <h3 className="font-bold text-primary text-xl">
                      Politecnico di Milano
                    </h3>
                    <p className="text-sm text-gray-600">
                      Laurea triennale, Design e comunicazione visiva
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      lug 2024 - lug 2027
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl">
                      ITIS Paleocapa
                    </h3>
                    <p className="text-sm text-gray-600">
                      Diploma Istituto Tecnico
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      set 2019 - giu 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="text-right pt-16">
              <h1
                aria-hidden="true"
                className="text-[15vw] sm:text-[10rem] leading-none font-sans font-thin tracking-tighter text-blue-100 select-none"
              >
                PROFILO
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING TEXT */}
      <div className="w-full overflow-hidden whitespace-nowrap py-6 bg-white text-black border-y-2 border-black">
        <div className="inline-flex animate-infinite-scroll items-center">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                    <span className="text-4xl font-black italic tracking-tighter uppercase mx-12">
                        DOVE LE STORIE INCONTRANO LA CREATIVITÀ
                    </span>
                    <Image src="/assets/Star-5.webp" alt="star" width={48} height={48} className="w-12 h-12 mx-4 animate-spin-slow" />
                </div>
            ))}
        </div>
      </div>

      {/* CARDS ORIZZONTALI */}
      {/* SPORT */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
             <Image src="/assets/sport/galacticos4.jpg" alt="Sport" fill className="object-cover" />
        </div>
        <div className="col-span-3 bg-primary text-white p-8 sm:p-16 flex flex-col gap-4">
          <span className="bg-white text-black px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            FOCUS
          </span>
          <Link
            className="text-[40px] sm:text-[60px] md:text-[80px] font-black uppercase hover:underline decoration-white display-block w-fit"
            href="/sport"
          >
            SPORT
          </Link>
          <p className="text-xl max-w-2xl">
            Racconto lo sport da bordocampo, catturando la tensione, la gioia e
            la fatica. Dal progetto Galacticos alle collaborazioni
            professionistiche, trasformo l'azione in immagini iconiche. ⚽️
          </p>
          <div className="mt-4">
            <Link
              href="/sport"
              className="inline-block border-b-2 border-white pb-1 font-bold tracking-widest uppercase text-sm hover:border-black transition-colors"
            >
              Scopri il progetto &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTI */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 bg-white text-black p-8 sm:p-16 flex flex-col gap-4 order-2 md:order-1">
          <span className="bg-primary text-white px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            LIFESTYLE
          </span>
          <div className="relative w-fit">
            <Link
              className="text-[40px] sm:text-[60px] md:text-[80px] font-black uppercase hover:text-primary transition-colors relative z-10 block"
              href="/eventi"
            >
              EVENTI
            </Link>
            <Image
              src="/assets/sottolineatura.webp"
              alt=""
              width={300} // Approximate width
              height={50} // Approximate height
              className="absolute -bottom-2 left-0 w-full h-auto opacity-80 pointer-events-none z-0 transform -rotate-1 scale-110"
            />
          </div>
          <p className="text-xl max-w-2xl">
            Fotografia e video per eventi, club e concerti. Seguo l’azione da
            dentro la serata, tra luci, pubblico e performance. Il risultato
            sono contenuti dinamici, ottimizzati per social e comunicazione, che
            restituiscono l’energia reale dell’evento.🪩
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

      {/* PROMOTE */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
             <Image
            src="/assets/promote/promote_copertina.webp"
            alt="Promote"
            fill
            className="object-cover"
            />
        </div>
        <div className="col-span-3 bg-primary text-white p-8 sm:p-16 flex flex-col gap-4">
          <span className="bg-white text-black px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            BUSINESS
          </span>
          <h2 className="text-[40px] sm:text-[60px] md:text-[80px] font-black uppercase hover:underline decoration-white">
            <Link href="/promote">PROMOTE</Link>
          </h2>
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

      {/* WEB SECTION (New) */}
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 bg-white text-black p-8 sm:p-16 flex flex-col gap-4">
          <span className="bg-primary text-white px-4 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
            DIGITAL
          </span>
          <Link
            className="text-[40px] sm:text-[60px] md:text-[80px] font-black uppercase hover:text-primary transition-colors block w-fit"
            href="/web"
          >
            WEB
          </Link>
          <p className="text-xl max-w-2xl">
            Landing Page performanti e siti vetrina. Metto in luce il tuo valore
            per trasformare i visitatori in clienti e generare lead di qualità.
            🎯
          </p>
          <div className="mt-4">
            <Link
              href="/web"
              className="inline-block border-b-2 border-black pb-1 font-bold tracking-widest uppercase text-sm hover:text-primary hover:border-primary transition-colors"
            >
              Scopri il progetto &rarr;
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto">
            <Image src="/assets/web/web_copertina.webp" alt="Web" fill className="object-cover" />
        </div>
      </section>

      {/* SCROLLING TEXT SEPARATOR */}
      <div className="w-full overflow-hidden whitespace-nowrap py-6 bg-white text-black border-y-2 border-black">
        <div className="inline-flex animate-infinite-scroll items-center">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                    <span className="text-4xl font-black italic tracking-tighter uppercase mx-12">
                        DOVE LE STORIE INCONTRANO LA CREATIVITÀ
                    </span>
                    <Image src="/assets/Star-5.webp" alt="star" width={48} height={48} className="w-12 h-12 mx-4 animate-spin-slow" />
                </div>
            ))}
        </div>
      </div>

      {/* YOUTUBE SECTION (Updated: White & Bigger) */}
      <section className="py-32 bg-white text-black px-8 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
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
