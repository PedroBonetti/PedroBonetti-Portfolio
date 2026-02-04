"use client";

import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import SectionItem from "@/components/SectionItem";
import SectionTitle from "@/components/SectionTitle";
import Separator from "@/components/Separator";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useState, useEffect, Suspense } from "react";

function UrlScrollHandler({
  sobreRef,
  contatoRef,
}: {
  sobreRef: React.RefObject<HTMLElement | null>;
  contatoRef: React.RefObject<HTMLElement | null>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessao = searchParams.get("sessao");

    if (!sessao) return;

    if (sessao === "sobre") {
      setTimeout(() => {
        sobreRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (sessao === "contato") {
      setTimeout(() => {
        contatoRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    const timer = setTimeout(() => {
      router.replace("/", { scroll: false });
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams, sobreRef, contatoRef, router]);

  return null;
}

export default function Home() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const sobreRef = useRef<HTMLElement | null>(null);
  const contatoRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  const scrollToInicio = () =>
    inicioRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToSobre = () =>
    sobreRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContato = () =>
    contatoRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="flex flex-col w-full max-w-[1024px] mx-auto px-6 pt-0 pb-28"
      ref={inicioRef}
      id="inicio"
    >
      <Suspense fallback={null}>
        <UrlScrollHandler sobreRef={sobreRef} contatoRef={contatoRef} />
      </Suspense>

      <Header
        onClickNome={scrollToInicio}
        onClickSobre={scrollToSobre}
        onClickContato={scrollToContato}
        isVisible={isVisible}
      />

      <h1 className="text-[40px] leading-[56px] !pt-[196px] text-center font-medium">
        Pedro Bonetti é um UX Designer/Product Designer atualmente trabalhando no
        Essentia Group.
      </h1>

      <Separator variant="thin" />

      <section className="flex flex-col">
        <SectionTitle title="Projetos" />
        <div className="flex flex-col gap-20">
          <Link
            href="/easyhealth-am"
            className="
              group block w-full bg-white border border-[#EAEAEA] rounded-xl overflow-hidden
              transition-all duration-300 ease-in-out
              hover:scale-[1.02]
              hover:shadow-[6px_10px_25px_rgba(0,0,0,0.15)]
            "
          >
            <div className="flex flex-col items-center px-8 py-20 text-center md:px-16">
              <span className="mb-8 text-[32px] font-[550] text-[#080808]">
                Easy Health
              </span>

              <h3 className="mb-10 max-w-2xl text-[48px] leading-[56px] font-[550] text-[#080808] tracking-tight">
                Redesenhando o Modelo de Aquisição do Easy Health
              </h3>

              <p className="mb-12 max-w-2xl text-[18px] leading-[26px] text-[#1A1B1F]">
                Uma pesquisa estratégica com usuários orientando decisões de produto e vendas em um SaaS B2B.
              </p>
              <div className="relative flex items-center justify-center w-full max-w-[600px] mb-12">
                <Image
                  src="/images/am/easy-health-desktop-and-mobile.png"
                  alt="Easy Health App Interface"
                  width={518}
                  height={236}
                  quality={100}
                />
              </div>
              <div className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white transition-colors bg-[#080808] rounded-lg hover:bg-[#212121]">
                Ver Pesquisa
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
            </div>
          </Link>

          <Link
            href="/easyhealth-ds"
            className="
              group block w-full bg-white border border-[#EAEAEA] rounded-xl overflow-hidden
              transition-all duration-300 ease-in-out
              hover:scale-[1.02]
              hover:shadow-[6px_10px_25px_rgba(0,0,0,0.15)]
            "
          >
            <div className="flex flex-col items-center px-8 py-20 text-center md:px-16">
              <span className="mb-8 text-[32px] font-[550] text-[#080808]">
                Easy Health
              </span>

              <h3 className="mb-10 max-w-2xl text-[48px] leading-[56px] font-[550] text-[#080808] tracking-tight">
                Escalando experiências de saúde com um Design System
              </h3>

              <p className="mb-12 max-w-2xl text-[18px] leading-[26px] text-[#1A1B1F]">
                De agendamentos a dados de saúde, gerenciar uma clínica pode ser
                complexo. Conheça o <strong className="font-semibold">design system</strong> criado para
                trazer consistência, clareza e facilidade à experiência do Easy
                Health.
              </p>
              <div className="relative flex items-center justify-center w-full max-w-[600px] mb-12">
                <Image
                  src="/images/ds/easy-health-mobile.png"
                  alt="Easy Health App Interface"
                  width={475}
                  height={154}
                  quality={100}
                />
              </div>
              <div className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white transition-colors bg-[#080808] rounded-lg hover:bg-[#212121]">
                Ver Design System
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
            </div>
          </Link>
        </div>
      </section>

      <Separator />

      <section ref={sobreRef} id="sobre">
        <SectionTitle title="Sobre" />
        <p className="text-2xl text-[#1A1B1F]">
          Pedro é um UX Designer/Product Designer com 4 anos de experiência. Já
          liderou projetos de produto, desenvolveu design systems e conduziu
          processos completos de UX, da pesquisa ao teste com usuários. Suas
          principais inspirações são John Maeda, Steve Krug, Don Norman e Jakob
          Nielsen.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-12 pt-[88px]">
        <div>
          <Separator noSpacing />
          <SectionTitle title="Experiência" />
        </div>
        <div className="flex flex-col gap-8">
          <Experience
            title="Essentia Technologies"
            subTitle="UX/UI Designer"
            timeSpan="Abril 2023 – o momento"
          />
          <Experience
            title="Ada Software House"
            subTitle="UX/UI Designer"
            timeSpan="Agosto 2022 – Novembro 2022"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-12 pt-[88px]">
        <div>
          <Separator noSpacing />
          <SectionTitle title="Formação acadêmica" />
        </div>
        <div className="flex flex-col gap-8 ">
          <Experience
            title="Pós-Graduação em User Experience (UX) e Design de Experiências"
            subTitle="Universidade do Extremo Sul Catarinense"
            timeSpan="Jul 2021 – Mar 2022"
          />
          <Experience
            title="Graduação em Ciência da Computação"
            subTitle="Universidade do Extremo Sul Catarinense"
            timeSpan="Fev 2015 – Dez 2019"
          />
        </div>
      </section>

      <Separator />

      <section>
        <SectionTitle title="Habilidades" />
        <div className="flex flex-col gap-8 w-full">
          <SectionItem title="Design de Experiência do Usuário (UX)" />
          <SectionItem title="Design de Interface do Usuário (UI)" />
          <SectionItem title="Pesquisa com Usuários e Mapeamento de Jornada" />
          <SectionItem title="Pesquisa de Mercado e Benchmarking " />
          <SectionItem title="Análise de Dados e Métricas de Produto" />
          <SectionItem title="Testes de Usabilidade, Análise Heurísticas & Testes A/B" />
        </div>
      </section>

      <Separator />

      <section>
        <SectionTitle title="Ferramentas" />
        <div className="flex flex-col gap-8 w-full">
          <SectionItem title="Figma" />
          <SectionItem title="Adobe XD, Illustrator, Photoshop" />
          <SectionItem title="Jira" />
          <SectionItem title="Google Analytics" />
          <SectionItem title="Microsoft Clarity" />
        </div>
      </section>

      <Separator />

      <section ref={contatoRef} id="contato">
        <SectionTitle title="Contato" />
        <p className="text-2xl">Se algo aqui te interessou, que tal um café?</p>
        <ContactForm />
      </section>
    </div>
  );
}