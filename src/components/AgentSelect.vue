<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3">
      Agent
    </v-label>
    <v-row>
      <v-col>
        <div class="agent-select-wrapper">
          <v-responsive class="me-auto" max-width="60%">
            <select-with-borderd-key
              :items="testItems"
              :append-inner-icon="null"
            />
          </v-responsive>
          <!-- Move add icon out of select to prevent open select when click add -->
          <ModalCreateAgent />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import SelectWithBorderdKey from './SelectWithBorderdKey.vue';
import ModalCreateAgent from './ModalCreateAgent.vue';

const testItems = [
  {
    title: "item 1",
    value: "1",
    key: "DA001"
  },
  {
    title: "item 2",
    value: "2",
    key: "DA002"
  },
  {
    title: "item 3",
    value: "3",
    key: "DA003"
  },
  {
    title: "item 4",
    value: "4",
    key: "DA004"
  },
]

</script>
