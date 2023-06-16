<template>
  <section>
    <FacilityLockup />
    <OWALookup />
    <DoctorLookup />
    <AgentLookup />
    <RaceSelect />
    <ClassSuffixSelect />
  </section>
</template>

<script lang="ts" setup>
import AgentLookup from "@/components/AgentLookup.vue";
import ClassSuffixSelect from "@/components/ClassSuffixSelect.vue";
import DoctorLookup from "@/components/DoctorLookup.vue";
import FacilityLockup from "@/components/FacilityLookup.vue";
import OWALookup from "@/components/OWALookup.vue";
import RaceSelect from "@/components/RaceSelect.vue";
</script>
