<template>
  <v-app id="apptemp">
    <welcome-dialog></welcome-dialog>
    <v-app-bar :clipped-left="true" app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>
          menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title
        ><h3>{{ appConfig.title }}</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h2 class="pr-5">Compare with original</h2>
      <compare-layers
        :layers="compareLayers"
        :map="map"
        @onUpdateVisibility="onUpdateVisibility"
      ></compare-layers>
    </v-app-bar>
    <v-navigation-drawer
      width="400"
      id="navdrawer"
      clipped
      fixed
      v-model="drawer"
      hide-overlay
    >
      <menu-component id="menu" :map="map" :layers.sync="dataLayers" :visibility="visibility">
      </menu-component>
      <save-pli :savePli.sync="savePli" :coordinates="coordinates"></save-pli>
    </v-navigation-drawer>
    <v-content >
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
        <map-layer
          v-for="layer in wmsLayers"
          :key="layer.id"
          :options="layer"
          :map="map"
        />
      </v-mapbox>
    </v-content>
  </v-app>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MenuComponent from './components/MenuComponent'
import { dataLayers } from './config/datalayers-config.js'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import WelcomeDialog from './components/WelcomeDialog'
import MapLayer from './components/MapLayer'
import CompareLayers from './components/CompareLayers'
import SavePli from './components/SavePli'


import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    MenuComponent,
    WelcomeDialog,
    MapLayer,
    CompareLayers,
    SavePli
  },
  data() {
    return {
      drawer: true,
      map: null,
      dataLayers: dataLayers,
      draw: {},
      visibility: false,
      savePli: false, 
      coordinates: [] 
    }
  },
  computed: {
    ...mapState({
      acceptedLegal: state => state.acceptedLegal,
      compareLayers: state => state.compareLayers
    }),
    ...mapGetters({
      wmsLayers: 'wmsLayers',
    }),
  },
/*   watch: {
    wmsLayers() {
      this.sortLayers() 
  }, */
  mounted() {
    this.map = this.$refs.map.map
    this.draw = new MapboxDraw({
      displayControlsDefault: false, 
      controls: { 
        polygon: true,
        trash: true,
      }
    })

    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())
      this.map.addControl(this.draw, 'top-right')
    
    })
    this.map.on('draw.create', this.updateGeojson)
    this.map.on('draw.delete', this.updateGeojson)
    this.map.on('draw.update', this.updateGeojson)
  },
  methods: {
    onUpdateVisibility(visibility) {
      this.visibility = visibility
      console.log('visibility', visibility)
    },
    updateGeojson(){ 
      const data = this.draw.getAll()
      if (data.features.length) {
        console.log('data', data)
        this.coordinates = data.features[0].geometry.coordinates
        console.log('this.coordinates', this.coordinates)
        this.savePli = true
      }
    }
  }
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
