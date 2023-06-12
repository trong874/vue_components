<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3">
      Race
    </v-label>
    <v-row>
      <v-col>
        <v-responsive class="me-auto" max-width="60%">
          <select-with-borderd-key :items="testItems" />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import SelectWithBorderdKey from './SelectWithBorderdKey.vue';

const testItems = [
  {
    title: "item 1",
    value: "1",
    key: "001"
  },
  {
    title: "item 2",
    value: "2",
    key: "002"
  },
  {
    title: "item 3",
    value: "3",
    key: "003"
  },
  {
    title: "item 4",
    value: "4",
    key: "004"
  },
]

</script>
