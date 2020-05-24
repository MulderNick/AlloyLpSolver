<template>
  <v-btn
    class="custom-button"
    color="primary"
    depressed
    tile
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {
    },
    props: {
    },
  })
  export default class CButton extends Vue {
  }
</script>

<style lang="scss">
</style>
