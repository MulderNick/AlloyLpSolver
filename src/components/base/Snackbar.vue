
<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
    :timeout="timeout"
    :key="snackbarId"
    bottom
  >
    {{ message  }}
    <v-btn
      dark
      text
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Application from "@/main";
  import { GlobalEventTypes, SnackbarMessageType } from "@/helpers/globalEvents";
  import newGuid from "@/helpers/guidHelper";

  @Component({
    components: {
    },
  })
  export default class Snackbar extends Vue {
    message : string = null;
    snackbar: boolean = null;
    color: string = "";
    timeout: number = 2000;
    snackbarId: string = "";

    mounted() {
      Application.$on(GlobalEventTypes.showSnackbarNotification, (type: SnackbarMessageType, message: string, timeout: number = 2000) => {
        this.snackbar = false;
        this.timeout = timeout;
        this.message = message;
        this.color = type;
        this.snackbarId = newGuid();
        this.snackbar = true;
      });
    }
  }
</script>

<style lang="scss">
</style>
