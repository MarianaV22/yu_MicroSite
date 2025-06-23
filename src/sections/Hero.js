import React from 'react';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="
        flex flex-col justify-center items-center
        bg-gradient-to-br from-primary/30 to-secondary/30 text-white
        py-16 md:py-24 lg:py-32
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
          mb-4
          text-[#875FAC]
          text-center
        "
      >
        Larga o ecrã. Liga-te à vida
      </h1>
      <p
        className="
          font-quicksand
          text-base sm:text-lg md:text-xl lg:text-2xl
          mb-8
          text-[#B49BC7]
          max-w-xl
          text-center
        "
      >
        O teu amigo digital para equilibrar o tempo de ecrã
      </p>
      {/* Se quiseres adicionar o botão de Experimentar aqui, descomenta: */}
      {/*
      <a
        href="#cta"
        className="px-6 py-3 bg-[#875FAC] rounded-full text-white font-semibold hover:bg-[#875FAC]/90 transition"
      >
        Experimentar Agora
      </a>
      */}
    </motion.section>
  );
}
