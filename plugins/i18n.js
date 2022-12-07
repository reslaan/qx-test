import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// localStorage.getItem('lang');
export default ({ app }) => {

  // inject our i18n instance into the app root to be used in middleware
  // we assume a store/index.js file has been defined and the variable 'locale' defined on store, we'll go into this in detail in the next code snippet
  app.i18n = new VueI18n({
    // construction a new VueI18n
     locale: 'en' ,
    // locale: [
    //   {
    //     iso: 'ar-SA',
    //     code: 'ar',
    //   },
    //   {
    //     iso: 'en-US',
    //     code: 'en',
    //   },
    // ],
    fallbackLocale: 'en', // always displays Chinese if English translation is not available
    silentFallbackWarn: true,
    lazy: true,
    seo: true,
    messages: {
      // 'locales' directory contains all the translations in the form of json files
      en: require('~/locales/en.json'),
      ar: require('~/locales/ar.json'),
    },
  })
}
