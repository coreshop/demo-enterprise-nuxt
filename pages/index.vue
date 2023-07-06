<template>
  <layout>
<!--    <home-hero-slider />-->
<!--    <category-area />-->
    <latest-products />
<!--    <shop-banner/>-->
    <!--<sale-off-product/>-->
    <!--<client-brand-slider/>-->
    <!--<blog-area/>-->
    <!--<subscribe-area/>-->
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import LatestProducts from "~~/components/products/LatestProducts.vue";

export default defineComponent({
  components: {
    Layout,
    LatestProducts,
  },
  setup: async () => {

    useHead({
      title: "CoreShop Headless Demo",
    });
  },
});
</script>
