<template>
  <h3 class="side-heading">Categories</h3>
  <div class="list-group categories">
    <nuxt-link v-for="item in categories" :key="item.id" :href="`/category/${item.id}`" :active-class="`active`"
               class="list-group-item">
      <i class="fa fa-chevron-right"></i>
      {{ item.name }}
    </nuxt-link> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCoreShopCategoriesQuery } from "../../graphql/generated";

export default defineComponent({
  setup() {
    const { result, loading, error } = useGetCoreShopCategoriesQuery();

    const categories = computed(() => {
      if (
        result?.value?.CoreShopCategories?.__typename === "CoreShopCategoriesResult"
      ) {
        return result?.value?.CoreShopCategories?.categories?.edges?.map((data) => data?.node);
      }

      return [];
    });

    return {
      categories: categories,
      loading,
      error,
    };
  },
});
</script>
