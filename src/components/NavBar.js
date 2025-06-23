import React from 'react';
//import Logo from '../assets/logo.png';// ajusta o caminho conforme a tua estrutura

export default function NavBar({ active }) {
  const items = [
    { id: 'hero', label: '...' },
    { id: 'problem', label: 'Sabias que ' },
    { id: 'about', label: 'Sobre' },
    { id: 'concept', label: 'Como Funciona' },
    { id: 'features', label: 'YU' },
    { id: 'cta', label: 'Experimenta' }
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
      
        

        <ul className="flex gap-6">
          {items.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`
                  pb-1 transition-all
                  ${active === item.id
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-gray-700 hover:text-accent'}
                `}
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
