<template>
  <div class="flex-column">
    <resource-create-and-update-dialog v-model="shouldShowCreateAndUpdateDialog" :variable="resourceToEdit"></resource-create-and-update-dialog>
    <action-bar>
      <p>Resources</p>
      <c-button style="margin: 0 0 0 auto" @click="addResource()">Add Resource</c-button>
    </action-bar>
    <v-data-table
      :headers="headers"
      :items="resources"
      hide-default-footer
      items-per-page="100"
    >
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.name }}</td>
          <td>€ {{ getNetPrice(props.item) }}</td>
          <td>€ {{ props.item.premie }}</td>
          <td>{{ props.item.recovery }} %</td>
          <td>€ {{ getLmeDelta(props.item) }}</td>
          <td
            v-for="property in properties"
            :key="property.id"
          >
            {{ props.item.getValueForProperty(property) }} %
          </td>
          <td>
            <v-icon
              small
              class="mr-2"
              @click="editResource(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteResource(props.item)"
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
  import { IResource } from "@/store/customStore/types/types";
  import { PriceHelper } from "@/helpers/priceHelper";
  import ResourceCreateAndUpdateDialog
    from "@/components/createAndUpdateForms/createAndUpdateDialogs/ResourceCreateAndUpdateDialog.vue";
  import ActionBar from "@/components/base/ActionBar.vue";
  import CButton from "@/components/base/CButton.vue";
  import {Service} from "@/store/customStore/service";

  @Component<ResourcesTable>({
    components: {
      CButton,
      ActionBar,
      ResourceCreateAndUpdateDialog,
    },
  })
  export default class ResourcesTable extends Vue {
    shouldShowCreateAndUpdateDialog: boolean = false;
    resourceToEdit: IResource = null;

    get resources() {
      return Service.state.resources;
    }

    get properties() {
      return Service.state.properties;
    }

    get headers() {
      const variableHeaders = [
        { text: "naam" },
        { text: "netto price" },
        { text: "premie" },
        { text: "recovery" },
        { text: "LME Delta" },

      ];
      const propertyHeaders = Service.state.properties.map(
        (p: any) => {
          return { text: p.name };
        });
      return [...variableHeaders, ...propertyHeaders, { text: "", align: "right", sortable: false, width: "100px" }];
    }

    getNetPrice(item: IResource) {
      return PriceHelper.getNetPrice(item).toFixed(0);
    }

    getLmeDelta(item: IResource) {
      return PriceHelper.getLmeDelta(item).toFixed(0);
    }

    addResource(item: IResource) {
      this.shouldShowCreateAndUpdateDialog = true;
      this.resourceToEdit = null;
    }
    editResource(item: IResource) {
      this.shouldShowCreateAndUpdateDialog = true;
      this.resourceToEdit = item;
    }

    deleteResource(item: IResource) {
      Service.deleteResource(item);
    }
  }
</script>

<style scoped>

</style>
