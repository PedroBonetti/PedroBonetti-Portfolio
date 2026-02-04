import { HTMLAttributes, ReactNode } from "react";

type ProjectContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  center?: boolean;
};

export default function ProjectContainer({
  children,
  className,
  center,
  ...props
}: ProjectContainerProps) {
  return (
    <div
      {...props}
      className={`w-full max-w-[740px] mx-auto px-6 ${center ? "flex flex-col items-center text-center" : ""
        } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
