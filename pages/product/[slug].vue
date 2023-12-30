<template>
  <NuxtLayout :name="`column`">
    <template v-slot:sidebar>
      <CategoryMenuLeft />
    </template>
    <ProductDetail v-if="product" :product="product"/>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCoreShopProductQuery } from "../../graphql/generated";

export default defineComponent({
  setup() {
    const id = parseInt(useRoute().params.slug as string);
    const { result, loading, error } = useGetCoreShopProductQuery({
      productId: id,
    });

    const product = computed(() => {
      if (result?.value?.CoreShopProduct?.__typename === "CoreShopProductResult")
      {
        return result?.value?.CoreShopProduct?.product;
      }

      return null;
    });

    return {
      product: product,
      loading,
      error,
    };
  },
});
</script>
