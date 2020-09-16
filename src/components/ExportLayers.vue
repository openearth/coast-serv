<template>
  <div>
    <v-layout column fill-height>
      <v-flex xs4 align-stretch grow>
        <h1 class="title">Export datas</h1>
        <h5 style="color: white">
          OPtions to export the selected layers and data will be displayed here.
        </h5>
      </v-flex>
      <v-flex shrink class="pb-4">
        <v-btn outlined block @click="exportDialog = true">
          EXPORT
        </v-btn>
        <export-dialog :exportDialog.sync="exportDialog" v-if="exportDialog" />
        <plot-dialog :plotDialog.sync="plotDialog" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import plotDialog from './PlotDialog'
import exportDialog from './ExportDialog'

export default {
  props: {
    map: {
      type: Object
    }
  },
  data() {
    return {
      exportDialog: false,
      plotDialog: false
    }
  },
  components: {
    exportDialog,
    plotDialog
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
