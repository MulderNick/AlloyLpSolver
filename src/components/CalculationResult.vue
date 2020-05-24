<template>
  <div class="results ma-4">
    <div v-if="!resultFeasible">
      No possible combination within constraints
    </div>
    <div v-else>
      <span>€ {{ price }}</span>
      <ul>
        <li
          v-for="(value, key, index) in resourceQuantities"
          :key="index"
        >
          {{ `${key}: ${value * 100}%` }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import deepCopy from "@/helpers/deepCopy";

  @Component({
    components: {
    },
    props: {
      result: Object
    }
  })
  export default class CalculationResult extends Vue {
    result: any;

    get resourceQuantities(): {[resourceName: string]: number} {
      const quantities = deepCopy(this.result);
      delete quantities.feasible;
      delete quantities.bounded;
      delete quantities.result;
      return quantities
    }

    get price(): number {
      return this.result.result;
    }

    get resultFeasible(): boolean {
      return this.result.feasible
    }
  }
</script>

<style scoped>

</style>
