type SeparatorProps = {
 variant?: 'thin';
 noSpacing?: boolean;
};

export default function Separator({ variant, noSpacing }: SeparatorProps) {
 const borderColor = variant === 'thin' ? 'border-[#BDC1C8]' : 'border-[#1A1B1F]';
 const spacing = noSpacing ? '' : 'mt-[88px]';

 return (
  <div className={`border-b w-full ${borderColor} ${spacing}`}></div>
 );
}