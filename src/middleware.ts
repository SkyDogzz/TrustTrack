import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const protectedPaths = ['/dashboard', '/profil'];
const authPaths = ['/', '/login', '/register'];

export const config = {
    matcher: [...protectedPaths, ...authPaths],
};
export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });


    const isAuthPath = authPaths.includes(req.nextUrl.pathname);
    const isProtectedPath = protectedPaths.includes(req.nextUrl.pathname);

    if (!token && isProtectedPath) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (token && isAuthPath) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}

