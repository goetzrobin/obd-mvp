import { NextResponse, NextRequest } from 'next/server'
import webpush, { PushSubscription } from 'web-push'
import {
    getSubscriptionsFromDb,
    saveSubscriptionToDb,
} from '@/lib/in-memory-db'

webpush.setVapidDetails(
    'mailto:test@example.com',
    process.env.VAPID_PUBLIC_KEY ?? '',
    process.env.VAPID_PRIVATE_KEY ?? '',
)

export async function POST(request: NextRequest) {
    const subscription = (await request.json()) as PushSubscription | null

    if (!subscription) {
        console.error('No subscription was provided!')
        return
    }

    const updatedDb = await saveSubscriptionToDb(subscription)

    console.log(updatedDb)

    return NextResponse.json({ message: 'success', updatedDb })
}


export async function GET(req: NextRequest) {
    const subscriptions = await getSubscriptionsFromDb()

    console.log('subscriptions found', subscriptions)

    subscriptions.forEach((s) => {
        const payload = JSON.stringify({
            title: 'One Beautiful Day!',
            body: req.nextUrl.searchParams.get('message') ?? 'Let\'s chat about it!',
        })
        webpush.sendNotification(s, payload)
    })

    return NextResponse.json({
        message: `${subscriptions.length} messages sent!`,
    })
}