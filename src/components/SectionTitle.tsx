export default function SectionTitle({ title, className }: { title: string, className?: string }) {
 return (
  <h1 className={`text-5xl pt-8 pb-10 self-start font-semibold w-max leading-[56px] ${className}`}>
   {title}
  </h1>
 );
}