import React from 'react';
import {cnH3} from "@/components/ui/typography";
import {notificationsSupported, subscribe} from "@/lib/web-push-utils";
import {Button} from "@/components/ui/button";

const WebPush = () => {
    if (!notificationsSupported()) {
        return <h3 className={cnH3()}>Please install the PWA first!</h3>
    }

    return <div className="my-10">
        <h3 className={cnH3()}>Subscribe for Robin</h3>
        <Button className="mt-4" onClick={subscribe}>Ask permission and subscribe!</Button>
    </div>
}

export default WebPush;