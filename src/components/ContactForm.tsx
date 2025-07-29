"use client";

import { useState } from "react";

export default function ContactForm() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });

 const [loading, setLoading] = useState(false);
 const [feedback, setFeedback] = useState("");
 const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setFeedback("");
  setIsSuccess(null);

  try {
   const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
   });

   const data = await res.json();

   if (res.ok) {
    setFeedback(data.message);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
   } else {
    setFeedback(data.error || "Erro ao enviar mensagem.");
    setIsSuccess(false);
   }
  } catch {
   setFeedback("Erro na comunicação com o servidor.");
   setIsSuccess(false);
  } finally {
   setLoading(false);
  }
 };

 return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-8">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col">
     <label htmlFor="name" className="text-2xl opacity-55">
      Nome
     </label>
     <input
      id="name"
      type="text"
      placeholder="Digite seu nome"
      value={formData.name}
      onChange={(e) =>
       setFormData({ ...formData, name: e.target.value })
      }
      className="border border-gray-300 rounded-lg px-4 py-2 text-2xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
      required
     />
    </div>
    <div className="flex flex-col">
     <label htmlFor="email" className="text-2xl opacity-55">
      E-mail
     </label>
     <input
      id="email"
      type="email"
      placeholder="Digite seu e-mail"
      value={formData.email}
      onChange={(e) =>
       setFormData({ ...formData, email: e.target.value })
      }
      className="border border-gray-300 rounded-lg px-4 py-2 text-2xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
      required
     />
    </div>
   </div>

   <div className="flex flex-col">
    <label htmlFor="message" className="text-2xl opacity-55">
     Mensagem
    </label>
    <textarea
     id="message"
     placeholder="Escreva uma mensagem"
     rows={10}
     value={formData.message}
     onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
     }
     className="border border-gray-300 rounded-lg p-4 text-2xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
     required
    ></textarea>
   </div>

   <button
    type="submit"
    className="bg-black rounded-full text-white py-3 mt-3 text-lg w-full disabled:opacity-50"
    disabled={loading}
   >
    {loading ? "Enviando..." : "Enviar Mensagem"}
   </button>

   {feedback && (
    <p
     className={`mt-4 text-center ${isSuccess ? "text-green-600" : "text-red-600"
      }`}
    >
     {feedback}
    </p>
   )}
  </form>
 );
}
