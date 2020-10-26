<template>
  <v-dialog
    scrollable
    persistent
    v-model="showDialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    :max-width="640"
  >
    <v-card class="d-flex flex-column" style="max-height: 100%;overflow:hidden">
      <v-card-title class="pa-5">
        <v-toolbar-title>COASTSERV User Agreement Deltares</v-toolbar-title>
      </v-card-title>

      <div class="px-5 flex-grow-1 overflow-y-auto" v-html="testText" />

      <v-card-actions>
        <div class="pa-2" style="width:100%">
          <form action submit.prevent>
            <v-checkbox
              label="I agree with the Conditions of Use"
              class="ma-0"
              color="info"
              v-model="accepted1"
              hide-details
            />
            <v-checkbox
              label="I consent with the use of cookies"
              class="ma-0"
              v-model="accepted2"
              hide-details
            />
          </form>
          <div class="mt-2 d-flex">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!allAccepted"
              @click="onStartClick"
              >I agree</v-btn
            >
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import content from "../content/legal.md";

export default {
  data: () => ({
    content,
    accepted1: false,
    accepted2: false,
    testText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptinostrum voluptates molestias dolorem iste, voluptas natus quibusdamculpa debitis velit neque. Tenetur quod saepe, minus in suntconsectetur veritatis non."
  }),
  computed: {
    ...mapState({
      acceptedLegal: state => state.acceptedLegal
    }),
    showDialog() {
      return !this.acceptedLegal;
    },
    allAccepted() {
      return this.accepted1 && this.accepted2;
    }
  },
  methods: {
    ...mapMutations(["SET_ACCEPTED_LEGAL"]),
    onStartClick() {
      this.SET_ACCEPTED_LEGAL(true);
    }
  }
};
</script>
<style>
.v-input--selection-controls__input {
  border: blue;
}
</style>
