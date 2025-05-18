"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";
import h1img from "@/public/image/imgCarrousel/h01.jpg";
import h2img from "@/public/image/imgCarrousel/h03.jpg";
import "../globals.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export const Carrousel = () => {
  const imagens = [
   h1img,
   h2img
  ];

   const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
   
      <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
        
               {imagens.map((imagem, index) => (
              <SwiperSlide key={index}>
                <Image src={imagem} alt="" />
              </SwiperSlide>
            ))}
          
          
          </Swiper>
      </>

  );
};
