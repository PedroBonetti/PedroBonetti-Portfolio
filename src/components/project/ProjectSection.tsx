import { ReactNode } from "react";

interface Props {
  bg?: boolean;
  gray?: boolean;
  center?: boolean;
  py?: string;
  pt?: string;
  pb?: string;
  children: ReactNode;
}

export default function ProjectSection({
  bg = false,
  gray,
  center = false,
  py = "py-[172px]",
  pt,
  pb,
  children,
}: Props) {
  const useGray = gray ?? bg;

  const paddingClass = pt || pb ? `${pt || ""} ${pb || ""}` : py;

  return (
    <div
      className={`w-full ${useGray ? "bg-[#F4F4F4]" : ""} ${paddingClass} ${center ? "flex flex-col items-center" : ""
        }`}
    >
      {children}
    </div>
  );
}
