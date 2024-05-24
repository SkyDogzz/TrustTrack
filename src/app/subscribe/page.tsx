"use client"

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import SubscriptionForm from '@/components/SubscriptionForm';
import plans from '@/data/plans.json';

const Subscribe = () => {
    const planType = 'monthly';
    const planName = 'Pro';

    return (
        <Elements stripe={stripePromise}>
            <SubscriptionForm planType={planType} planName={planName} />
        </Elements>
    );
};

export default Subscribe;
