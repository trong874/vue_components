<template>
  <v-dialog max-width="550px" v-model="showModal">
    <template v-slot:activator>
      <v-btn
        @click="showModal = true"
        icon="mdi-plus"
        density="compact"
        color="#00695c"
        class="text-white ml-auto"
      >
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="primary-background-color text-white text-h5 py-4 px-6"
      >
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            :cols="input.cols"
            v-for="(input, index) in doctorInputs"
            :key="index"
          >
            <label class="custom-label primary-color font-weight-bold">
              {{ input.label }}
            </label>
            <v-text-field
              v-if="input.type === 'text'"
              variant="outlined"
              placeholder="Please Input"
              density="compact"
              color="on_green"
              :hide-details="true"
              v-model="data[input.name]"
              :class="`custom-input `"
            />
            <v-select
              v-if="input.type === 'select'"
              :items="fakeStateData"
              item-title="value"
              item-value="value"
              variant="outlined"
              v-model="data[input.name]"
              density="compact"
              color="on_green"
              placeholder="Please Select"
              class="field-with-green-icon"
              :hide-details="true"
              append-inner-icon="mdi-chevron-down"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-end px-6 py-4">
        <v-btn @click="handleClose" class="border-primary custom-btn"
          >Cancel</v-btn
        >
        <v-btn @click="handleSubmit()" class="bg-yellow-darken-2 custom-btn">
          Okay
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fakeStateData } from "@/list/data";
import doctorInputs from "@/list/modal/doctorInputs";
import { Doctor } from "@/types/dataTypes";

const showModal = ref(false);

const data = ref<Doctor>({
  id: "",
  lastName: "",
  firstName: "",
  addressCityState: "",
  licenseNumber: "",
  npi: "",
  specialty: ""
});

const handleReset = () => {
  data.value = {
    id: "",
    lastName: "",
    firstName: "",
    addressCityState: "",
    licenseNumber: "",
    npi: "",
    specialty: ""
  };
};

const handleSubmit = () => {
  emits("onSubmit", { ...data.value, id: Date.now().toString() });
  handleClose();
};

const handleClose = () => {
  showModal.value = false;
  handleReset();
};

defineProps({
  title: {
    type: String,
    default: "Title",
  },
});
const emits = defineEmits(["onSubmit"]);
</script>
