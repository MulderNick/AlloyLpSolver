<template>
  <v-navigation-drawer
    class="d-right-sidebar d-scrollable"
    v-model="shouldShow"
    app
    temporary
    hide-overlay
    clipped
    stateless
    :width="width"
    mobile-break-point="0"
    right
  >
    <div class="flex-row d-right-sidebar__header">
      <h4
        :title="title"
        class="title-text"
      >
        {{title}}
      </h4>
      <v-btn
        text
        class="icon-button close-button"
        size="18"
        @click="shouldShow = false"
      >
        <v-icon>{{$vuetify.icons.values.close}}</v-icon>
      </v-btn>
    </div>
    <component v-if="component" :is="component" v-bind="params"></component>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { GlobalEventTypes } from "@/helpers/globalEvents";

  @Component({
    components: {
    },
    props: {
      width: String,
    },
  })
  export default class RightSidebar extends Vue {
    shouldShow: boolean = false;
    title: string = "";
    component: Vue | Promise<Vue> = null;
    params: {} = {};

    mounted() {
      this.$root.$on(GlobalEventTypes.showRightSideBar, (title: string, component: Vue, params: Object) => {
        this.shouldShow = true;
        this.title = title || "";
        this.component = component || null;
        this.params = params || {};
      });

      this.$root.$on(GlobalEventTypes.closeRightSideBar, (component: Vue | null) => {
        if (!component || this.component === component) {
          this.shouldShow = false;
        }
      });
    }
  }
</script>

<style lang="scss">
  .d-right-sidebar {
    z-index: 101;
    .d-right-sidebar__header {
      align-items: center;
      margin: 15px;
      .title-text {
        max-width: calc(100% - 36px);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .close-button {
        margin: 0 0 0 auto;
      }
    }
  }
</style>
