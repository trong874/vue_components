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
    title: "(m) - Multiple synchronus tumors OR Multifocal tumor (differentiated and anaplastic thyroid only)",
    value: "1",
  },
  {
    title: "(s) - Solitary tumor (differentiated and anaplastic thyroid only)",
    value: "1",
  },
]

</script>
