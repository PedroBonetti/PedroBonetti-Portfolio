"use client";

import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import SectionItem from "@/components/SectionItem";
import SectionTitle from "@/components/SectionTitle";
import Separator from "@/components/Separator";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const sobreRef = useRef<HTMLElement | null>(null);
  const contatoRef = useRef<HTMLElement | null>(null);

  const scrollToSobre = () => {
    sobreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col px-52 pt-8 pb-28 items-center">
      <Header onClickSobre={scrollToSobre} onClickContato={scrollToContato} />

      <h1 className="text-4xl pt-[88px] text-center font-semibold">Pedro Bonetti é um UX Designer/Product Designer atualmente trabalhando no Essentia Group.</h1>

      <Separator variant="thin" />

      <section className="flex flex-col items-center pb-10">
        <SectionTitle title="Projetos" />

        <div className="flex flex-col gap-24">
          <Link href="/projetos/essentia" className="w-full">
            <Image
              src="/images/n26.png"
              alt="M26 - A home for the easier-than-ever finances"
              width={900}
              height={450}
              className="w-full rounded-lg"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>

          <Link href="/projetos/essentia" className="w-full">
            <Image
              src="/images/easy-health.png"
              alt="Easy Health - A inteligência artificial agora é Easy"
              width={900}
              height={450}
              className="w-full rounded-lg"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
      </section>

      <Separator />

      <section ref={sobreRef}>
        <SectionTitle title="Sobre" />

        <p className="text-2xl opacity-55">Pedro é um UX Designer/Product Designer com 3 anos de experiência. Já liderou projetos de produto, desenvolveu design systems e conduziu processos completos de UX, da pesquisa ao teste com usuários. Suas principais inspirações são John Maeda, Steve Krug, Don Norman e Jakob Nielsen.</p>
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
          <SectionTitle title="Formação acadêmica" className="!text-[40px]" />
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

      <section ref={contatoRef}>
        <SectionTitle title="Contato" />

        <p className="text-2xl opacity-55">Se algo aqui te interessou, que tal um café?</p>

        <ContactForm />

      </section>
    </div>
  );
}
