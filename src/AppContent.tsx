import './AppContent.css'
import { useState } from 'react'
import React from 'react'

function AppContent() {
    const [submitName, setSubmitName] = useState('')
    const [submitEmail, setSubmitEmail] = useState('')
    const [submitDescription, setSubmitDescription] = useState('')

    const submitOnClick = (e:React.MouseEvent<HTMLInputElement,MouseEvent>) => {
        e.preventDefault()
        console.log("Hello!")
    }

    return (
        <div className="AppContent">
            <div className="AppContentFormContainer">
                <form className="AppContentForm">
                    <div className="AppContentFormTextField">
                        <label>Name:</label>
                        <input type="name" name="nameField" />
                    </div>
                    <div className="AppContentFormBugDescriptionField">
                        <label>Bug Description:</label>
                        <textarea placeholder="Describe Your Bug Here. Please provide as much detail as possible as it will help us improve our product better." name="descriptionField" />
                    </div>
                    <div className="AppContentFormSelectFileField">
                        <label>Screenshot(optional):</label>
                        <input type="file" accept="image/*" name="screenshotField" />
                    </div>
                    <div className="AppContentFormTextField">
                        <label>Email(optional):</label>
                        <input type="email" name="emailField" />
                    </div>
                    <input type="submit" className="AppContentFormSubmitButton" onClick={submitOnClick}/>
                </form>
            </div>
        </div >
    )
}

export default AppContent