import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ active }) {
  const [open, setOpen] = useState(false);

  const items = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Sabias que' },
    { id: 'about', label: 'Sobre' },
    { id: 'concept', label: 'Como Funciona' },
    { id: 'features', label: 'YU' },
    { id: 'cta', label: 'Experimenta' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-display text-[#B49BC7]"
          style={{ fontFamily: "'Sour Gummy', cursive" }}
        >
          YU
        </a>

        {/* Hamburger button only on mobile */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu items */}
        <ul
          className={[
            open ? 'block' : 'hidden',
            'md:flex',
            'w-full md:w-auto',
            'bg-white/90 md:bg-transparent',
            'absolute md:static',
            'top-full left-0 md:top-auto md:left-auto',
            'z-50',           // garante que fica acima do resto
            'transition-all'
          ].join(' ')}
        >
          {items.map(item => (
            <li key={item.id} className="md:ml-6">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={[
                  'block py-2 md:py-0',
                  active === item.id
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-gray-700 hover:text-accent'
                ].join(' ')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
