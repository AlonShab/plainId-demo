import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getComponentTranslationPath} from '../utils/pathUtils';

export const useLocalTranslation = (importMetaUrl) => {
    const translationPath = getComponentTranslationPath(importMetaUrl);

    if (!translationPath) return {t: (key) => key, i18n: {}}; // Fallback object if path isn't found

    const translationUtil = useTranslation(translationPath, {useSuspense: true});
    const {i18n} = translationUtil;

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadTranslationFile = async () => {
            try {
                setIsLoaded(false);
                const response = await fetch(`/locales/${i18n.language}/${translationPath}.json`, {
                    cache: "force-cache"
                });
                const translations = await response.json();
                i18n.addResourceBundle(i18n.language, translationPath, translations, true, true);

                setIsLoaded(true);
            } catch (error) {
                console.error(`Failed to load translations for ${translationPath}:`, error);
            }
        };

        loadTranslationFile();

        return () => {
            i18n.removeResourceBundle(i18n.language, translationPath);
        };
    }, [i18n.language, translationPath]);

    return translationUtil
};
