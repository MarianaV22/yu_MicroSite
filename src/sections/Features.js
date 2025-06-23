import React, { useState } from 'react';
import { motion } from 'framer-motion';

const hats = [
  '/assets/YU_chapeu-144.png',
  '/assets/YU_chapeu-172.png',
  '/assets/YU_chapeu-176.png',
  '/assets/YU_chapeu-177.png',
  '/assets/YU_chapeu-178.png',
  '/assets/YU_chapeu-179.png',
  '/assets/YU_chapeu-33.png',
];

const clothes = [
  '/assets/YU_roupa-185.png',
  '/assets/YU_roupa-186.png',
  '/assets/YU_roupa-187.png',
  '/assets/YU_roupa-190.png',
  '/assets/YU_roupa-191.png',
  '/assets/YU_roupa-184.png',
  '/assets/YU_roupa-189.png',
];

const fade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  const [hatIdx, setHatIdx] = useState(0);
  const [clothIdx, setClothIdx] = useState(0);

  return (
    <motion.section
      id="features"
      className="min-h-screen flex flex-col items-center py-16 bg-secondary/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
    >
       <h2
          style={{ fontFamily: "'Sour Gummy', cursive" }}
          className="text-4xl mb-6 text-center md:text-left text-[#639593]"
        >
          Veste o YU
        </h2>
        

      {/* container do boneco */}
      <div className="relative w-64 h-64 mb-12">
        {/* base */}
        <img
          src="/assets/YU_base-83.png"
          alt="YU Base"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* chapéu */}
        <img
          src={hats[hatIdx]}
          alt="Chapéu"
          className="
            absolute left-1/2 top-0 w-[80%]
            transform -translate-x-1/2 -translate-y-[10%] scale-125
            object-contain
          "
        />

        {/* roupa */}
        <img
          src={clothes[clothIdx]}
          alt="Roupa"
          className="
            absolute left-1/2 bottom-0 w-[90%]
            transform -translate-x-[48%] translate-y-[2%] scale-100
            object-contain
          "
        />
      </div>

      {/* Carrossel de Chapéus */}
      <div className="w-full max-w-3xl px-4 mb-8">
        <p className="font-quicksand text-lg font-semibold text-gray-800 mb-2">
          Chapéus:
        </p>
        <div className="flex items-center space-x-4 overflow-x-auto">
          {hats.map((src, i) => (
            <button
              key={i}
              onClick={() => setHatIdx(i)}
              className="flex-shrink-0"
            >
              <img
                src={src}
                alt={`Chapéu ${i + 1}`}
                className={`w-16 h-16 object-contain border-2 rounded-lg ${
                  hatIdx === i ? 'border-accent' : 'border-transparent'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Carrossel de Roupas */}
      <div className="w-full max-w-3xl px-4">
        <p className="font-quicksand text-lg font-semibold text-gray-800 mb-2">
          Roupa:
        </p>
        <div className="flex items-center space-x-4 overflow-x-auto">
          {clothes.map((src, i) => (
            <button
              key={i}
              onClick={() => setClothIdx(i)}
              className="flex-shrink-0"
            >
              <img
                src={src}
                alt={`Roupa ${i + 1}`}
                className={`w-16 h-16 object-contain border-2 rounded-lg ${
                  clothIdx === i ? 'border-accent' : 'border-transparent'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <br></br>
      <p>Podes personalizar o teu YU como quiseres</p>

    </motion.section>
  );
}
