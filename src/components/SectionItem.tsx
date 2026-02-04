import Separator from "./Separator";

export default function SectionItem({ title, className }: { title: string, className?: string }) {
 return (
  <div className="w-1/2">
   <h1 className={`text-2xl text-[#1A1B1F] mt-10 mb-8 ${className}`}>
    {title}
   </h1>
   <Separator variant="thin" noSpacing />
  </div>
 );
}