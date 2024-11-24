/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLanguage: 'zh',
    supportedLanguages: ['en', 'zh'],
    i18next: {
        debug: true,
        initImmediate: false,
        fallbackLng: 'zh',
    },
};
