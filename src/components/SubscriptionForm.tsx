import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';

interface SubscriptionFormProps {
    planType: string;
    planName: string;
    session: Session | null;
}

export default function SubscriptionForm({ planType, planName, session }: SubscriptionFormProps) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

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

        const { id: paymentMethodId } = paymentMethod;

        try {
            if (!session) {
                const { data } = await axios.post('/api/register', {
                    email,
                });
                await signIn('credentials', { email, password: data.password });
            }

            const { data } = await axios.post('/api/subscribe', {
                paymentMethodId,
                planType,
                planName,
                email,
            });

            if (data.success) {
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
            {!session && (
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            )}
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Subscribe'}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};
