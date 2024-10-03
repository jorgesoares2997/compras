import AudioCard from "../../components/audio";
import StreamingCard from "../../components/streaming";

export default function Home() {
  return (
    <main className="size-screen bg-transparent">
      <div className="flex flex-col gap-40 ">
        <div>
          <h1 className="text-3xl font-bold underline mb-12 flex justify-center mt-12">
            Lista de compras do Audio
          </h1>
          <AudioCard />
        </div>
        <div className="h-full">
          <h1 className="text-3xl font-bold underline mb-12 flex justify-center mt-12">
            Lista de compras do Streaming
          </h1>
          <div className="">
            <StreamingCard />
          </div>
        </div>
      </div>
    </main>
  );
}
