<template>
  <div class="col-12 mb-4">
    <div class="product-col list clearfix">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="image">
            <nuxt-link v-if="product.images.length > 0" :href="`/product/${product.id}`" class="nav-link">
              <img :src="product.images[0].fullpath" class="img-fluid">
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

            <div class="price">
              <span class="price-new">€{{ product.price.toFixed(2) }}</span>
            </div>

            <div class="cart-button btn-group">
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
      </div>
    </div>
  </div>

</template>
<script lang="ts">
// external
import {defineComponent, PropType} from 'vue';
import {CoreShopProductNode} from "~/types/productType";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<CoreShopProductNode>,
      default: {},
      required: true,
    },
  },
})
</script>
