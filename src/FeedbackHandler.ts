import { FeedbackInformation } from "./Feedback"

const uri = window.location.host

class FeedbackHandler {

    feedback_id!: string

    status: 'ongoing' | 'idle'

    static shared = new FeedbackHandler()

    constructor() {
        this.getFeedbackId().then(id => {
            this.feedback_id = id
        })
        this.status = 'idle'
    }

    async getFeedbackId() {
        const fetch_id_response = await window.fetch(`${uri}/generateFeedbackId`)
        const fetch_id_data = await fetch_id_response.json()
        return fetch_id_data.data.feedback_id
    }

    async uploadFeedbackScreenshots(files: FileList) {
        this.status = 'ongoing'
        for (let i = 0; i < files.length; i++) {
            await window.fetch(`${uri}/feedbackScreenshots`, {
                method: 'post',
                headers: {
                    feedback_id: this.feedback_id,
                    screenshot_name: files[i].name
                },
                body: files[i]
            })
        }
        this.status = 'idle'
    }

    async uploadFeedback(feedback: FeedbackInformation) {
        this.status = 'ongoing'
        await window.fetch(`${uri}/feedbackInfo`, {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...feedback,
                feedback_id: this.feedback_id
            } as FeedbackInformation)
        })
        this.status = 'idle'
    }
}

export default FeedbackHandler