"use client";

import Header from "@/components/Header";
import ProjectLayout from "@/components/project/ProjectLayout";
import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectCTA from "@/components/project/ProjectCTA";
import CenteredImage from "@/components/project/CenteredImage";
import InsightBlock from "@/components/project/InsightBlock";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function EasyhealthDSPage() {
  const topRef = useRef<HTMLDivElement | null>(null);
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

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInicio = () => {
    router.push("/");
  };

  const scrollToSobre = () => {
    router.push("/?sessao=sobre");
  };

  const scrollToContato = () => {
    router.push("/?sessao=contato");
  };

  return (
    <ProjectLayout>
      <Header
        onClickNome={scrollToInicio}
        onClickSobre={scrollToSobre}
        onClickContato={scrollToContato}
        isVisible={isVisible}
      />

      {/* HERO / INTRO */}
      <div ref={topRef} className="flex flex-col w-full max-w-[740px] mx-auto px-6 pt-0 pb-[172px]">
        <h1 className="text-[40px] leading-[56px] !pt-[196px] font-medium pb-8">
          Easy Health
        </h1>

        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
          O Easy Health, desenvolvido pela Essentia Technologies, é um software de gestão clínica que integra agenda, prontuário eletrônico, prescrição digital e outros recursos voltados para médicos e nutricionistas.
        </p>

        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
          Meu papel foi criar o primeiro Design System da plataforma, definindo padrões visuais e promovendo a consistência do produto.
        </p>

        <CenteredImage
          src="/images/ds/easy-health-image-1.png"
          alt="Tablets e celular com telas do Easy Health"
          width={559}
          height={503}
          pb="pb-16"
        />

        <ProjectCTA
          href="https://easy-health.app/landing-page/index.html"
          label="Saiba mais sobre o Easy Health"
        />
      </div>

      {/* PROBLEMA */}
      <ProjectSection bg>
        <ProjectContainer>
          <ProjectHeader eyebrow="Problema" title="Os primeiros passos" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Ao iniciar na Essentia Technologies, identifiquei alguns problemas no processo criativo que impactavam diretamente a eficiência do time:
          </p>

          <ol className="list-decimal list-inside pb-8 gap-4 flex flex-col">
            <li className="text-xl leading-[28px] text-[#1A1B1F]">Ausência de uma padronização visual clara.</li>
            <li className="text-xl leading-[28px] text-[#1A1B1F]">Falta de componentização no design.</li>
            <li className="text-xl leading-[28px] text-[#1A1B1F]">Falhas de comunicação entre design e desenvolvimento.</li>
          </ol>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Esses pontos geravam retrabalho recorrente tanto para designers quanto para desenvolvedores.
          </p>
        </ProjectContainer>
      </ProjectSection>

      {/* OPORTUNIDADE */}
      <ProjectSection>
        <ProjectContainer>
          <ProjectHeader eyebrow="Oportunidade" title="Propondo a solução" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Tudo mudou com a chegada da primeira hackathon do grupo Essentia.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Vi a oportunidade ideal para mudar esse cenário e sugeri a criação de um novo Design System.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            Com a base estruturada durante o evento, pude aprimorá-lo nas semanas seguintes, consolidando uma linguagem visual unificada que <strong className="font-semibold">atualmente é a base de design do produto.</strong>
          </p>

          <CenteredImage
            src="/images/ds/easy-health-image-2.png"
            alt="Laptop e celular com telas do Easy Health"
            width={670}
            height={497}
            pb="pb-16"
          />
        </ProjectContainer>
      </ProjectSection>

      {/* APRESENTAÇÃO - DS */}
      <ProjectSection bg>
        <ProjectContainer>
          <ProjectHeader eyebrow="Apresentação" title="O novo Design System" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            O Design System foi estruturado em duas etapas:
          </p>

          <div className="grid grid-cols-2 gap-24 pb-8">
            <InsightBlock
              index={1}
              title="Fundamentos visuais"
              description="Definição da base tipográfica, paleta de cores, espaçamentos, ícones e tokens."
            />

            <InsightBlock
              index={2}
              title="Componentes reutilizáveis"
              description="Construção de elementos como botões, inputs, modais e grids."
            />
          </div>
        </ProjectContainer>
      </ProjectSection>

      {/* FUNDAMENTOS VISUAIS */}
      <ProjectSection>
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Apresentação"
            title="Fundamentos Visuais"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Definição dos elementos visuais como tipografia, paleta de cores, espaçamentos e ícones, organizados em tokens.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/ds/visual-fundamentals-1.png"
          alt="Fundamentos visuais do Easy Health 1"
          width={1202}
          height={824}
          pb="pb-20"
        />

        <CenteredImage
          src="/images/ds/visual-fundamentals-2.png"
          alt="Fundamentos visuais do Easy Health 2"
          width={1202}
          height={824}
          pb="pb-20"
        />
      </ProjectSection>

      {/* COMPONENTES */}
      <ProjectSection pt="0">
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Apresentação"
            title="Componentes"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Criação de componentes reutilizáveis como botões, inputs, toasts, modais e tooltips.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/ds/components-1.png"
          alt="Componentes do Easy Health 1"
          width={1202}
          height={1352}
          pb="pb-20"
        />

        <CenteredImage
          src="/images/ds/components-2.png"
          alt="Componentes do Easy Health 2"
          width={1202}
          height={895}
          pb="pb-20"
        />
      </ProjectSection>

      {/* RESULTADOS - PRODUTIVIDADE */}
      <ProjectSection bg>
        <ProjectContainer>
          <ProjectHeader eyebrow="Resultados" title="Impacto na produtividade" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Após a implementação do Design System, o tempo de criação de protótipos reduziu significativamente. Com a estruturação dos tokens e componentes na programação, os desenvolvedores passaram a trabalhar com mais eficiência, diminuindo o retrabalho e acelerando as entregas.
          </p>
        </ProjectContainer>
      </ProjectSection>

      {/* RESULTADOS - DIRETRIZES */}
      <ProjectSection>
        <ProjectContainer>
          <ProjectHeader eyebrow="Resultados" title="Diretrizes do Design" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-20">
            A última iniciativa que conduzi foi uma apresentação para toda a equipe, destacando a importância de um design system na consistência visual e organizacional de um produto.
          </p>
        </ProjectContainer>

        <div className="flex flex-col items-center justify-center">
          <CenteredImage src="/images/ds/presentation.png" className="rounded-2xl" alt="Pedro e Luiz" width={1127} height={549} pb="0" />


          <div className="w-full max-w-[740px] mx-auto px-6 flex items-center justify-between pt-[118px]">
            <button
              className="bg-[#080808] h-8 w-[88px] rounded-md text-white font-semibold inline-flex items-center justify-center gap-1"
              onClick={scrollToTop}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
              Topo
            </button>

            <Link href="/easyhealth-am">
              <div className="bg-[#080808] h-8 px-4 rounded-md text-white font-semibold inline-flex items-center justify-center gap-1">
                Ver próximo projeto
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
