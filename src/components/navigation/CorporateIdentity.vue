<template>
  <div class="flex-column corporate-identity">
    <div
      class="flex-column img-wrapper"
      v-show="!isLarge"
      style="width: 60px;"
    >
      <img :src="iconSource" alt="Corporate Icon"/>
    </div>
    <div
      class="flex-column img-wrapper"
      v-show="isLarge && logoSource"
      style="width: 180px;"
    >
      <img :src="logoSource" alt="Corporate Logo"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component<any>({
    props: {
      isLarge: Boolean,
    },
  })
  export default class CorporateIdentity extends Vue {
    isLarge: boolean;

    get iconSource() {
      return "/favicon.png";
    }

    get logoSource() {
      return "/logo.png";
    }
  }
</script>

<style lang="scss">
  .corporate-identity {
    height: 80px;
    justify-content: center;

    .img-wrapper {
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      max-height: 80px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
