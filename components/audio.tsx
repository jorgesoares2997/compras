"use client";
import { useState } from "react";
import PatrimonyCarrousel from "./CarrousseulItems";
import Headset from "../public/assets/images/headset.webp";
import xlr from "../public/assets/images/xlr.webp";
import carregador from "../public/assets/images/carregador.webp";
import fone from "../public/assets/images/fone.webp";
import tampa from "../public/assets/images/tampa.webp";
import canaleta from "../public/assets/images/canaleta.webp";
import capa from "../public/assets/images/capa.webp";
import medusa from "../public/assets/images/medusa.webp";
import espuma from "../public/assets/images/espuma.webp";

// Componente para renderizar um item do carrossel
const CarouselItem = ({
  id,
  title,
  subtitle,
  local,
  image,
  price,
  urgency,
  link,
}: any) => (
  <div className={`item-${id}`}>
    <img src={image.src} alt={title} />
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <span>{local}</span>
    <p>Preço: R${price}</p>
    <p>Urgência: {urgency}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Ver no Mercado Livre
    </a>
  </div>
);

const things = [
  {
    id: 1,
    title: "Microfone headset multibanda",
    subtitle:
      "Ideal para apresentações teatrais, oferecendo captação clara e alta fidelidade.",
    local: "Prazeres",
    image: Headset,
    price: 1999,
    urgency: "medium",
    link: "https://produto.mercadolivre.com.br/MLB-2831070846-microfone-sem-fio-quadruplo-ksr-pro-kt4-head-80-canais-_JM",
  },
  {
    id: 2,
    title: "Cabos Balanceados",
    subtitle:
      "Essenciais para reposição de cabos ausentes, garantindo sinal limpo e sem ruídos.",
    local: "Prazeres",
    image: xlr,
    price: 78,
    urgency: "high",
    link: "https://produto.mercadolivre.com.br/MLB-4353669688-cabo-microfone-balanceado-santo-angelo-xlr-457m-_JM",
  },
  {
    id: 3,
    title: "Carregador de bateria 9v",
    subtitle:
      "Perfeito para manter instrumentos carregados e prontos para performance.",
    local: "Prazeres",
    image: carregador,
    price: 42,
    urgency: "medium",
    link: "https://www.mercadolivre.com.br/carregador-de-pilhas-baterias-bivolt-auto-stop-mox-mo-cp50/p/MLB29073930",
  },
  {
    id: 4,
    title: "Almofadas Akg K72",
    subtitle:
      "Conforto e qualidade de som para fones de monitoramento em longas sessões.",
    local: "Prazeres",
    image: fone,
    price: 130,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-3759088843-headband-almofada-gel-para-fone-de-ouvido-akg-k52-k72-k92-_JM",
  },
  {
    id: 5,
    title: "Tampa Microfone sem fio Shure",
    subtitle:
      "Substitua partes danificadas e mantenha o microfone sempre funcional.",
    local: "Prazeres",
    image: tampa,
    price: 45,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-1005325129-tampa-bateria-microfone-sem-fio-shure-slx-pgx-original-_JM",
  },
  {
    id: 6,
    title: "Medusa 12 canais",
    subtitle:
      "Centralize os cabos para uma organização impecável e pronta para eventos.",
    local: "Prazeres",
    image: medusa,
    price: 1272,
    urgency: "low",
    link: "https://www.mercadolivre.com.br/medusa-12-vias-com-conectores-combo-cirilo-cabos-25-metros/p/MLB22343869",
  },
  {
    id: 7,
    title: "Canaleta Pvc x 3",
    subtitle:
      "Organize fios e cabos com praticidade, mantendo o ambiente limpo e seguro.",
    local: "Prazeres",
    image: canaleta,
    price: 74,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-3260897947-canaleta-recorte-aberto-cinza-50x50mm-2-metros-dutoplast-_JM",
  },
  {
    id: 8,
    title: "Capa / Case teclado MX61",
    subtitle:
      "Proteção total para transporte seguro do teclado durante eventos e viagens.",
    local: "Prazeres",
    image: capa,
    price: 589,
    urgency: "high",
    link: "https://produto.mercadolivre.com.br/MLB-1025399907-case-estojo-para-teclado-yamaha-mx61-kromus-_JM",
  },
  {
    id: 9,
    title: "Espumas microfone headset",
    subtitle:
      "Reposição ideal para garantir clareza na captação e eliminar ruídos indesejados.",
    local: "Prazeres",
    image: espuma,
    price: 15,
    urgency: "medium",
    link: "https://produto.mercadolivre.com.br/MLB-3734876012-espuma-de-microfone-headset-lapela-15x8mm-cor-bege-_JM",
  },
];

const TourSteps = ({ run, steps }: any) => {
  return null; // Assuma que esta parte está implementada
};

const AudioCard = () => {
  const [run, setRun] = useState(true); // Controla o estado do tour

  const steps = [
    {
      disableBeacon: true,
      target: ".carrousel-container",
      content: "Aqui você pode ver os itens mais urgentes e caros.",
    },
    {
      target: ".item-1",
      content: "Esse é o item de maior prioridade e valor no momento.",
    },
    // Adicione mais etapas conforme necessário
  ];

  return (
    <>
      <div className="bg-transparent w-full size-44 carrousel-container">
        <PatrimonyCarrousel ableTutorial={true} itens={things} />
      </div>
      <TourSteps run={run} steps={steps} />
    </>
  );
};

export default AudioCard;
