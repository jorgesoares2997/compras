import { useTranslations } from "next-intl";
export default function EventText({ params }: {params:{text:string}}) {
  const t = useTranslations("Events");
  return (
    <>
      <div className="m-auto h-8 my-12 text-center">
        <h2
          className="text-neutral text-[24px] md:text-[32px] font-bold text-center mt-14 underline mb-4 w-fit m-auto"
          style={{
            textDecorationColor: "#8932FC",
            textDecorationThickness: "4px",
            textUnderlineOffset: "12px",
          }}
        >
          {t(`${params.text}`)}
        </h2>
      </div>
    </>
  );
}
