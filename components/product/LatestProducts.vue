<template>
  <section class="product-carousel">
    <h2 class="product-head">Latest Products</h2>

    <div class="row">
      <div class="col-12 col-sm-3" v-for="item in latestProductData" :key="item.id">
        <ProductPreview :product="item"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProductPreview from "./Preview.vue";
import latestProductData from "~/mixins/latestProductData";

export default defineComponent({
  mixins: [latestProductData],
  components: {ProductPreview},
});
</script>