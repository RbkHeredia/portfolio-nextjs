import TechStack from "./components/techStack/techStack";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Carousel from "./components/carousel/carousel";


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
