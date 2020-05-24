<template>
  <v-app id="inspire">
    <div class="full-flex-column">
      <navigation :menuWidth="mainMenuWidth" />
      <v-content class="application-content">
        <v-container fluid fill-height grid-list-md class="application-content__container">
          <router-view :key="routeKey()"></router-view>
        </v-container>
      </v-content>
      <d-confirmation-modal />
      <d-right-sidebar :width="rightSidebarWidth"></d-right-sidebar>
    </div>
    <snackbar/>
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Navigation from "@/components/navigation/Navigation.vue";
  import RouteHelper from "@/routing/routeHelper";
  import { Snackbar } from "@/lazyLoader";
  import DRightSidebar from "@/components/base/RightSidebar.vue";
  import DConfirmationModal from "@/components/base/ConfirmationModal.vue";

  @Component({
    components: {
      DConfirmationModal,
      DRightSidebar,
      Snackbar,
      Navigation,
    },
  })
  export default class App extends Vue {
    rightSidebarWidth: string = "370px";
    mainMenuWidth: string = "60px";

    /**
     * important for proper update/destroy upon route based changes
     */
    routeKey(): string {
      return this.$router.currentRoute.name;
    }
  }

</script>

<style lang="scss">
  .v-application {
    max-height: 100vh;
  }

  .application-content {
    max-height: 100%;
    margin-left: 60px;
    max-width: calc(100vw - 60px);
  }

  .application-content__container {
    background-color: var(--v-background-base);
    max-width: 100%;
  }
</style>
