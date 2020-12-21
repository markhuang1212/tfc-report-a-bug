import 'whatwg-fetch'
import { FeedbackInformation } from "./Feedback"
// import Env from './env.json'

const isDevEnv = () => {
    const uri = window.location.hostname
    return uri === 'localhost' || uri === '127.0.0.1' || uri.includes('192.168')
}

const protocol = window.location.protocol
const uri = window.location.hostname
const port = isDevEnv() ? 3001 : window.location.port

class FeedbackHandler {

    feedback_id!: string

    job_queue_length = 0

    static shared = new FeedbackHandler()

    constructor() {
        this.getFeedbackId().then(id => {
            this.feedback_id = id
        })
        // this.status = 'idle'
    }

    async resetHandler() {
        this.job_queue_length = 0
        this.feedback_id = await this.getFeedbackId()
    }

    async getFeedbackId() {
        const fetch_id_response = await window.fetch(`${protocol}//${uri}:${port}/generateFeedbackId`)
        const fetch_id_data = await fetch_id_response.json()
        return fetch_id_data.data.feedback_id
    }

    async uploadFeedbackScreenshot(file: File) {
        this.job_queue_length++
        console.log(`job queue length: ${this.job_queue_length}`)
        await window.fetch(`${protocol}//${uri}:${port}/feedbackScreenshots`, {
            method: 'POST',
            headers: {
                feedback_id: this.feedback_id,
                screenshot_name: file.name
            },
            body: file
        })
        this.job_queue_length--
        console.log(`job queue length: ${this.job_queue_length}`)
    }

    async uploadFeedback(feedback: FeedbackInformation) {
        this.job_queue_length++
        console.log(`job queue length: ${this.job_queue_length}`)
        await window.fetch(`${protocol}//${uri}:${port}/feedbackInfo`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...feedback,
                feedback_id: this.feedback_id
            } as FeedbackInformation)
        })
        this.job_queue_length--
        console.log(`job queue length: ${this.job_queue_length}`)
    }
}

export default FeedbackHandler