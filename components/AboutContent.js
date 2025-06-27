"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaCode, FaPalette, FaHeadset, FaMobileAlt,
  FaChartLine, FaShieldAlt
} from 'react-icons/fa';
import back from '../../public/assets/img/bg.jpg';
import prop8 from '../../public/assets/img/prop8.jpg';
import prop11 from '../../public/assets/img/prop11.jpeg';
import team1 from '../../public/assets/img/team1.jpg';
import team2 from '../../public/assets/img/team2.jpg';
import team3 from '../../public/assets/img/team3.jpg';
import team4 from '../../public/assets/img/team4.jpg';

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function AboutContent() {
  const services = [
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous réalisons des audits énergétiques pour évaluer le potentiel solaire de votre propriété et vous conseiller sur les meilleures solutions à adopter.Nos experts vous guident à travers les démarches administratives, les aides financières disponibles et les avantages économiques de l'énergie solaire." },
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous installons des systèmes solaires thermiques pour la production d'eau chaude sanitaire et le chauffage.Cette solution écologique et économique vous permet de réduire votre dépendance aux énergies fossiles et de diminuer vos factures énergétiques" },
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous installons des systèmes solaires thermiques pour la production d'eau chaude sanitaire et le chauffage.Cette solution écologique et économique vous permet de réduire votre dépendance aux énergies fossiles et de diminuer vos factures énergétique" },
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous installons des systèmes solaires thermiques pour la production d'eau chaude sanitaire et le chauffage.Cette solution écologique et économique vous permet de réduire votre dépendance aux énergies fossiles et de diminuer vos factures énergétique" },
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous installons des systèmes solaires thermiques pour la production d'eau chaude sanitaire et le chauffage.Cette solution écologique et économique vous permet de réduire votre dépendance aux énergies fossiles et de diminuer vos factures énergétique" },
    { icon: <FaCode className="text-3xl" />, title: "Art Of Coding", description: "Nous installons des systèmes solaires thermiques pour la production d'eau chaude sanitaire et le chauffage.Cette solution écologique et économique vous permet de réduire votre dépendance aux énergies fossiles et de diminuer vos factures énergétique" },
    // ... autres services
  ];



  return (
    <div className="bg-white">
      {/* Hero Section avec animation */}
      <motion.div
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={back}
          alt="Notre équipe au travail"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="relative z-20 h-full flex flex-col justify-center text-white px-6 sm:px-12 lg:px-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-3xl"
            variants={fadeIn}
          >
            Innovateurs en solutions technologiques
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl max-w-2xl mb-8"
            variants={fadeIn}
          >
            Nous transformons les idées en réalités digitales depuis 2010
          </motion.p>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg w-fit transition-all transform hover:scale-105"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir notre histoire
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Valeurs avec animations */}
      <motion.section
        className="py-16 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs Fondatrices</h2>
            <motion.div
              className="w-24 h-1 bg-red-600 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={scaleUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Notre Histoire avec animation parallax */}
      <motion.section
        className="py-16 bg-gray-50 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={prop8}
                  alt="Notre bureau"
                  className="rounded-xl shadow-xl w-full h-auto"
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              {/* ... contenu ... */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services avec animations en cascade */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all"
                variants={scaleUp}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-red-600 mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Équipe avec animations */}


      {/* CTA avec animation */}
      <motion.section
        className="py-16 bg-red-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring" }}
          >
            Prêt à transformer votre vision en réalité ?
          </motion.h2>
          <motion.button
            className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous Contacter
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}










