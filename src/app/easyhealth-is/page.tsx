"use client";

import Header from "@/components/Header";
import ProjectLayout from "@/components/project/ProjectLayout";
import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectCTA from "@/components/project/ProjectCTA";
import CenteredImage from "@/components/project/CenteredImage";
import InsightBlock from "@/components/project/InsightBlock";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      <div ref={topRef} className="flex flex-col w-full max-w-[740px] mx-auto px-6 pt-0 pb-[142px]">
        <h1 className="text-[40px] leading-[56px] !pt-[196px] font-bold pb-8">
          Loja de Injetáveis
        </h1>

        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
          A loja de injetáveis do Essentia Group é um módulo integrado ao Easy Health, software de gestão clínica utilizado por profissionais de saúde, que permite a compra de medicamentos diretamente na plataforma.
        </p>

        <p className="text-xl leading-[28px] text-[#1A1B1F]">
          Neste projeto, atuei na pesquisa, definição do problema e construção da interface de um painel administrativo criado para sustentar a operação clínica e comercial da loja.
        </p>
      </div>

      <div className="relative w-full h-[425px] mb-[156px]">
        <Image
          src="/images/is/background-ampolas.svg"
          alt="Ampolas Essentia"
          fill
          className="object-cover"
          priority
        />
      </div>

      <ProjectSection pb="0">
        <ProjectContainer>
          <ProjectHeader eyebrow="Contexto" title="Entendendo o cenário" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O Easy Health é um software utilizado por médicos para gestão de protocolos clínicos e prescrição de tratamentos. Dentro da plataforma, existe a loja de injetáveis do <strong>Essentia Group</strong>, onde profissionais de saúde realizam a compra de medicamentos diretamente pelo sistema.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Com o crescimento da loja e o aumento da complexidade clínica e operacional, tornou-se necessária a criação de um painel administrativo capaz de gerenciar o catálogo de injetáveis, suas interações clínicas, a criação de protocolos e o controle de usuários da plataforma.
          </p>
        </ProjectContainer>

        <ProjectContainer className="py-[172px]">
          <ProjectHeader eyebrow="Problema" title="Quando a operação deixa de escalar" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A loja de injetáveis do Grupo Essentia passou a operar dentro do Easy Health como um componente crítico do produto, lidando com decisões clínicas, regras de compatibilidade entre medicamentos e controle de acesso de usuários.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Esse cenário gerava riscos clínicos, dependência de conhecimento tácito e tornava impossível escalar a loja com segurança. Pequenas mudanças exigiam alto esforço operacional e aumentavam a chance de erro.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            Diante desse contexto, a criação de um painel administrativo passou a ser uma necessidade estrutural para garantir controle, segurança e crescimento sustentável da operação.
          </p>
        </ProjectContainer>

        <ProjectContainer className="pb-[172px]">
          <ProjectHeader eyebrow="Pesquisa" title="Por trás da operação" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Para garantir que o painel administrativo resolvesse problemas reais da operação, a pesquisa teve como foco compreender o funcionamento atual da loja, suas limitações estruturais e as regras que orientam decisões clínicas e operacionais.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O processo combinou entrevistas, mapeamento de fluxos e validação com stakeholders, servindo como base direta para a definição da arquitetura do sistema e das telas do novo admin.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            Diante desse contexto, a criação de um painel administrativo passou a ser uma necessidade estrutural para garantir controle, segurança e crescimento sustentável da operação.
          </p>
        </ProjectContainer>

        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Pesquisa"
            title="Fluxo Operacional"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Foram realizadas entrevistas com 15 colaboradores diretamente envolvidos na operação da loja, com o objetivo de mapear o fluxo atual, identificar pontos de dor e oportunidades de melhoria.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/fluxograma-operacional.svg"
          alt="Fluxograma Operacionap - Pedidos Easy"
          width={1238}
          height={388}
          pb="pb-20"
        />
      </ProjectSection>

      <ProjectSection pt="pt-[92px]" pb="pb-[92px]">
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Pesquisa"
            title="Mapeamento"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Com base no fluxo operacional, foi definido o escopo do novo painel administrativo, com seus principais módulos e funcionalidades. Esse direcionamento serviu para alinhar expectativas e validar decisões com os stakeholders.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/mapeamento.svg"
          alt="Mapeamento"
          width={853}
          height={798}
          pb="pb-20"
        />
      </ProjectSection>


      <ProjectSection pt="0">
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Pesquisa"
            title="Fluxo de Regras"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Com as telas definidas, foi realizado o detalhamento individual de cada interface, mapeando objetivos, elementos de interação, ações, botões e regras de negócio.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/fluxo-de-regras.svg"
          alt="Fluxo de Regras"
          width={1150}
          height={866}
          pb="pb-[172px]"
        />
      </ProjectSection>

      <ProjectSection bg>
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Prototipação"
            title="Construção da interface"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Com a estrutura do sistema definida e validada, o foco passou a ser a construção da experiência visual do sistema.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/construcao-da-interface.svg"
          alt="Laptop com tela de login do Admin de Injetáveis"
          width={736}
          height={424}
          pb="0"
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Prototipação"
            title="8-Point Grid"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            As telas foram construídas seguindo o padrão de <strong>8-Point Grid</strong>, garantindo alinhamento, ritmo visual e escalabilidade da interface.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/8-point-grid.svg"
          alt="Laptop com tela de dashboard do Injetáveis"
          width={902}
          height={579}
          pb="0"
        />
      </ProjectSection>

      <ProjectSection bg>
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Prototipação"
            title="Design System"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            Foi utilizado o Design System do Easy Health para garantir consistência com o produto existente e reduzir a curva de aprendizado por meio de padrões já familiares aos usuários.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/design-system.svg"
          alt="Laptop com tela de usuários do admin de Injetáveis"
          width={954}
          height={449}
          pb="0"
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectContainer className="flex items-center flex-col">
          <ProjectHeader
            eyebrow="Prototipação"
            title="Evolução Contínua"
            center
          />

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            O projeto segue em evolução, com a expansão gradual de funcionalidades como módulos de relatórios gerenciais e orçamentos, acompanhando o crescimento do produto e da operação.
          </p>
        </ProjectContainer>

        <CenteredImage
          src="/images/is/evolucao-continua.svg"
          alt="Laptop com tela de produtos de Injetáveis"
          width={945}
          height={560}
          pb="0"
        />
      </ProjectSection>

      <div className="w-full max-w-[740px] mx-auto px-6 flex items-center justify-between mb-[118px]">
        <button
          className="bg-[#080808] h-8 w-[88px] rounded-md text-white font-medium inline-flex items-center justify-center gap-1"
          onClick={scrollToTop}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
          Topo
        </button>

        <Link href="/easyhealth-am">
          <div className="bg-[#080808] h-8 px-4 rounded-md text-white font-medium inline-flex items-center justify-center gap-1">
            Ver próximo projeto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </ProjectLayout >
  );
}
