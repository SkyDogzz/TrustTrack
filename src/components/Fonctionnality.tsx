import Image from "next/image"

export default function Fonctionnality() {
    return (
        <div className="text-black dark:text-white max-w-7xl mx-auto mb-20">
            <div className="container mx-auto p-4 mt-8">
                <div>
                    <h2 className="text-5xl font-bold text-center">Surveillance des Avis en Temps Réel</h2>
                    <p className="text-lg mt-4 text-gray-700 dark:text-gray-300 text-center">Recevez des alertes pour chaque nouvel avis.</p>
                </div>
                <Image className="mx-auto" src="https://placehold.co/600x400/EEE/31343C/png/?text=Surveillance\nplaceholder&font=lora" alt="hero" width={600} height={400} />
            </div>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div>
                    <h2 className="text-5xl font-bold">Réponses Rapides</h2>
                    <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">Répondez aux avis directement depuis notre plateforme.</p>
                </div>
                <Image src="https://placehold.co/600x400/EEE/31343C/png/?text=Répondez\nplaceholder&font=lora" alt="hero" width={600} height={400} />
            </div>
            <div className="container mx-auto p-4 flex flex-row-reverse justify-between items-center">
                <div>
                    <h2 className="text-5xl font-bold">Analyse de Sentiment</h2>
                    <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">Comprenez le sentiment des avis clients.</p>
                </div>
                <Image src="https://placehold.co/600x400/EEE/31343C/png/?text=Comprenez\nplaceholder&font=lora" alt="hero" width={600} height={400} />
            </div>
        </div>
    )
}