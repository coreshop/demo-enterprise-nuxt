<template>
  <Breadcrumb :name="category.name"/>

  <div class="row">
    <CategoryList v-for="product in products" :product="product"/>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { Object_CoreShopCategory, Object_CoreShopProduct } from "~/graphql/generated";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<Object_CoreShopCategory>,
      default: {},
      required: true
    },
    products: {
      type: Array as PropType<Object_CoreShopProduct[]>,
      default: [],
      required: true
    }
  },
});
</script>
