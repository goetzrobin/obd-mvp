'use client'
import {Button} from "@/components/ui/button";
import {useUserActions} from "@/lib/user/user.store";
import {cnH1, cnP} from "@/components/ui/typography";
import Link from "next/link";
import dynamic from "next/dynamic";
import SendPush from "@/app/send-push";
const WebPush = dynamic(() => import('./web-push'), {
    ssr: false, // Make sure to render component client side to access window and Notification APIs
})


export default function Home() {
    const {setUser} = useUserActions()
    const setUserAndNavigate = (name: string) => {
        setUser({name})
    }
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className={cnH1()}>One Beautiful Day</h1>
            <p className={cnP()}>Pick your name to start the chat...</p>
            <div className="flex gap-8 items-center mt-8 justify-around">
                <Button asChild variant="default">
                    <Link href="chat" onClick={() => setUserAndNavigate('Robin')}>Robin</Link></Button>

                <Button asChild variant="secondary">
                    <Link href="chat" onClick={() => setUserAndNavigate('Jeff')}>AI Jeff</Link></Button>

            </div>
            <WebPush/>
            <SendPush/>
        </main>

    )
}
