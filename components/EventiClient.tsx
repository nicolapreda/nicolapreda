"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    { type: 'img', src: '/assets/eventi/glocky/DSC00414.webp' },
    { type: 'video', src: 'https://predanicola.b-cdn.net/assets/eventi/tedua_1.mov' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00272.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00491.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo1.webp' },
    { type: 'img', src: '/assets/eventi/setai/DSC01362.webp' },
    { type: 'video', src: 'https://predanicola.b-cdn.net/assets/eventi/spicy_portfolio.mp4' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00685.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00635.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo2.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00893.webp' },
    { type: 'video', src: 'https://predanicola.b-cdn.net/assets/eventi/vog_portfolio.mp4' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00690.webp' },
    { type: 'video', src: 'https://predanicola.b-cdn.net/assets/eventi/tedua_2.mp4' },
    { type: 'img', src: '/assets/eventi/setai/DSC01247.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo3.webp' },
    { type: 'img', src: '/assets/eventi/DSC01861.webp' },
    { type: 'video', src: 'https://predanicola.b-cdn.net/assets/eventi/glue_2.mp4' },
    { type: 'img', src: '/assets/eventi/setai/DSC01675.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-93.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo4.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00296.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00342.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00601.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00670.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00671.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-28.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00687.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00698.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-29.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00715.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00956.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-30.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo5.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo6.webp' },
  ];

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
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
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
    <main className="bg-primary text-white min-h-screen pt-32 pb-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER / INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="lg:sticky lg:top-32">
            <span className="font-bold tracking-widest uppercase border-b-2 border-white pb-1 mb-6 inline-block">
              Portfolio
            </span>
            <h1 className="text-7xl md:text-9xl font-serif italic mb-2">
              Live
            </h1>
            <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-12 tracking-tighter">
              Content
            </h1>

            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-lg mb-12">
              Fotografia e video per eventi, club e concerti. Seguo l’azione da
              dentro la serata, tra luci, pubblico e performance. Il risultato
              sono contenuti dinamici, ottimizzati per social e comunicazione,
              che restituiscono l’energia reale dell’evento.
            </p>

            <div className="grid grid-cols-2 gap-8 text-sm font-bold uppercase tracking-widest">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>Clubs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>Concerts
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>Festivals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>Private
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: MASONRY / MOODBOARD */}
          <div className="flex flex-col gap-8">
            <div className="group relative">
              <Image
                src="/assets/eventi/ARTIE-1.webp"
                alt="Artie"
                width={600}
                height={400}
                className="w-full h-auto object-cover border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group relative -rotate-1 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <video
                  src="https://predanicola.b-cdn.net/assets/eventi/merci_portfolio.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover transition-all duration-500"
                ></video>
              </div>
              <div className="group relative rotate-1 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mt-8">
                <Image
                  src="/assets/eventi/setai/DSC01265.webp"
                  alt="Setai"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>

            <div className="group relative rotate-2 max-w-sm ml-auto mr-8 -mt-8">
              <Image
                src="/assets/eventi/GLUE-47.webp"
                alt="Glue"
                width={300}
                height={200}
                className="w-full h-auto object-cover border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="group relative -rotate-1 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <video
                  src="https://predanicola.b-cdn.net/assets/eventi/glue_1.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="gallery-item w-full h-full object-cover transition-all duration-500 cursor-pointer"
                ></video>
              </div>
              <div className="group relative rotate-1 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <Image
                  src="/assets/eventi/GLUE-71.webp"
                  alt="Glue 71"
                  width={300}
                  height={400}
                  className="gallery-item w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <h2 className="text-4xl font-black uppercase mb-12 border-b-2 border-white pb-4">
          Selected Shots
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-32">
          {galleryItems.map((item, index) => {
              if (item.type === 'video') {
                  return (
                    <video
                        key={index}
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="gallery-item w-full h-auto object-cover border-2 border-white transition-all duration-500 break-inside-avoid cursor-pointer hover:opacity-90"
                        onClick={() => openModal(index)}
                    ></video>
                  )
              } else {
                  return (
                    <Image
                        key={index}
                        src={item.src}
                        alt={`Gallery item ${index}`}
                        width={400}
                        height={600}
                        className="gallery-item w-full h-auto object-cover border-2 border-white transition-all duration-500 break-inside-avoid cursor-pointer hover:opacity-90"
                        onClick={() => openModal(index)}
                    />
                  )
              }
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <div
        id="gallery-modal"
        className={`fixed inset-0 z-[100] bg-black bg-opacity-95 transition-opacity duration-300 ${modalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={closeModal}
      >
        {/* Navigation Arrows */}
        <button
          id="prev-slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 focus:outline-none z-[70]"
          onClick={showPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 md:h-16 md:w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          id="next-slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 focus:outline-none z-[70]"
          onClick={showNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 md:h-16 md:w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Container for Media */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-[60]">
          <div
            className="relative max-w-full max-h-full p-4 md:p-12 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {modalOpen && (
                galleryItems[currentIndex].type === 'video' ? (
                    <video
                        src={galleryItems[currentIndex].src}
                        controls
                        autoPlay
                        className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
                    ></video>
                ) : (
                    <Image
                        src={galleryItems[currentIndex].src}
                        alt="Zoomed"
                        width={1200}
                        height={800}
                        className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
                    />
                )
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          id="close-modal"
          className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/90 rounded-full p-2 backdrop-blur-sm transition-all duration-300 focus:outline-none z-[200] shadow-lg border border-white/20"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </main>
  );
}
