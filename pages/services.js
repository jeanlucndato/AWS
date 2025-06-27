import { FaShippingFast, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 py-12">
            {/* Section d'Accueil */}
            <section className="bg-cover bg-center bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-8">
                        Nos Services
                    </h1>
                    <p className="text-lg text-center mb-8">
                        Solutions logistiques sur mesure pour votre entreprise.
                    </p>
                    <Image
                        src="/services-hero.jpg" // Remplacez par votre image
                        alt="Livraisons en RD Congo"
                        width={1920}
                        height={800}
                        layout="responsive"
                    />
                </div>
            </section>

            {/* Section Services */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Nos Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Service 1 */}
                        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/service-delivery.jpg" // Remplacez par votre image
                                alt="Livraison rapide"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Livraison Rapide
                                </h3>
                                <p className="text-gray-600">
                                    Nous garantissons des livraisons rapides et fiables.
                                </p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4">
                                    En savoir plus
                                </button>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/service-logistics.jpg" // Remplacez par votre image
                                alt="Logistique"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Logistique Complète
                                </h3>
                                <p className="text-gray-600">
                                    Gestion de la chaîne logistique, du transport à l'entreposage.
                                </p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4">
                                    En savoir plus
                                </button>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/service-storage.jpg" // Remplacez par votre image
                                alt="Stockage"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Stockage Sécurisé
                                </h3>
                                <p className="text-gray-600">
                                    Entrepôts modernes et sécurisés pour vos produits.
                                </p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4">
                                    En savoir plus
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage