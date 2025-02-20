"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrashAlt,
  FaPlusCircle,
  FaRegWindowClose,
} from "react-icons/fa"; // Ícones importados

interface Comment {
  id: number;
  author: string;
  text: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const API_URL = "http://localhost:8080/comments";

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setComments(data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editId ? axios.put : axios.post;
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    try {
      const { data } = await method(url, { author, text });
      setComments(
        editId
          ? comments.map((c) => (c.id === editId ? data : c))
          : [...comments, data]
      );
      setAuthor("");
      setText("");
      setEditId(null);
    } catch (error) {
      console.error("Erro ao salvar comentário:", error);
    }
  };

  const handleEdit = (comment: Comment) => {
    setEditId(comment.id);
    setAuthor(comment.author);
    setText(comment.text);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este comentário?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("Erro ao excluir comentário:", error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Comentários</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="border p-2 w-full mb-2 rounded"
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          className="border p-2 w-full mb-2 rounded"
          placeholder="Comentário"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editId ? <FaEdit /> : <FaPlusCircle />}{" "}
          {/* Ícone do botão de enviar ou atualizar */}
        </button>
        {editId && (
          <button
            type="button"
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => {
              setEditId(null);
              setAuthor("");
              setText("");
            }}
          >
            <FaRegWindowClose /> {/* Ícone de cancelar */}
          </button>
        )}
      </form>
      <div className="h-full m-auto bg-[#f3f3f3] border-2 border-black p-2">
        <ul>
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="border-b p-2 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{comment.author}</p>
                <p>{comment.text}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  onClick={() => handleEdit(comment)}
                >
                  <FaEdit /> {/* Ícone de editar */}
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(comment.id)}
                >
                  <FaTrashAlt /> {/* Ícone de excluir */}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
