import PatrimonyCard from "../../components/Items";

export default function Home() {
  return (
    <main className="size-full bg-[#777]">
      <h1 className="text-3xl font-bold  underline mb-12 flex justify-center mt-12">
        Lista de compras do Audio IBP
      </h1>
      <PatrimonyCard />
    </main>
  );
}
