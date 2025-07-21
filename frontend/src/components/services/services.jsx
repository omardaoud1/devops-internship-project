import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import test from "./../../assets/test.png";
import Footer from "./../footer/footer";

function Services() {
  return (
    <div className="bg-[#f9fbff] text-[#011632]">
      <section className="bg-[#E6F6FE] rounded-b-[20px] py-10 px-4 md:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        <p className="text-gray-600 mt-4 text-center">
          Nous mettons à profit notre expertise et nos compétences pour offrir
          des soins de la plus haute qualité à nos patients.
        </p>
      </section>
      <section className="py-10 px-4 md:px-20 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Consultations Médicales En Ligne",
              description:
                "Accédez à des médecins qualifiés pour des conseils ou des suivis à distance.",
              img: "/src/assets/icon4.png",
            },
            {
              title: "Urgences Médicales 24/7",
              description:
                "Service de consultations urgentes, disponibles à toute heure.",
              img: "/src/assets/icon5.png",
            },
            {
              title: "Examens De Santé",
              description:
                "Bénéficiez d'examens réguliers pour un suivi de santé complet et personnalisé.",
              img: "/src/assets/icon6.png",
            },
            {
              title: "Spécialistes En Médecine",
              description:
                "Des professionnels dans divers domaines, tels que la pédiatrie, l'ophtalmologie, la gynécologie, etc.",
              img: "/src/assets/icon7.png",
            },
            {
              title: "Vaccinations Et Prévention",
              description:
                "Accédez à des services de prévention pour maintenir une bonne santé.",
              img: "/src/assets/icon8.png",
            },
            {
              title: "Suivi Post-Opératoire",
              description:
                "Un accompagnement après intervention chirurgicale pour garantir une récupération optimale.",
              img: "/src/assets/icon9.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow hover:shadow-lg w-full h-full"
            >
              {service.img && (
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-28 h-28 mx-auto rounded-md mb-4"
                />
              )}
              <h3 className="text-[#011632] text-2xl text-center font-mono font-medium capitalize leading-[28.8px] break-words">
                {service.title}
              </h3>
              <p className="text-[#3C4959] text-lg text-center font-mono font-normal leading-[27.9px] tracking-[0.27px] break-words">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-48 flex justify-center items-center">
        <div className="bg-[#011632] text-white rounded-lg p-8 flex flex-col md:flex-row items-center gap-6 max-w-7xl w-full">
          <div className="space-y-4">
            <h2 className="text-white text-3xl font-sans font-semibold capitalize leading-[45px] break-words">
              Un Site Médical Qui Va Révolutionner Les Règles Du Jeu
            </h2>
            <p>
              Nous utilisons uniquement les meilleures compétences et
              technologies disponibles pour offrir les meilleurs soins à nos
              patients.
            </p>
          </div>
          <img
            src={test}
            alt="Medical Highlight"
            className="rounded-lg max-w-full h-auto mt-4 md:mt-0"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
