import Axios from "axios";
import GlobalEvents, { SnackbarMessageType } from "@/helpers/globalEvents";
import { i18n } from "@/lang/languageManagement";

export const baseUrl = (window.location.host === "localhost:8080") ? "https://dev.docunite.local/api/" : `https://${window.location.host}/api/`;
export const standardHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const Api = () => {
  const axios = Axios.create({
    baseURL: baseUrl,
    headers: {
      ...standardHeaders,
    },
  });
  axios.interceptors.response.use((response) => response.data, (error) => handleResponseError(error));

  return axios;
};

export const ApiNoAuth = () => {
  const axios = Axios.create({
    baseURL: baseUrl,
    headers: {
      ...standardHeaders,
    },
  });
  axios.interceptors.response.use((response) => response.data, (error) => handleResponseError(error));

  return axios;
};

function handleResponseError(error: any): Promise<any> {
  if (error.response.status === 401) {
    const config = error.config;
    return Api().request(config);
  }

  let errorMessage = i18n.t("errorMessage").toString();

  if (error.response && error.response.data && typeof error.response.data === "string") {
    GlobalEvents.emitShowSnackbarNotification(SnackbarMessageType.error, error.response.data);
    errorMessage = error.response.data;
  }

  // GlobalEvents.emitShowSnackbarNotification(SnackbarMessageType.error, errorMessage);
  return Promise.reject(error);
}
