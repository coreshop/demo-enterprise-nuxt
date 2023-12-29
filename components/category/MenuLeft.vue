<template>
  <h3 class="side-heading">Categories</h3>
  <div class="list-group categories">
    <nuxt-link v-for="item in categoryData" :key="item.id" :href="`/category/${item.slug}`" :active-class="`active`"
               class="list-group-item">
      <i class="fa fa-chevron-right"></i>
      {{ item.name }}
    </nuxt-link>
  </div>
</template>
<script lang="ts">
// external
import {defineComponent} from 'vue';
import categoryData from "~/mixins/categoryData";

export default defineComponent({
  mixins: [categoryData],
})
</script>
