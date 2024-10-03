"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Joyride, { CallBackProps } from "react-joyride"; // Importa o react-joyride
import { useState, useEffect } from "react";

interface Item {
  id?: number;
  title?: string;
  subtitle?: string;
  local?: string;
  image?: any;
  price?: number;
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

const PatrimoyCarrousel = ({ itens, ableTutorial }: CarrouselProps | any) => {
  const [runTour, setRunTour] = useState(true);

  useEffect(() => {
    setRunTour(true);
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // const steps = [
  //   {
  //     disableBeacon: true,
  //     placement: "center",
  //     target: "body",
  //     content: (
  //       <>
  //         <strong>Bem vindo, esse é o site de compras IBP,</strong>
  //         <p>Siga o Tutorial para não ter dúvidas sobre as informações.</p>
  //       </>
  //     ),
  //   },
  //   {
  //     target: ".joyride-title",
  //     content: "Aqui está o nome item.",
  //   },
  //   {
  //     target: ".joyride-subtitle",
  //     content: "Esta é a descrição do item.",
  //   },
  //   {
  //     target: ".joyride-price",
  //     content:
  //       " Aqui você pode ver o valor do item no momento da documentação.",
  //   },
  //   {
  //     target: ".joyride-link",
  //     content:
  //       "Aqui você pode clicar para ser redirecionado ao anuncio do item no mercado livre.",
  //   },
  // ];

  return (
    <>
      {ableTutorial ? (
        <Joyride
          hideCloseButton
          steps={[
            {
              disableBeacon: true,
              placement: "center",
              target: "body",
              content: (
                <>
                  <strong>Bem vindo, esse é o site de compras IBP,</strong>
                  <p>
                    Siga o Tutorial para não ter dúvidas sobre as informações.
                  </p>
                </>
              ),
            },
            {
              target: ".joyride-title",
              content: "Aqui está o nome item.",
            },
            {
              target: ".joyride-subtitle",
              content: "Esta é a descrição do item.",
            },
            {
              target: ".joyride-price",
              content:
                " Aqui você pode ver o valor do item no momento da documentação.",
            },
            {
              target: ".joyride-link",
              content:
                "Aqui você pode clicar para ser redirecionado ao anuncio do item no mercado livre.",
            },
          ]}
          continuous
          scrollToFirstStep
          locale={{
            back: "Voltar",
            close: "Fechar",
            last: "Fim",
            next: "Próximo",
            skip: "Pular",
          }}
          styles={{
            options: {
              arrowColor: "#AEBF8A",
              backgroundColor: "#F2D4AE",
              overlayColor: "rgba(0, 0, 0, 0.2)",
              primaryColor: "#02732A",
              textColor: "#004a14",
            },
          }}
          disableScrolling
          showProgress
          showSkipButton
          run={true} // Executa o tour baseado no estado
          callback={(data: CallBackProps) => {
            if (data.status === "finished" || data.status === "skipped") {
              setRunTour(false); // Finaliza o tour quando concluído ou ignorado
            }
          }}
        />
      ) : null}
      <Swiper modules={[Navigation]} navigation breakpoints={slideResponsive}>
        {itens.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#F2D4AE] w-[260px] xxs:w-[280px] h-[330px] lg:w-[308px] lg:h-[360px] rounded-xl shadow-md pb-4 ">
                <div className="flex items-center justify-center lg:h-[125px] h-[120px]">
                  <Image
                    src={item.image}
                    alt="imagem"
                    className="rounded-t-xl h-full flex justify-center object-cover"
                  />
                </div>
                <div className="flex flex-col p-2 h-[160px] justify-around lg:w-[320px] sm:h-[240] lg:h-[180px]">
                  <div className="flex flex-col p-2">
                    <div className="mb-2">
                      <h1 className="text-sm lg:text-base font-bold text-[#000] joyride-title">
                        {item.title}
                      </h1>
                    </div>
                    <div>
                      <p className="text-sm my-2 text-[#444] joyride-subtitle">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4 w-full">
                  <div className="bg-[#AEBF8A]  text-[12px] xxs:text-[14px] text-[#000] flex items-center px-2 gap-2 rounded-2xl h-[32px] joyride-price">
                    <span>R$ {item.price},00</span>
                  </div>
                  <div className="bg-[#AEBF8A] text-[#000] text-[12px] xxs:text-[14px] flex items-center px-2 gap-2 rounded-2xl h-[32px] joyride-link">
                    <span>
                      <a target="_blank" href={item.link}>
                        Link
                      </a>
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
