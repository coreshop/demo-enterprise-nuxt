<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link href="/">Home</nuxt-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ name }}</li>
    </ol>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>
