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
    <main className="min-h-screen bg-transparent p-6">
      <div className="flex flex-col gap-20">
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
