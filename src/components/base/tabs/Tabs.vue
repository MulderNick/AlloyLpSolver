<template>
  <v-tabs
    slider-color="purple"
    class="full-flex d-tabs"
    :grow="grow"
    v-model="selectedTab"
  >
    <v-tabs-slider color="primary"></v-tabs-slider>

    <v-tab
      v-for="tab in tabs"
      :href="'#' + tab.value"
      :key="tab.value"
      :disabled="isDisabled(tab)"
    >
      {{ tab.label || tab.value }}
    </v-tab>
    <v-tabs-items v-model="selectedTab">
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :reverse-transition=false
        :transition=false
      >
        <div class="d-tabs__content">
          <Component
            v-if="shouldRender"
            :is="tab.component"
            v-bind="getProps(tab)"
            v-on="getEvents(tab)"
          />
          <div
            v-else
            style="background-color: white"
            class="flex-column"
          >
            <d-loading-indicator/>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import DLoadingIndicator from "@/components/base/LoadingIndicator.vue";
  import {ITab} from "@/components/base/tabs/types";

  @Component<any>({
    components: {
      DLoadingIndicator,
    },
    props: {
      tabs: "",
      value: "",
      grow: {
        type: Boolean,
        default: false,
      },
    },
    watch: {
      value: "renderWithDelay",
    },
  })
  export default class Tabs extends Vue {
    value: string;
    tabs: ITab[];
    shouldRender: boolean = false;

    get selectedTab() {
      this.selectFirstTabIfNotExists();
      return this.value;
    }

    set selectedTab(value) {
      this.shouldRender = false;
      this.$emit("input", value);
    }

    mounted() {
      this.renderWithDelay();
    }

    renderWithDelay() {
      setTimeout(() => {
        this.shouldRender = true;
      }, 1);
    }

    getProps(tab : ITab) {
      if (tab.props) {
        return tab.props;
      }
      return { };
    }

    getEvents(tab : ITab) {
      if (tab.events) {
        return tab.events;
      }
      return { };
    }

    isDisabled(tab: ITab): boolean {
      if (tab.disabled instanceof Function) {
        return tab.disabled();
      }
      return tab.disabled;
    }

    selectFirstTabIfNotExists() {
      if (!this.tabs || this.tabs.length === 0) return;

      if (!this.tabs.find(t => t.value === this.value)) {
        this.selectedTab = this.tabs[0].value;
      }
    }
  }
</script>

<style lang="scss">
  .d-tabs {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;

    .v-tabs-items {
      background-color: unset;
    }

    .v-window {
      display: flex;
      flex: 1;
      height:calc(100% - 40px);
      max-height:calc(100% - 40px);
      max-width: 100%;

      .v-window__container {
        min-height: 100%;
        max-height: 100%;
      }

      .v-window__container, .v-window-item, .v-window-item > div {
        display: flex;
        flex: 1;
        max-width: 100%;
      }

      .v-leave-active {
        display: none;
      }
    }

    .v-tabs-bar {
      max-height: 40px;
      background-color: var(--v-background-base);
    }

    .v-tab {
      height: 40px;
      text-transform: uppercase !important;
      font-weight: 500 !important;
    }
  }
</style>
