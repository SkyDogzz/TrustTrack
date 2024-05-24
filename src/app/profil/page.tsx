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
        console.log(session)
    }, [router, status])


    return (
        <div className="text-black dark:text-white max-w-7xl mx-auto mb-20">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">User</h1>

            <div className="flex flex-col gap-4 mt-8">
                <p className="text-lg">Name: {session?.user?.name}</p>
                <p className="text-lg">Email: {session?.user?.email}</p>
                <p className="text-lg">ID: {session?.user?.id}</p>
                <p className="text-lg">Plan: {session?.user?.plan}</p>
                <p className="text-lg">Price: {session?.user?.price}</p>
            </div>
        </div>
    );
}