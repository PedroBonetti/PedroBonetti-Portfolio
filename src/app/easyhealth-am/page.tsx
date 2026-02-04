"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

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

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

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
    <div>
      <Header
        onClickNome={scrollToInicio}
        onClickSobre={scrollToSobre}
        onClickContato={scrollToContato}
        isVisible={isVisible}
      />

      <div ref={topRef} className="flex flex-col w-full max-w-[740px] mx-auto px-6 pt-0 pb-[172px]">
        <h1 className="text-[40px] leading-[56px] !pt-[196px] font-medium pb-8">
          Easy Health
        </h1>

        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
          O Easy Health, desenvolvido pela Essentia Technologies, é um software de gestão clínica voltado para médicos e nutricionistas.
        </p>

        <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
          Meu papel foi conduzir uma pesquisa de mercado para entender o comportamento dos usuários e orientar decisões estratégicas sobre o modelo de vendas do produto.
        </p>

        <div className="flex items-center justify-center m-auto pb-16">
          <Image
            src="/images/easy8.png"
            alt="Tablets e celular com telas do Easy Health"
            width={680}
            height={623}
          />
        </div>

        <Link
          href="https://easy-health.app/landing-page/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <div
            className="inline-flex items-center justify-center w-[356px] gap-2 px-8 py-3 text-lg 
               border border-[#08080866] text-[#080808] rounded-lg
               transition-colors duration-200
               hover:bg-black hover:text-white hover:border-black"
          >
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
              className="transition-colors duration-200"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </Link>

      </div>


      <div className="w-full pt-[172px] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Contexto</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Um olhar sobre o produto</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O Easy Health é um software de gestão clínica B2B por assinatura, utilizado por médicos e profissionais da saúde para organizar agenda, prontuário eletrônico, prescrições e rotinas administrativas.</p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Por se tratar de um produto voltado a um público altamente especializado, com baixo tempo disponível e alto poder de decisão, a forma como o software é apresentado e vendido impacta diretamente a percepção de valor e a conversão.</p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Este projeto parte da necessidade de compreender como profissionais de saúde avaliam, comparam e decidem a contratação de um software de gestão clínica, e como o modelo de aquisição poderia ser ajustado para se alinhar melhor a esse comportamento.</p>
        </div>
      </div>

      <div className="w-full pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Problema</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Modelo de aquisição ineficiente</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            O modelo de aquisição vigente permitia que médicos acessassem o Easy Health de forma autônoma, conhecessem os planos, iniciassem um teste gratuito ou solicitassem contato com a equipe comercial ao longo da jornada.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Embora flexível, esse formato distribuía o usuário entre diferentes caminhos e não conduzia de forma clara a decisão de compra.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            Como resultado, o processo apresentava baixa previsibilidade de conversão e não refletia o comportamento de compra do usuário, que tende a valorizar uma abordagem mais consultiva e orientada por relacionamento humano.
          </p>
        </div>
      </div>

      <div className="w-full pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Pesquisa</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Estrutura metodológica</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A pesquisa foi estruturada a partir da metodologia <strong className="font-semibold">Double Diamond.</strong>
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-12">
            O objetivo foi compreender o problema em profundidade, identificar padrões de comportamento e convergir aprendizados que apoiassem decisões estratégicas sobre o modelo de aquisição do produto.
          </p>

          <div className="grid grid-cols-2 gap-24 pb-8">
            <div>
              <h3 className="text-5xl font-bold pb-4">1.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Descoberta</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
                A fase de Descoberta teve como foco compreender o produto, o mercado e o modelo de aquisição atual.
              </p>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">
                Métodos de pesquisa: Matriz CSD, Benchmarking e Jornada do Usuário.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold pb-4">2.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Definição</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
                Na fase de Definição, os dados da Descoberta foram analisados e organizados para identificar oportunidades de melhoria.
              </p>

              <p className="text-xl leading-[28px] text-[#1A1B1F]">
                Métodos de pesquisa: Personas e Priorização MoSCoW.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold pb-4">3.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Solução</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">
                As oportunidades identificadas na pesquisa foram traduzidas em decisões estratégicas de produto, orientadas diretamente pelos dados e aprendizados da pesquisa.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold pb-4">4.</h3>
              <h4 className="text-[32px] leading-[44px] font-semibold pb-8">Entrega</h4>
              <p className="text-xl leading-[28px] text-[#1A1B1F]">
                A fase final teve como foco validar, junto aos usuários, as decisões de produto definidas, garantindo que as soluções propostas resolvessem os problemas identificados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h4 className="text-[16px] leading-6 pb-2">Descoberta</h4>

          <h2 className="text-[32px] leading-[40px] font-semibold pb-4">Matriz CSD</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            A Matriz CSD foi utilizada para mapear certezas, suposições e dúvidas a partir de entrevistas com os times de Customer Success e Vendas, que atuam diretamente na relação com os usuários.
          </p>
        </div>

        <div className="flex items-center justify-center p-auto pb-20">
          <Image
            src="/images/matriz-csd.svg"
            alt="Matriz CSD do Easy Health"
            width={682}
            height={759}
            quality={100}
          />
        </div>
      </div>

      <div className="w-full pb-20">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Descoberta</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Benchmarking</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            Foi realizado um benchmarking com concorrentes diretos para entender como o mercado estrutura seus modelos de aquisição, venda e precificação em softwares de gestão clínica.
          </p>

          <Image
            src="/images/benchmark.svg"
            alt="Tabela de Benchmarking do Easy Health"
            width={1127}
            height={549}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-xl font-semibold pb-4"># Insight 1</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            Acessos gratuitos, quando disponíveis, são altamente limitados e funcionam mais como porta de entrada para o contato comercial do que como um modelo de uso autônomo.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 2</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            A maior parte das compras acontece por meio de contato direto com vendedores, enquanto fluxos totalmente autônomos são pouco utilizados.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 3</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            Os planos são simples e flexíveis, com possibilidade de customização conforme a realidade da clínica.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 4</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F]">
            O modelo de precificação considera número de licenças personalizadas, adequadas ao porte e à estrutura da clínica do médico.
          </p>
        </div>
      </div>

      <div className="w-full pb-20">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Descoberta</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Jornada do usuário</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A Jornada do Usuário foi mapeada para entender como as personas percorriam o processo de aquisição atual e identificar pontos de fricção e oportunidades de melhoria.
          </p>

          <Image
            src="/images/jornada-do-usuario.svg"
            alt="Tabela de Benchmarking do Easy Health"
            width={1127}
            height={549}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full pt-20 pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-xl font-semibold pb-4"># Insight 1</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            Instagram e Landing Page geram interesse, mas a jornada não conduz claramente o usuário à compra ou ao contato com vendas.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 2</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            A autonomia excessiva exige que o usuário compreenda planos, licenças e regras de renovação sem o suporte necessário.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 3</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            O conceito de licenças impacta negativamente a compreensão de preço, planos, compra, uso em clínicas e distribuição entre usuários, gerando frustração antes, durante e após a compra.
          </p>
          <h4 className="text-xl font-semibold pb-4"># Insight 4</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F]">
            Com exceção de Instagram e Cadastro (neutros), a jornada é marcada por emoções negativas, especialmente nos momentos de decisão, compra e manutenção do plano, impactando a conversão e retenção.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h4 className="text-[16px] leading-6 pb-2">Definição</h4>

          <h2 className="text-[32px] leading-[40px] font-semibold pb-4">Personas</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            As personas foram criadas a partir da síntese da pesquisa para representar perfis reais envolvidos na decisão, compra e gestão do Easy Health, orientando decisões de produto alinhadas aos usuários.
          </p>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center p-auto pb-20">
          <Image
            src="/images/persona1.svg"
            alt="Persona 1 do Easy Health"
            width={680}
            height={733}
            quality={100}
          />
          <Image
            src="/images/persona2.svg"
            alt="Persona 2 do Easy Health"
            width={680}
            height={733}
            quality={100}
          />
          <Image
            src="/images/persona3.svg"
            alt="Persona 3 do Easy Health"
            width={680}
            height={733}
            quality={100}
          />
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] pb-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h4 className="text-[16px] leading-6 pb-2">Definição</h4>

          <h2 className="text-[32px] leading-[40px] font-semibold pb-4">Priorização de MoSCoW</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] text-center pb-20">
            A priorização MoSCoW foi utilizada para organizar as oportunidades identificadas na pesquisa, definindo o que era essencial, desejável ou secundário para orientar decisões estratégicas de curto e médio prazo.
          </p>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center p-auto pb-20">
          <Image
            src="/images/moscow.svg"
            alt="Priorização de MoSCoW do Easy Health"
            width={682}
            height={608}
            quality={100}
          />
        </div>
      </div>

      <div className="w-full py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Solução</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Direcionamentos de Produto</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A partir dessa priorização, foram definidas as principais decisões de produto para a próxima evolução do Easy Health, com foco em reduzir complexidade, apoiar a tomada de decisão e aproximar o time de vendas nos momentos críticos da jornada.
          </p>

          <h4 className="text-xl font-semibold pb-4"># Decisão 1</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            A redução e simplificação dos planos, eliminação do conceito de licenças e adoção de planos personalizados diminuem a complexidade da escolha e alinham o modelo à expectativa das personas por orientação e apoio humano na decisão.
          </p>

          <h4 className="text-xl font-semibold pb-4"># Decisão 2</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            A versão gratuita passa a ser intencionalmente limitada, removendo funcionalidades e restringindo o número de atendimentos e agendamentos diários, incentivando a progressão para planos pagos.
          </p>

          <h4 className="text-xl font-semibold pb-4"># Decisão 3</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            O fluxo de compra é reduzido para até três etapas, com preços e funcionalidades essenciais apresentados de forma clara, enquanto a renovação se torna possível com um único clique e a qualquer momento, reduzindo interrupções e frustrações nos momentos críticos de uso.
          </p>

          <h4 className="text-xl font-semibold pb-4"># Decisão 4</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-10">
            CTAs recorrentes para contato com o time de vendas são inseridos na Landing Page, loja e dentro do produto, garantindo apoio humano durante a escolha, compra e ajustes de plano.
          </p>

          <h4 className="text-xl font-semibold pb-4"># Decisão 5</h4>
          <p className="text-xl leading-[28px] text-[#1A1B1F]">
            A criação de um admin dedicado ao time de vendas permite vender, personalizar planos, renovar, reativar e ajustar assinaturas de forma assistida, reduzindo o esforço do usuário e aumentando a previsibilidade comercial.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6">
          <h4 className="text-[16px] leading-6 pb-2">Entrega</h4>

          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Resultados da Fase de Validação</h2>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            As decisões de produto foram validadas com usuários, confirmando maior clareza na jornada e redução significativa de dúvidas sobre planos, loja e renovação. O time comercial registrou aumento relevante de contatos qualificados, enquanto as reclamações no processo de compra diminuíram de forma consistente.
          </p>

          <p className="text-xl leading-[28px] text-[#1A1B1F] pb-8">
            A validação reforçou a transição para um modelo de aquisição mais consultivo, com melhor alinhamento entre produto, vendas e comportamento do usuário, consolidando a pesquisa como base estratégica para decisões em produtos B2B.
          </p>
        </div>
      </div>

      <div className="w-full py-[172px]">
        <div className="w-full max-w-[740px] mx-auto px-6 flex items-center flex-col">
          <h2 className="text-[32px] leading-[44px] font-semibold pb-8">Agradecimentos</h2>

          <p className="text-xl leading-[28px] text-center text-[#1A1B1F] pb-20">
            Este projeto contou com a colaboração direta do meu amigo e colega de trabalho Luiz Meneghel, cuja participação foi essencial para aprofundar as análises, trocar ideias ao longo do processo e conectar os aprendizados da pesquisa às decisões estratégicas de produto.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-auto pb-[118px]">
          <Image
            src="/images/pedro-e-luiz.svg"
            alt="Apresentação do Pedro para a equipe sobre Design System"
            width={690}
            height={1172}
            className="rounded-2xl"
          />
          <div className="w-full max-w-[740px] mx-auto px-6 flex items-center justify-between pt-[118px]">
            <button
              className="bg-[#080808] h-8 w-[88px] rounded-md text-white font-semibold 
               inline-flex items-center justify-center gap-1" onClick={scrollToTop}
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

            <Link href="/easyhealth-am" target="_blank" rel="noopener noreferrer">
              <div
                className="bg-[#080808] h-8 px-4 rounded-md text-white font-semibold 
               inline-flex items-center justify-center gap-1"
              >
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
      </div >

      <div className="w-full bg-[#F4F4F4] py-14">
        <Footer />
      </div>


    </div >
  )
}