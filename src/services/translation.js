import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
