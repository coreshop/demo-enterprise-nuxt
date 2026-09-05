<template>
  <NuxtLayout :name="`column`">
    <template v-slot:sidebar>
      <CategoryMenuLeft/>
    </template>

    <div v-if="loadingProducts && loadingCategories"></div>
    <div v-else>
      <CategoryDetail :category="category" :products="products"/>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCoreShopCategoryQuery, useGetCoreShopProductsInCategoryQuery } from "../../graphql/generated";

export default defineComponent({
  setup() {
    const id = parseInt(useRoute().params.slug as string);
    const { result: resultCategory, loading: loadingCategories, error: errorCategories } = useGetCoreShopCategoryQuery(
      { categoryId: id },
      { fetchPolicy: "cache-first" },
    );
    const { result: resultProducts, loading: loadingProducts, error: errorProducts } = useGetCoreShopProductsInCategoryQuery({
      categoryId: id,
    });

    const category = computed(() => {
      if (resultCategory?.value?.CoreShopCategory?.__typename === "CoreShopCategoryResult")
      {
        return resultCategory?.value?.CoreShopCategory?.category;
      }

      return null;
    });

    const products = computed(() => {
      if (
        resultProducts?.value?.CoreShopProducts?.__typename === "CoreShopProductsResult"
      ) {
        return resultProducts?.value?.CoreShopProducts?.products?.edges?.map((data) => data?.node);
      }

      return [];
    });

    return {
      category: category,
      products: products,
      loadingCategories,
      loadingProducts,
    };
  },
});
</script>
