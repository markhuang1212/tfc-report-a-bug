import './AppContent.css'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
// import { FeedbackInformation } from './Feedback'
import FeedbackHandler from './FeedbackHandler'
import { useTranslation } from 'react-i18next'

function AppContent() {
    const [submitName, setSubmitName] = useState('')
    const [submitPhone, setSubmitPhone] = useState('')
    const [submitEmail, setSubmitEmail] = useState('')
    const [submitDescription, setSubmitDescription] = useState('')
    const [hasChosenPhotos, setHasChosenPhotos] = useState(false)
    const history = useHistory()
    const uploadButtonRef = useRef(null)
    const { t } = useTranslation()

    const submitOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            await FeedbackHandler.shared.uploadFeedback({
                feedback_email: submitEmail,
                feedback_name: submitName,
                feedback_description: submitDescription,
                feedback_phone: submitPhone
            })
            history.push('/thanks')
        } catch {
            window.alert(t('error'))
            FeedbackHandler.shared.resetHandler()
        }
    }

    const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitName(e.target.value)
    }

    const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitEmail(e.target.value)
    }

    const onPhoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitPhone(e.target.value)
    }

    const onDescriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSubmitDescription(e.target.value)
    }

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setHasChosenPhotos(true)
            for (let i = 0; i < e.target.files.length; i++) {
                FeedbackHandler.shared.uploadFeedbackScreenshot(e.target.files[i])
            }
        }
    }

    return (
        <div className="AppContent">
            <input style={{ display: 'none' }} type="file" accept="image/*" onChange={onSelectFile} multiple ref={uploadButtonRef} />
            <div className="AppContentFormContainer">
                <form className="AppContentForm">
                    <div className="AppContentFormBugDescriptionField">
                        <label>{t('bug description')}</label>
                        <textarea placeholder={t('describe your bug')} onChange={onDescriptionChanged} value={submitDescription} />
                    </div>
                    <div className="AppContentFormSelectFileField">
                        <label>{t('screenshots')}:</label>
                        <span>{hasChosenPhotos ? t('selected') : ''}</span>
                        <button onClick={e => {
                            e.preventDefault();
                            (uploadButtonRef as any).current.click()
                        }}>
                            {hasChosenPhotos ? t('reselect') : t('select photos')}
                        </button>
                    </div>
                    <div style={{ color: 'gray', fontWeight: 500 }}>{t('contact info')}</div>
                    <div className="AppContentFormTextField">
                        <label>{t('your name')}:</label>
                        <input type="name" onChange={onNameChanged} value={submitName} />
                    </div>
                    <div className="AppContentFormTextField">
                        <label>{t('email')}:</label>
                        <input type="email" onChange={onEmailChanged} value={submitEmail} />
                    </div>
                    <div className="AppContentFormTextField">
                        <label>{t('phone')}:</label>
                        <input type="phone" onChange={onPhoneChanged} value={submitPhone} />
                    </div>
                    <button className="AppContentFormSubmitButton" onClick={submitOnClick}>{t('submit')}</button>
                    <div className="AppContentBottomBarText">
                        {t('product name')}
                    </div>
                </form>
            </div>
        </div >
    )
}

export default AppContent