import Image from "next/image";
import Intro from "./components/intro/intro";
import TechStack from "./components/techStack/techStack";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      
      <Intro />
      <TechStack />
    </main>
  );
}
