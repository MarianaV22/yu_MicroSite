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
      className="flex flex-col items-center text-center py-8 bg-secondary/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
      <h2
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="text-3xl mb-4 text-[#B49BC7]"
      >
        Nós somos a YU
      </h2>
      <p className="max-w-lg text-base text-gray-700 mb-8">
        E vamos te ajudar a deixares o teu telemóvel de lado porque ...
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl w-full px-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col items-center"
            variants={fade}
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-20 mb-2 object-contain"
            />
            <h3
              style={{ color: '#875FAC' }}
              className="font-quicksand text-lg font-semibold mb-1"
            >
              {card.title}
            </h3>
            <p className="font-quicksand text-gray-600 text-xs">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
