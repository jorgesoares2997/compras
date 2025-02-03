"use client";

import { useState } from "react";
import axios from "axios";

const FormularioPatrimonio = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    local: "",
    image: "",
    price: "",
    urgency: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const response = await axios.post("http://localhost:8080/api/courses", formData);
      setMessage("Item adicionado com sucesso!");
      setFormData({
        title: "",
        subtitle: "",
        local: "",
        image: "",
        price: "",
        urgency: "",
        link: "",
      });
    } catch (error) {
      setMessage("Erro ao adicionar item. Tente novamente.");
      console.error("Erro ao inserir os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Adicionar Patrimônio</h2>
      {message && <p className="text-center text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input  type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="subtitle" placeholder="Subtítulo" value={formData.subtitle} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="local" placeholder="Local" value={formData.local} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="url" name="image" placeholder="URL da Imagem" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Preço" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="urgency" placeholder="Urgência" value={formData.urgency} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="url" name="link" placeholder="Link" value={formData.link} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded" >
          {loading ? "Enviando..." : "Adicionar"}
        </button>
      </form>
    </div>
  );
};

export default FormularioPatrimonio;