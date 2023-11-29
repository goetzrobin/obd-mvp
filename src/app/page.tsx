'use client'
import {Button} from "@/components/ui/button";
import {useUserActions} from "@/lib/user/user.store";
import {cnH1, cnMuted, cnP} from "@/components/ui/typography";
import Link from "next/link";
import { Player } from '@lottiefiles/react-lottie-player';
import SendPush from "@/app/send-push";
import dynamic from "next/dynamic";
import {useState} from "react";

const WebPush = dynamic(() => import('./web-push'), {
    ssr: false, // Make sure to render component client side to access window and Notification APIs
})


export default function Home() {
    const {setUser} = useUserActions()
    const setUserAndNavigate = (name: string) => {
        setUser({name})
    }
    return (
        <main className="flex max-w-sm mx-auto min-h-screen flex-col items-center py-10 px-2">
            <div className="flex-none">
                <h1 className="font-semibold">One Beautiful Day</h1>
                <p className={cnMuted()}>Click to dive back in...</p>
            </div>
            <div className="flex flex-1 items-center mt-8 justify-around">
                <Link href="chat" onClick={() => setUserAndNavigate('Robin')}>
                        <Player
                            autoplay
                            loop
                            speed={0.5}
                            src="https://lottie.host/0d1fdb2f-8c8d-4f03-8b4b-ec35eb11e4a1/PBTdWjTu5a.json"
                            style={{ height: '400px', width: '300px' }}
                        />
                    </Link>
            </div>
            <div className="flex flex-none mt-4 gap-4">
                <Button asChild variant="secondary">
                    <Link href="chat" onClick={() => setUserAndNavigate('Jeff')}>CT</Link></Button>
                <WebPush/>
                <SendPush/>
            </div>
        </main>

    )
}
