<template>
  <v-sheet class="form flex-column">
    <v-form
      ref="form"
      v-model="valid"
      @submit=""
    >
      <slot v-bind:props="{item: editableItem, editMode}" name="fields" />
      <v-flex style="display: flex">
        <v-btn style="margin-left:auto" @click="closeDialog()">{{ $tc("actions.cancel") }}</v-btn>
        <v-btn :disabled="isSaveButtonDisabled()" color="primary" @click="save()">{{ $tc("actions.save") }}</v-btn>
      </v-flex>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import newGuid from "@/helpers/guidHelper";

  @Component<any>({
    components: {
    },
    props: {
      item: {},
      emptyItem: {},
    },
    watch: {
      item: {
        handler: "resetEditableItem",
        immediate: true,
      },
    },
  })
  export default class CreateAndUpdateForm extends Vue {
    item: any;
    emptyItem: any;
    editMode: boolean = false;
    valid: boolean = true;
    editableItem: any = null;

    save() {
      if (!this.editMode) {
        this.$emit("created", this.editableItem);
      }
      if (this.editMode) {
        this.$emit("updated", this.editableItem);
      }
      this.closeDialog();
    }

    closeDialog() {
      this.resetEditableItem();
      this.$root.$emit("closeDialog");
    }

    isSaveButtonDisabled(): boolean {
      return !this.valid || !this.haveInputFieldsBeenUpdated();
    }

    haveInputFieldsBeenUpdated() {
      return true;
    }

    resetEditableItem() {
      if (this.item) {
        this.editableItem = JSON.parse(JSON.stringify(this.item));
        this.editMode = true;
      } else {
        this.editableItem = JSON.parse(JSON.stringify(this.emptyItem));
        this.editableItem.id = newGuid();
        this.editMode = false;
      }
      const form = (this.$refs.form as any);
      if (form) {
        form.resetValidation();
      }
    }
  }
</script>

<style lang="scss">
  .form {
    height: fit-content;
    flex-direction: column;
    padding: 20px;
  }
</style>
