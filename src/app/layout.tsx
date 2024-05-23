import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import type { Session } from "next-auth";
import Header from "@/components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Trust Track",
  description: "Trust Track, a simple app to track your trust.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <SessionWrapper session={session}>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
