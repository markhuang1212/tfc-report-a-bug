import './AppContent.css'
import { useState } from 'react'

function AppContent() {
    const [submitName, setSubmitName] = useState('')
    const [submitEmail, setSubmitEmail] = useState('')
    const [submitDescription, setSubmitDescription] = useState('')

    return (

        <div className="AppContent">
            <div className="AppContentFormContainer">
                <form className="AppContentForm">
                    <div className="AppContentFormTextField">
                        <label>Name:</label>
                        <input type="name" />
                    </div>
                    <div className="AppContentFormBugDescriptionField">
                        <label>Bug Description:</label>
                        <textarea placeholder="Describe Your Bug Here. Please provide as much detail as possible as it will help us improve our product better."></textarea>
                    </div>
                    <div className="AppContentFormTextField">
                        <label>Screenshot(optional):</label>
                        <input type="file" accept="image/*" />
                    </div>
                    <div className="AppContentFormTextField">
                        <label>Email(optional):</label>
                        <input type="email" />
                    </div>
                    <input type="submit" className="AppContentFormSubmitButton" />
                </form>
            </div>
        </div >
    )
}

export default AppContent