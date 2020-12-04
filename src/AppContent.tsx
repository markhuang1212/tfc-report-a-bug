import './AppContent.css'
import { useState } from 'react'
import React from 'react'

function AppContent() {
    const [submitName, setSubmitName] = useState('')
    const [submitEmail, setSubmitEmail] = useState('')
    const [submitDescription, setSubmitDescription] = useState('')

    const submitOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
        window.location.href = '/thanks'
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

    const onSelectFile = () => {
        console.log("File Selected!")
    }

    return (
        <div className="AppContent">
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
                        <input type="file" accept="image/*" onChange={onSelectFile} multiple/>
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