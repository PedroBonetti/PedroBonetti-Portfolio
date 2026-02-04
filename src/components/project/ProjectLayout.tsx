"use client";

import { ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/project/ProjectFooter";
import { useHeaderScroll } from "./useHeaderScroll";

interface Props {
 children: ReactNode;
}

export default function ProjectLayout({ children }: Props) {
 const topRef = useRef<HTMLDivElement | null>(null);
 const router = useRouter();
 const isVisible = useHeaderScroll();


 return (
  <div>
   <Header
    onClickNome={() => router.push("/")}
    onClickSobre={() => router.push("/?sessao=sobre")}
    onClickContato={() => router.push("/?sessao=contato")}
    isVisible={isVisible}
   />

   <div ref={topRef}>{children}</div>

   <div className="w-full bg-[#F4F4F4] py-14">
    <Footer />
   </div>
  </div>
 );
}