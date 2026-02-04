import { FaBehance, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
 return (
  <div className="flex justify-center items-center gap-[56px]">
   <a href="https://wa.me/554899278593" target="_blank" className="p-3 bg-black rounded-full text-white flex items-center justify-center">
    <FaWhatsapp size={32} />
   </a>

   <a href="https://www.linkedin.com/in/pedrobonetti" target="_blank" className="p-3 bg-black rounded-full text-white flex items-center justify-center">
    <FaLinkedinIn size={32} />
   </a>

   <a href="https://www.behance.net/pedrohbonetti" target="_blank" className="p-3 bg-black rounded-full text-white flex items-center justify-center">
    <FaBehance size={32} />
   </a>
  </div>
 )
}