"use client"

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
        });

        if (error) {
            setError(error.message || 'An unexpected error occurred.');
            setLoading(false);
            return;
        }

        const { id } = paymentMethod;

        try {
            const response = await axios.post('/api/charge', {
                paymentMethodId: id,
            });

            if (response.data.success) {
                alert('Payment successful!');
            } else {
                setError('Payment failed.');
            }
        } catch (error) {
            setError('Payment failed.');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};