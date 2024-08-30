import { projectsInfo } from "../../data/data";
import CardProject from "../cardProject/cardProject";

export default function Projects() {
  return (
    <div className="bg-bg-gold w-[100%] p-[5rem] flex  items-center flex-col">
      <h3 className="text-xl md:text-4xl lg:text-6xl">My projects</h3>
      <p className="md:text-2xl text-center">Things I’ve built so far</p>
      <div className="flex gap-5 flex-wrap my-[3rem]">
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
