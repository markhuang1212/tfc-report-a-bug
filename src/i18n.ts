import i18n, { Resource } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

const resources: Resource = {
    en: {
        translation: {
            "report a bug": "Report A Bug",
            "bug description": "Bug Description",
            "reselect": "reselect",
            "screenshots": "Screenshots",
            "your name": "Your Name",
            "contact info": "Contact Information (optional)",
            "email": "Email",
            "phone": "Mobile Number",
            "submit": "Submit",
            "describe your bug": "Describe your bug here so that we can improve our product.",
            "thank you": "Thanks for your feedback.",
            "submitting": "Submitting... Please wait",
            "submitted": "Submitted!",
            "error": "An error occurred when submitting. Please check your connection."
            
        }
    },
    zh: {
        translation: {
            "report a bug": "提交Bug",
            "bug description": "Bug描述",
            "select photos": "选择照片",
            "reselect": "重新选择",
            "screenshots": "Bug截图",
            "your name": "姓名/称呼",
            "contact info": "联系方式（选填）",
            "email": "电子邮箱/Email",
            "phone": "手机",
            "submit": " 提交",
            "describe your bug": "请尽可能细得描述你遇到的Bug。",
            "thank you": "谢谢您的反馈。",
            "submitting": "正在提交，请稍后",
            "submitted": "提交成功！",
            "error": "提交时发送错误。请检查您的网络连接。"
        }
    }
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n