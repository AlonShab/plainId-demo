import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const loadTranslation = async (language, namespace) => {
    try {
        const fileName = namespace.replace(/\//g, '_'); // Match copied file names
        const filePath = `/locales/${language}/${fileName}.json`;
        console.log(`🛠 Fetching translation from: ${filePath}`);

        const response = await fetch(filePath);

        if (!response.ok) throw new Error('Failed to load JSON');

        return await response.json();
    } catch (error) {
        console.error(`Failed to load translation for ${namespace}/${language}:`, error);
        return {};
    }
};

export const init = ({lang}) => {
    return new Promise(async (resolve, reject) => {
        i18n.use(initReactI18next).init({
            lng: lang,
            suspense: true,
            resources: {}
        }, (err, t) => {
            if (err) return reject(err);
            resolve();
        });
    });
};
