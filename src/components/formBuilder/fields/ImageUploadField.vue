<template>
  <div class="image-upload-field">
    <v-img
      class="elevation-6"
      style="max-height: 100%; height:100%; max-width: 100%"
      contain
      :src="element.value || '/img/upload-image-placeholder.png'"
    >
    </v-img>
    <v-speed-dial
      open-on-hover
      absolute
      direction="top"
      style="bottom: 10px; right: 5px"
    >
      <template v-slot:activator>
        <v-btn
          color="primary"
          fab
          small
          dark
        >
          <v-icon>{{$vuetify.icons.values.edit}}</v-icon>
        </v-btn>
      </template>
      <v-btn
        v-if="element.value"
        fab
        dark
        small
        color="error"
        @click.stop="resetImage()"
      >
        <v-icon>{{$vuetify.icons.values.delete}}</v-icon>
      </v-btn>
      <v-btn
        v-if="previousImage"
        fab
        dark
        small
        color="warning"
        @click.stop="goToPreviousImage()"
      >
        <v-icon>{{$vuetify.icons.values.undo}}</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { FormBuilderImageUploadField } from "@/components/formBuilder/fields/types";
  // import { Flow, FlowEventName, FlowOptions, IFlowFile } from "@/flow2";

  @Component<any>({
    components: {
    },
    props: {
      element: Object,
    },
  })
  export default class ImageUploadField extends Vue {
    element: FormBuilderImageUploadField;
    data: string = "";
    previousImage = "";

    resetImage() {
      this.previousImage = this.element.value;
      this.element.value = null;
    }

    goToPreviousImage() {
      const newPreviousImage = this.element.value;
      this.element.value = this.previousImage;
      this.previousImage = newPreviousImage;
    }

  // flowOptions = new FlowOptions({
  //   headers: () => {
  //     return { Authorization: `Bearer ${AuthService.getAccessToken()}` };
  //   },
  //   target: `${baseUrl}image/upload`, // what to put here
  //   testChunks: false,
  //   maxChunkRetries: 3,
  //   chunkRetryInterval: 3000,
  //   allowDuplicateUploads: true,
  //   generateUniqueIdentifier: () => {
  //     return newGuid();
  //   },
  //   simultaneousUploads: 1,
  // });
  //
  // mounted() {
  //   const flow = new Flow(this.flowOptions);
  //
  //   flow.on(FlowEventName.itemsSubmitted, () => {
  //     flow.upload();
  //   });
  //
  //   flow.on(FlowEventName.fileSuccess, (flowFile: IFlowFile, response: string) => {
  //     this.previousImage = this.element.value;
  //     this.element.value = JSON.parse(response);
  //   });
  //
  //   flow.assignBrowse([this.$el as HTMLElement], false, true, { accept: "image/jpeg, image/png" });
  // }
  }
</script>

<style lang="scss">
  .image-upload-field {
    position: relative;
    margin: 0 auto;
    height: 210px;
    width: 365px;

    .v-speed-dial__list {
      padding: unset;
    }
  }

</style>
