"use client"

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import SubscriptionForm from '@/components/SubscriptionForm';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Subscribe = () => {
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) {
            window.location.href = '/';
        }
    }, [session]);

    const planType = 'monthly';
    const planName = 'Pro';

    return (
        <Elements stripe={stripePromise}>
            <SubscriptionForm planType={planType} planName={planName} email={session?.user?.email} />
        </Elements>
    );
};

export default Subscribe;
