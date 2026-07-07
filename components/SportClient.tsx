"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

const galleryPhotos = [
  "/assets/sport/hero-team.webp",
  "/assets/sport/goal-hug.webp",
  "/assets/sport/galacticos1.webp",
  "/assets/sport/match-action.webp",
  "/assets/sport/galacticos2.webp",
  "/assets/sport/lineup.webp",
  "/assets/sport/galacticos3.webp",
  "/assets/sport/van-hangout.webp",
  "/assets/sport/galacticos4.webp",
  "/assets/sport/pizzeria.webp",
  "/assets/sport/galacticos5.webp",
  "/assets/sport/greenhouse.webp",
  "/assets/sport/VAN00004_11zon.webp",
  "/assets/sport/vele-blu-backs.webp",
  "/assets/sport/VAN09692_11zon.webp",
  "/assets/sport/locker-room.webp",
  "/assets/sport/VAN09765_11zon.webp",
  "/assets/sport/action-white-kit.webp",
  "/assets/sport/VAN09766_11zon.webp",
  "/assets/sport/VAN09879_11zon.webp",
  "/assets/sport/VAN09912_11zon.webp",
  ...albinoleffePhotos,
];

export default function SportClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <main className="bg-primary text-white overflow-x-hidden selection:bg-white selection:text-primary">
      {/* HERO */}
      <section className="relative h-screen min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/sport/hero-team.webp"
          alt="Sport Photography"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />
        <Image
          src="/assets/trimmed/sport-photography-tag-white.png"
          alt="Sport Photography"
          width={1905}
          height={1166}
          priority
          className="relative z-10 w-[82vw] max-w-md sm:max-w-xl h-auto"
        />
      </section>

      {/* NARRATIVE */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-24 sm:pt-32">
        {/* Block 1: intro + match action */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 sm:mb-28">
          <Image
            src="/assets/3d_detail.webp"
            alt=""
            width={492}
            height={479}
            className="absolute -top-16 -left-6 sm:-left-16 w-28 sm:w-40 opacity-90 pointer-events-none"
          />
          <p className="relative z-10 text-lg sm:text-xl leading-relaxed font-medium md:pl-10">
            In questi due anni ho scattato migliaia di foto ad ogni singola
            partita, ed assieme ad Andrea realizzato un profilo Instagram
            degno di una squadra di Serie A. Tutto questo semplicemente per
            passione. ❤️‍🔥
          </p>
          <div className="relative">
            <Image
              src="/assets/Tape.webp"
              alt=""
              width={274}
              height={288}
              className="absolute -top-6 -left-6 w-16 sm:w-20 rotate-[-8deg] z-10 pointer-events-none"
            />
            <Image
              src="/assets/sport/match-action.webp"
              alt="Galacticos in azione"
              width={2000}
              height={1448}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/match-action.webp"))}
            />
          </div>
        </div>

        {/* Scattered collage: lineup / goal-hug / locker-room + red star */}
        <div className="relative mb-24 sm:mb-32">
          <div className="relative w-[75%] sm:w-[55%]">
            <Image
              src="/assets/Tape.webp"
              alt=""
              width={274}
              height={288}
              className="absolute -top-6 left-8 sm:left-14 w-14 sm:w-20 rotate-6 z-20 pointer-events-none"
            />
            <Image
              src="/assets/sport/lineup.webp"
              alt="Line up prima della partita"
              width={2000}
              height={1519}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/lineup.webp"))}
            />
          </div>
          <div className="relative w-[65%] sm:w-[48%] ml-auto -mt-14 sm:-mt-20 z-10">
            <Image
              src="/assets/sport/goal-hug.webp"
              alt="Esultanza gol"
              width={2000}
              height={1517}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/goal-hug.webp"))}
            />
          </div>
          <div className="relative w-[62%] sm:w-[46%] mx-auto -mt-10 sm:-mt-16 z-20">
            <Image
              src="/assets/Tape.webp"
              alt=""
              width={274}
              height={288}
              className="absolute -top-5 -right-4 w-14 sm:w-16 rotate-12 z-30 pointer-events-none"
            />
            <Image
              src="/assets/sport/locker-room.webp"
              alt="Festeggiamenti in spogliatoio"
              width={2000}
              height={1517}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/locker-room.webp"))}
            />
          </div>
          <Image
            src="/assets/red_artifact.png"
            alt=""
            width={741}
            height={576}
            className="absolute -bottom-12 right-0 sm:-right-16 w-40 sm:w-64 pointer-events-none"
          />
        </div>

        {/* Block 2: origin story + photo */}
        <p className="max-w-4xl text-lg sm:text-xl leading-relaxed font-medium mb-10 sm:mb-12">
          L'esperienza con questa squadra è iniziata come progetto personale e
          di gruppo dal primo giorno in cui mi sono avvicinato al mondo della
          fotografia, per poi consolidarsi all'interno della mia vita come un
          rituale, accompagnandosi al mio percorso di crescita personale e
          professionale.
        </p>
        <div className="relative mb-24 sm:mb-32">
          <Image
            src="/assets/sport/action-white-kit.webp"
            alt="Galacticos, azione"
            width={2000}
            height={1798}
            className="gallery-item w-full h-auto cursor-pointer"
            onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/action-white-kit.webp"))}
          />
        </div>

        {/* Block 3: sabato pomeriggio + collage */}
        <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl leading-relaxed font-medium mb-12 sm:mb-16">
          Il sabato pomeriggio è diventato un rituale: VIVERE le emozioni del
          calcio di provincia nonostante effettivamente non giochi sul campo
          (consapevole anche di non avere due piedi che mi consentano di
          farlo) è per me rigenerante. Gli ultras, la preparazione, ma
          soprattutto gli aperitivi post partita che delle volte durano quasi
          fino alla mattina dopo, rendono il tutto ancora più magico. 🎉
        </p>

        <div className="relative mb-24 sm:mb-32">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <Image
                src="/assets/Tape.webp"
                alt=""
                width={274}
                height={288}
                className="absolute -top-5 -left-5 w-14 sm:w-16 rotate-[-6deg] z-10 pointer-events-none"
              />
              <Image
                src="/assets/sport/van-hangout.webp"
                alt="Prima della partita"
                width={2000}
                height={1570}
                className="gallery-item w-full h-auto shadow-xl cursor-pointer"
                onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/van-hangout.webp"))}
              />
            </div>
            <div className="relative mt-10 sm:mt-16">
              <Image
                src="/assets/Tape.webp"
                alt=""
                width={274}
                height={288}
                className="absolute -top-5 -right-5 w-14 sm:w-16 rotate-6 z-10 pointer-events-none"
              />
              <Image
                src="/assets/sport/pizzeria.webp"
                alt="Dopo partita in pizzeria"
                width={2000}
                height={1571}
                className="gallery-item w-full h-auto shadow-xl cursor-pointer"
                onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/pizzeria.webp"))}
              />
            </div>
          </div>
          <div className="relative w-[65%] sm:w-[55%] mx-auto -mt-10 sm:-mt-14 z-10">
            <Image
              src="/assets/sport/greenhouse.webp"
              alt="Panchina, prima della partita"
              width={2000}
              height={1085}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/greenhouse.webp"))}
            />
          </div>
        </div>

        {/* Block 4: equipment story + vele blu backs photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 sm:mb-20">
          <div className="relative order-2 md:order-1">
            <Image
              src="/assets/Tape.webp"
              alt=""
              width={274}
              height={288}
              className="absolute -top-6 -left-6 w-16 sm:w-20 rotate-[-8deg] z-10 pointer-events-none"
            />
            <Image
              src="/assets/sport/vele-blu-backs.webp"
              alt="Vele Blu"
              width={1607}
              height={2000}
              className="gallery-item w-full h-auto shadow-xl cursor-pointer"
              onClick={() => openModal(galleryPhotos.indexOf("/assets/sport/vele-blu-backs.webp"))}
            />
          </div>
          <div className="flex flex-col gap-8 order-1 md:order-2">
            <p className="font-medium text-base sm:text-lg leading-relaxed">
              Ho iniziato questa esperienza scattando con un 50mm e una Sony
              APS-C, provato obiettivi zoom con apertura a F6 portando la mia
              attrezzatura all'estremo con partite che si giocavano in
              condizioni di luminosità terribile.
            </p>
            <p className="font-medium text-base sm:text-lg leading-relaxed">
              Adesso, dopo tanta esperienza, un cambio importante di
              attrezzatura (Sony A7IV e 70-200 F2.8) ed un netto
              miglioramento in post produzione stiamo ottenendo risultati
              incredibili. Il percorso di crescita è completamente
              documentato sul profilo Instagram:{" "}
              <span className="text-yellow-300 font-bold">
                @galacticos_veleblu
              </span>{" "}
              ⚽
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-lg sm:text-xl leading-relaxed font-medium border-t-4 border-white pt-12 sm:pt-16">
          Da lì, il passo successivo è arrivato quasi da solo: seguire una
          squadra professionistica come l'Albinoleffe, in Serie C. Un salto
          di livello che mi ha permesso di raccontare non solo lo sport, ma
          la storia di una società, dei suoi tifosi e della passione che
          brucia in campo.
        </p>
      </div>

      {/* FINAL MEGA GALLERY */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 sm:pt-24 pb-32">
        <h2 className="text-5xl sm:text-7xl font-black uppercase mb-8 tracking-tighter">
          Selected <span className="text-themeYellow">Shots</span>
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryPhotos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Sport gallery ${index}`}
              width={400}
              height={600}
              className="gallery-item w-full h-auto object-cover border-2 border-white transition-all duration-500 break-inside-avoid cursor-pointer hover:opacity-90"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <div
        id="gallery-modal"
        className={`fixed inset-0 z-[100] bg-black bg-opacity-95 transition-opacity duration-300 ${modalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={closeModal}
      >
        <button
          id="prev-slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 focus:outline-none z-[70]"
          onClick={showPrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          id="next-slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 focus:outline-none z-[70]"
          onClick={showNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-[60]">
          <div className="relative max-w-full max-h-full p-4 md:p-12 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
            {modalOpen && (
              <Image
                src={galleryPhotos[currentIndex]}
                alt="Zoomed"
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
              />
            )}
          </div>
        </div>

        <button
          id="close-modal"
          className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/90 rounded-full p-2 backdrop-blur-sm transition-all duration-300 focus:outline-none z-[200] shadow-lg border border-white/20"
          onClick={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </main>
  );
}
