"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "../intro/intro";
import About from "../about/about";
import Image from "next/image";

const components = [<Intro key="intro" />, <About key="about" />];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % components.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + components.length) % components.length);
  };

  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {components[index]}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute bottom-5 md:bottom-auto left-5 md:left-10 text-gold-600 bg-gold-dark bg-opacity-60 p-3 md:p-4 rounded-full hover:bg-opacity-80 transition"
      >
        <Image src={'/arrow-left.png'} alt="prev" width={60} height={60} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-5 md:bottom-auto right-5 md:right-10 text-gold-600 bg-gold-dark bg-opacity-50 p-3 md:p-4 rounded-full hover:bg-opacity-80 transition"
      >
        <Image src={'/arrow-right.png'} alt="prev" width={60} height={60} />
      </button>
    </div>
  );
}
