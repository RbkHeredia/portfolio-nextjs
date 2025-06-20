import Image from "next/image";
import { motion } from "framer-motion";

export default function Ring({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="absolute w-[8rem]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        whileHover={{ rotate: 90, transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <Image src="/ring.jpg" alt="ring-stack" width={400} height={400} />
      </motion.div>
      {children}
    </motion.div>
  );
}
