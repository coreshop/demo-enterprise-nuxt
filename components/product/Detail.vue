<template>
  <Breadcrumb :name="product.name"/>

  <div class="row product-info">

    <div class="col-sm-5 images-block">
      <nuxt-img v-if="product.images?.length > 0" provider="pimcore" :src="product.images[0].fullpath" class="img-fluid img-thumbnail" />

      <div class="row" v-if="product.images?.length > 0">
        <div class="col-12 col-sm-6" v-for="image in product.images" :key="image.fullpath">
          <nuxt-img provider="pimcore" :src="image.fullpath" class="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>

    <div class="col-sm-7 product-details">
      <h2>{{ product.name }}</h2>
      <hr/>

      <div class="description" v-if="product.shortDescription">
        {{ product.shortDescription }}
      </div>
      <hr/>

      <ul class="list-unstyled manufacturer">
        <li v-if="product.ean"><span>EAN:</span>{{ product.ean }}</li>
        <li>
          <span>Availability:</span>
          <span v-if="product.stockAvailability">
            <strong class="label label-success">In Stock</strong>
          </span>
          <span v-else>
            <span>Out of Stock</span>
          </span>
        </li> 
      </ul>
      <hr/>

      <product-price-widget :product="product" :show-tax="true" />
      <hr/>

      <div class="options">
        <div class="cart-button btn-group">
          <ProductAddToOrder :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { ProductFragment } from "~/graphql/generated";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductFragment & { ean?: string | null }>,
      default: {},
      required: true
    },
  },
});
</script>
