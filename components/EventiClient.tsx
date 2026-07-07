"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    { type: 'img', src: '/assets/eventi/glocky/DSC00414.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/7c0a4026-fabd-463b-8c8d-7de740a39f6f?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00272.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00491.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo1.webp' },
    { type: 'img', src: '/assets/eventi/setai/DSC01362.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/aea7c930-da1b-46ef-a07d-696f9290f128?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00685.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00635.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo2.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00893.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/471bdadc-1052-43e2-8321-9c1c5b944181?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00690.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/653790fe-4985-4875-a65e-1c900b6bc112?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/setai/DSC01247.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo3.webp' },
    { type: 'img', src: '/assets/eventi/DSC01861.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/af542f53-98fb-492e-8de2-49d9c80f4e3d?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/setai/DSC01675.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-93.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo4.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/15896e08-bcd9-4436-8b0f-d6201939dfef?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00296.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00342.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00601.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00670.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00671.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-28.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/6e5a20e5-d672-4cca-80c2-bc36bdfb5f6c?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00687.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00698.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-29.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00715.webp' },
    { type: 'img', src: '/assets/eventi/glocky/DSC00956.webp' },
    { type: 'img', src: '/assets/eventi/GLUE-NO-LOGO-30.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/d11d9c2b-f5bd-45f1-98b9-c525f94d5d8d?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
    { type: 'img', src: '/assets/eventi/setai_rondo5.webp' },
    { type: 'img', src: '/assets/eventi/setai_rondo6.webp' },
    { type: 'iframe', src: 'https://player.mediadelivery.net/embed/574592/9201b483-f3ad-4e0d-ad4f-7274c6a4b2f4?autoplay=true&loop=true&muted=true&preload=true&responsive=true' },
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
        <div className="relative mb-16 sm:mb-24 flex flex-col items-center text-center">
          <Image
            src="/assets/red_artifact.png"
            alt=""
            width={738}
            height={588}
            className="absolute -top-10 right-0 sm:-right-4 w-52 sm:w-72 md:w-96 pointer-events-none"
          />

          <Image
            src="/assets/trimmed/live-content-tag.png"
            alt="Live Content"
            width={1982}
            height={1695}
            priority
            className="w-[85vw] max-w-md sm:max-w-lg md:max-w-xl h-auto mb-10"
          />

          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Fotografia e video per eventi, club e concerti. Seguo l’azione da
            dentro la serata, tra luci, pubblico e performance. Il risultato
            sono contenuti dinamici, ottimizzati per social e comunicazione,
            che restituiscono l’energia reale dell’evento.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-32">
          {galleryItems.map((item, index) => {
              if (item.type === 'iframe') {
                  return (
                    <div
                        key={index}
                        className="gallery-item relative aspect-[9/16] border-2 border-white break-inside-avoid cursor-pointer hover:opacity-90 transition-all duration-500"
                        onClick={() => openModal(index)}
                    >
                        <iframe
                            src={item.src}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
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
                galleryItems[currentIndex].type === 'iframe' ? (
                    <div className="relative aspect-[9/16] w-[min(50.625vh,90vw)]">
                        <iframe
                            src={galleryItems[currentIndex].src}
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
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
