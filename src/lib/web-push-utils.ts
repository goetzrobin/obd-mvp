const saveSubscription = async (subscription: PushSubscription) => {
    const ORIGIN = window.location.origin
    const BACKEND_URL = `${ORIGIN}/api/push`

    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
    })
    return response.json()
}
const registerServiceWorker = async () => {
    return navigator.serviceWorker.register('/sw.js')
}

const unregisterServiceWorkers = async () => {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((r) => r.unregister()))
}


export const notificationsSupported = () =>
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window

export const subscribe = async () => {
    await unregisterServiceWorkers()

    const swRegistration = await registerServiceWorker()

    setTimeout(async () => {
        await window?.Notification.requestPermission()

        try {
            const options = {
                applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
                userVisibleOnly: true,
            }
            const subscription = await swRegistration.pushManager.subscribe(options)

            await saveSubscription(subscription)

            console.log({subscription})
        } catch (err) {
            console.error('Error', err)
        }
    }, 300)

}