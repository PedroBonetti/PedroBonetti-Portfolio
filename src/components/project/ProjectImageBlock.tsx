import Image from "next/image";

interface Props {
 src: string;
 alt: string;
 width: number;
 height: number;
 pb?: string;
 rounded?: boolean;
 className?: string;
}

export default function ProjectImageBlock({
 src,
 alt,
 width,
 height,
 pb = "pb-20",
 rounded = false,
 className = "",
}: Props) {
 return (
  <div className={`flex items-center justify-center p-auto ${pb}`}>
   <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={`${rounded ? "rounded-2xl" : ""} ${className}`}
   />
  </div>
 );
}
