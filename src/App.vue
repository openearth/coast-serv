<template>
  <v-app id="apptemp">
    <v-toolbar height="64px" prominent fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ appConfig.title }}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer id="navdrawer" fixed v-model="drawer" hide-overlay>
      <menu-component :map="map" :dataLayers="dataLayers"> </menu-component>
    </v-navigation-drawer>
    <v-mapbox
      :access-token="appConfig.MAPBOX_TOKEN"
      :map-style="appConfig.map.background"
      :center="appConfig.map.center"
      :zoom="appConfig.map.zoom"
      :pitch="0"
      :bearing="0"
      id="map"
      ref="map"
    >
    </v-mapbox>
  </v-app>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MenuComponent from './components/MenuComponent'
import { dataLayers } from './config/datalayers-config.js'

export default {
  name: 'App',
  components: {
    'menu-component': MenuComponent
  },
  data() {
    return {
      drawer: true,
      map: null,
      dataLayers: dataLayers
    }
  },
  mounted() {
    this.map = this.$refs.map.map
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())
      this.dataLayers.forEach(layer => {
        layer['mapbox-layers'].forEach(maplayer => {
          this.map.addLayer(maplayer)
          console.log(this.map)
        })
      })
    })
  },
  methods: {}
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  top: 64px;
  height: calc(100% - 32px);
}
#navdrawer {
  top: 64px;
  z-index: 1;
}

html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

#app,
#apptemp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
