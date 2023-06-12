<template>
  <v-autocomplete
    variant="outlined"
    density="compact"
    color="on_green"
    placeholder="Please Select"
    class="field-with-green-icon"
    :hide-details="true"
    append-inner-icon="mdi-chevron-down"
    v-bind="$attrs"
  >
    <template v-slot:item="{ item, props: itemProps }" >
      <v-list-item v-bind="itemProps" class="option-with-bordered-index" border="0">
        <template v-slot:prepend>
          <div class="index-item">
            {{ item.raw.key }}
          </div>
        </template>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>
