<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3">
      Race
    </v-label>
    <v-row>
      <v-col>
        <v-responsive class="me-auto" max-width="60%">
          <v-select
            variant="outlined"
            density="compact"
            color="on_green"
            placeholder="Please Select"
            class="field-with-green-icon"
            :hide-details="true"
            append-inner-icon="mdi-chevron-down"  
            :items="testItems"
          >
            <template v-slot:item="{ props, index }" >
              <v-list-item v-bind="props" class="option-with-bordered-index" border="0">
                <template v-slot:prepend>
                  <div class="index-item">
                    {{ index + 1 }}
                  </div>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-responsive>
      </v-col>
    </v-row>
    <!-- dropdown -->
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const testItems = [
  {
    title: "item 1",
    value: "1",
  },
  {
    title: "item 2",
    value: "2",
  },
  {
    title: "item 3",
    value: "3",
  },
  {
    title: "item 4",
    value: "4",
  },
]

</script>

<style scoped lang="css">
@import "@/assets/styles/lookup.css";
</style>
