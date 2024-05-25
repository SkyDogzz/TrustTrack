"use client"

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import SubscriptionForm from '@/components/SubscriptionForm';
import { useSession } from 'next-auth/react';

const Subscribe = () => {
    const { data: session } = useSession();

    const planType = 'monthly';
    const planName = 'Pro';

    return (
        <Elements stripe={stripePromise}>
            <SubscriptionForm planType={planType} planName={planName} email={session?.user?.email} />
        </Elements>
    );
};

export default Subscribe;
