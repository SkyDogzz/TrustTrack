import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t-2 border-gray-200 dark:border-gray-800 p-20">
            <nav>
                <ul className="flex justify-center gap-10">
                    <li>
                        <Link href="/about">
                            <div className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white">À propos</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <div className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white">Contact</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cgu">
                            <div className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white">Politique de confidentialité</div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-4 text-center">
                <p className="text-gray-400 dark:text-gray-400">Address: placeholder</p>
                <p className="text-gray-400 dark:text-gray-400">Email: placeholder</p>
            </div>
            <div className="mt-4 text-center">
                <p className="text-black dark:text-white">Réseaux sociaux</p>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white" href="https://www.facebook.com">Facebook</Link>
                    </li>
                    <li>
                        <Link className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white" href="https://www.twitter.com">Twitter</Link>
                    </li>
                    <li>
                        <Link className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white" href="https://www.linkedin.com">LinkedIn</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
