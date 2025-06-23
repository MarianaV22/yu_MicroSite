import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Encontra um parceiro',
    desc: 'Scaneia o QR ou partilha o código e cria uma ligação mútua.',
  },
  {
    id: 2,
    title: 'Atribui tarefas offline',
    desc: 'Define desafios divertidos e cumpre-os longe do ecrã.',
  },
  {
    id: 3,
    title: 'Ganha estrelas',
    desc: 'Conquista estrelas e desbloqueia personalizações para a tua mascote.',
  },
];

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Concept() {
  return (
    <motion.section
      id="concept"
      className="min-h-screen flex flex-col md:flex-row items-center py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* ← Imagem “fui.png” do lado esquerdo */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        variants={fade}
        custom={0}
      >
        <img
          src="/assets/fun.png"
          alt="FUI mockup"
          className="w-4/5 md:w-full rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Funcionalidades à direita */}
      <div className="md:w-1/2 px-6">
        <h2
          style={{ fontFamily: "'Sour Gummy', cursive" }}
          className="text-4xl text-gray-800 mb-6 text-center md:text-left"
        >
          Como Funciona
        </h2>
        <div className="space-y-8">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i + 1}
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold text-lg">
                  {f.id}
                </div>
              </div>
              <div className="ml-4 text-left">
                <h3 className="font-quicksand text-xl font-semibold text-[#875FAC] mb-1">
                  {f.title}
                </h3>
                <p className="font-quicksand text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
