import React from 'react'
import Image from 'next/image'
import {  FaRegClock, FaWhatsapp } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { LuMapPin } from 'react-icons/lu'
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'

export default function Footer() {
  return (
    <section className=' bg-neutral-200 py-20'>
     <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mx-auto px-6'>

    

        <div>
            <div className='flex items-start gap-2 pb-4'>
            <Image src="/icon1.png" width={40} height={20} alt="Icone" />
            <h2 className='text-xl text-neutral-600'>Sorriso Saudável</h2>
            </div>
            <p className='text-sm text-neutral-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, facere necessitatibus hic quis deleniti.</p>
        </div>

        <div>
            <h3 className='text-lg text-neutral-600 mb-4'>Links úteis</h3>
             <nav className="flex-col">
            <ul className="flex-col space-y-2 text-neutral-600 text-sm">
              <li>
                <a href="#inicio" className="hover:text-teal-600 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-600 transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-teal-600 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-teal-600 transition">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-teal-600 transition">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
       </div>

       <div>
            <h3 className='text-lg text-neutral-600 mb-4'>Contato</h3>
            <div className="space-y-4 text-gray-600">
                <a href='#' className='flex items-center hover:text-teal-600 transition-colors duration-200'><FaWhatsapp size={18} color='#008080' className='mr-2'/> <span className='text-sm'>(11) 9999-9999</span></a>
                <a href='#' className='flex items-center hover:text-teal-600 transition-colors duration-200'><FiMail size={18} color='#008080' className='mr-2'/> <span className='text-sm'>contato@clinica.com</span></a>
                <a href='#' className='flex items-center hover:text-teal-600 transition-colors duration-200'><LuMapPin size={20} color='#008080' className='mr-2'/> <span className='text-sm'>Av. Paulista, 1000, São Paulo - SP, 01310-100</span></a>
                <a href='#' className='flex items-center hover:text-teal-600 transition-colors duration-200'><FaRegClock size={18} color='#008080' className='mr-2'/> <span className='text-sm'>Segunda a Sexta: 8h às 18h</span></a>  
              </div>
        </div>
       <div>
            <h3 className='text-lg text-neutral-600 mb-4'>Redes Sociais</h3>
            <div className="flex space-x-4 text-gray-600">
                <a href='#' className='flex items-center hover:text-teal-800 transition-colors duration-200'><BsInstagram size={20} color='#008080' className='mr-2'/> </a>
                <a href='#' className='flex items-center hover:text-teal-800 transition-colors duration-200'><BsTiktok size={20} color='#008080' className='mr-2'/> </a>
                <a href='#' className='flex items-center hover:text-teal-800 transition-colors duration-200'><BsFacebook size={22} color='#008080' className='mr-2'/> </a>
                
              </div>
        </div>
        </div>
    </section>
  )
}
