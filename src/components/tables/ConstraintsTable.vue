<template>
  <div class="flex-column">
    <constraint-create-and-update-dialog v-model="shouldShowCreateAndUpdateDialog" :constraint="constraintToEdit"></constraint-create-and-update-dialog>
    <action-bar>
      <p>Constraints</p>
      <c-button style="margin: 0 0 0 auto" @click="addConstraint()">Add Constraint</c-button>
    </action-bar>
    <v-data-table
      :headers="headers"
      :items="constraints"
      hide-default-footer
      items-per-page="100"
    >
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.min }} %</td>
          <td>{{ props.item.max }} %</td>
          <td>
            <v-icon
              small
              class="mr-2"
              @click="editConstraint(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteConstraint(props.item)"
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { IConstraint, IResource } from "@/store/customStore/types/types";
  import ConstraintCreateAndUpdateDialog
    from "../createAndUpdateForms/createAndUpdateDialogs/ConstraintCreateAndUpdateDialog.vue";
  import ActionBar from "@/components/base/ActionBar.vue";
  import CButton from "@/components/base/CButton.vue";
  import {Service} from "@/store/customStore/service";

  @Component<ConstraintsTable>({
    components: {
      CButton,
      ActionBar,
      ConstraintCreateAndUpdateDialog,
    },
  })
  export default class ConstraintsTable extends Vue {
    shouldShowCreateAndUpdateDialog: boolean = false;
    constraintToEdit: IConstraint = null;

    get headers() {
      return [
        { text: "naam" },
        { text: "min" },
        { text: "max" },
        { text: "", align: "right", sortable: false, width: "100px" },
      ];
    }

    get constraints() {
      return Service.state.constraints;
    }

    addConstraint(item: IConstraint) {
      this.shouldShowCreateAndUpdateDialog = true;
      this.constraintToEdit = null;
    }

    editConstraint(item: IConstraint) {
      this.shouldShowCreateAndUpdateDialog = true;
      this.constraintToEdit = item;
    }

    deleteConstraint(item: IConstraint) {
      Service.deleteConstraint(item);
    }
  }
</script>

<style scoped>

</style>
