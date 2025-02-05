import { useTranslations } from "next-intl";
import { projectsInfo } from "../../data/data";
import CardProject from "../cardProject/cardProject";

export default function Projects() {
  const t = useTranslations("projects")
  return (
    <div id="projects" className="bg-bg-gold w-[100%] p-[5rem] flex  items-center flex-col">
      <h3 className="text-xl md:text-4xl lg:text-6xl">{t("title")}</h3>
      <p className="md:text-2xl text-center">{t("subt")}</p>
      <div className="flex gap-5 flex-wrap my-[3rem] justify-center">
        {projectsInfo.map((pr) => (
          <CardProject
            key={pr.id}
            img={pr.imagen}
            title={pr.name}
            description={pr.description}
            urlPrev={pr.link}
            urlGit={pr.git}
            techs={pr.tecnologias}
          />
        ))}
      </div>
    </div>
  );
}
