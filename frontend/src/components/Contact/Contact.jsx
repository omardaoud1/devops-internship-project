import React, { useState } from "react";
import axios from "axios";
import Footer from "./../footer/footer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("Failed to send your form. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Prenez Contact</h1>
        <p className="text-gray-600 mt-2">
          Prenez rendez-vous dès maintenant pour recevoir les soins dont vous
          avez besoin.
        </p>
      </div>

      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-3xl">
              <i className="fas fa-clock"></i>{" "}
              
            </div>
            <div>
              <h3 className="text-lg font-bold">Heures d'ouverture</h3>
              <p className="text-gray-600">Disponible 24/7</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-3xl">
              <i className="fas fa-envelope"></i>{" "}
             
            </div>
            <div>
              <h3 className="text-lg font-bold">Adresse e-mail</h3>
              <p className="text-gray-600">Tbibek@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-3xl">
              <i className="fas fa-phone"></i>{" "}
              
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone Number</h3>
              <p className="text-gray-600">+216 00 000 000</p>
            </div>
          </div>
        </div>

        
        <div className="bg-transparent p-8 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="mt-1 block w-full h-full rounded-md border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]"
                  placeholder="Prénom"
                />
              </div>
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom de famille
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="mt-1 block w-full h-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]"
                  placeholder="Nom de famille"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]"
                placeholder="E-mail@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Numéro de téléphone
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]"
                placeholder="+216 00 000 000"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Sélectionner la date
              </label>
              <input
                type="date"
                id="date"
                className="mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600"
            >
              Prendre un rendez-vous
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
