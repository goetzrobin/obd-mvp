import React from 'react';
import {cnH3} from "@/components/ui/typography";
import {notificationsSupported, subscribe} from "@/lib/web-push-utils";
import {Button} from "@/components/ui/button";
import {LucideSend} from "lucide-react";

const sendMessage = async (message: string) => {
    const ORIGIN = window.location.origin
    const BACKEND_URL = `${ORIGIN}/api/push?message=${message}`
    await fetch(BACKEND_URL)
}
const SendPush = () => {
    return <Button variant="secondary" size="sm" onClick={() => sendMessage('Robin, you got this!')}><LucideSend className="h-4 w-4"/></Button>
}

export default SendPush;