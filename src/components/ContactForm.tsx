"use client";

import { useState } from "react";

export default function ContactForm() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = `Mensagem de ${formData.name} - Portfólio`;
  const body = `${formData.message}`;

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=pedro_bonetti@hotmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
 };

 return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-8">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col">
     <label htmlFor="name" className="text-2xl opacity-55">Nome</label>
     <input
      id="name"
      type="text"
      placeholder="Digite seu nome"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="border border-gray-300 rounded-lg px-4 py-2 text-2xl text-[--var(--foreground)] placeholder:text-gray-400 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
     />
    </div>
    <div className="flex flex-col">
     <label htmlFor="email" className="text-2xl opacity-55">E-mail</label>
     <input
      id="email"
      type="email"
      placeholder="Digite seu e-mail"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="border border-gray-300 rounded-lg px-4 py-2 text-2xl text-[--var(--foreground)] placeholder:text-gray-400 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
     />
    </div>
   </div>

   <div className="flex flex-col">
    <label htmlFor="message" className="text-2xl opacity-55">Mensagem</label>
    <textarea
     id="message"
     placeholder="Escreva uma mensagem"
     rows={10}
     value={formData.message}
     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
     className="border border-gray-300 rounded-lg p-4 text-2xl text-[--var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BDC1C8]"
    ></textarea>
   </div>

   <button
    type="submit"
    className="bg-black rounded-full text-white py-3 mt-3 text-lg w-full"
   >
    Enviar Mensagem
   </button>
  </form>
 );
}
