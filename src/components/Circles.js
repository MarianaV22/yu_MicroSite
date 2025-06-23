import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const baseCircles = [
  { size: 120, top: '80%', left: '5%',   color: 'DFD7E8', factor: 0.1 },
  { size: 100, top: '20%', right: '10%', color: '875FAC', factor: 0.15 },
  { size:  80, bottom: '15%', left: '30%',color: '8ECCDB', factor: 0.12 },
  { size:  70, top: '60%', right: '30%', color: 'BBE1B8', factor: 0.08 },
  { size: 110, top: '25%', left: '70%',  color: 'FBCFE8', factor: 0.13 },
  { size:  90, bottom: '20%', right: '50%',color: 'FBCFE8', factor: 0.09 },
  { size: 130, top: '50%', left: '15%',  color: 'FFC48D', factor: 0.11 },
  { size:  70, bottom: '30%', right: '5%', color: 'FFC48D', factor: 0.07 }
];
const sectionCircles = {
  hero:    [baseCircles[0], baseCircles[4], baseCircles[6]],
  problem: [baseCircles[1], baseCircles[2], baseCircles[7]],
  about:   [baseCircles[2], baseCircles[4], baseCircles[5]],
  concept: [baseCircles[0], baseCircles[3], baseCircles[6]],
  features:[baseCircles[1], baseCircles[5], baseCircles[7]],
  cta:     [baseCircles[3], baseCircles[4], baseCircles[6]]
};

function FloatingCircle({ cfg, scrollY }) {
  const y = useTransform(
    scrollY, [0, window.innerHeight * 1.2], [0, window.innerHeight * cfg.factor], { clamp: false }
  );
  return (
    <motion.div
      style={{
        position: 'fixed',
        top:      cfg.top    || 'auto',
        bottom:   cfg.bottom || 'auto',
        left:     cfg.left   || 'auto',
        right:    cfg.right  || 'auto',
        width:    `${cfg.size}px`, height: `${cfg.size}px`,
        borderRadius: '50%',
        backgroundColor: `#${cfg.color}4D`,
        y, zIndex: 0
      }}
      className="pointer-events-none"
    />
  );
}
export default function Circles({ active }) {
  const { scrollY } = useViewportScroll();
  const configs = sectionCircles[active] || [];
  return configs.map((cfg,i) => <FloatingCircle key={i} cfg={cfg} scrollY={scrollY}/>);
}