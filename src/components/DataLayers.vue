<template>
  <div id="datalayers">
    <v-toolbar flat>
      <v-toolbar-title>
        Background layers
      </v-toolbar-title>
    </v-toolbar>
    <v-list two-line>
      <v-list-tile v-for="datalayer in dataLayers" :key="datalayer.title">
        <v-list-tile-avatar>
          <v-switch v-model="datalayer.active" v-on:change="toggleLayers()">
          </v-switch>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ datalayer.title }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            <div v-if="datalayer.barlegend" class="bar-wrapper">
              <div :style="datalayer.barlegend" class="bar"></div>
              <div class="bartext">{{ datalayer.bartext }}</div>
            </div>
            <div v-if="datalayer.colorlegend">
              <div
                v-for="i in datalayer.colorlegend"
                :key="i.name"
                class="color-label"
              >
                <span class="colored-span" :style="i.color"></span>
                <label class="ma-1">{{ i.name }}</label>
              </div>
            </div>
            <div v-if="datalayer.texticonlegend">
              <div
                v-for="i in datalayer.texticonlegend"
                :key="i.name"
                class="color-label"
              >
                <span :style="i.style">{{ i.texticon }}</span>
                <label class="ma-1">{{ i.name }}</label>
              </div>
            </div>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DataLayers',
  props: {
    dataLayers: {
      type: Array
    },
    map: {
      type: Object
    }
  },
  methods: {
    toggleLayers() {
      if (this.map === null) {
        return
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.dataLayers.forEach(layer => {
        layer['mapbox-layers'].forEach(sublayer => {
          if (this.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.map.setLayoutProperty(sublayer.id, 'visibility', vis[1])
            } else {
              this.map.setLayoutProperty(sublayer.id, 'visibility', vis[0])
            }
          }
        })
      })
    }
  }
}
</script>

<style lang="css" scoped></style>
