interface Props {
 eyebrow?: string;
 title: string;
 center?: boolean;
}

export default function ProjectHeader({
 eyebrow,
 title,
 center = false,
}: Props) {
 return (
  <div
   className={`flex flex-col ${center ? "items-center text-center" : ""}`}
  >
   {eyebrow && (
    <h4 className="text-[16px] leading-6 pb-2 font-medium">{eyebrow}</h4>
   )}

   <h2 className="text-[32px] leading-[44px] font-semibold pb-8">
    {title}
   </h2>
  </div>
 );
}