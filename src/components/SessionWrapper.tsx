"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import type { Session } from "next-auth";

interface SessionWrapperProps {
    children: React.ReactNode;
    session: Session | null;
}

export default function SessionWrapper({ session, children }: SessionWrapperProps) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}