<template>
  <Breadcrumb :name="category.name"/>

  <list v-for="product in products" :product="product"/>
</template>

<script lang="ts">
import {defineComponent , PropType} from "vue";
import Breadcrumb from "~/components/breadcrumb/Breadcrumb.vue";
import List from "~/components/category/List.vue";
import {CoreShopCategoryNode} from "~/types/categoryType";
import {CoreShopProductNode} from "~/types/productType";

export default defineComponent({
  components: {
    List,
    Breadcrumb,
  },
  props: {
    category: {
      type: Object as PropType<CoreShopCategoryNode>,
      default: {},
      required: true
    },
    products: {
      type: Array as PropType<CoreShopProductNode[]>,
      default: [],
      required: true
    }
  },
});
</script>
