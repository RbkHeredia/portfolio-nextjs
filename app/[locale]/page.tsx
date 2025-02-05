import Intro from "./components/intro/intro";
import TechStack from "./components/techStack/techStack";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      
      <Intro />
      <TechStack />
      <Projects />
      <Footer/>
    </main>
  );
}
