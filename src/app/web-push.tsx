import React from 'react';
import {cnH3, cnMuted} from "@/components/ui/typography";
import {notificationsSupported, subscribe} from "@/lib/web-push-utils";
import {Button} from "@/components/ui/button";
import {LucideBell} from "lucide-react";

const WebPush = () => {
    if (!notificationsSupported()) {
        return <h3 className={cnMuted()}>Please install the PWA first!</h3>
    }

    return <Button variant="ghost" size="sm" onClick={subscribe}><LucideBell className="h-4 w-4"/></Button>
}

export default WebPush;