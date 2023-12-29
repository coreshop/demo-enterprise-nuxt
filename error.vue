<template>
  <layout :transparent="true">
    error
  </layout>
</template>

<script lang="ts" setup>
import Layout from "./layout/Layout.vue";

defineProps(["error"]);
const handleClearError = () => clearError({redirect:'/'})
</script>
