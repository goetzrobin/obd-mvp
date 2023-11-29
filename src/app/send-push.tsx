import React from 'react';
import {cnH3} from "@/components/ui/typography";
import {notificationsSupported, subscribe} from "@/lib/web-push-utils";
import {Button} from "@/components/ui/button";

const sendMessage = async (message: string) => {
    const ORIGIN = window.location.origin
    const BACKEND_URL = `${ORIGIN}/api/push?message=${message}`
    await fetch(BACKEND_URL)
}
const SendPush = () => {

    return <div className="my-10">
        <h3 className={cnH3()}>Send for Jeff</h3>
        <Button className="mt-4" onClick={() => sendMessage('Robin, you got this!')}>Send notification</Button>
    </div>
}

export default SendPush;