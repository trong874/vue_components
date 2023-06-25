<template>
  <v-container>
    <v-label class="lookup-label">
      Remark ({{ text.length || 0 }}/4000)
    </v-label>
    <v-row>
      <v-col>
          <v-responsive class="text-field-wrapper">
            <v-textarea
              variant="outlined"
              rows="4"
              color="on_green"
              v-model="text"
            />
          </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
  const text = ref<string>("")
</script>
