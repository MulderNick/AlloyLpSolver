<template>
  <div class="action-bar pa-0">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component<any>({
    components: {
    },
  })
  export default class ActionBar extends Vue {
  }
</script>

<style lang="scss">

  .action-bar{
    width: 100%;
    display: flex;
    background-color: var(--v-background-base);
    min-height: 40px;
    max-height: 40px;

    .v-btn {
      min-height: 40px;
      max-height: 40px;
      margin: 0;
      min-width: unset !important;
      text-transform: none !important;

      .v-icon{
        margin-right: 10px;
        font-size: 20px;
      }

      &.icon-button {
        width: 40px;
        .v-icon{
          margin-right: 0;
        }
      }
    }

    .v-text-field {
      padding: 0;
      margin: 0;
    }

    .v-btn--active{
      -webkit-box-shadow: unset;
      box-shadow: unset;
    }
    .v-btn-toggle {
      background-color: inherit;
      .v-btn {
        background-color: var(--v-background-base);
        border: none;
      }
      .v-icon{
        padding-right: 0;
        margin-right: 0;
      }
    }

    .v-input__control {
      min-height: unset !important;
      margin: auto;

      .v-input__slot{
        height: 40px;
        margin-bottom: 0;
        background: transparent!important;
      }
    }
    .v-input__append-outer {
      margin:auto !important;
    }

  }
</style>
