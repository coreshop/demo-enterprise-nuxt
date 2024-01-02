<template>
  <div class="col-12 mb-4">
    <div class="product-col list clearfix">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="image">
            <nuxt-link v-if="product.images.length > 0" :href="`/product/${product.id}`" class="nav-link">
              <nuxt-img provider="pimcore" :src="product.images[0].fullpath" class="img-fluid" />
            </nuxt-link>
          </div>
        </div>
        <div class="col-12 col-sm-9">
          <div class="caption">
            <h4>
              <nuxt-link :href="`/product/${product.id}`">
                {{ product.name }}
              </nuxt-link>
            </h4>
            <div class="description">
              {{ product.shortDescription }}
            </div>

            <product-price-widget :product="product" :show-tax="false" />

            <div class="cart-button btn-group">
              <ProductAddToOrder :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import type { PropType } from "vue";
import type { Object_CoreShopProduct } from "~/graphql/generated";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Object_CoreShopProduct>,
      default: {},
      required: true,
    },
  },
})
</script>
