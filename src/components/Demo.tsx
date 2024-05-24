import Image from "next/image";

export default function Demo() {
    return (
        <div className="text-black dark:text-white max-w-7xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-center mt-8">Démonstration</h2>
            <Image src="https://placehold.co/1200x800/EEE/31343C/png/?text=Demo\nplaceholder&font=lora" alt="hero" width={1200} height={800} />
            <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">Notre tableau de bord vous donne une vue d'ensemble de vos avis en un coup d'œil.</p>
        </div>
    )
}