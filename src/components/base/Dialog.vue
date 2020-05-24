<template>
  <v-dialog
    :width="width"
    v-if="shouldShow"
    v-model="shouldShow"
    persistent
    scrollable
    :fullscreen="fullscreen"
    :no-click-animation="fullscreen"
  >
    <v-card>
      <v-toolbar dark color="primary" height="50px">
        <v-toolbar-title> {{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="shouldShow = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="dialog-content d-scrollable" v-if="shouldShow">
        <slot></slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component<any>({
    components: {
    },
    props: {
      value: Boolean,
      title: String,
      fullscreen: Boolean,
      width: {
        type: String,
        default: "50vw",
      },
    },
  })

  export default class Dialog extends Vue {
    value: boolean;
    title: string;
    width: string;

    get shouldShow() {
      return this.value;
    }

    set shouldShow(value) {
      this.$emit("input", value);
    }
  }
</script>

<style scoped lang="scss">
  .v-card{
    background-color: #F4F4F4 !important;

    .v-toolbar {
      flex: unset;
    }

    .dialog-content{
      background-color: white;
      margin: 20px;
    }
  }
</style>
