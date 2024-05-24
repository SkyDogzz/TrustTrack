"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="flex justify-around text-black dark:text-white">
            <Link href="/">
                <h1 className="text-2xl p-4 font-bold">Trust Track</h1>
            </Link>
            <nav>
                <ul className="flex items-center justify-center h-full gap-10 text-xl font-semibold">
                    {status === "authenticated" ? (
                        <>
                            <li>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/profil">Profil</Link>
                            </li>
                            <li>
                                <button onClick={() => signOut()}>Déconnexion</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/">Accueil</Link>
                            </li>
                            <li>
                                <Link href="/#features">Fonctionnalités</Link>
                            </li>
                            <li>
                                <Link href="/login">Se connecter</Link>
                            </li>
                            <li>
                                <Link href="/register">S'inscrire</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}