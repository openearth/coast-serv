<template>
  <v-dialog v-model="saveOn" max-width="600px" width="600px">
    <v-card>
      <v-card-title>
        Save boundaries as PLI file
      </v-card-title>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:save-pli', false); downloadOnClick()"
          >Yes
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:save-pli', false)"
          >No
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { pliTemplate } from  "@/libs/pli-template";
import FileSaver from "file-saver";
export default {
  data() {
    return {
      pliTemplate: pliTemplate
    }
  },
  props: {
      savePli: {
          type:Boolean
      },
      coordinates: {
          type:Array,
          required: true
      }
  },
  computed: {
      saveOn: {

          get() { 
              return this.savePli;
          },
          set(val) {
            this.$emit("update:save-pli", val);
      }
      }
  },
  methods: {
    downloadOnClick() {
      let rows = ``
      this.coordinates[0].forEach(coord => {
        let row =  `\t${coord[0]}\t${coord[1]}\n`
        rows = rows + row
      })
      const fileName = 'polygon'
      const numberOfrows = this.coordinates[0].length
      const pliForExport = pliTemplate({fileName, numberOfrows, rows})
      const blob = new Blob([pliForExport], {type: "text/plain;charset=utf-8"})
      FileSaver.saveAs(blob, `${fileName}.pli` )
    }
  }


}
</script>
