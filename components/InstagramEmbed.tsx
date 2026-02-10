"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm: any;
  }
}

export default function InstagramEmbed() {
  useEffect(() => {
    // Basic function to load or process embed
    // If the script is already loaded, we just call process()
    // It's checked window.instgrm inside.
    if (typeof window !== "undefined" && window.instgrm) {
        window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="hidden">
      {/* 
        This is a helper component to ensure Instagram embeds 
        are processed when navigating between pages. 
        It doesn't render anything visible itself.
      */}
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
}
