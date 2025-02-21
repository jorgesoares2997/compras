"use client";
import AudioCard from "@/app/components/audio";
import StreamingCard from "@/app/components/streaming";
import FormularioPatrimonio from "./components/formulario";
import Comments from "./components/comments";
import { Link, Element, scroller } from "react-scroll";
import Joyride, { Step } from "react-joyride";

const Section = ({
  title,
  children,
  name,
}: {
  title: string;
  children: React.ReactNode;
  name: string;
}) => (
  <Element name={name} className="my-12">
    <h1 className="text-3xl font-bold underline mb-6 text-center">{title}</h1>
    <div>{children}</div>
  </Element>
);

export default function Home({ pageProps }: any) {
  return (
    <main className="min-h-screen bg-transparent ">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 bg-[#2222229c] w-full z-10 p-4">
        <div className="flex justify-end gap-10">
          <Link
            to="audio"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-lg font-semibold text-white hover:text-[#F2D4AE] cursor-pointer transition-colors duration-300"
          >
            Audio
          </Link>
          <Link
            to="streaming"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-lg font-semibold text-white hover:text-[#F2D4AE] cursor-pointer transition-colors duration-300"
          >
            Streaming
          </Link>
          <Link
            to="formulario"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-lg font-semibold text-white hover:text-[#F2D4AE] cursor-pointer transition-colors duration-300"
          >
            Adicionar
          </Link>
        </div>
      </nav>

      <div className="flex flex-col gap-20 pt-20">
        <div className="mb-12">
          <Section name="audio" title="Lista de compras do Audio">
            <AudioCard />
          </Section>
        </div>
        <div className="mb-12">
          <Section name="streaming" title="Lista de compras do Streaming">
            <StreamingCard />
          </Section>
        </div>
        <div className="mb-12">
          <Section name="formulario" title="Adicione mais itens">
            <FormularioPatrimonio />
          </Section>
        </div>
        {/* <Comments /> */}
      </div>
    </main>
  );
}
