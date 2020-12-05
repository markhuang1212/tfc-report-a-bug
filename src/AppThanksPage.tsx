import React, { useState } from "react";
import AppHeader from "./AppHeader";
import FeedbackHandler from "./FeedbackHandler";

function AppThanksPage() {

    const [isUploading, setIsUploading] = useState(FeedbackHandler.shared.job_queue_length == 0 ? false : true)
    setInterval(() => {
        if (FeedbackHandler.shared.job_queue_length == 0 && isUploading === true) {
            setIsUploading(false)
        }
        if (FeedbackHandler.shared.job_queue_length >= 1 && isUploading === false) {
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