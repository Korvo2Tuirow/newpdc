"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import h2img from "@/public/image/imgCarrousel/h03.jpg";
import h4img from "@/public/image/imgCarrousel/hamb01.jpg";
import h5img from "@/public/image/imgCarrousel/hamb02.jpg";
import comb01 from "@/public/image/imgCarrousel/combo01.jpg";
import image01 from "@/public/image/imgCarrousel/imagem01.jpg";
import image02 from "@/public/image/imgCarrousel/imagem02.jpg";
import image03 from "@/public/image/imgCarrousel/imagem03.jpg";
import image04 from "@/public/image/imgCarrousel/imagem04.jpg";

export const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Começa no meio
  const startX = useRef<number | null>(null);

  const imagens = [comb01, h4img, h5img, h2img, image01, image02, image03, image04];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current !== null) {
      const diff = startX.current - endX;

      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const endX = e.clientX;
    if (startX.current !== null) {
      const diff = startX.current - endX;

      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 py-10">
      <div
        className="relative w-screen max-w-[1000px] h-110 flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {imagens.map((src, index) => {
          const offset = index - activeIndex;

          const baseStyle = "absolute transition-all duration-500 ease-in-out";
          const isActive = offset === 0;

          const transform = isActive
            ? "scale-130 z-30"
            : offset === -1
            ? "-translate-x-80 rotate-y-5 scale-90 z-20"
            : offset === 1
            ? "translate-x-80 -rotate-y-5 scale-90 z-20"
            : "opacity-0 scale-75 z-10";

          return (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`${baseStyle} ${transform}  w-[300px] h-[300px] object-cover shadow-lg shadow-black/50 rounded-md`}
              draggable="false"
            />
          );
        })}
      </div>

      {/* Botões */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-black px-4 py-2 rounded-full hover:bg-gray-500 transition"
        ></button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-black px-4 py-2 rounded-full hover:bg-gray-500 transition"
        ></button>
      </div>
    </div>
  );
};
