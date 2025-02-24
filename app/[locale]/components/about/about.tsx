import { PoppinsFont } from "@/app/fonts/poppins";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  return (
    <div className="w-[100%] relative md:max-h-screen object-cover overflow-hidden lg:h-[30rem] h-[25rem]">
      <Image
        src={"/hobbiton.png"}
        alt=""
        width={1920}
        height={1080}
        className="absolute z-[-1] opacity-30 max-w-[170%] w-[170%]"
      />
      <h2 className="md:text-5xl text-center mt-[1rem] md:mt-[5rem] mb-[1rem]">
        {t("title")}
      </h2>
      <div className={`${PoppinsFont.className} w-[100%] lg:w-[80%] px-[10%] lg:px-[10rem] flex flex-col gap-5`}>
        {['p1', 'p2', 'p3'].map((item) =>
          <div key={item} className="flex gap-3">
            <Image src={'/RB.png'} alt="logo" width={80} height={80} className="h-auto object-contain w-10 md:w-20" />
            <p className="text-sm">{t(item)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
