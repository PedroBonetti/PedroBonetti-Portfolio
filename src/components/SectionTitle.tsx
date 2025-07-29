export default function SectionTitle({ title, className }: { title: string, className?: string }) {
 return (
  <h1 className={`text-5xl py-10 self-start font-medium w-max ${className}`}>
   {title}
  </h1>
 );
}