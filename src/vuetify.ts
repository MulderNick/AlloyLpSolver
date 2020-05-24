import { getDefaultColors, icons } from "@/config";
import { i18n } from "@/lang/languageManagement";
import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import Application from "@/main";

const vuetifyOptions: any = {
  options: {
    customProperties: true,
  },
  icons: {
    iconfont: "fa",
    values: icons,
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: getDefaultColors(),
    },
  },
  i18n: i18n,
  lang: {
    t: (key: any, ...params: any) => i18n.t(key, params),
  },
};
export const vuetify = new Vuetify(vuetifyOptions);
Vue.use(Vuetify);

export function setVuetifyThemeColors(newColors: any) {
  Application.$vuetify.theme.themes.light = newColors;
}

export function getVuetifyThemeColors() {
  return Application.$vuetify.theme.themes.light;
}
