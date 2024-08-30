import Image from "next/image";
import { uncial } from "../../typography/uncial";
import Chip from "../chip/chip";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

type cardProjectType = {
  img:string,
  title:string,
  description:string,
  urlPrev:string,
  urlGit:string,
  techs:string[]
}

export default function CardProject({img, title, description, urlPrev, urlGit, techs}:cardProjectType){
  const t = useTranslations("technologies")
  return(
    <div className="bg-white relative border border-[#B8860B] rounded-[20px] p-[1rem] max-w-[330px] pb-[3rem]">
      <Image src={img} alt="project" width={300} height={100} className="rounded-[16px]" />
      <p className={`${uncial.className} text-gold-dark mt-3`}>{t(title)}</p>
      <p>{t(description)}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {techs.map((tech,i)=>(
          <Chip key={i} tech={tech}/>
        ))}
      </div>
      <div className={`${uncial.className} flex gap-4 mt-2 text-gold-dark absolute bottom-0 my-2`}>
        <Link target="_blank" href={urlPrev}><FontAwesomeIcon icon={faCode} /> Live preview</Link>
        <Link target="_blank" href={urlGit}><FontAwesomeIcon icon={faGithub} /> View Code</Link>
      </div>
    </div>
  )
}