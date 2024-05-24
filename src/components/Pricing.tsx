"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    type PricingPlan = {
        title: string;
        price: string;
        features: string[];
        popular?: boolean;
    };

    type PricingPlans = {
        [key: string]: PricingPlan[];
    };

    const pricingPlans: PricingPlans = {
        monthly: [
            {
                title: 'Gratuit',
                price: '0',
                features: ['Surveillance des avis en temps réel', 'Alertes instantanées', 'Réponses rapides']
            },
            {
                title: 'Pro',
                price: '49',
                features: ['Toutes les fonctionnalités Gratuites', 'Analyse de sentiment', 'Rapports détaillés'],
                popular: true
            },
            {
                title: 'Entreprise',
                price: '99',
                features: ['Toutes les fonctionnalités Pro', 'Support prioritaire', 'Personnalisation avancée']
            }
        ],
        annual: [
            {
                title: 'Gratuit',
                price: '0',
                features: ['Surveillance des avis en temps réel', 'Alertes instantanées', 'Réponses rapides']
            },
            {
                title: 'Pro',
                price: '490',
                features: ['Toutes les fonctionnalités Gratuites', 'Analyse de sentiment', 'Rapports détaillés'],
                popular: true
            },
            {
                title: 'Entreprise',
                price: '990',
                features: ['Toutes les fonctionnalités Pro', 'Support prioritaire', 'Personnalisation avancée']
            }
        ]
    };

    return (
        <div>
            <div className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center">Des prix simples et transparents</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">Choisissez le plan qui correspond le mieux à vos besoins. Pas de frais cachés, pas de surprises.</p>
                    <div className="mt-6 flex justify-center">
                        <div className="inline-flex rounded-md shadow-sm">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`py-2 px-4 text-sm font-medium rounded-l-md ${billingCycle === 'monthly' ? 'bg-emerald-600 text-white' : 'bg-white text-indigo-600 border border-gray-300 dark:bg-gray-700 dark:text-gray-300'}`}
                            >
                                Mensuel
                            </button>
                            <button
                                onClick={() => setBillingCycle('annual')}
                                className={`py-2 px-4 text-sm font-medium rounded-r-md ${billingCycle === 'annual' ? 'bg-emerald-600 text-white' : 'bg-white text-indigo-600 border border-gray-300 dark:bg-gray-700 dark:text-gray-300'}`}
                            >
                                Annuel
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {pricingPlans[billingCycle as keyof PricingPlans].map((plan: PricingPlan) => (
                            <div key={plan.title} className={`relative bg-gray-200/70 dark:bg-gray-700 p-6 rounded-lg shadow-md ${plan.popular ? 'border-2 border-indigo-600' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                        Le plus populaire
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{plan.title}</h3>
                                <p className="mt-4">
                                    <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">${plan.price}</span>
                                    <span className="text-base font-medium text-gray-500 dark:text-gray-400"> / {billingCycle === 'monthly' ? 'mois' : 'an'}</span>
                                </p>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Link href="#" className="block w-full text-center py-2 px-4 rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                                        Choisissez {plan.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
