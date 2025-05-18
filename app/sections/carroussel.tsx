import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../globals.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export const Carrousel = () => {
  const imagens = [
    "/image/imgCarrousel/h01.jpg",
    "/image/imgCarrousel/h05.jpg",
    "/image/imgCarrousel/h03.jpg",
    "/image/imgCarrousel/h04.jpg",
  ];

   const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
   
      <div className="bg-gray-100 pb-10 h-500px">
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
                <img src={imagem} />
              </SwiperSlide>
            ))}
          
          </Swiper>
      </div>

  );
};
