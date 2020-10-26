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
                    <v-switch 
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
import { mapState } from 'vuex';
export default {
  props: {
    visibility: {
      type: Boolean
      },
  },
  data() {
    return {
      layers,
    };
  },
  computed: {
    ...mapState({
      compareLayers: state => state.compareLayers,
      selectedLayer: state => state.selectedLayer
    }),
  },
  methods: {
    setwmslayer(layer) {
      if (layer.active) {

        this.$store.commit("REMOVE_COMPARE_LAYER", layer)
        this.$store.commit("ADD_COMPARE_LAYER", layer)
        if (this.visibility===true){
          console.log('layer before', layer)
          layer = this.updateVisibility(layer)
          console.log('layer after', layer)
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
        this.$store.commit("REMOVE__COMPARE_LAYER", layer.id)
        this.$store.commit("REMOVE_WMS_LAYER", layer.original.id)
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
}
}
}
</script>