import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} YU. Todos os direitos reservados.</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a href="#hero" className="hover:text-gray-900">Home</a>
          <a href="#about" className="hover:text-gray-900">Sobre</a>
          <a href="#cta" className="hover:text-gray-900">Experimentar</a>
          {/* Link para Instagram */}
          <a
            href="https://www.instagram.com/yu_mctw/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
