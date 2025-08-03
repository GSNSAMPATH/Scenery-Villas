"use client";

import { useEffect, useRef, useMemo } from "react";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface Video {
  id: string;
}

export default function SocialMediaSection() {
  const shortsVideos: Video[] = useMemo(
    () => [
      { id: "Vqr1tEv_E4s" },
      { id: "CigTjNe-YuM" },
      { id: "rAp94KYD0A4" },
      { id: "MSz7wG2iOww" },
      { id: "YKm6cm54-po" },
      { id: "vYjBSdY3pUc" },
      { id: "4rZzPYHtcVY" },
      { id: "nS3PYnHgC2s" },
      { id: "6qlMjFgIgxo" },
      { id: "E8RH11BslRg" },
    ],
    []
  );

  const playersRef = useRef<Record<string, YT.Player>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function loadPlayers() {
      shortsVideos.forEach(({ id }) => {
        playersRef.current[id] = new window.YT.Player(`player-${id}`, {
          videoId: id,
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
          },
        });
      });
    }

    if (window.YT && window.YT.Player) {
      loadPlayers();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = loadPlayers;
    }
  }, [shortsVideos]);

  const handleMouseEnter = (id: string) => {
    const player = playersRef.current[id];
    if (player?.playVideo) player.playVideo();
  };

  const handleMouseLeave = (id: string) => {
    const player = playersRef.current[id];
    if (player?.pauseVideo) player.pauseVideo();
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[var(--background0)] py-30 text-center relative">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">Watch Our YouTube Shorts</h2>
      <p className="text-md sm:text-lg font-medium text-gray-700 max-w-2xl mx-auto mb-8">
        Hover to preview real moments from Scenery Villa – just like YouTube!
      </p>

      <a
        href="https://www.youtube.com/@YourChannelName"
        className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full mb-10 hover:bg-yellow-300 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Our YouTube Channel
      </a>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[55%] -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:block cursor-pointer mt-10 ml-10"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[55%] -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden md:block cursor-pointer mt-10 mr-10"
      >
        ▶
      </button>

      {/* Video Scroll Container */}
      <div className="overflow-x-auto px-6 mt-8 pb-10 scroll-hide ml-30 mr-30" ref={scrollRef}>
        <div className="flex gap-8 w-fit mx-[8vw]">
          {shortsVideos.map(({ id }) => (
            <div
              key={id}
              className="w-[250px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition relative flex-shrink-0 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              <div id={`player-${id}`} className="w-full h-full pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
