import React, { useState } from "react";
import AppHeader from "./AppHeader";
import FeedbackHandler from "./FeedbackHandler";

function AppThanksPage() {

    const [isUploading, setIsUploading] = useState(true)
    setInterval(() => {
        if (FeedbackHandler.shared.status === 'idle' && isUploading === true) {
            setIsUploading(false)
        }
        if (FeedbackHandler.shared.status === 'ongoing' && isUploading === false) {
            setIsUploading(true)
        }
    }, 200)

    return (
        <div>
            <AppHeader></AppHeader>
            <div style={{
                marginTop: '240px',
                fontSize: '28px'
            }}>
                Thanks for your feedback!<br />
                <span style={{ fontSize: '16px', color: 'gray', opacity: isUploading ? 1 : 0 }}>Uploading... Please Wait</span>
            </div>
        </div>
    )
}

export default AppThanksPage