<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3">
      Class suffix
    </v-label>
    <v-row>
      <v-col>
        <v-responsive class="me-auto" max-width="60%">
          <v-autocomplete
            single-line
            variant="outlined"
            density="compact"
            color="on_green"
            placeholder="Please Select"
            class="field-with-green-icon" 
            :hide-details="true"
            append-inner-icon="mdi-chevron-down"
            :items="testItems"
          />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

const testItems = [
  {
    title: "(g) - Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.",
    value: "1",
  },
  {
    title: "(g) - Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.",
    value: "2",
  },
  {
    title: "(g) - Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.",
    value: "3",
  },
  {
    title: "(g) - Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.",
    value: "4",
  },
]

</script>
