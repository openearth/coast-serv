<template>
  <v-mapbox
    :access-token="appConfig.MAPBOX_TOKEN"
    :map-style="appConfig.map.background"
    :center="appConfig.map.center"
    :zoom="appConfig.map.zoom"
    :pitch="0"
    :bearing="0"
  >
  </v-mapbox>
</template>

<script>
export default {
  name: "MapComponent",
  props: {
    map: {
      type: Object,
      requrired: true
    }
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
