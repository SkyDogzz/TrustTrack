import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import plans from '@/data/plans.json';

type PricingPlan = {
    title: string;
    price: string;
    features: string[];
    popular?: boolean;
};

type PricingPlans = {
    [key: string]: PricingPlan[];
};

const pricingPlans: PricingPlans = plans;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-04-10',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { paymentMethodId, planType, planName, email } = req.body;

        console.log('paymentMethodId:', paymentMethodId, 'planType:', planType, 'planName:', planName, 'email:', email);

        const selectedPlan = (pricingPlans as PricingPlans)[planType].find((plan: PricingPlan) => plan.title === planName);

        console.log('selectedPlan:', selectedPlan);

        if (!selectedPlan) {
            return res.status(400).json({ error: 'Invalid plan selected' });
        }

        try {
            const customer = await stripe.customers.create({
                email,
                payment_method: paymentMethodId,
                invoice_settings: {
                    default_payment_method: paymentMethodId,
                },
            });

            const subscription = await stripe.subscriptions.create({
                customer: customer.id,
                items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product: selectedPlan.title,
                            unit_amount: parseInt(selectedPlan.price) * 100,
                            recurring: {
                                interval: planType === 'monthly' ? 'month' : 'year',
                            },
                        },
                    },
                ],
                expand: ['latest_invoice.payment_intent'],
            });

            const latestInvoice = subscription.latest_invoice as Stripe.Invoice;
            const paymentIntent = latestInvoice.payment_intent as Stripe.PaymentIntent;

            res.status(200).json({
                success: true,
                subscriptionId: subscription.id,
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.log('Error:', errorMessage);
            res.status(500).json({ error: errorMessage });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};