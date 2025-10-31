// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Slideshow from "./components/heroSlide";
import DentistsSection from "./components/dentistSection";
import Footer from "./components/footer";
import { FaRegClock, FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import MapSection from "./components/mapSection";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Clínica Odontológica Sorriso Saudável</title>
        <meta
          name="description"
          content="Clínica odontológica especializada em tratamentos dentários"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-amber-50 border-b border-amber-200 py-2">
        <div className="container mx-auto px-6 text-center">
          <p className="text-amber-800 text-sm">
            🎨 <strong>Projeto de Portfólio</strong> - Site fictício para
            demonstração de habilidades
          </p>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section id="inicio" className="bg-blue-50">
        <div className=" mx-auto text-center">
          <Slideshow />
        </div>
      </section>

      {/*  */}

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [
                "Clínico Geral",
                "Check-up e limpeza dental regular",
                "/icon1.png",
              ],
              ["Ortodontia", "Aparelhos dentários e correções", "/icon2.png"],
              [
                "Implantes",
                "Soluções completas em implantes dentários",
                "/icon3.png",
              ],
              ["Clareamento", "Clareamento dental profissional", "/icon4.png"],
            ].map(([title, desc, iconSrc]) => (
              <div
                key={title}
                className="bg-white p-6 rounded-md hover:shadow-lg hover:bg-teal-500 hover:text-neutral-50 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-50 rounded-full group-hover:bg-teal-50 transition">
                    <div className="relative w-14 h-14 ">
                      <Image
                        src={iconSrc}
                        alt={`Ícone ${title}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-600 mb-2 ver:text-neutral-50">
                  {title}
                </h3>
                <p className="text-neutral-600 text-lg ">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-neutral-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-8 md:mb-0 w-full">
              <Image
                src="/clinica-sobre.jpg"
                alt="Clínica"
                width={1000}
                height={100}
                className="rounded-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-regular text-neutral-600 mb-6">
                Sobre Nossa Clínica
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                Há mais de 15 anos oferecemos tratamentos odontológicos de
                qualidade com tecnologia de ponta e profissionais qualificados.
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Equipe especializada</li>
                <li>Ambiente acolhedor</li>
                <li>Aparelhos de última geração</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliação */}
      <section id="avaliacao" className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto space-y-8  p-12 ">
            <div>
              <h2 className="text-2xl md:text-4xl text-neutral-600 mb-6">
                Agende uma avaliação{" "}
                <strong className="text-teal-600">Gratuita</strong> na Sorriso
                Saudável.
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                Temos dentistas capacitados para cuidar da sua saúde bucal e
                consultório odontológico completo para tratar toda a família.
              </p>
            </div>
            <div>
              <a
                href="#avaliacao"
                className="inline-block bg-teal-600 text-white font-semibold px-16 py-4 rounded-lg hover:bg-teal-800 transition-all cursor-pointer transform hover:scale-105"
              >
                Agende sua avaliação
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="equipe" className="bg-neutral-100">
        <div className=" mx-auto text-center">
          <DentistsSection />
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-regular text-center text-gray-600 mb-12">
            Fale Conosco
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <form className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      className="w-full p-4 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-neutral-600"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      className="w-full p-4 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-neutral-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Em que podemos ajudar?"
                    rows={4}
                    className="w-full p-4 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-neutral-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-md hover:bg-teal-800 transition duration-200 cursor-pointer font-semibold"
                >
                  Enviar Mensagem
                </button>
              </form>
              <div className="space-y-4 text-gray-600 my-8 lg:flex justify-between items-center">
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center hover:text-teal-600 transition-colors duration-200"
                  >
                    <FaWhatsapp size={18} color="#008080" className="mr-2" />{" "}
                    <span className="text-sm">(11) 9999-9999</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center hover:text-teal-600 transition-colors duration-200"
                  >
                    <FiMail size={18} color="#008080" className="mr-2" />{" "}
                    <span className="text-sm">contato@clinica.com</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center hover:text-teal-600 transition-colors duration-200"
                  >
                    <LuMapPin size={20} color="#008080" className="mr-2" />{" "}
                    <span className="text-sm">
                      Av. Paulista, 1000, São Paulo - SP
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center hover:text-teal-600 transition-colors duration-200"
                  >
                    <FaRegClock size={18} color="#008080" className="mr-2" />{" "}
                    <span className="text-sm">Segunda a Sexta: 8h às 18h</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white ">
              <MapSection />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Clínica Sorriso Saudável. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
