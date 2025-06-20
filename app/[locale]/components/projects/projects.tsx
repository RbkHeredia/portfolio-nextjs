"use client";
import { useTranslations } from "next-intl";
import { projectsInfo } from "../../data/data";
import CardProject from "../cardProject/cardProject";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("projects");

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      id="projects"
      className="bg-bg-gold w-[100%] p-[5rem] flex  items-center flex-col"
    >
      <h3 className="text-xl md:text-4xl lg:text-6xl">{t("title")}</h3>
      <p className="md:text-2xl text-center">{t("subt")}</p>
      <motion.ul
        className="flex gap-5 flex-wrap my-[3rem] justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsInfo.map((pr) => (
          <motion.li
            key={pr.id}
            variants={item}
          >
            <CardProject
              img={pr.imagen}
              title={pr.name}
              description={pr.description}
              urlPrev={pr.link}
              urlGit={pr.git}
              techs={pr.tecnologias}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
