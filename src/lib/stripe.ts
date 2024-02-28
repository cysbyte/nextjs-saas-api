import { authConfig } from './auth';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';

import { PrismaClient } from "@prisma/client";
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();

//price_1NarR3APMZcBliJSoefCKTi5

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    //@ts-ignore
    apiVersion: '2022-11-15',
});

export async function hasSubscription() {
    const session = await getServerSession(authConfig);

    if (session) {
        //@ts-ignore
        const user = await prisma.User.findFirst({ where: { email: session.user?.email?.toString() } });

        const subscriptions = await stripe.subscriptions.list({
            customer: String(user?.stripeCustomerId)
        })

        console.log(subscriptions)

        return subscriptions.data.length > 0;
    }

    return false;
}

export async function createCheckoutLink(customer: string) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/dashboard/billing?success=true",
        cancel_url: "http://localhost:3000/dashboard/billing?success=true",
        customer: customer,
        line_items: [
            {
                price: 'price_1NarR3APMZcBliJSoefCKTi5'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export async function createCustomerIfNull() {
    const session = await getServerSession(authConfig);
    console.log(session)

    if (session) {
        //@ts-ignore
        const user = await prisma.User.findFirst({ where: { email: session.user?.email } });
        console.log(user);

        if (!user?.apiKey) {
            await prisma.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    //@ts-ignore
                    apiKey: "secret_" + randomUUID()
                }
            })
        }
        if (!user?.stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: String(user?.email)
            })

            await prisma.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    stripeCustomerId: customer.id
                }
            })
        }
        //@ts-ignore
        const user2 = await prisma.User.findFirst({ where: { email: session.user?.email } });
        console.log(user2)
        return user2?.stripeCustomerId;
    }

}