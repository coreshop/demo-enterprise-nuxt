<template>
  <div class="product-col">
    <div class="image">
      <nuxt-link v-if="product.images.length > 0" :href="`/product/${product.slug}`" class="nav-link">
        <img :src="product.images[0].fullpath" class="img-fluid">
      </nuxt-link>
    </div>
    <div class="caption">
      <h4>
        <nuxt-link :href="`/product/${product.slug}`">
          {{ product.name }}
        </nuxt-link>
      </h4>
      <div class="description">
        {{ product.shortDescription }}
      </div>

      <div class="price">
        <span class="price-new">€{{ product.price.toFixed(2) }}</span>
      </div>

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
// external
import {defineComponent} from 'vue';
import {PropType} from "vue/dist/vue";
import ProductType from "~/types/productType";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true
    }
  },
  setup() {
  },
})
</script>
