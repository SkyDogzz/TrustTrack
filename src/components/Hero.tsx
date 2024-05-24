import Image from "next/image";

export default function Hero() {
    return (
        <div className="text-black dark:text-white flex max-w-7xl mx-auto my-20">
            <div className="container mx-auto p-4 flex flex-col justify-center items-start">
                <h1 className="text-6xl font-bold">Gérez votre réputation en ligne facilement et efficacement</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">Surveillez les avis, répondez rapidement, et améliorez votre image de marque</p>
                <button className="p-2 bg-blue-500 text-white rounded-md dark:bg-blue-900 hover:bg-blue-600 dark:hover:bg-blue-800 active:bg-blue-700 dark:active:bg-blue-700 mt-6">Démarrer maintenant</button>
            </div>
            <Image src="https://placehold.co/600x400/EEE/31343C/png/?text=Hero\nplaceholder&font=lora" alt="hero" width={600} height={400} />
        </div>
    );
}