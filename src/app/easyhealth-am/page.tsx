"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Header from "@/components/Header";

import ProjectLayout from "@/components/project/ProjectLayout";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectCTA from "@/components/project/ProjectCTA";
import CenteredImage from "@/components/project/CenteredImage";
import InsightBlock from "@/components/project/InsightBlock";

export default function EasyhealthAMPage() {
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

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToInicio = () => router.push("/");
  const scrollToSobre = () => router.push("/?sessao=sobre");
  const scrollToContato = () => router.push("/?sessao=contato");

  return (
    <ProjectLayout>
      <Header
        onClickNome={scrollToInicio}
        onClickSobre={scrollToSobre}
        onClickContato={scrollToContato}
        isVisible={isVisible}
      />

      {/* HERO */}
      <div ref={topRef} className="flex flex-col w-full max-w-[740px] mx-auto px-6 pt-0 pb-[172px]">
        <h1 className="text-[40px] leading-[56px] !pt-[196px] font-medium pb-8">Easy Health</h1>
        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
          O Easy Health, desenvolvido pela Essentia Technologies, é um software de gestão clínica voltado para médicos e nutricionistas.
        </p>
        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
          Meu papel foi conduzir uma pesquisa de mercado para entender o comportamento dos usuários e orientar decisões estratégicas sobre o modelo de vendas do produto.
        </p>

        <CenteredImage
          src="/images/am/easy8.png"
          alt="Tablets e celular com telas do Easy Health"
          width={680}
          height={623}
          pb="pb-16"
        />

        <ProjectCTA
          href="https://easy-health.app/landing-page/index.html"
          label="Saiba mais sobre o Easy Health"
        />
      </div>

      {/* CONTEXTO */}
      <ProjectSection pt="0">
        <ProjectContainer>
          <ProjectHeader eyebrow="Contexto" title="Um olhar sobre o produto" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O Easy Health é um software de gestão clínica B2B por assinatura, utilizado por médicos e profissionais da saúde para organizar agenda, prontuário eletrônico, prescrições e rotinas administrativas.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Por se tratar de um produto voltado a um público altamente especializado, com baixo tempo disponível e alto poder de decisão, a forma como o software é apresentado e vendido impacta diretamente a percepção de valor e a conversão.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F]">
            Este projeto parte da necessidade de compreender como profissionais de saúde avaliam, comparam e decidem a contratação de um software de gestão clínica, e como o modelo de aquisição poderia ser ajustado para se alinhar melhor a esse comportamento.
          </p>
        </ProjectContainer>
      </ProjectSection>

      {/* PROBLEMA */}
      <ProjectSection>
        <ProjectContainer>
          <ProjectHeader eyebrow="Problema" title="Modelo de aquisição ineficiente" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O modelo de aquisição vigente permitia que médicos acessassem o Easy Health de forma autônoma, conhecessem os planos, iniciassem um teste gratuito ou solicitassem contato com a equipe comercial ao longo da jornada.
          </p>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Embora flexível, esse formato distribuía o usuário entre diferentes caminhos e não conduzia de forma clara a decisão de compra.
          </p>
          <p className="text-xl leading-[28px] text-[#1A1B1F]">
            Como resultado, o processo apresentava baixa previsibilidade de conversão e não refletia o comportamento de compra do usuário, que tende a valorizar uma abordagem mais consultiva e orientada por relacionamento humano.
          </p>
        </ProjectContainer>
      </ProjectSection>

      {/* PESQUISA */}
      <ProjectSection pt="0">
        <ProjectContainer>
          <ProjectHeader eyebrow="Pesquisa" title="Estrutura metodológica" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A pesquisa foi estruturada a partir da metodologia <strong className="font-semibold">Double Diamond</strong>.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            O objetivo foi compreender o problema em profundidade, identificar padrões de comportamento e convergir aprendizados que apoiassem decisões estratégicas sobre o modelo de aquisição do produto.
          </p>

          <div className="grid grid-cols-2 gap-24 pb-8">
            <InsightBlock
              index={1}
              title="Descoberta"
              description={
                <>
                  <p className="pb-8">
                    A fase de Descoberta teve como foco compreender o produto, o mercado e o modelo de aquisição atual.
                  </p>
                  <p>Métodos de pesquisa: Matriz CSD, Benchmarking e Jornada do Usuário.</p>
                </>
              }
            />

            <InsightBlock
              index={2}
              title="Definição"
              description={
                <>
                  <p className="pb-8">
                    Na fase de Definição, os dados da Descoberta foram analisados e organizados para identificar oportunidades de melhoria.
                  </p>
                  <p>Métodos de pesquisa: Personas e Priorização MoSCoW.</p>
                </>
              }
            />
            <InsightBlock index={3} title="Solução" description="As oportunidades identificadas na pesquisa foram traduzidas em decisões estratégicas de produto, orientadas diretamente pelos dados e aprendizados da pesquisa." />
            <InsightBlock index={4} title="Entrega" description="A fase final teve como foco validar, junto aos usuários, as decisões de produto definidas, garantindo que as soluções propostas resolvessem os problemas identificados." />
          </div>
        </ProjectContainer>
      </ProjectSection>

      {/* MATRIZ CSD */}
      <ProjectSection>
        <ProjectContainer center>
          <ProjectHeader eyebrow="Descoberta" title="Matriz CSD" center />
          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            A Matriz CSD foi utilizada para mapear certezas, suposições e dúvidas a partir de entrevistas com os times de Customer Success e Vendas, que atuam diretamente na relação com os usuários.
          </p>
          <CenteredImage src="/images/am/matriz-csd.svg" alt="Matriz CSD do Easy Health" width={682} height={759} pb="0" />
        </ProjectContainer>
      </ProjectSection>

      {/* BENCHMARKING */}
      <ProjectSection pt="0">
        <ProjectContainer>
          <ProjectHeader eyebrow="Descoberta" title="Benchmarking" />
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-20">
            Foi realizado um benchmarking com concorrentes diretos para entender como o mercado estrutura seus modelos de aquisição, venda e precificação em softwares de gestão clínica.
          </p>
          <CenteredImage src="/images/am/benchmark.svg" alt="Benchmarking do Easy Health" width={1127} height={549} />

          {[
            "Acessos gratuitos, quando disponíveis, são altamente limitados e funcionam mais como porta de entrada para o contato comercial do que como um modelo de uso autônomo.",
            "A maior parte das compras acontece por meio de contato direto com vendedores, enquanto fluxos totalmente autônomos são pouco utilizados.",
            "Os planos são simples e flexíveis, com possibilidade de customização conforme a realidade da clínica.",
            "O modelo de precificação considera número de licenças personalizadas, adequadas ao porte e à estrutura da clínica do médico.",
          ].map((text, i, arr) => (
            <div
              key={i}
              className={i !== arr.length - 1 ? "pb-10" : ""}
            >
              <h4 className="text-xl font-semibold pb-4">{`# Insight ${i + 1}`}</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">{text}</p>
            </div>
          ))}

        </ProjectContainer>
      </ProjectSection>

      {/* JORNADA DO USUÁRIO */}
      <ProjectSection>
        <ProjectContainer>
          <ProjectHeader eyebrow="Descoberta" title="Jornada do usuário" />
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-20">
            A Jornada do Usuário foi mapeada para entender como as personas percorriam o processo de aquisição atual e identificar pontos de fricção e oportunidades de melhoria.
          </p>
          <CenteredImage src="/images/am/jornada-do-usuario.svg" alt="Jornada do Usuário Easy Health" width={1127} height={549} pb="pb-20" />

          {[
            "Instagram e Landing Page geram interesse, mas a jornada não conduz claramente o usuário à compra ou ao contato com vendas.",
            "A autonomia excessiva exige que o usuário compreenda planos, licenças e regras de renovação sem o suporte necessário.",
            "O conceito de licenças impacta negativamente a compreensão de preço, planos, compra, uso em clínicas e distribuição entre usuários, gerando frustração antes, durante e após a compra.",
            "Com exceção de Instagram e Cadastro (neutros), a jornada é marcada por emoções negativas, especialmente nos momentos de decisão, compra e manutenção do plano, impactando a conversão e retenção.",
          ].map((text, i, arr) => (
            <div
              key={i}
              className={i !== arr.length - 1 ? "pb-10" : ""}
            >
              <h4 className="text-xl font-semibold pb-4">{`# Insight ${i + 1}`}</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">{text}</p>
            </div>
          ))}
        </ProjectContainer>
      </ProjectSection>

      {/* PERSONAS */}
      <ProjectSection bg>
        <ProjectContainer center>
          <ProjectHeader eyebrow="Definição" title="Personas" />
          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            As personas foram criadas a partir da síntese da pesquisa para representar perfis reais envolvidos na decisão, compra e gestão do Easy Health, orientando decisões de produto alinhadas aos usuários.
          </p>
          <div className="flex flex-col gap-20 items-center">
            {["persona1", "persona2", "persona3"].map((p, i) => (
              <CenteredImage
                key={i}
                src={`/images/am/${p}.svg`}
                alt={`Persona ${i + 1} do Easy Health`}
                width={680}
                height={733}
                pb="0"
              />
            ))}
          </div>
        </ProjectContainer>
      </ProjectSection>

      {/* MOSCOW */}
      <ProjectSection bg pt="0" pb="pb-[172px]">
        <ProjectContainer center>
          <ProjectHeader eyebrow="Definição" title="Priorização de MoSCoW" />
          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            A priorização MoSCoW foi utilizada para organizar as oportunidades identificadas na pesquisa, definindo o que era essencial, desejável ou secundário para orientar decisões estratégicas de curto e médio prazo.
          </p>
          <CenteredImage src="/images/am/moscow.svg" alt="Priorização MoSCoW Easy Health" width={682} height={608} pb="0" />
        </ProjectContainer>
      </ProjectSection>

      {/* DIRECIONAMENTOS DE PRODUTO */}
      <ProjectSection>
        <ProjectContainer>
          <ProjectHeader eyebrow="Solução" title="Direcionamentos de Produto" />

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A partir dessa priorização, foram definidas as principais decisões de produto para a próxima evolução do Easy Health, com foco em reduzir complexidade, apoiar a tomada de decisão e aproximar o time de vendas nos momentos críticos da jornada.
          </p>

          {[
            "A redução e simplificação dos planos, eliminação do conceito de licenças e adoção de planos personalizados diminuem a complexidade da escolha e alinham o modelo à expectativa das personas por orientação e apoio humano na decisão.",
            "A versão gratuita passa a ser intencionalmente limitada, removendo funcionalidades e restringindo o número de atendimentos e agendamentos diários, incentivando a progressão para planos pagos.",
            "O fluxo de compra é reduzido para até três etapas, com preços e funcionalidades essenciais apresentados de forma clara, enquanto a renovação se torna possível com um único clique e a qualquer momento, reduzindo interrupções e frustrações nos momentos críticos de uso.",
            "CTAs recorrentes para contato com o time de vendas são inseridos na Landing Page, loja e dentro do produto, garantindo apoio humano durante a escolha, compra e ajustes de plano.",
            "A criação de um admin dedicado ao time de vendas permite vender, personalizar planos, renovar, reativar e ajustar assinaturas de forma assistida, reduzindo o esforço do usuário e aumentando a previsibilidade comercial.",
          ].map((text, i, arr) => (
            <div
              key={i}
              className={i !== arr.length - 1 ? "pb-10" : ""}
            >
              <h4 className="text-xl font-semibold pb-4">{`# Decisão ${i + 1}`}</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">{text}</p>
            </div>
          ))}
        </ProjectContainer>
      </ProjectSection>

      {/* RESULTADOS */}
      <ProjectSection bg>
        <ProjectContainer>
          <ProjectHeader eyebrow="Entrega" title="Resultados da Fase de Validação" />
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            As decisões de produto foram validadas com usuários, confirmando maior clareza na jornada e redução significativa de dúvidas sobre planos, loja e renovação. O time comercial registrou aumento relevante de contatos qualificados, enquanto as reclamações no processo de compra diminuíram de forma consistente.          </p>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A validação reforçou a transição para um modelo de aquisição mais consultivo, com melhor alinhamento entre produto, vendas e comportamento do usuário, consolidando a pesquisa como base estratégica para decisões em produtos B2B.          </p>
        </ProjectContainer>
      </ProjectSection>

      {/* AGRADECIMENTOS */}
      <ProjectSection>
        <ProjectContainer center>
          <ProjectHeader title="Agradecimentos" center />
          <p className="text-xl leading-[28px] text-center text-[#1A1B1F] pb-20">
            Este projeto contou com a colaboração direta do meu amigo e colega de trabalho Luiz Meneghel, cuja participação foi essencial para aprofundar as análises, trocar ideias ao longo do processo e conectar os aprendizados da pesquisa às decisões estratégicas de produto.
          </p>

          <CenteredImage src="/images/am/pedro-e-luiz.svg" alt="Pedro e Luiz" width={690} height={1172} pb="pb-20" />

          <div className="w-full max-w-[740px] mx-auto px-6 flex items-center justify-between">
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

            <Link href="/easyhealth-ds">
              <div className="bg-[#080808] h-8 px-4 rounded-md text-white font-medium inline-flex items-center justify-center gap-1">
                Ver próximo projeto
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </ProjectContainer>
      </ProjectSection>
    </ProjectLayout>
  );
}
