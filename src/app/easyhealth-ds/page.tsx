"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function EasyhealthDSPage() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setIsVisible(isScrollingUp || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToInicio = () => {
    inicioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSobre = () => {
    router.push("/?sessao=sobre");
  };

  const scrollToContato = () => {
    router.push("/?sessao=contato");
  };

  return (
    <div ref={inicioRef}>
      <Header
        onClickNome={scrollToInicio}
        onClickSobre={scrollToSobre}
        onClickContato={scrollToContato}
        isVisible={isVisible}
      />

      <div className="flex flex-col w-full max-w-[740px] mx-auto px-6 pt-0 pb-[172px]">
        <h1 className="text-[40px] leading-[56px] !pt-[196px] font-semibold pb-8">
          Easy Health
        </h1>

        <p className="text-xl leading-[28px] text-[#606060] pb-8">
          O Easy Health, desenvolvido pela Essentia Technologies, é um software de gestão clínica que integra agenda, prontuário eletrônico, prescrição digital e outros recursos voltados para médicos e nutricionistas.
        </p>

        <p className="text-xl leading-[28px] text-[#606060] pb-12">
          Meu papel foi criar o primeiro Design System da plataforma, definindo padrões visuais e promovendo a consistência do produto.
        </p>

        <div className="flex items-center justify-center m-auto pb-16">
          <Image
            src="/images/easy-health-image-1.png"
            alt="Tablets e celular com telas do Easy Health"
            width={559}
            height={503}
          />
        </div>

        <Link
          href="https://easy-health.app/landing-page/index.html"
          target="_blank"
          rel="noopener noreferrer" className="flex justify-center">
          <div className="inline-flex items-center justify-center w-[356px] gap-2 px-8 py-3 text-lg border border-[#08080866] text-[#080808] transition-colors bg-none rounded-lg">
            Saiba mais sobre o Easy Health
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>


      <div className="w-full bg-[#F4F4F4] pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Problema</h4>

          <h2 className="text-[32px] leading-[44px] font-bold pb-8">Os primeiros passos</h2>

          <p className="text-xl leading-[28px] text-[#606060] pb-8">
            Ao iniciar na Essentia Technologies, identifiquei alguns problemas no processo criativo que impactavam diretamente a eficiência do time:</p>

          <ol className="list-decimal list-inside pb-8 gap-4 flex flex-col">
            <li className=" text-xl leading-[28px] text-[#606060]">Ausência de uma padronização visual clara.</li>
            <li className=" text-xl leading-[28px] text-[#606060]">Falta de componentização no design.</li>
            <li className=" text-xl leading-[28px] text-[#606060]">Falhas de comunicação entre design e desenvolvimento.</li>
          </ol>

          <p className="text-xl leading-[28px] text-[#606060] pb-8">
            Esses pontos geravam retrabalho recorrente tanto para designers quanto para desenvolvedores.</p>
        </div>
      </div>

      <div className="w-full pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Oportunidade</h4>

          <h2 className="text-[32px] leading-[44px] font-bold pb-8">Propondo a solução</h2>

          <p className="text-xl leading-[28px] text-[#606060] pb-8">
            Tudo mudou com a chegada da primeira hackathon do grupo Essentia. </p>

          <p className="text-xl leading-[28px] text-[#606060] pb-8">
            Vi a oportunidade ideal para mudar esse cenário e sugeri a criação de um novo Design System.
          </p>

          <p className="text-xl leading-[28px] text-[#606060] pb-12">
            Com a base estruturada durante o evento, pude aprimorá-lo nas semanas seguintes, consolidando uma linguagem visual unificada que <strong>atualmente é a base de design do produto.</strong>
          </p>

          <div className="flex items-center justify-center m-auto pb-16">
            <Image
              src="/images/easy-health-image-2.png"
              alt="Laptop e celular com telas do Easy Health"
              width={670}
              height={497}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Apresentação</h4>

          <h2 className="text-[32px] leading-[44px] font-bold pb-8">O novo Design System</h2>

          <p className="text-xl leading-[28px] text-[#606060] pb-12">
            O Design System foi estruturado em duas etapas:</p>

          <div className="grid grid-cols-2 gap-24 pb-8">
            <div>
              <h3 className="text-5xl font-bold pb-4">1.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Fundamentos visuais</h4>
              <p className="text-xl leading-[28px] text-[#606060]">
                Definição da base tipográfica, paleta de cores, espaçamentos ícones e tokens.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold pb-4">2.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Componentes reutilizáveis</h4>
              <p className="text-xl leading-[28px] text-[#606060]">
                Construção de elementos como botões, inputs, modais e grids.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h4 className="text-[16px] leading-6 pb-2">Apresentação</h4>

          <h2 className="text-[32px] leading-[40px] font-bold pb-4">Fundamentos Visuais</h2>

          <p className="text-xl leading-[28px] text-[#606060] text-center pb-20">
            Definição dos elementos visuais como tipografia, paleta de cores, espaçamentos e ícones, organizados em tokens.
          </p>
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/visual-fundamentals-1.png"
            alt="Fundamentos visuais do Easy Health 1"
            width={1202}
            height={824}
          />
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/visual-fundamentals-2.png"
            alt="Fundamentos visuais do Easy Health 2"
            width={1202}
            height={824}
          />
        </div>
      </div>

      <div className="w-full pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h4 className="text-[16px] leading-6 pb-2">Apresentação</h4>

          <h2 className="text-[32px] leading-[40px] font-bold pb-4">Componentes</h2>

          <p className="text-xl leading-[28px] text-[#606060] text-center pb-20">
            Criação de componentes reutilizáveis como botões, inputs, toasts, modais e tooltips.
          </p>
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/components-1.png"
            alt="Componentes do Easy Health 1"
            width={1202}
            height={1352}
          />
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/components-2.png"
            alt="Componentes do Easy Health 2"
            width={1202}
            height={895}
          />
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Resultados</h4>

          <h2 className="text-[32px] leading-[44px] font-bold pb-8">Impacto na produtividade</h2>

          <p className="text-xl leading-[28px] text-[#606060] pb-8">
            Após a implementação do Design System, o tempo de criação de protótipos reduziu significativamente. Com a estruturação dos tokens e componentes na programação, os desenvolvedores passaram a trabalhar com mais eficiência, diminuindo o retrabalho e acelerando as entregas.
          </p>
        </div>
      </div>

      <div className="w-full pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Resultados</h4>

          <h2 className="text-[32px] leading-[44px] font-bold pb-8">Diretrizes do Design</h2>

          <p className="text-xl leading-[28px] text-[#606060] pb-20">
            A última iniciativa que conduzi foi uma apresentação para a toda a equipe, destacando a importância de um design system na consistência visual e organizacional de um produto.
          </p>
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/presentation.png"
            alt="Apresentação do Pedro para a equipe sobre Design System"
            width={1127}
            height={549}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div >
  )
}