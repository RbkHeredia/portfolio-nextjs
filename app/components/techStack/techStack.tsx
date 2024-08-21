import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ring from "../ring/ring";
import { faCss3, faFigma, faGithub, faHtml5, faJava, faJs, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

const techs = [
  {id:1, icon:<FontAwesomeIcon icon={faJs} size="4x"  className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]" />},
  {id:2, icon:<FontAwesomeIcon icon={faReact} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:3, icon:<FontAwesomeIcon icon={faSass} size="3x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:4, icon:<FontAwesomeIcon icon={faNodeJs} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:5, icon:<FontAwesomeIcon icon={faJava} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:6, icon:<FontAwesomeIcon icon={faFigma} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:6, icon:<FontAwesomeIcon icon={faGithub} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:6, icon:<FontAwesomeIcon icon={faHtml5} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
  {id:6, icon:<FontAwesomeIcon icon={faCss3} size="4x" className="m-10 w-[3rem] md:m-20 text-gold-dark max-h[2rem] md:max-h-[4rem]"/>},
]

export default function TechStack(){
  return(
    <div className="my-[5rem] mx-[10%]">
      <h2 className="md:text-5xl text-center">My tech Stack</h2>
      <p className="md:text-2xl text-center"> Technologies I’ve been working with recently</p>
      <div className="my-[5rem] flex-wrap flex mx-[10%]">
      {techs.map((tech)=>(
        <Ring key={tech.id}>
        {tech.icon}
      </Ring>
      ))}
      
      </div>
    </div>
  )
}