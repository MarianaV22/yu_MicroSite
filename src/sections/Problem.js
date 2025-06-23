import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { val: '4h', title: 'Tempo de ecrã', desc: 'Sabias que os Adolescentes dos 12 aos 17 anos passam em média 4h diárias nos ecrãs' },
  { val: '27,1%', title: 'Saúde Mental', desc: 'Sabias que 27,1% dos adolescentes demonstram sintomas de ansiedade e depressão' },
  { val: '41%', title: 'Falta Motivação', desc: 'Sabias que 41% dos adolescentes já tentaram reduzir o tempo de ecrã mas falharam' }
];

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Problem() {
  return (
    <motion.section
      id="problem"
      className="relative z-10 flex flex-col items-center py-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
      <h2
        style={{ fontFamily: "'Sour Gummy', cursive" }}
        className="text-4xl text-[#B6CE9E] mb-8"
      >
        Sabias que …
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl">
        {data.map((d, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            variants={fade}
          >
            <div
              style={{ fontFamily: "'Sour Gummy', cursive" }}
              className="text-4xl font-display mb-3 text-[#758862]"
            >
              {d.val}
            </div>
            <h3 className="font-quicksand text-lg font-semibold text-gray-800 mb-1">
              {d.title}
            </h3>
            <p className="font-quicksand text-gray-600 text-sm">
              {d.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
