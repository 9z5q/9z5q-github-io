import React, { useRef, useEffect } from "react";
import nextConfig from "@/next.config";

const BASE_PATH = nextConfig.basePath || "";

interface AudioPlayerProps {
    shouldPlay: boolean;
  }
  
  export default function AudioPlayer({ shouldPlay }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    useEffect(() => {
      if (shouldPlay && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio play error:", err);
        });
      }
    }, [shouldPlay]);
  
    return (
      <audio
        ref={audioRef}
        src={`${BASE_PATH}/video/audio.wav`}
        loop
        preload="auto"
      />
    );
  }