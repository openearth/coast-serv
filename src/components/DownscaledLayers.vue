<template>
  <div>
    <v-layout column fill-height>
      <v-flex xs4 align-stretch>
        <h1 class="title">Downscaled layers</h1> 
        <v-expansion-panels dense focusable accordion>
          <v-expansion-panel v-for="layer in layers" :key="layer.id">
            <v-expansion-panel-header class="pa-0">
              <v-layout align-center justify-space-end>
                 <v-flex>
                    <v-icon
                      class="ma-2 draghandle"
                      id="dragicon"
                      title="Drag to change map layer drawing order"
                      >drag_indicator</v-icon
                    >
                  </v-flex>
                <v-flex xs7 class="pa-1">
                  {{ layer.name }}
                </v-flex>
                <v-flex xs2 @click.stop="">
                    <v-switch v-if="layer.type"
                      class="ma-0"
                      v-model="layer.active"
                      @change="setmapboxlayer(layer)"
                    ></v-switch>
                      <v-switch v-else
                      class="ma-0"
                      v-model="layer.active"
                      @change="setwmslayer(layer)"
                    ></v-switch>
                </v-flex>    
                <v-flex>
                  <v-icon class="ma-2" id="dragicon" title="Open details"
                  >keyboard_arrow_down
                  </v-icon>
                </v-flex>  
              </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pa-0"
              extra-small
              expand-icon="fa-caret-down"
              hide-actions
            >
               <div class="pa-2">
                 <div v-if="layer.time_extend">
                    <v-select
                      :items="layer.time_extend"
                      label="Select Time"
                      item-text="time"
                      v-model="layer.time"
                      @change="setwmslayer(layer)"
                    ></v-select>
                  </div>
               </div>
               <div>
                 <v-btn @click="save">
                   <v-icon class="save-icon">
                     save_alt
                   </v-icon>
                 </v-btn>
               </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>  
    </v-layout>  
  </div>
</template>
<script>
import buildWmsLayer from  "@/libs/build-wms-layer";
import layers from "@/config/datalayers.json";
import { getCoverage } from "@/libs/get-coverage";
import { mapState } from 'vuex';
export default {
  props: {
    visibility: {
      type: Boolean
      },
    map: {
      type: Object
    },
  },
  data() {
    return {
      layers,
    };
  },
  computed: {
    ...mapState({
      selectedLayer: state => state.selectedLayer
    }),
  },
  methods: {
    setwmslayer(layer) {
      if (layer.active) {
        this.$store.commit("SET_SELECTED_LAYER", layer)
        this.$store.commit("REMOVE_COMPARE_LAYER", layer)
        this.$store.commit("ADD_COMPARE_LAYER", layer)
        if (this.visibility===true){
          layer = this.updateVisibility(layer)
        }
        const wmsLayer = buildWmsLayer(layer)
        this.$store.commit("REMOVE_WMS_LAYER", layer.id)
        this.$store.commit("ADD_WMS_LAYER", wmsLayer)
 
        layer.original = {
            ...layer.original,
            time:layer.time
          }
        const wmsLayerOriginal = buildWmsLayer(layer.original)
        
        this.$store.commit("REMOVE_WMS_LAYER", layer.original.id)
        this.$store.commit("ADD_WMS_LAYER", wmsLayerOriginal)

      } 
      else {
        this.$store.commit("REMOVE_WMS_LAYER", layer.id) 
        this.$store.commit("REMOVE_COMPARE_LAYER", layer.id)
        this.$store.commit("REMOVE_WMS_LAYER", layer.original.id)
      }
    },

    setmapboxlayer(layer) {
      if (layer.active) {
        if (!this.map.getLayer(layer.id)) {
          this.map.addLayer(
           layer.data)
        }
        else {
          this.map.setLayoutProperty(layer.id, 'visibility', 'visible')
        }
      }
      else {
        this.map.setLayoutProperty(layer.id, 'visibility', 'none')
      }
    },
  
    updateVisibility(layer){  
          return { 
            ...layer,
            visibility:'none',
            original: {
              ...layer.original,
              ["visibility"]: "visible" 
            }
          } 
    },
    save() { 
      let url = this.selectedLayer.url
      let layer = this.selectedLayer.layer
      let bbox = this.selectedLayer.bbox
      let time = this.selectedLayer.time
      let downloadLink = getCoverage({url, layer, bbox, time})
      window.open(
        downloadLink,
        '_blank'
      ) 
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
