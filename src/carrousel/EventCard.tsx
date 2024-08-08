"use client";
import { useTranslations } from "next-intl";
import Carrousel from "@/components/EventCards/CarrosseulCards";
import events1 from "@/assets/images/events1.svg";
import events2 from "@/assets/images/events2.svg";
import events3 from "@/assets/images/events3.svg";
import events4 from "@/assets/images/events4.svg";

const cards = [
  {
    id: 1,
    title: "web3card.title",
    description: "web3card.description",
    image: events1,
    date: "web3card.date",
    online: "web3card.online",
  },
  {
    id: 2,
    title: "chaincard.title",
    description: "chaincard.description",
    image: events2,
    date: "chaincard.date",
    online: "chaincard.online",
  },
  {
    id: 3,
    title: "deficard.title",
    description: "deficard.description",
    image: events3,
    date: "deficard.date",
    online: "deficard.online",
  },
  {
    id: 4,
    title: "nftcard.title",
    description: "nftcard.description",
    image: events4,
    date: "nftcard.date",
    online: "nftcard.online",
  },
];

export const EventsCardsCarrouseul = () => {
  const t = useTranslations("Events");

  return (
    <div className="max-w-[1280px] m-auto">
      
      <Carrousel itens={cards} />
    </div>
  );
};
