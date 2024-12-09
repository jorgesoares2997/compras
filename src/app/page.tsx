import AudioCard from "@/app/components/audio";
import StreamingCard from "@/app/components/streaming";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="my-12">
    <h1 className="text-3xl font-bold underline mb-6 text-center">{title}</h1>
    <div>{children}</div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent ">
      <div className="flex flex-col gap-20">
        <div className="mb-12">
          <Section title="Lista de compras do Audio">
            <AudioCard />
          </Section>
        </div>
        <div className="mb-12">
          <Section title="Lista de compras do Streaming">
            <StreamingCard />
          </Section>
        </div>
      </div>
    </main>
  );
}
