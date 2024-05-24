"use client"

import Demo from "@/components/Demo"
import Fonctionnality from "@/components/Fonctionnality"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Pricing from "@/components/Pricing"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.push('/dashboard')
    }
  }, [status, router])

  return (
    <>
      <Hero />
      <Fonctionnality />
      <Demo />
      <Pricing />
      <Footer />
    </>
  )
};
