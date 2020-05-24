import Application from "@/main";
import Vue from "vue";

export enum GlobalEventTypes {
  showSnackbarNotification = "showSnackbarNotification",
  showRightSideBar = "showRightSideBar",
  showConfirmationModal = "showConfirmationModal",
  closeRightSideBar = "closeRightSideBar",
}

export enum SnackbarMessageType {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

/**
 * Global events are send over the vue instance, in components this instance can be accessed via this.$root
 * As soon as events are emitted over the global instance the emitting should be done in this helper
 * Reason for this are: 1. oversight on the available global events 2. type-safety via function parameters
 * Note: if events are only to be send to the parent of the component the global bus should not be used instead use v-on: / @ in the parent component
 */
export default class GlobalEvents {
  static emitCloseRightSideBar(component: Vue | Function = null) {
    Application.$emit(GlobalEventTypes.closeRightSideBar, component);
  }

  static emitShowConfirmationModal(settings: IConfirmationModalSettings) {
    Application.$emit(GlobalEventTypes.showConfirmationModal, settings);
  }

  static emitShowSnackbarNotification(type: SnackbarMessageType, message: string, timeout?: number) {
    Application.$emit(GlobalEventTypes.showSnackbarNotification, type, message, timeout);
  }
}

export interface IConfirmationModalSettings {
  onConfirm?: Function,
  onCancel?: Function,
  title?: string,
  text?: string,
  confirmButtonText?: string,
  safetyString?: string
}
