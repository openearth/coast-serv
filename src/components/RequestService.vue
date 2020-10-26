<template>
  <div>
    <v-layout column fill-height>
      <v-flex xs4 align-stretch grow>
        <!-- <h1 class="title"></h1> -->
      </v-flex>
      <v-flex shrink class="pb-4">
        <!-- <v-btn outlined block @click="requestForm = true">Create boundary conditions</v-btn> -->
        <v-btn outlined block @click="servicelink">Create boundary conditions</v-btn>
        <!-- <request-form :requestForm.sync="requestForm"></request-form> -->
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
/* import requestForm from "./RequestForm"; */
export default {
  data() {
    return {
      /* requestForm: false */
    };
  },
  components: {
    /* requestForm */
  },
  methods: {
    servicelink() { 
      window.open(
        'http://coastserv.westeurope.azurecontainer.io/request',
        '_blank'
      )
    }
  }
};
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
