"use client"

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import SubscriptionForm from '@/components/SubscriptionForm';
import { useSession } from 'next-auth/react';

export default function Subscribe() {
    const { data: session, status } = useSession();

    const planType = 'monthly';
    const planName = 'Pro';

    return (
        <Elements stripe={stripePromise}>
            <SubscriptionForm planType={planType} planName={planName} session={session} />
        </Elements>
    );
};