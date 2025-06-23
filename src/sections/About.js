import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    img: '/assets/yu.png',
    title: 'Atividades fora do ecrã',
    desc: '30% dos adolescentes sentem-se menos dependentes e mostram maior motivação para pausas tecnológicas.'
  },
  {
    img: '/assets/yu.png',
    title: 'Trabalho de Equipa',
    desc: '81% maior motivação para cumprir metas e aumenta o compromisso com limites digitais.'
  },
  {
    img: '/assets/yu.png',
    title: 'Recompensas',
    desc: 'Mais receptível do que bloqueios e aumento do uso da aplicação e motivação em reduzir o tempo de ecrã.'
  }
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="
        flex flex-col items-center text-center
        bg-secondary/10
        py-8 sm:py-12 lg:py-16
        px-4 sm:px-6 lg:px-8
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
      <h2
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="
          text-2xl sm:text-3xl md:text-4xl
          mb-4 sm:mb-6 lg:mb-8
          text-[#B49BC7]
        "
      >
        Nós somos a YU
      </h2>
      <p
        className="
          max-w-md sm:max-w-lg lg:max-w-xl
          text-sm sm:text-base md:text-lg
          text-gray-700
          mb-6 sm:mb-8 lg:mb-12
        "
      >
        E vamos te ajudar a deixares o teu telemóvel de lado porque ...
      </p>

      <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="
              bg-white
              p-4 sm:p-6 lg:p-8
              rounded-lg
              shadow hover:shadow-md
              transition
              flex flex-col items-center
            "
            variants={fade}
          >
            <img
              src={card.img}
              alt={card.title}
              className="
                h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24
                mb-2 sm:mb-4 lg:mb-6
                object-contain
              "
            />
            <h3
              style={{ color: '#875FAC' }}
              className="
                font-quicksand
                text-base sm:text-lg md:text-xl
                font-semibold
                mb-1 sm:mb-2 lg:mb-3
              "
            >
              {card.title}
            </h3>
            <p
              className="
                font-quicksand
                text-xs sm:text-sm md:text-base
                text-gray-600
              "
            >
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
