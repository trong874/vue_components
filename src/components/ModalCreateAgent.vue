<template>
  <v-dialog max-width="550px" v-model="showModal">
    <template v-slot:activator>
      <v-btn
        icon="custom:rounded-add-icon"
        density="compact"
        color="#00695c"
        class="text-white ml-auto"
        @click.prevent.stop="handleClickAdd"
      >
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="primary-background-color text-white text-h5 py-4 px-6"
      >
        <span class="headline">{{ title }}</span>
      </v-card-title>

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

const showModal = ref(false);

const handleReset = () => {
};

const handleClickAdd = () => {
  showModal.value = true
}

const handleSubmit = () => {
  emits("onSubmit");
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
