<template>
  <div class="flex-column d-scrollable" style="padding: 20px">
    <div>
      <h1 class="h2">Calculator</h1>
    </div>
    <CalculationResult
      :result="calculate()"
    ></CalculationResult>
    <constraints-table
      style="margin-bottom: 10px"
    >
    </constraints-table>
    <resources-table></resources-table>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { LpSolver } from "@/calculator/LpSolver";
  import ConstraintsTable from "@/components/tables/ConstraintsTable.vue";
  import ResourcesTable from "@/components/tables/ResourcesTable.vue";
  import {Service} from "@/store/customStore/service";
  import CalculationResult from "@/components/CalculationResult.vue";

@Component<Calculator>({
  components: {
    CalculationResult,
    ResourcesTable,
    ConstraintsTable,
  },
})
  export default class Calculator extends Vue {
    calculate() {
      return LpSolver.Solve(this.constraints(), this.resources());
    }

    constraints() {
      return Service.state.constraints;
    }

    resources() {
      return Service.state.resources;
    }

    get lme() {
      return Service.state.lme;
    }
  }
</script>
