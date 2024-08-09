"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation"; // Importando os estilos do módulo de navegação
import { Navigation } from "swiper/modules"; // Importando o módulo de navegação
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


interface Item {
  id?: number;
  title?: string;
  subtitle?: string;
  local?: string;
  image?: any;
  price?: string;
  urgency?: string;
  link?: string;
}

interface CarrouselProps {
  itens: Item[];
}

const slideResponsive = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 1,
    centeredSlides: false,
  },
  376: {
    slidesPerView: 1.3,
    spaceBetween: 3,
    centeredSlides: false,
  },
  450: {
    slidesPerView: 1.4,
    spaceBetween: 2,
    centeredSlides: false,
  },
  500: {
    slidesPerView: 1.6,
  },
  600: {
    slidesPerView: 1.8,
  },
  700: {
    slidesPerView: 2.2,
  },
  950: {
    slidesPerView: 2.6,
  },
  1024: {
    slidesPerView: 3.2,
  },
  1280: {
    slidesPerView: 4,
  },
};

const PatrimoyCarrousel = ({ itens }: CarrouselProps) => {
  return (
    <>
      <Swiper modules={[Navigation]} navigation breakpoints={slideResponsive}>
        {itens.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#272727] w-[260px] xxs:w-[280px] h-[330px] lg:w-[308px] lg:h-[360px] rounded-xl shadow-md pb-4 ">
                <div className="flex items-center justify-center lg:h-[125px] h-[120px]">
                  <Image
                    src={item.image}
                    alt="imagem"
                    className="rounded-t-xl flex justify-center object-fill"
                  />
                </div>
                <div className="flex flex-col p-2 h-[160px] justify-around lg:w-[320px] sm:h-[240] lg:h-[180px]">
                  <div className="flex flex-col p-2">
                    <div className="mb-2">
                      <h1 className="text-sm lg:text-base font-bold text-white ">
                        {item.title}
                      </h1>
                    </div>
                    <div>
                      <p className="text-sm my-2 text-[#FFFFFF87]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around absolute mx-4 w-[280px]">
                  <div className="bg-[#383838] text-[12px] xxs:text-[14px] text-[#FFFFFF87] flex items-center px-2 gap-2 rounded-2xl h-[32px]">
                    <span>{item.price}</span>
                  </div>
                  <div className="bg-[#383838] text-[#FFFFFF87] text-[12px] xxs:text-[14px] flex items-center px-2 gap-2 rounded-2xl h-[32px]">
                    <span>
                      <a target="_blank" href={item.link}>Link</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PatrimoyCarrousel;
