<template>
  <div>
    <v-switch v-if="layers.length" v-model="visibility" @change="onUpdateVisibility" class="pt-3"></v-switch>
    <v-switch v-else class="pt-3" disabled></v-switch>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  props: {

    map: {
      type: Object
    },
  }, 
  computed: {
    ...mapState({
      layers: state => state.compareLayers
    }),
  },
  data() { 
    return {
      visibility: false
    };
  },
  watch: {
    visibility() {
      this.$store.commit('UPDATE_COMPARE_LAYERS_VISIBILITY')
      this.updatevisibility()
    },
  },
  methods: {
    updatevisibility() {
      if (this.visibility===true) {
        
        this.layers.forEach(layer =>{
          this.map.setLayoutProperty(layer.id, 'visibility','none')
          this.map.setLayoutProperty(layer.original.id, 'visibility','visible')
          
        })
      }
      else {
        this.layers.forEach(layer =>{
          this.map.setLayoutProperty(layer.id, 'visibility','visible')
          this.map.setLayoutProperty(layer.original.id, 'visibility','none')
        })
      }
    },
    onUpdateVisibility(){
      this.$emit('onUpdateVisibility', this.visibility)
    }
  }

}
</script>

