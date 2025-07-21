import React from "react";
import doctor1 from "/src/assets/doctor1.png";
import achraf from "/src/assets/achraf.png";
import hamdi from "/src/assets/hamdi.png";
import jasser from "/src/assets/jasser.png";
import omar from "/src/assets/omar.png";
import anwer from "/src/assets/anwer.jpg";
import Footer from "../footer/footer";
function About() {
  return (
    <div className=" text-[#011632]">
      <section className=" bg-[#E6F6FE] rounded-b-[20px] py-10 px-4 md:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">À PROPOS DE NOUS</h1>
      </section>

      <section className="py-10 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h2 className="text-[#011632] text-[42px] font-[IBM Plex Sans KR] font-semibold capitalize leading-[52.5px] break-words">
            Notre Mission
          </h2>
          <p className="text-[#3C4959] text-[18px] font-[IBM Plex Sans] font-light leading-[27.9px] tracking-[0.27px] break-words">
            Notre mission est de fournir un accès facile, rapide et sécurisé aux
            meilleurs soins médicaux, en mettant l’accent sur la qualité,
            l’expertise et la satisfaction du patient. Nous nous engageons à
            offrir un service personnalisé grâce à une plateforme intuitive,
            accessible 24/7, et à connecter nos utilisateurs avec des
            professionnels de santé qualifiés pour répondre à tous leurs besoins
            médicaux.
          </p>
          <p className="text-[#011632] text-[24px] font-[IBM Plex Sans KR] font-medium capitalize leading-[28.8px] break-words">
            Plus Que Tout, Nous Aimons Créer Des Sourires Heureux Et En Bonne
            Santé
          </p>
          <p className="text-[#3C4959] text-[18px] font-[IBM Plex Sans] font-light leading-[27.9px] tracking-[0.27px] break-words">
            garantir à chaque patient une expérience positive, en offrant des
            soins de qualité qui contribuent à leur bien-être et à leur
            confiance. Chaque sourire que nous aidons à transformer est une
            victoire pour nous, car nous croyons que chaque bouche-dentaire joue
            un rôle essentiel dans la qualité de vie de chacun.
          </p>
        </div>
        <img
          src={doctor1}
          alt="Notre Mission"
          className="rounded-lg w-[453px] h-[603px] object-cover ml-auto hidden md:block"
        />
      </section>

      <section className="py-10 px-4 md:px-20">
        <h2 className="text-[#011632] text-[42px] font-semibold font-[IBM Plex Sans KR] capitalize leading-[52.5px] break-words text-center">
          Rencontrez Nos Spécialistes
        </h2>
        <p className="text-[#3C4959] text-[18px] font-[IBM Plex Sans] font-light leading-[27.9px] tracking-[0.27px] break-words text-center">
          Nous utilisons uniquement les meilleures compétences et technologies
          disponibles pour offrir les meilleurs soins médicaux à nos patients
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {[
            {
              name: "Dr. Achraf",
              specialty: "spécialisé en ophtalmologie",
              description:
                "Diplômé de la Faculté de Médecine de Monastir, le Dr Achraf s'est spécialisé en ophtalmologie. Passionné par les technologies avancées et les soins oculaires, il utilise les dernières innovations pour offrir à ses patients une prise en charge optimale.",
              img: achraf,
            },
            {
              name: "Dr. Anwer",
              specialty: "spécialisé en chirurgie",
              description:
                " Dr. Anwer est diplômé de la Faculté de Médecine de Tunis. Fort de plusieurs années d’expérience, il est reconnu pour son approche humaine et professionnelle dans le traitement des maladies cardiaques.",
              img: anwer,
            },
            {
              name: "Dr. Hamdi",
              specialty: "spécialisé en cardiologie",
              description:
                "Le Dr Hamdi est diplômé de la Faculté de Médecine de Tunis. Fort de plusieurs années d’expérience, il est reconnu pour son approche humaine et professionnelle dans le traitement des maladies cardiaques.",
              img: hamdi,
            },
            {
              name: "Dr. Jasser",
              specialty: "spécialisé en pédiatrie",
              description:
                "Après avoir obtenu son diplôme à la Faculté de Médecine de Sfax, le Dr Jasser s’est spécialisé en pédiatrie. Il offre des soins adaptés et personnalisés aux plus jeunes.",
              img: jasser,
            },
          ].map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg flex flex-col md:flex-row gap-0"
            >
              <div className="flex justify-center md:justify-start w-full mb-4 md:mb-0">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-[310px] h-[350px] object-cover ml-auto"
                />
              </div>
              <div className="flex flex-col justify-start md:justify-start text-left w-full ml-4">
                <h3 className="font-semibold text-xl text-[#011632]">
                  {doctor.name}
                </h3>
                <p className="text-[#25B4F8] text-md italic">
                  {doctor.specialty}
                </p>
                <p className="text-[#3C4959] text-[18px] font-[IBM Plex Sans] font-normal leading-[27.9px] tracking-[0.27px] break-words">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 md:px-20">
        <div className="w-full h-full flex flex-col justify-center items-center gap-[70px]">
          <div className="w-full max-w-[592px] h-[129px] flex flex-col justify-start items-center text-center">
            <div className="text-[#011632] text-[42px] font-semibold font-[IBM_Plex_Sans_KR] leading-[52.5px] capitalize break-words">
              Dernière technologie
            </div>
            <div className="w-[361px] h-[4px] bg-[#25B4F8]"></div>
            <div className="w-full text-[#3C4959] text-[18px] font-[IBM_Plex_Sans] font-normal leading-[27.9px] tracking-[0.27px] break-words">
              Grâce aux avancées technologiques majeures, la médecine permet de
              traiter les cas les plus complexes en moins de temps et avec une
              efficacité accrue.
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] w-full">
            <img
              className="w-full max-w-[522px] h-auto bg-gradient-to-t from-[#ECECEC] to-[#ECECEC] rounded-[7.37px]"
              src={omar}
              alt="Technology Image"
            />
            <div className="flex flex-col justify-start items-center md:items-start gap-[20px] w-full max-w-[728px]">
              <div className="text-[#011632] text-[24px] font-medium font-[IBM_Plex_Sans_KR] leading-[28.8px] capitalize break-words text-center md:text-left">
                L'avenir de la médecine est numérique
              </div>
              <div className="text-[#3C4959] text-[18px] font-[IBM_Plex_Sans] font-normal leading-[27.9px] tracking-[0.27px] break-words text-center md:text-left">
                L'avenir de la médecine est numérique, avec des technologies de
                plus en plus avancées qui transforment la manière dont les soins
                sont prodigués. L'intégration de solutions numériques permet une
                gestion plus précise des données des patients, des diagnostics
                plus rapides et des traitements plus personnalisés. Grâce à
                l'intelligence artificielle, à la télémédecine et à d'autres
                innovations, la médecine devient plus accessible, plus efficace
                et moins invasive, promettant ainsi une meilleure prise en
                charge pour les patients du monde entier.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-20 text-center space-y-4">
        <h2 className="w-full h-full text-center text-[#011632] text-[42px] font-semibold font-[IBM_Plex_Sans_KR] leading-[52.5px] capitalize break-words">
          Nous Accueillons De Nouveaux Patients Et Avons Hâte De Vous
          Rencontrer.
        </h2>
        <p className="w-full text-center text-[#3C4959] text-[18px] font-normal font-[IBM_Plex_Sans] leading-[27.9px] tracking-[0.27px] break-words">
          Nous utilisons uniquement les meilleures technologies et compétences
          disponibles pour offrir les meilleurs soins à nos patients.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default About;
