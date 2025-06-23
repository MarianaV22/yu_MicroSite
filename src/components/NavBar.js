import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const items = [
    { id: 'hero',     label: 'Home' },
    { id: 'problem',  label: 'Sabias que' },
    { id: 'about',    label: 'Sobre' },
    { id: 'concept',  label: 'Como Funciona' },
    { id: 'features', label: 'YU' },
    { id: 'cta',      label: 'Experimenta' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 bg-white/90 z-50 ${open ? '' : 'backdrop-blur-md'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#hero" className="text-2xl font-display text-[#B49BC7]" style={{ fontFamily: "'Sour Gummy', cursive" }}>
          YU
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6">
          {items.map(i => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className={`pb-1 transition-all ${
                  active === i.id ? 'border-b-2 border-accent text-accent' : 'text-gray-700 hover:text-accent'
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button className="md:hidden text-2xl text-gray-700" onClick={() => setOpen(true)} aria-label="Open menu">
          <FaBars />
        </button>
      </div>

      {open && (
        <>
          {/* backdrop: leve e por baixo do drawer */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />

          {/* drawer branco: acima do backdrop */}
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white z-50 shadow-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-display text-[#B49BC7]" style={{ fontFamily: "'Sour Gummy', cursive" }}>
                YU
              </span>
              <button onClick={() => setOpen(false)} className="text-2xl text-gray-700" aria-label="Close menu">
                <FaTimes />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {items.map(i => (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-quicksand ${
                    active === i.id ? 'text-accent' : 'text-gray-700 hover:text-accent'
                  }`}
                >
                  {i.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
