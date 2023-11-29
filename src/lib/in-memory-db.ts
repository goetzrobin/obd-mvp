import {PushSubscription} from 'web-push'
import {kv} from "@vercel/kv";

type DummyDb = {
    subscriptions: PushSubscription[]
}


// fake Promise to simulate async call
export const saveSubscriptionToDb = async (
    subscription: PushSubscription
): Promise<DummyDb> => {
    await kv.set("messages", "session_token_value");
    const subscriptions = await kv.get<PushSubscription[]>("subscriptions") ?? [];
    subscriptions.push(subscription)
    await kv.set<PushSubscription[]>("subscriptions",subscriptions) ;
    return Promise.resolve({subscriptions})
}

export const getSubscriptionsFromDb = async () => {
    return await kv.get<PushSubscription[]>("subscriptions") ?? []
}