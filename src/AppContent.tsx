import './AppContent.css'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
// import { FeedbackInformation } from './Feedback'
import FeedbackHandler from './FeedbackHandler'

function AppContent() {
    const [submitName, setSubmitName] = useState('')
    const [submitEmail, setSubmitEmail] = useState('')
    const [submitDescription, setSubmitDescription] = useState('')
    const [hasChosenPhotos, setHasChosenPhotos] = useState(false)
    const history = useHistory()
    const uploadButtonRef = useRef(null)

    const submitOnClick = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
        await FeedbackHandler.shared.uploadFeedback({
            feedback_email: submitEmail,
            feedback_name: submitName,
            feedback_description: submitDescription
        })
        history.push('/thanks')
    }

    const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitName(e.target.value)
    }

    const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitEmail(e.target.value)
    }

    const onDescriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSubmitDescription(e.target.value)
    }

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setHasChosenPhotos(true)
            FeedbackHandler.shared.uploadFeedbackScreenshots(e.target.files)
        }
    }

    return (
        <div className="AppContent">
            <input style={{ display: 'none' }} type="file" accept="image/*" onChange={onSelectFile} multiple ref={uploadButtonRef} />
            <div className="AppContentFormContainer">
                <form className="AppContentForm">
                    <div className="AppContentFormTextField">
                        <label>Name:</label>
                        <input type="name" onChange={onNameChanged} value={submitName} />
                    </div>
                    <div className="AppContentFormBugDescriptionField">
                        <label>Bug Description:</label>
                        <textarea placeholder="Describe Your Bug Here. Please provide as much detail as possible as it will help us improve our product better." onChange={onDescriptionChanged} value={submitDescription} />
                    </div>
                    <div className="AppContentFormSelectFileField">
                        <label>Screenshots (optional):</label>
                        <button onClick={e => {
                            e.preventDefault();
                            (uploadButtonRef as any).current.click()
                        }}>
                            {hasChosenPhotos ? 'Reselect' : 'Select Photos'}
                        </button>
                    </div>
                    <div className="AppContentFormTextField">
                        <label>Email (optional):</label>
                        <input type="email" onChange={onEmailChanged} value={submitEmail} />
                    </div>
                    <input type="submit" className="AppContentFormSubmitButton" onClick={submitOnClick} />
                </form>
            </div>
        </div >
    )
}

export default AppContent