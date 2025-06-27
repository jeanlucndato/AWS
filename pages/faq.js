import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Questions fréquemment posées</h2>
                    <p className="text-gray-600 mt-4">
                        Nous avons rassemblé les questions les plus courantes pour vous aider.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* FAQ Item 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <h3 className="px-6 py-4 bg-gray-200 text-lg font-semibold">
                            Pourquoi choisir African Web Services ?
                        </h3>
                        <p className="px-6 py-4">
                            African Web Services est votre partenaire idéal pour la livraison de vos produits depuis la Belgique
                            vers la République Démocratique du Congo. Nous combinons une logistique fiable, des produits de qualité et un
                            service client attentif.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition
duration-300 ease-in-out">
                            Détails
                        </button>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <h3 className="px-6 py-4 bg-gray-200 text-lg font-semibold">
                            Quels types de produits livrez-vous ?
                        </h3>
                        <p className="px-6 py-4">
                            Nous livrons une large gamme de produits, allant des articles de consommation courante aux produits
                            spécialisés. Contactez-nous pour connaître la disponibilité spécifique.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition
duration-300 ease-in-out">
                            Détails
                        </button>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <h3 className="px-6 py-4 bg-gray-200 text-lg font-semibold">
                            Quels sont les délais de livraison ?
                        </h3>
                        <p className="px-6 py-4">
                            Les délais de livraison varient en fonction de votre localisation et de la disponibilité des
                            produits. Nous vous informerons des délais précis lors du processus de commande.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition
duration-300 ease-in-out">
                            Détails
                        </button>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <h3 className="px-6 py-4 bg-gray-200 text-lg font-semibold">
                            Comment puis-je passer une commande ?
                        </h3>
                        <p className="px-6 py-4">
                            Passer une commande est simple ! Choisissez vos produits, fournissez les informations de livraison
                            et de paiement, et nous nous occupons du reste.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition
duration-300 ease-in-out">
                            Détails
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ