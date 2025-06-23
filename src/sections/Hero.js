import React from 'react';
import { motion } from 'framer-motion';
  // ajusta o caminho se precisares

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/30 to-secondary/30 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
      <h1
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="text-5xl md:text-7xl mb-4 text-[#875FAC]"
      >
        Larga o ecrã. Liga-te à vida
      </h1>
      <p className="font-quicksand text-lg md:text-2xl mb-8 text-[#B49BC7]">
        O teu amigo digital para equilibrar o tempo de ecrã
      </p>
       
    </motion.section>
  );
}
