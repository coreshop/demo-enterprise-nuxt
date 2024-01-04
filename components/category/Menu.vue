<template>
  <nav class="navbar navbar-expand-lg navbar-main-menu navbar-dark bg-red">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCategories"
              aria-controls="navbarCategories" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCategories">
        <ul class="navbar-nav mr-auto" v-if="categories">
          <li v-for="item in categories" :key="item.id" class="nav-item">
            <nuxt-link :href="`/category/${item.id}`" class="nav-link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCoreShopCategoriesQuery } from "@/graphql/generated";

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
