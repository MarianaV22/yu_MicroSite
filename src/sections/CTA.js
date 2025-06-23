import React from 'react';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CTA() {
  return (
    <motion.section
      id="cta"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-accent/50 to-info/50 text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
       <h1
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="text-5xl md:text-7xl mb-4 text-[#875FAC]"
      >Pronto(a) para começar !!
      </h1>
      <p className="font-quicksand text-lg md:text-2xl mb-8 text-[#B49BC7]">
        Junta-te à comunidade YU e conquista o teu equilíbrio digital já hoje!
      </p>
      <a
        href="/download"
        className="
          px-6 py-3
          bg-transparent
          rounded-full
          text-[#875FAC]
          border-2 border-[#875FAC]
          font-semibold
          hover:bg-[#875FAC] hover:text-white
          transition
        "
      >
        Descarrega App
      </a>
    </motion.section>
  );
}
