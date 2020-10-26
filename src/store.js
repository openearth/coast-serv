import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    acceptedLegal: false,
    selectedLayer:null,
    wmsLayers: [],
    compareLayers: []
  },
  mutations: {
    ADD_COMPARE_LAYER(state, newLayer) {
      const layerExists = state.compareLayers.some(
        (storedLayer) => storedLayer.id === newLayer.id
      );

      if (!layerExists) {
        state.compareLayers = [...state.compareLayers, newLayer];
      }
    },
    REMOVE_COMPARE_LAYER(state, id) {
      state.compareLayers = state.compareLayers.filter((layer) => layer.id !== id);
    },

    UPDATE_COMPARE_LAYERS_VISIBILITY(state) {
      state.compareLayers = state.compareLayers.map(layer => {
        return { 
          ...layer,
          visibility:'none',
          original: {
            ...layer.original,
            ["visibility"]: "visible" 
          }
        }
      })
    },
    SET_SELECTED_LAYER(state, layer) {
      state.selectedLayer = layer
    },
    SET_ACCEPTED_LEGAL(state, value) {
      state.acceptedLegal = value;
    },
    ADD_WMS_LAYER(state, newLayer) {
      const layerExists = state.wmsLayers.some(
        (storedLayer) => storedLayer.id === newLayer.id
      );

      if (!layerExists) {
        state.wmsLayers = [...state.wmsLayers, newLayer];
      }
    },
    ADD_WMS_LAYER_ORIGINAL(state, newLayer) {
      const layerExists = state.wmsLayersOriginal.some(
        (storedLayer) => storedLayer.id === newLayer.id
      );

      if (!layerExists) {
        state.wmsLayersOriginal = [...state.wmsLayersOriginal, newLayer];
      }
    },
    REMOVE_WMS_LAYER(state, id) {
      state.wmsLayers = state.wmsLayers.filter((layer) => layer.id !== id);
    },
    REMOVE_WMS_LAYER_ORIGINAL(state, id) {
      state.wmsLayersOriginal = state.wmsLayersOriginal.filter((layer) => layer.id !== id);
    },
    CLEAR_WMS_LAYERS(state) {
      state.wmsLayers = [];
      state.legendLayer = null;
    },
    CLEAR_WMS_LAYERS_ORIGINAL(state) {
      state.wmsLayersOriginal = [];
      state.legendLayer = null;
    },
    
  },
  /* ? */
  getters: {
    wmsLayers: (state) => state.wmsLayers.sort((a, b) => b.index - a.index),
    wmsLayersOriginal: (state) => state.wmsLayersOriginal.sort((a, b) => b.index - a.index),
  },
  actions: {}
});
