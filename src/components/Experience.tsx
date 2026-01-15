import Separator from "./Separator";

export interface ExperienceProps {
 title: string;
 subTitle: string;
 timeSpan: string;
}

export default function Experience({ title, subTitle, timeSpan }: ExperienceProps) {
 return (
  <div>
   <h2 className="text-2xl font-medium mb-2">{title}</h2>
   <p className="text-2xl mb-6 w-max">{subTitle}</p>
   <p className="text-lg text-[#606060] mb-8">{timeSpan}</p>
   <Separator variant="thin" noSpacing />
  </div>
 )

}