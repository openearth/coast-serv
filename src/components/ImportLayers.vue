<template>
  <div>
    <v-layout column fill-height>
      <v-flex xs4 align-stretch grow>
        <h1 class="title">Selected Model boundaries</h1>
        <h5 style="color: white">
          Layers that can be imported (polygons) will be displayed here. THis
          will also interact with the draw function on the map.
        </h5>
      </v-flex>

      <v-flex shrink class="py-2">
        <template>
          <v-file-input
            label="Import .pli file"
            accept=".pli"
            @change="importPolygon($event)"
          ></v-file-input>
        </template>
        <v-btn v-if="file !== ''" color="blue darken-1" text @click="addInput"
          >Add file</v-btn
        >
      </v-flex>

      <v-flex xs4 align-stretch>
        <v-expansion-panels dense focusable accordion>
          <v-expansion-panel v-for="layer in dataLayers" :key="layer.id">
            <v-expansion-panel-header class="pa-0">
              <v-layout align-center justify-space-end>
                <v-flex xs1> </v-flex>
                <v-flex xs7 class="pa-1">
                  {{ layer.title }}
                </v-flex>
                <v-flex> </v-flex>
              </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pa-0"
              extra-small
              expand-icon="fa-caret-down"
              hide-actions
            >
              <div class="pa-2">
                <v-legend v-if="layer.legend" :layer="layer"></v-legend>
                <div class="opacity" v-if="layer.opacity">
                  <h4>Transparancy: {{ 100 - layer.opacity }}%</h4>
                  <v-slider
                    hide-details
                    class="pa-0 ma-0"
                    title="transparantie"
                    :min="1"
                    :max="100"
                    v-model="layer.opacity"
                  ></v-slider>
                  <v-divider />
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import VLegend from './VLegend'
// import proj4 from 'proj4'

export default {
  props: {
    map: {
      type: Object
    }
  },
  data() {
    return {
      dataLayers: [],
      file: '',
      currentColor: ''
    }
  },
  components: {
    VLegend
  },
  methods: {
    addInput() {
      this.dataLayers.push({
        title: this.file.name,
        active: true,
        legend: {
          colors: [this.currentColor],
          labels: [this.file.name]
        }
      })
      this.file = ''
    },
    importPolygon(event) {
      if (this.file !== '') {
        this.map.removeLayer(this.file.name)
        this.map.removeSource(this.file.name)
      }
      let json = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[]]
        }
      }
      this.file = event
      let reader = new FileReader()
      reader.readAsText(event)
      reader.onload = () => {
        let readerArray = reader.result.split(/\r\n|\n|\r/gm)
        readerArray.shift()
        readerArray.shift()
        readerArray.forEach(item => {
          let coordsArray = item.split(' ')
          coordsArray = coordsArray.filter(Boolean)
          coordsArray.pop()
          if (coordsArray.length === 2) {
            // this code is for when reprojection is needed.
            // const correctCoords = proj4('EPSG:3857', 'EPSG:3857', [
            //   parseFloat(c[0]),
            //   parseFloat(c[1])
            // ])
            json.geometry.coordinates[0].push(coordsArray)
          }
        })
        this.currentColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16)
        this.map.addLayer({
          id: event.name,
          type: 'line',
          source: {
            type: 'geojson',
            data: json
          },
          paint: {
            'line-color': this.currentColor
          }
        })
      }
    }
  }
}
</script>

<style>
.title {
  color: white;
}
#dragicon {
  margin: auto;
}

#draggable {
  width: 100%;
}

.v-expansion-panel {
  box-shadow: none;
  webkit-box-shadow: none;
}
.fa-grip-vertical:hover {
  color: black;
  cursor: grab;
}

.infodiv {
  .wordwrap {
    white-space: pre-wrap; /* CSS3 */
    white-space: -moz-pre-wrap; /* Firefox */
    white-space: -pre-wrap; /* Opera <7 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* IE */
  }
}
/* Customize the switch buttons */
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin: auto;
}

.v-input--switch__track {
  border-radius: 9px;
  height: 16px;
  left: 2px;
  opacity: 0.6;
  position: absolute;
  right: 2px;
  top: calc(50% - 7px);
}

.v-input--switch__thumb {
  border-radius: 50%;
  top: calc(50% - 7px);
  height: 16px;
  position: relative;
  width: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,
.v-input--switch.v-input--is-dirty .v-input--switch__thumb {
  -webkit-transform: translate(20px, 0);
  transform: translate(20px, 0);
}
</style>
