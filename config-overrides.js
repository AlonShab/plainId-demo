const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');
const glob = require('glob');

module.exports = function override(config, env) {
    if (!config.devServer) config.devServer = {};
    if (!config.devServer.devMiddleware) config.devServer.devMiddleware = {};
    config.devServer.devMiddleware.writeToDisk = true; //  Ensures Webpack writes files

    const localeFiles = glob.sync('src/**/locales/**/strings.json');

    const copyPatterns = localeFiles.map((filePath) => {
        const relativePath = path.relative('src', filePath);

        const langMatch = relativePath.match(/locales\/([^/]+)/);
        const language = langMatch ? langMatch[1] : 'unknown-lang';

        let fileName = relativePath
            .replace(/\//g, '_')   // Replace `/` with `_`
            .replace(/locales_/, '') // Remove "locales_"
            .replace(`${language}_`, '') // Remove language prefix
            .replace('strings.json', '.json'); // Keep JSON extension

        fileName = fileName.replace(/_\.json$/, '.json');

        console.log(`📂 Copying ${filePath} ➝ public/locales/${language}/${fileName}`);

        return {
            source: path.resolve(__dirname, filePath),
            destination: path.resolve(__dirname, `public/locales/${language}/${fileName}`),
        };
    });

    config.plugins.push(
        new FileManagerPlugin({
            events: {
                onStart: {
                    copy: copyPatterns,
                },
            },
        })
    );

    return config;
};
