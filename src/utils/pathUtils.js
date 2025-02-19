export const getComponentTranslationPath = (importMetaUrl) => {
    // Convert import.meta.url to a file path
    let filePath = new URL(importMetaUrl).pathname;

    // Remove leading `/` on Unix-based systems
    if (filePath.startsWith('/')) {
        filePath = filePath.substring(1);
    }

    // Extract path relative to `src/`
    const srcIndex = filePath.indexOf('src/');
    if (srcIndex === -1) {
        console.warn('⚠️ Could not determine component path:', filePath);
        return null;
    }
    let relativePath = filePath.substring(srcIndex + 4); // Skip `src/`

    // Remove file extension `.js` or `.jsx`
    relativePath = relativePath.replace(/\.[jt]sx?$/, '').split('/').slice(0, -1).join('/');

    // Convert `/` to `_` to match the translation filename format
    return relativePath.replace(/\//g, '_');
};