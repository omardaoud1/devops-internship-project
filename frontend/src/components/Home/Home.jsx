import React from "react";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";
import doctorImage from "/src/assets/doctor.png";
import dentalImage from "/src/assets/dental.png";
import image6 from "/src/assets/image6.png";
import Footer from "./../footer/footer";

function Home() {
  return (
    <div className="bg-[#f9fbff] text-[#011632]">
      <section className="bg-[#E6F6FE] rounded-b-[20px] py-10 px-4 md:px-20">
        <div className="grid md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-[#011632] text-3xl font-sans font-semibold capitalize leading-[43.2px] break-words">
              Préparez-vous pour votre meilleure expérience médicale : Prenez
              vos rendez-vous facilement !{" "}
            </h1>
            <p className="text-[#3C4959] text-2xl font-serif font-normal leading-[37.2px] tracking-[0.36px] break-words">
              Nous utilisons uniquement les meilleurs outils et technologies
              pour vous offrir une expérience de prise de rendez-vous simple et
              fiable. Réservez votre visite en toute tranquillité !
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1376F8] text-white px-6 py-2 rounded-md hover:bg-[#0c4d9d]">
                <p className="text-white text-lg font-serif font-semibold leading-[31px] tracking-[0.3px] break-words">
                  Prenez rendez-vous
                </p>
              </button>
              <div className="flex items-center space-x-2">
                <HiOutlinePhoneOutgoing className="text-[#1376F8] text-xl" />
                <div>
                  <p className="text-[#1376F8] text-sm font-sans font-semibold leading-[21.7px] tracking-[0.28px] break-words">
                    Urgence 24H
                  </p>
                  <p className="text-[#011632] text-sm font-sans font-medium leading-[21.7px] tracking-[0.28px] break-words">
                    +216 52107357
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={doctorImage}
              alt="Doctor"
              className="max-w-full h-auto ml-24"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-20 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Une Plateforme Accessible à Tous",
              description:
                "Notre site vous permet de prendre facilement rendez-vous avec des médecins de diverses spécialités, partout en Tunisie. Que ce soit pour une consultation urgente ou une visite de routine, tout se fait en quelques clics.",
              img: "/src/assets/icon1.png",
            },
            {
              title: "Simplicité et Confiance",
              description:
                "Grâce à notre système intuitif, trouvez un praticien de confiance, sélectionnez le créneau qui vous convient et gérez vos rendez-vous sans tracas. Votre santé mérite un service fiable et rapide.",
              img: "/src/assets/icon2.png",
            },
            {
              title: "Disponibilité 24/7",
              description:
                "Peu importe l’heure ou l’endroit, notre plateforme est à votre disposition. Pour les urgences ou les suivis médicaux, réservez en toute sérénité à tout moment.",
              img: "/src/assets/icon3.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {feature.img && (
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-28 h-24 block mx-auto rounded-md mb-2"
                />
              )}
              <h3 className="text-[#011632] text-center text-xl font-[Holtwood One SC]  font-normal capitalize leading-[35.2px] break-words">
                {feature.title}
              </h3>
              <p className="text-[#3C4959] text-center text-[13px] leading-[27.9px] font-[IBM Plex Sans KR] font-normal leading-[20.15px] tracking-[0.2px] break-words">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <h1 className="text-[#011632] text-4xl font-mono font-semibold capitalize leading-[52.5px] break-words">
              Nous accueillons de nouveaux patients et avons hâte de vous
              rencontrer.{" "}
            </h1>
            <p className="text-[#3C4959] text-base font-mono font-normal leading-[27.9px] tracking-[0.27px] break-words">
              Nous sélectionnons les meilleurs matériaux disponibles pour offrir
              à nos patients des soins de qualité supérieure. Détendez-vous et
              réservez votre rendez-vous en toute tranquillité
            </p>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Entrez votre numéro de téléphone"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
              />
              <button className="bg-[#1376F8] text-white px-4 py-2 rounded-md hover:bg-[#0c4d9d]">
                Soumettre
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={dentalImage}
              alt="Dental Care"
              className="w-[50%] h-[50%] bg-gradient-to-t from-[#ECECEC] to-[#ECECEC] rounded-lg ml-52"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Rencontrez Nos Spécialistes
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {[
            {
              name: "DR.Housem",
              field: "Ophtalmologie",
              img: image6,
            },
            { name: "DR.Wissem", field: "Dentisterie" },
            { name: "DR.Shiraz", field: "Pédiatrie" },
            { name: "DR.Mohsen", field: "Gynécologie" },
          ].map((specialist, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg relative overflow-hidden"
            >
              <img
                src={specialist.img}
                alt={`${specialist.name}`}
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
              />
              <div className="relative z-10">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{specialist.name}</h3>
                    <p className="text-gray-600">{specialist.field}</p>
                  </div>
                  <FaLinkedin className="text-[#000000] text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 md:px-20 bg-[#f9fbff]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Nos Clients Satisfaits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Samir Jlasi",
              review:
                "Un service rapide, efficace et accessible à tout moment, je recommande vivement !",
              stars: 5,
            },
            {
              name: "Montasar",
              review:
                "Des professionnels compétents et un site facile à utiliser pour prendre rendez-vous.",
              stars: 3,
            },
            {
              name: "Laila",
              review:
                "Excellente expérience ! J’ai pu réserver mon rendez-vous rapidement et recevoir des soins de qualité.",
              stars: 5,
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 w-full h-[290px] shadow hover:shadow-lg"
            >
              <h3 className="font-semibold">{client.name}</h3>
              <div className="mt-2 mb-2 flex justify-start">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < client.stars ? "gold" : "gray"}
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.719 1.528 8.108-7.464-3.928-7.464 3.928 1.528-8.108-6.064-5.719 8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{client.review}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
