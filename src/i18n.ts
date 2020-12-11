import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import LangJson from './lang.json'

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: LangJson.i18n,
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n