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
      className="
        flex flex-col justify-center items-center
        bg-gradient-to-tr from-accent/50 to-info/50 text-white
        py-12 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
      <h1
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl
          mb-4 sm:mb-6 lg:mb-8
          text-[#875FAC]
          text-center
        "
      >
        Pronto(a) para começar !!
      </h1>
      <p
        className="
          font-quicksand
          text-base sm:text-lg md:text-xl lg:text-2xl
          mb-6 sm:mb-8 lg:mb-12
          text-[#B49BC7]
          max-w-md sm:max-w-lg lg:max-w-xl
          text-center
        "
      >
        Junta-te à comunidade YU e conquista o teu equilíbrio digital já hoje!
      </p>
      <a
        href="/download"
        className="
          inline-block
          px-6 sm:px-8 lg:px-10
          py-2 sm:py-3 lg:py-4
          bg-transparent
          rounded-full
          text-[#875FAC]
          border-2 border-[#875FAC]
          text-sm sm:text-base lg:text-lg
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
