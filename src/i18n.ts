import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import Env from './env.json'

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: Env.i18n,
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n