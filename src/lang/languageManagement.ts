import { locale } from "@/config";
import VueI18n from "vue-i18n";
import de from "@/lang/de";
import en from "@/lang/en";
import Vue from "vue";
import moment from "moment";

const messages = {
  de: de,
  en: en,
};
const loadedLanguages: string[] = Object.keys(messages);

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: locale.default,
  fallbackLocale: "de",
  messages,
});

setI18nLanguage(locale.default);

function setI18nLanguage(lang: string) {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  moment.locale(lang);
  return lang;
}

export function loadLanguageAsync(lang: string) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(`@/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}
