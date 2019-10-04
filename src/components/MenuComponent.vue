<template>
  <div id="menu">
    <data-layers :dataLayers="dataLayers" :map="map" />
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
    deep: true
  },
  data: () => {
    return {}
  },
  components: {
    DataLayers
  }
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

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
