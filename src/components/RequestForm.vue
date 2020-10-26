<template>
  <v-dialog v-model="form" max-width="600px" width="600px">
    <v-card>
      <v-card-title>
        Parameters
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Name of model"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="start time (yyyy-mm-dd HH:MM:SS)"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="end time (yyyy-mm-dd HH:MM:SS)"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="reference time (yyyy-mm-dd HH:MM:SS)"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="xmin"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="xmax"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="ymin"
          hint=""
          persistent-hint
          required
        ></v-text-field>
        <v-text-field
          label="ymax"
          hint=""
          persistent-hint
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:request-form', false)"
          >Close</v-btn
        >
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('update:request-form', false)"
          >Send Request</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    requestForm: {
      type: Boolean
    }
  },
  computed: {
    form: {
      get() {
        return this.requestForm;
      },
      set(val) {
        console.log('val',val)
        this.$emit("update:request-form", val);
      }
    }
  }
};
</script>
