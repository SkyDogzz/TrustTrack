// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string;
            email?: string;
            image?: string;
            plan?: string;
            price?: string;
        }
    }

    interface JWT {
        id?: string;
    }
}
