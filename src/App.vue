<template>
  <v-app id="apptemp">
    <v-app-bar floating :clipped-left="true" app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>
          menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title
        ><h3>{{ appConfig.title }}</h3></v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer
      width="400"
      id="navdrawer"
      clipped
      fixed
      v-model="drawer"
      hide-overlay
    >
      <menu-component id="menu" :map="map" :dataLayers.sync="dataLayers">
      </menu-component>
    </v-navigation-drawer>
    <v-content>
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
        <plotDialog :plotDialog.sync="plotDialog" />
      </v-mapbox>
    </v-content>
  </v-app>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MenuComponent from './components/MenuComponent'
import { dataLayers } from './config/datalayers-config.js'
import PlotDialog from './components/PlotDialog'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import DrawRectangle from 'mapbox-gl-draw-rectangle-mode'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

export default {
  name: 'App',
  components: {
    MenuComponent,
    PlotDialog
  },
  data() {
    return {
      drawer: true,
      map: null,
      dataLayers: dataLayers,
      plotDialog: false,
      draw: {}
    }
  },
  mounted() {
    this.map = this.$refs.map.map
    const modes = MapboxDraw.modes
    modes.draw_rectangle = DrawRectangle

    this.draw = new MapboxDraw({
      modes: modes
    })
    console.log(this.draw, MapboxDraw)

    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())
      // this.draw.changeMode('draw_rectangle')

      this.map.addControl(this.draw, 'top-right')
      this.dataLayers.forEach(layer => {
        layer.data.forEach(maplayer => {
          this.map.addLayer(maplayer)
          console.log(this.map)
        })
      })

      this.map.on('click', () => {
        this.plotDialog = true
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
  height: 100%;
}
#navdrawer {
  z-index: 1;
}

#menu {
  padding-top: 64px;
  position: relative;
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
