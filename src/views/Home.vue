<template>
  <section>
    <FacilityLockup />
    <OWALookup />
    <DoctorLookup />
    <AgentLookup />
    <RaceSelect />
    <ClassSuffixSelect />
    <RemarksTextArea />
    <XrayScanTextArea />
    <FirstNameInput />
    <HomePhoneInput />
  </section>
</template>

<script lang="ts" setup>
import AgentLookup from "@/components/AgentLookup.vue";
import ClassSuffixSelect from "@/components/ClassSuffixSelect.vue";
import DoctorLookup from "@/components/DoctorLookup.vue";
import FacilityLockup from "@/components/FacilityLookup.vue";
import FirstNameInput from "@/components/FirstNameInput.vue";
import HomePhoneInput from "@/components/HomePhoneInput.vue";
import OWALookup from "@/components/OWALookup.vue";
import RaceSelect from "@/components/RaceSelect.vue";
import RemarksTextArea from "@/components/RemarksTextArea.vue";
import XrayScanTextArea from "@/components/XrayScanTextArea.vue";
</script>
