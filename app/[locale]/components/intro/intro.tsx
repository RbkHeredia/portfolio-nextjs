import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Intro() {

  const t = useTranslations("intro")
  return (
    <div
      id="about"
      className="relative md:max-h-screen object-cover overflow-hidden"
    >
      <Image
        src={"/lotrmap.jpg"}
        alt=""
        width={1920}
        height={1080}
        className="absolute z-[-1] opacity-30 max-w-[140%] w-[140%]"
      />
      <div className="flex text-center md:text-left items-center md:justify-between m-12 md:m-24 flex-col-reverse gap-y-3 md:flex-row">
      
        <div className="h-[10rem] w-[15rem] md:h-[15rem]  rounded-full flex justify-center items-center">
          <Image
            className="w-[10rem] md:w-[15rem] rounded-full"
            src="/mi-foto.png"
            alt="me"
            width={2250}
            height={2333}
          />
        </div>
        <motion.h1
          className="md:w-3/6 text-xl md:text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("title")}
        </motion.h1>
      </div>
    </div>
  );
}
