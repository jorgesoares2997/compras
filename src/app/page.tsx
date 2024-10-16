import AudioCard from "../../components/audio";
import StreamingCard from "../../components/streaming";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h1 className="text-3xl font-bold underline mb-12 flex justify-center mt-12">
      {title}
    </h1>
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="size-screen bg-transparent">
      <div className="flex flex-col gap-40">
        <Section title="Lista de compras do Audio">
          <AudioCard />
        </Section>
        <Section title="Lista de compras do Streaming">
          <StreamingCard />
        </Section>
      </div>
    </main>
  );
}
