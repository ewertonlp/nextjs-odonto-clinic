// components/HeroSlide.tsx (Alternativo sem react-slick)
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/clinica-odontologica-1.jpg",
      title: "Seu Sorriso Perfeito",
      description: "Cuidamos do seu sorriso com excelência e carinho",
    },
    {
      image: "/clinica-odontologica-2.jpg",
      title: "Tecnologia Avançada",
      description: "Equipamentos modernos para o melhor tratamento",
    },
    {
      image: "/clinica-odontologica-3.jpg",
      title: "Profissionais Qualificados",
      description: "Especialistas dedicados ao seu bem-estar",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full mx-auto h-96 md:h-[768px] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl text-shadow-lg font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-shadow-md max-w-2xl">
              {slide.description}
            </p>
            <a href="#avaliacao"
              className="bg-teal-600 text-white font-semibold mt-4 px-8 py-4 rounded-lg hover:bg-teal-800 transition cursor-pointer"
            >
              Agende sua avaliação
            </a>
          </div>
          
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlide;
