<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3"
      >Facility</v-label
    >
    <v-row>
      <v-col>
        <div class="me-auto table-dropdown-wrapper"> 
          <v-responsive class="me-auto table-dropdown-wrapper" max-width="60%">
            <v-text-field
              type="text"
              v-model="lookupValue"
              placeholder="Enter lookup values"
              ref="lookupInputRef"
              variant="outlined"
              :hide-details="true"
              color="on_green"
              @input="handleInput"
            >
              <template v-slot:append-inner>
                <!-- modal -->
                <Modal title="Facility" @on-submit="handleSubmit" />
              </template>
            </v-text-field>
          </v-responsive>
          <div class="table-dropdown">
            <v-table
              class="table-auto w-full rounded-t-lg mt-4 table-with-shadow"
              v-if="lookupValue.length > 0 && !isSelected"
            >
              <thead class="bg-teal">
                <tr>
                  <th
                    class="bg-grey-lighten-1 py-2 border text-left px-2"
                    v-for="header in headers"
                    :key="header.id"
                  >
                    {{ header.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="facility in filteredData"
                  :key="facility.id"
                  v-if="filteredData.length > 0"
                  @click="handleSelectItem(facility.stateCod,facility.hospitalName)"
                >
                  <td
                    class="state-cod-text py-2 px-2 font-weight-bold border max-w-[197px] break-words"
                  >
                    {{ facility.stateCod }}
                  </td>
                  <td
                    class="py-2 px-2 font-weight-medium border max-w-[580px] break-words"
                  >
                    {{ facility.hospitalName }}
                  </td>
                  <td
                    class="py-2 px-2 font-weight-medium border max-w-[230px] break-words"
                  >
                    {{ facility.city }}
                  </td>
                  <td
                    class="py-2 px-2 font-weight-medium border max-w-[123px] break-words"
                  >
                    {{ facility.state }}
                  </td>
                </tr>
              </tbody>
            </v-table>
            <!-- no results -->
            <div v-if="filteredData.length === 0 && !isSelected" class="no-result">
              <span class="table-text">No result</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- dropdown -->
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { facilities, headers } from "@/list/data";
import Modal from "./Modal.vue";
import { Facility } from "@/types/dataTypes";

const lookupInputRef = ref<HTMLInputElement | null>(null);
const lookupValue = ref("");
const facilitiesData = ref(facilities);

const isSelected = ref(false);

const handleInput = (e: Event) => {
  isSelected.value = false;
};

const handleSelectItem = (stateCod:string,hospitalName: string) => {
  lookupValue.value = stateCod +" "+hospitalName;
  isSelected.value = true;
};

const handleSubmit = (data: Facility) => {
  console.log(data);
  if (
    data.hospitalName &&
    data.reportName &&
    data.addressNo1 &&
    data.addressNo2 &&
    data.city &&
    data.state &&
    data.stateCod &&
    data.npi &&
    data.id &&
    data.otherID
  ) {
    facilitiesData.value.push(data);
  }
};



const filteredData = computed(() => {

  return facilitiesData.value.filter(
    (item) =>
      item.stateCod.toLowerCase().includes(lookupValue.value.toLowerCase()) ||
      item.hospitalName
        .toLowerCase()
        .includes(lookupValue.value.toLowerCase()) ||
      item.city.toLowerCase().includes(lookupValue.value.toLowerCase()) ||
      item.state.toLowerCase().includes(lookupValue.value.toLowerCase())
  );
});
</script>

<style scoped lang="css">
@import "@/assets/styles/lookup.css";
.state-cod-text {
  color: #00695c;
}
</style>
