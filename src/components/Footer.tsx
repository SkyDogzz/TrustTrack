import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center text-black dark:text-white">
            <nav>
                <ul className="flex items-center justify-center h-full gap-10 text-xl font-semibold">
                    <li>
                        <Link href="/about">À propos</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/cgu">Politique de confidentialité</Link>
                    </li>
                </ul>
            </nav>
            <p className="text-center text-lg">Address: placeholder</p>
            <p className="text-center text-lg">Email: placeholder</p>
            <div className="flex justify-center gap-10 items-end">
                <p>Réseaux sociaux</p>
                <ul className="flex items-center justify-center h-full gap-10 text-xl font-semibold">
                    <li>
                        <Link href="https://www.facebook.com">Facebook</Link>
                    </li>
                    <li>
                        <Link href="https://www.twitter.com">Twitter</Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com">LinkedIn</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}