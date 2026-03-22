"use client";

import { useState } from "react";
import { Video } from "../types";

export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="group block">
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h3 className="mt-6 text-xl font-bold uppercase leading-tight tracking-tight">
          {video.title}
        </h3>
      </div>
    );
  }

  return (
    <div className="group block cursor-pointer" onClick={() => setPlaying(true)}>
      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xl relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-10 h-10 ml-1">
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold uppercase leading-tight tracking-tight group-hover:text-primary transition-colors flex-1">
          {video.title}
        </h3>
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors whitespace-nowrap mt-1"
        >
          YouTube ↗
        </a>
      </div>
    </div>
  );
}
