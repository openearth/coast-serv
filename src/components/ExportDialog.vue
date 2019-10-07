<template>
  <v-dialog v-model="dialog" max-width="600px" width="600px">
    <v-card>
      <v-card-title>
        Export Settings
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="File name"
          hint="Model-boundaries.smt"
          persistent-hint
          required
        ></v-text-field>
        <v-select
          v-for="cond in conditions"
          :key="cond.name"
          v-model="cond.value"
          :items="cond.items"
          label="cond.label"
          required
        ></v-select>
        <v-select
          v-model="parameter"
          :items="parameters"
          label="Select Paramaters"
          required
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:export-dialog', false)"
          >Close</v-btn
        >
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:export-dialog', false)"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const conditions = [
  {
    label: 'Boundary conditions North',
    value: 'BC 1',
    items: ['BC 1', 'BC 2', 'BC 3']
  },
  {
    label: 'Boundary conditions East',
    value: 'BC 1',
    items: ['BC 1', 'BC 2', 'BC 3']
  },
  {
    label: 'Boundary conditions South',
    value: 'BC 1',
    items: ['BC 1', 'BC 2', 'BC 3']
  },
  {
    label: 'Boundary conditions West',
    value: 'BC 1',
    items: ['BC 1', 'BC 2', 'BC 3']
  }
]

const parameters = ['parameter 1', 'parameter 2', 'parameter 3']

export default {
  props: {
    exportDialog: {
      type: Boolean
    }
  },
  computed: {
    dialog: {
      get() {
        return this.exportDialog
      },
      set(val) {
        this.$emit('update:export-dialog', val)
      }
    }
  },
  data() {
    return {
      parameter: 'parameter 1',
      conditions: conditions,
      parameters: parameters
    }
  }
}
</script>

<style></style>
