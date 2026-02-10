import Image from "next/image";

export default function ContactList() {
  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center items-center py-20 px-4 sm:px-8 overflow-hidden relative">
        {/* DECORATIVE ELEMENTS (Desktop Only) */}
        <Image
          src="/assets/Star-4.webp"
          alt=""
          width={96}
          height={96}
          className="absolute top-32 left-10 w-24 h-24 animate-spin-slow opacity-50 hidden md:block"
        />
        <Image
          src="/assets/Star-5.webp"
          alt=""
          width={128}
          height={128}
          className="absolute bottom-32 right-10 w-32 h-32 animate-pulse opacity-50 hidden md:block"
        />

        <div className="flex flex-col items-center space-y-6 sm:space-y-6 w-full max-w-7xl z-10">
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/nicolapreda_/#"
            target="_blank"
            className="group relative w-full text-center"
          >
            <span className="block text-4xl sm:text-7xl md:text-[8rem] leading-[0.85] font-black text-white hover:text-transparent hover:bg-clip-text hover:bg-white transition-all duration-300 tracking-tighter mix-blend-overlay hover:mix-blend-normal whitespace-nowrap">
              INSTAGRAM
            </span>
          </a>

          {/* WHATSAPP */}
          <div className="flex items-center gap-3 sm:gap-8 sm:hover:scale-105 transition-transform duration-300 justify-center w-full">
            <Image
              src="/assets/Star-5.webp"
              alt=""
              width={64}
              height={64}
              className="w-5 h-5 sm:w-16 sm:h-16 animate-spin-slow invert"
            />
            <a
              href="https://wa.me/message/NCECJOBKRIRDO1"
              target="_blank"
              className="block text-4xl sm:text-7xl md:text-[8rem] leading-[0.85] font-black text-white hover:text-green-400 transition-colors duration-300 tracking-tighter whitespace-nowrap"
            >
              WHATSAPP
            </a>
          </div>

          {/* YOUTUBE */}
          <div className="flex items-center gap-3 sm:gap-8 sm:hover:scale-105 transition-transform duration-300 justify-center w-full">
            <a
              href="https://www.youtube.com/@nicolapreda"
              target="_blank"
              className="block text-4xl sm:text-7xl md:text-[8rem] leading-[0.85] font-black text-white hover:text-red-600 transition-colors duration-300 tracking-tighter whitespace-nowrap"
            >
              YOUTUBE
            </a>
            <Image
              src="/assets/Star-5.webp"
              alt=""
              width={64}
              height={64}
              className="w-5 h-5 sm:w-16 sm:h-16 animate-spin-slow invert"
            />
          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/nicola-preda-5b0722233/"
            target="_blank"
            className="group relative w-full text-center"
          >
            <span className="block text-4xl sm:text-7xl md:text-[8rem] leading-[0.85] font-black text-white hover:text-blue-300 transition-colors duration-300 tracking-tighter mix-blend-overlay hover:mix-blend-normal opacity-80 hover:opacity-100 whitespace-nowrap">
              LINKEDIN
            </span>
          </a>

          {/* EMAIL */}
          <div className="flex items-center gap-3 sm:gap-8 mt-4 sm:mt-8 sm:hover:scale-105 transition-transform duration-300 justify-center w-full">
            <Image
              src="/assets/Star-4.webp"
              alt=""
              width={48}
              height={48}
              className="w-4 h-4 sm:w-12 sm:h-12 animate-pulse invert"
            />
            <a
              href="mailto:nicola.preda05@gmail.com"
              className="block text-4xl sm:text-7xl md:text-[8rem] leading-[0.85] font-black text-white hover:text-yellow-400 transition-colors duration-300 tracking-tighter whitespace-nowrap"
            >
              EMAIL
            </a>
          </div>
        </div>
    </section>
  );
}
