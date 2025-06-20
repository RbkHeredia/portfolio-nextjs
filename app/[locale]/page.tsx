import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./components/carousel/carousel"));
const TechStack = dynamic(() => import("./components/techStack/techStack"));
const Projects = dynamic(() => import("./components/projects/projects"));
const Footer = dynamic(() => import("./components/footer/footer"));


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Carousel />
      <TechStack />
      <Projects />
      <Footer/>
    </main>
  );
}
