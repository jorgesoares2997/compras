"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PatrimonyCarrousel from "./CarrousseulItems";
import Image from "next/image";

const CarouselItem = ({
  id,
  title,
  subtitle,
  local,
  image,
  price,
  urgency,
  link,
  mostUrgent,
}: any) => (
  <div className={`item-${id}`}>
    <Image src={image} alt={title} height={100} width={100} />
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

const TourSteps = ({ run, steps }: any) => {
  return null;
};

const AudioCard = () => {
  const [run, setRun] = useState(true);
  const [things, setThings] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-compras.onrender.com/api/courses")
      .then((response) => {
        setThings(response.data || []);
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados:", error);
        setThings([]);
      });
  }, []);

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
  ];

  return (
    <>
      <div className="bg-transparent w-full size-44 carrousel-container">
        {things.length > 0 ? (
          <PatrimonyCarrousel ableTutorial={true} itens={things} />
        ) : (
          <div className="flex justify-center items-center h-44">
            <div
              className="animate-spin rounded-full h-10 w-10 border-2"
              style={{
                borderImage: "linear-gradient(to right, blue, purple) 1",
              }}
            ></div>
          </div>
        )}
      </div>
      <TourSteps run={run} steps={steps} />
    </>
  );
};

export default AudioCard;
