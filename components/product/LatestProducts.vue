<template>
  <section v-if="!loading && !error" class="product-carousel">
    <h2 class="product-head">Latest Products</h2>

    <div class="row">
      <div class="col-12 col-sm-3" v-for="item in products" :key="item.id">
        <ProductPreview :product="item" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCoreShopLatestProductsQuery } from "../../graphql/generated";

export default defineComponent({
  setup() {
    const { result, loading, error } = useGetCoreShopLatestProductsQuery({
      storeName: "Standard",
    });

    const products = computed(() => {
      if (
        result?.value?.CoreShopLatestProducts?.__typename === "CoreShopLatestProductsResult"
      ) {
        return result?.value?.CoreShopLatestProducts?.products?.edges?.map((data) => data?.node);
      }

      return [];
    });

    return {
      products: products,
      loading,
      error,
    };
  },
});
</script>
