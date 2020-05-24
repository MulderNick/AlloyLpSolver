<template>
  <d-normal-dialog
    v-model="shouldShow"
    width="fit-content"
    :title="getTitle()"
  >
    <div class="flex-column" style="align-items: center">
      <div>
        <v-icon
          size="60px"
          color="error"
        >
          {{ $vuetify.icons.values.warning}}
        </v-icon>
      </div>
      <div class="ma-6">
        {{getText()}}
      </div>
      <div>
        <v-btn @click="cancel()" color="primary">{{$tc('actions.goBack')}}</v-btn>
        <v-btn  @click="confirm()" color="error">{{ getConfirmButtonText() }}</v-btn>
      </div>
    </div>
  </d-normal-dialog>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { GlobalEventTypes, IConfirmationModalSettings } from "@/helpers/globalEvents";
  import { DNormalDialog } from "@/lazyLoader";

  @Component<any>({
    components: {
      DNormalDialog,
    },
  })

  export default class ConfirmationModal extends Vue {
    shouldShow: boolean = false;
    onConfirm: Function = null;
    onCancel: Function = null;
    title: string = "";
    text: string = "";
    confirmButtonText: string = "";
    safetyString: string = "";

    getTitle() {
      const defaultTitle = this.$tc("labels.areYouSure");

      return this.title || defaultTitle;
    }

    getText() {
      const defaultText = this.$tc("labels.allChangesWillBeLost");

      return this.text || defaultText;
    }

    getConfirmButtonText() {
      const defaultText = this.$tc("actions.continue");

      return this.confirmButtonText || defaultText;
    }

    confirm() {
      this.onConfirm();
      this.shouldShow = false;
    }

    cancel() {
      if (this.onCancel) {
        this.onCancel();
      }
      this.shouldShow = false;
    }

    mounted() {
      this.$root.$on(GlobalEventTypes.showConfirmationModal, (settings: IConfirmationModalSettings) => {
        this.shouldShow = true;
        this.text = settings.text;
        this.title = settings.title;
        this.onConfirm = settings.onConfirm;
        this.onCancel = settings.onCancel;
        this.confirmButtonText = settings.confirmButtonText;
        this.safetyString = settings.safetyString;
      });
    }
  }
</script>

<style scoped lang="scss">
  .v-card{
    background-color: #F4F4F4 !important;
  }
</style>
