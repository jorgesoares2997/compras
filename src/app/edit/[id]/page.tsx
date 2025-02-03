"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"; 


const EditForm = () => {
  const router = useRouter();
  const { id } = useParams(); // Obtém o ID da URL
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    local: "",
    image: "",
    price: "",
    urgency: "",
    link: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Carregar os dados do item ao montar o componente
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/courses/${id}`) // Sua API para buscar os dados do item
        .then((response) => {
          setFormData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setMessage("Erro ao carregar os dados. Tente novamente.");
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e: { target: { name: string; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.put(
        `http://localhost:8080/api/courses/${id}`,
        formData
      );
      setMessage("Item editado com sucesso!");
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
      setMessage("Erro ao editar item. Tente novamente.");
      console.error("Erro ao editar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Editar Patrimônio</h2>
      {message && <p className="text-center text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtítulo"
          value={formData.subtitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="local"
          placeholder="Local"
          value={formData.local}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="image"
          placeholder="URL da Imagem"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="urgency"
          placeholder="Urgência"
          value={formData.urgency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded">
          {loading ? "Enviando..." : "Salvar Alterações"}
        </button>
      </form>
    </div>
  );
};

export default EditForm;

function useparams(): { id: any; } {
    throw new Error("Function not implemented.");
}
