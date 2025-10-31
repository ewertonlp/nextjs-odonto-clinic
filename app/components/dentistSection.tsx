import Image from "next/image";

const DentistsSection = () => {
  const dentists = [
    {
      name: "Dr. Carlos Silva",
      specialty: "Ortodontista",
      description: "15 anos de experiência em ortodontia",
      image: "/dentists/dr-carlos.jpg"
    },
    {
      name: "Dra. Ana Costa", 
      specialty: "Implantodontista",
      description: "Especialista em implantes dentários",
      image: "/dentists/dra-ana.jpg"
    },
    {
      name: "Dr. Marcelo Oliveira",
      specialty: "Clínico Geral", 
      description: "12 anos de experiência em clínica geral",
      image: "/dentists/dr-marcelo.jpg"
    },
    {
      name: "Dra. Juliana Santos",
      specialty: "Odontopediatra",
      description: "Especialista em atendimento infantil", 
      image: "/dentists/dra-juliana.jpg"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-teal-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-regular text-neutral-50 mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-neutral-50">
            Profissionais qualificados dedicados ao seu sorriso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist) => (
            <div key={dentist.name} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition duration-300">
                <Image
                  src={dentist.image}
                  alt={`Foto do ${dentist.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-2">
                {dentist.name}
              </h3>
              <p className="text-teal-50 font-semibold mb-2">
                {dentist.specialty}
              </p>
              <p className="text-neutral-100 text-sm">
                {dentist.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentistsSection;