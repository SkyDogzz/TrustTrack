"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== "authenticated") {
            router.push('/')
        }
    }, [router, status])

    return (
        <div className="text-black dark:text-white max-w-7xl mx-auto mb-20">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Tableau de bord</h1>
        </div>
    );
}