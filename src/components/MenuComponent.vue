<template>
  <div id="menu">
    <v-layout column fill-height justfy-space-around class="pa-4">
      <v-flex grow>
        <data-layers
          :dataLayers="dataLayers"
          :map="map"
          @data-layers="$emit('update:data-layers', dataLayers)"
        />
      </v-flex>
      <v-flex shrink class="py-2">
        <v-btn outlined block>
          IMPORT POLYGON
        </v-btn>
      </v-flex>
      <v-flex shrink class="pb-4">
        <v-btn outlined block @click="exportDialog = true">
          EXPORT
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import DataLayers from './DataLayers'

export default {
  name: 'map-component',
  props: {
    map: {
      type: Object
    },
    dataLayers: {
      type: Array
    }
  },
  watch: {
    map: function(map) {
      this.map = map
    },
    dataLayers: function(datalayers) {
      console.log(datalayers)
    }
  },
  data: () => {
    return {
      exportDialog: false
    }
  },
  components: {
    DataLayers
  }
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#menu {
  height: 100%;
}

.bar {
  width: 100%;
  height: 10px;
}

.bar-wrapper {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.bartext {
  width: 100%;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
}

.color-label {
  display: flex;
}

.colored-span {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin: 4px;
}
</style>
