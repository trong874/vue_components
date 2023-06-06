<template>
  <v-container>
    <v-label class="text-teal-darken-3 font-weight-bold custom-label mb-3">
      Doctor
    </v-label>
    <v-row>
      <v-col>
        <v-responsive class="me-auto" max-width="60%">
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
              <ModalCreateDoctor title="Facility" @on-submit="handleSubmit" />
            </template>
          </v-text-field>
        </v-responsive>
      </v-col>
    </v-row>
    <!-- dropdown -->
    <v-table
      class="table-auto w-full rounded-t-lg mt-4 table-with-shadow"
      v-if="lookupValue.length > 0 && !isSelected"
    >
      <thead class="bg-teal">
        <tr>
          <th
            class="bg-grey-lighten-1 py-2 border text-left px-2"
            v-for="header in headersDoctor"
            :key="header.id"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template 
          v-if="filteredData.length > 0">
          <tr
            v-for="doctor in filteredData"
            :key="doctor.id"
            @click="handleSelectItem(doctor.addressCityState)"
          >
            <td
              v-for="columnKey in displayedColumns"
              :key="columnKey"
              class="py-2 px-2 font-weight-bold border break-words"
              :class="displayedColumnsInfo[columnKey]"
            >
              {{ doctor[columnKey] }}
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>
    <!-- no results -->
    <div v-if="filteredData.length === 0 && !isSelected" class="no-result">
      <span class="table-text">No result</span>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { headersDoctor, doctors } from "@/list/data";
import { Doctor } from "@/types/dataTypes";
import ModalCreateDoctor from "./ModalCreateDoctor.vue";

const lookupInputRef = ref<HTMLInputElement | null>(null);
const lookupValue = ref("");
const doctorsData = ref(doctors);
const displayedColumns: (keyof Doctor)[] = ["id", "lastName", "firstName", "npi", "licenseNumber", "specialty", "addressCityState"]

const displayedColumnsInfo: Record<keyof Doctor, { class: string }> = {
  id: {
    class: "max-w-[123px]"
  },
  lastName: {
    class: "max-w-[123px]"
  },
  firstName: {
    class: "max-w-[123px]"
  },
  npi: {
    class: "max-w-[123px]"
  },
  licenseNumber: {
    class: "max-w-[123px]"
  },
  specialty: {
    class: "max-w-[123px]"
  },
  addressCityState: {
    class: "max-w-[123px]"
  },
}


const isSelected = ref(false);

const handleInput = (e: Event) => {
  isSelected.value = false;
};

const handleSelectItem = (addressCityState: string) => {
  lookupValue.value = addressCityState;
  isSelected.value = true;
};

const handleSubmit = (data: Doctor) => {
  if (
    data.firstName &&
    data.lastName &&
    data.licenseNumber &&
    data.npi &&
    data.addressCityState &&
    data.id &&
    data.specialty
  ) {
    doctorsData.value.push(data);
  }
};

const filteredData = computed(() => {
  const lookupKeys:(keyof Doctor)[] = ['firstName', "lastName", "licenseNumber", "npi", "addressCityState", "specialty"]
  return doctorsData.value.filter(
    (item) => {
      return !!lookupKeys.find((key) => {
        return (
          item[key]
            .toString()
            .toLowerCase()
            .includes(lookupValue.value.toLowerCase()))
      })
    }
  );
});
</script>

<style scoped lang="css">
@import "@/assets/styles/lookup.css";
</style>
