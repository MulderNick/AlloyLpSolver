<template>
  <div class="nav">
    <v-hover>
      <v-navigation-drawer
        ref="leftDrawer"
        absolute
        v-model="drawer"
        slot-scope="{ hover }"
        :mini-variant="!hover"
        :mini-variant-width="menuWidth"
        width="180"
        mobile-break-point="0"
      >
        <v-layout fill-height>
          <div>
            <corporate-identity
              style="padding: 4px 0"
              :isLarge="hover"
            />
            <v-list
              style="padding: 0"
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.route()"
                style="text-transform: capitalize;"
              >
                <v-list-item-action>
                  <v-icon>
                    {{item.icon}}
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{item.title}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-layout>
      </v-navigation-drawer>
    </v-hover>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import CorporateIdentity from "@/components/navigation/CorporateIdentity.vue";
  import { menuItems } from "@/config";

  @Component<any>({
    components: {
      CorporateIdentity,
    },
    props: {
      menuWidth: String,
    },
  })
  export default class Navigation extends Vue {
    public drawer = true;

    get items() {
      return menuItems.filter((i) => i.shouldShow());
    }
  }
</script>

<style lang="scss">
  .nav {
    .v-navigation-drawer {
      z-index: 6;
    }
    .v-toolbar{
      margin-left: 60px;
      width:calc(100% - 60px);
      display: flex;
      background-color: var(--v-background-base);
    }

    .v-toolbar__title{
      overflow: visible;
    }

    .v-list__tile__action {
      min-width: 40px !important;
      justify-content: normal !important;
    }
  }
</style>
