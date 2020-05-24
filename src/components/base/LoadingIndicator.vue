<template>
  <v-progress-circular
    class="d-loading-indicator"
    :size="100"
    :width="7"
    color="primary"
    indeterminate
  ></v-progress-circular>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

@Component<any>({
  components: {},
})
  export default class LoadingIndicator extends Vue {
  }
</script>

<style scoped lang="scss">
  .d-loading-indicator {
    flex: 1 1 auto;
    display: flex;
    margin: auto;
    align-self: center;
    justify-self: center;
    overflow: hidden;
  }
</style>
