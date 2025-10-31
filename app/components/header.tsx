"use client"
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="text-2xl font-regular text-teal-600">
              Sorriso Saudável
            </h1>
          </Link>

          <div className="flex items-center space-x-6">
            {/* Botão Agendar - Sempre visível */}
            <a
              href="#avaliacao"
              className="bg-teal-600 px-4 py-2 rounded-md text-white hover:bg-teal-800 transition-all duration-300 whitespace-nowrap text-sm md:text-base"
            >
              Agende sua avaliação
            </a>

            {/* Menu Desktop - Na mesma linha */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8 text-neutral-600">
                <li>
                  <a href="#inicio" className="hover:text-teal-500 transition">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-teal-500 transition">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-teal-500 transition">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#equipe" className="hover:text-teal-500 transition">
                    Equipe
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-teal-500 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            {/* Botão Menu Mobile */}
            <button
              className="lg:hidden p-2 text-neutral-600 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile - Abaixo em mobile */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
          <ul className="flex flex-col space-y-3 text-neutral-600 border-t border-gray-100 pt-4">
            <li>
              <a 
                href="#inicio" 
                className="block py-2 hover:text-teal-500 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li>
              <a 
                href="#servicos" 
                className="block py-2 hover:text-teal-500 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="#sobre" 
                className="block py-2 hover:text-teal-500 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="#equipe" 
                className="block py-2 hover:text-teal-500 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </a>
            </li>
            <li>
              <a 
                href="#contato" 
                className="block py-2 hover:text-teal-500 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;