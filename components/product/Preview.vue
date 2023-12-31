<template>
  <div class="product-col">
    <div class="image">
      <nuxt-link v-if="product.images.length > 0" :href="`/product/${product.id}`" class="nav-link">
        <nuxt-img provider="pimcore" :src="product.images[0].fullpath" class="img-fluid img-thumbnail" />
      </nuxt-link>
    </div>
    <div class="caption">
      <h4>
        <nuxt-link :href="`/product/${product.id}`">
          {{ product.name }}
        </nuxt-link>
      </h4>
      <div class="description">
        {{ product.shortDescription }}
      </div>

      <product-price-widget :product="product" />

      <div class="cart-button">
        <form name="coreshop" method="post" action="">
          <div class="input-group">
            <div><input type="number" name="quantity" required="required" class="form-control cart-item-quantity"
                        value="1"></div>
            <div class="input-group-append ml-2">
              <button type="submit" class="btn btn-cart mt-0" rel="nofollow">
                Add to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { Object_CoreShopProduct } from '../../graphql/generated';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Object_CoreShopProduct>,
      default: {},
      required: true
    }
  },
  setup() {
  },
})
</script>
