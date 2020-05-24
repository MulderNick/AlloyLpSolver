<template>
  <div v-if="items.length > 0" @click.stop="" class="d-context-menu" :style="{opacity: active ? 1 : ''}">
    <v-menu
      offset-y
      v-model="active"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          mid
          class="icon-button"
          v-on="on"
        >
          <v-icon color="primary">{{ $vuetify.icons.values.contextMenu }}</v-icon>
        </v-btn>
      </template>
      <v-card v-if="active">
        <v-list>

          <v-list-item
            v-for="item in items"
            :key="item.name"
            @click="item.action()"
          >
            <v-list-item-content>
              <v-list-item-title style="cursor: pointer">{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component<any>({
    components: {
    },
    props: {
      items: Array,
    },
  })
  export default class ContextMenu extends Vue {
    items: any[];
    active: boolean = false;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
