import { FaEnvelope, FaPhone, FaLocationMapMarker } from 'react-icons/fa';
import Image from 'next/image'; // Pour les images

const ContactPage = () => {
    return (
        <div className="bg-gray-100 py-12">
            {/* Section d'Introduction */}
            <section className="bg-cover bg-center bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Contactez-nous
                    </h1>
                    <p className="text-lg text-center mb-8">
                        Nous sommes là pour vous aider.
                    </p>
                    <Image
                        src="/contact-bg.jpg" // Remplacez par votre image
                        alt="Livraison en RD Congo"
                        width={1920}
                        height={800}
                        layout="responsive"
                    />
                </div>
            </section>

            {/* Formulaire de Contact */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Envoyez-nous un message
                    </h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Nom"
                                className="block w-full px-3 py-2 border-gray-300 rounded-md text-gray-800 focus:outline-none
focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="block w-full px-3 py-2 border-gray-300 rounded-md text-gray-800 focus:outline-none
focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="block w-full px-3 py-2 border-gray-300 rounded-md text-gray-800 focus:outline-none
focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                placeholder="Votre message"
                            />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition
duration-300 ease-in-out">
                            Envoyer
                        </button>
                    </form>
                </div>
            </section>

            {/* Informations de Contact */}
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Contact
                        </h3>
                        <div className="text-gray-600 mb-4">
                            <FaEnvelope className="mr-2" />
                            africanwebservices@example.com
                        </div>
                        <div className="text-gray-600 mb-4">
                            <FaPhone className="mr-2" />
                            +243 777 123 456
                        </div>
                        {/* Ajouter d'autres informations ici */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage