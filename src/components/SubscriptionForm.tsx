import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';

interface SubscriptionFormProps {
    planType: string;
    planName: string;
    email: string | undefined;
}

export default function SubscriptionForm({ planType, planName, email }: SubscriptionFormProps) {
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
            const response = await axios.post('/api/subscribe', {
                paymentMethodId: id,
                planType,
                planName,
                email,
            });

            if (response.data.success) {
                alert('Subscription successful!');
            } else {
                setError('Subscription failed.');
            }
        } catch (error) {
            setError('Subscription failed.');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Subscribe'}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
}
