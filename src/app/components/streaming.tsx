"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PatrimonyCarrousel from "./CarrousseulItems";


const StreamingCard = () => {
  const [streaming, setStreaming] = useState([]);

  useEffect(() => {
    // Carregar os dados do JSON via Axios
    const fetchStreaming = async () => {
      try {
        const response = await axios.get("/streaming.json"); // Certifique-se de que o arquivo JSON está em `public/streaming.json`
        setStreaming(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchStreaming();
  }, []);

  return (
    <div className="bg-transparent w-full size-44 carrousel-container">
        {streaming.length > 0 ? (
          <PatrimonyCarrousel  itens={streaming} />
        ) : (
          <p>Carregando itens...</p>
        )}
      </div>
  );
};

export default StreamingCard;
