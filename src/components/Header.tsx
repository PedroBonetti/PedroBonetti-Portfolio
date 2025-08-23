import Link from "next/link";

type HeaderProps = {
 onClickSobre: () => void;
 onClickContato: () => void;
};

export default function Header({ onClickSobre, onClickContato }: HeaderProps) {
 return (
  <header className="w-fit rounded-full py-6 px-10 flex justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05),_0_-2px_4px_-1px_rgba(0,0,0,0.03)]">
   <nav>
    <ul className="flex flex-row justify-center items-center gap-10">
     <li className="text-xl font-medium">Pedro Bonetti</li>
     <li className="text-xl hover:cursor-pointer font-medium" onClick={onClickSobre}>
      Sobre
     </li>
     <li className="text-xl hover:cursor-pointer font-medium">
      <Link href="/resume.pdf">Currículo</Link>
     </li>
     <li className="text-xl hover:cursor-pointer font-medium">
      <Link
       href="https://www.linkedin.com/in/pedrobonetti/"
       target="_blank"
       rel="noopener noreferrer"
      >
       Linkedin
      </Link>
     </li>
     <li className="text-xl hover:cursor-pointer font-medium" onClick={onClickContato}>
      Contato
     </li>
    </ul>

   </nav>
  </header>
 );
}
