<template>
  <v-dialog v-model="dialog" width="600px" max-width="600px" class="pa=4">
    <v-card>
      <v-card-title>
        Data plot
      </v-card-title>
      <v-card-text>
        <e-charts width="100%" theme="dark" class="chart" :options="options">
          :autoresize="true"
        </e-charts>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:plot-dialog', false)"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  props: {
    plotDialog: {
      type: Boolean
    }
  },
  computed: {
    dialog: {
      get() {
        return this.plotDialog
      },
      set(val) {
        this.$emit('update:plot-dialog', val)
      }
    }
  },
  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        ]
      }
    }
  },
  methods: {
    deferredMountedTo(map) {
      this.mapbox = map
    }
  },
  components: {
    ECharts
  }
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
