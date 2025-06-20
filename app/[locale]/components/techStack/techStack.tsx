"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ring from "../ring/ring";
import {
  faCss3,
  faDocker,
  faFigma,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const techs = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faJs}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faReact}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 12,
    icon: (
      <Image
        src="/nextjs.png"
        alt=""
        width={70}
        height={70}
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        icon={faSass}
        size="3x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon
        icon={faNodeJs}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 13,
    icon: (
      <Image
        src="/nestjs.webp"
        alt=""
        width={70}
        height={70}
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 7,
    icon: (
      <FontAwesomeIcon
        icon={faFigma}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 8,
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 9,
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 14,
    icon: (
      <Image
        src="/mongo.jpg"
        alt=""
        width={70}
        height={70}
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 10,
    icon: (
      <FontAwesomeIcon
        icon={faCss3}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
  {
    id: 11,
    icon: (
      <FontAwesomeIcon
        icon={faDocker}
        size="4x"
        className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"
      />
    ),
  },
];

export default function TechStack() {
  const t = useTranslations("stack");
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }} // Inicio desde la izquierda con opacidad 0
      animate={{ x: 0, opacity: 1 }} // Se mueve al centro y aparece
      transition={{ duration: 1, ease: "easeOut" }} // Transición suave
      id="stacks"
      className="my-[5rem] flex items-center flex-col"
    >
      <h2 className="md:text-5xl text-center">{t("title")}</h2>
      <p className="md:text-2xl text-center"> {t("subt")}</p>
      <div className="my-[5rem] flex-wrap flex mx-[10%] justify-center flex">
        {techs.map((tech) => (
          <Ring key={tech.id}>{tech.icon}</Ring>
        ))}
      </div>
    </motion.div>
  );
}
