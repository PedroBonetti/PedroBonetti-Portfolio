import Link from "next/link";

export default function ProjectCTA({
 href,
 label,
}: {
 href: string;
 label: string;
}) {
 return (
  <Link
   href={href}
   target="_blank"
   rel="noopener noreferrer"
   className="flex justify-center"
  >
   <div
    className="inline-flex items-center justify-center w-[356px] gap-2 px-8 py-3 text-lg
border border-[#08080866] text-[#080808] rounded-lg
transition-colors duration-200
hover:bg-black hover:text-white hover:border-black"
   >
    {label}
    <svg
     width="20"
     height="20"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    >
     <path d="M5 12h14" />
     <path d="m12 5 7 7-7 7" />
    </svg>
   </div>
  </Link>
 );
}