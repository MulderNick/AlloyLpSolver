<template>
  <v-layout column style="margin: 0;">
    <calculator></calculator>
  </v-layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Calculator from "@/views/Calculator.vue";

  @Component<any>({
    components: { Calculator }, watch: {},
  })
  export default class Home extends Vue {
  }
</script>

<style scoped lang="scss">

</style>
