interface Props {
 index: number;
 title: string;
 description: React.ReactNode;
}

export default function InsightBlock({
 index,
 title,
 description,
}: Props) {
 return (
  <div>
   <h3 className="text-5xl font-bold pb-4">{index}.</h3>
   <h4 className="text-[32px] leading-[44px] font-semibold pb-8">
    {title}
   </h4>
   <div className="text-xl leading-[28px] text-[#1A1B1F]">
    {description}
   </div>
  </div>
 );
}