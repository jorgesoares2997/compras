"use client";
import { Edit, Trash2 } from "lucide-react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { useCarrouselStore } from "@/store/tutorial-store";
import axios from "axios";
import { useEffect } from "react";
import Joyride, { CallBackProps } from "react-joyride";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";

interface Item {
  id?: number;
  title?: string;
  subtitle?: string;
  local?: string;
  image?: string;
  price?: number;
  urgency?: string;
  link?: string;
  mostUrgent?: boolean;
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

const handleDelete = async (id: number) => {
  if (!confirm("Tem certeza que deseja excluir este item?")) return;

  try {
    await axios.delete(
      `https://backend-compras.onrender.com/api/courses/${id}`
    );
    alert("Item excluído com sucesso!");

    // Recarregar a página
    window.location.reload();
  } catch (error) {
    console.error("Erro ao excluir o item:", error);
    alert("Erro ao excluir o item. Tente novamente.");
  }
};

const getUrgencyColor = (urgency: string | undefined) => {
  switch (urgency) {
    case "high":
      return "bg-red-500";
    case "medium":
      return "bg-yellow-500";
    case "low":
      return "bg-blue-500";
    default:
      return "bg-gray-400";
  }
};

const PatrimonyCarrousel = ({ itens, ableTutorial }: CarrouselProps | any) => {
  const router = useRouter();
  const {
    runTour,
    isTourVisible,
    isClient,
    setRunTour,
    setIsTourVisible,
    setIsClient,
  } = useCarrouselStore();

  useEffect(() => {
    setRunTour(true);
  }, [setRunTour]);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setIsTourVisible(true);
    }
  }, [setIsTourVisible]);

  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);

  if (!isClient) {
    return null;
  }

  const handleEdit = (id: string) => {
    alert(`Abrindo edição para o item ID: ${id}`);

    router.push(`/edit/${id}`);
  };

  const totalPrice = itens.reduce(
    (acc: any, item: { price: any }) => acc + (item.price || 0),
    0
  );
  const mostExpensive = itens.reduce(
    (prev: { price: any }, curr: { price: any }) =>
      prev.price! > curr.price! ? prev : curr
  );
  const cheapest = itens.reduce((prev: { price: any }, curr: { price: any }) =>
    prev.price! < curr.price! ? prev : curr
  );
  const mostUrgent = itens.find(
    (item: { mostUrgent: boolean }) => item.mostUrgent
  );

  return (
    <>
      {ableTutorial && isTourVisible ? (
        <Joyride
          hideCloseButton
          steps={[
            {
              disableBeacon: true,
              placement: "center",
              target: "body",
              content: (
                <>
                  <strong>Bem-vindo ao portal de compras da IBP.</strong>
                  <p>
                    Siga este guia para entender melhor as funcionalidades e
                    detalhes dos itens apresentados.
                  </p>
                </>
              ),
            },
            {
              target: ".joyride-title",
              content:
                "Este campo exibe o título do produto, facilitando a identificação rápida.",
            },
            {
              target: ".joyride-subtitle",
              content:
                "Aqui você encontrará uma breve descrição, fornecendo detalhes essenciais sobre o item.",
            },
            {
              target: ".joyride-price",
              content:
                "Este valor representa o preço atual do produto conforme registrado em nossa documentação.",
            },
            {
              target: ".joyride-link",
              content:
                "Clique aqui para ser direcionado ao anúncio completo do produto, disponível no Mercado Livre.",
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
              textColor: "#000",
            },
          }}
          disableScrolling
          spotlightClicks
          disableCloseOnEsc
          showSkipButton
          run={runTour}
          callback={(data: CallBackProps) => {
            if (data.status === "finished" || data.status === "skipped") {
              setRunTour(false);
            }
          }}
        />
      ) : null}

      <Swiper modules={[Navigation]} navigation breakpoints={slideResponsive}>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#AEBF8A] w-[260px] xxs:w-[280px] h-[330px] lg:w-[308px] lg:h-[360px] rounded-xl shadow-md pb-4 ">
              <div className="flex flex-col p-4 h-full justify-between text-[#000]">
                <h2 className="text-lg font-bold">Resumo</h2>
                <p className="text-sm">
                  <strong>Soma dos preços</strong>: R$ {totalPrice},00
                </p>
                <p className="text-sm">
                  <strong>Item mais caro</strong>: {mostExpensive.title} (R${" "}
                  {mostExpensive.price},00)
                </p>
                <p className="text-sm">
                  <strong>Item mais barato</strong>: {cheapest.title} (R${" "}
                  {cheapest.price},00)
                </p>
                {mostUrgent ? (
                  <p className="text-sm">
                    <strong>Item mais urgente</strong>: {mostUrgent.title} (R${" "}
                    {mostUrgent.price},00)
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {itens.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center relative">
              <div className="bg-[#F2D4AE] w-[260px] xxs:w-[280px] h-[330px] lg:w-[308px] lg:h-[360px] rounded-xl shadow-md pb-4">
                {/* Ícones de Ação */}

                <div className="flex items-center justify-center lg:h-[125px] h-[120px]">
                  <img
                    src={item.image}
                    alt="imagem"
                    className="rounded-t-xl bg-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col p-2 h-[160px] justify-around lg:w-[320px] sm:h-[240] lg:h-[180px]">
                  <div className="flex flex-col p-2">
                    <div className="mb-2 flex items-center">
                      <h1 className="text-sm lg:text-base font-bold text-[#000] joyride-title">
                        {item.title}
                      </h1>
                      <div
                        className={`ml-2 w-3 h-3 rounded-full ${getUrgencyColor(
                          item.urgency
                        )}   `}
                        title={`Urgency: ${item.urgency}`}
                      ></div>
                    </div>
                    <div>
                      <p className="text-sm my-2 text-[#444] joyride-subtitle">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4 w-full">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="rounded-xl bg-[#aebf8a] p-2 text-black hover:text-blue-500 transition-colors duration-300"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-xl bg-[#aebf8a] p-2 text-black hover:text-red-500 transition-colors duration-300"
                  >
                    <Trash2 size={18} />
                  </button>

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

export default PatrimonyCarrousel;
