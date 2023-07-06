<template>
      <div class="product__wrapper mb-60">
          <div class="product__thumb">
              <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
                  <img :src="appConfig.baseUrl + item.images[0].fullpath" alt="product-img">
                  <img class="product__thumb-2" :src="appConfig.baseUrl + item.images[0].fullpath" alt="product-img">
              </nuxt-link>
              <div class="product__action transition-3">
                  <a @click.prevent="wishlistState.add_wishlist_product(item)" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                      <i class="fal fa-heart"></i>
                  </a>
                  <a @click.prevent="compareState.add_compare_product(item)" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                      <i class="fal fa-sliders-h"></i>
                  </a>
                  <!-- Button trigger modal -->
                  <a @click.prevent="store.initialOrderQuantity" href="#" data-bs-toggle="modal" :data-bs-target="`#productModalId-${item.id}`">
                      <i class="fal fa-search"></i>
                  </a>
              </div>
<!--              <div v-if="item.sale_of_per || item.new" class="product__sale">-->
<!--                  <span v-if="item.new || item.sale_of_per" class="new">new</span>-->
<!--                  <span v-if="item.sale_of_per" class="percent">-{{item.sale_of_per}}%</span>-->
<!--              </div>-->
          </div>
          <div class="product__content p-relative">
              <div class="product__content-inner">
                <nuxt-link :href="`/product-details/${item.id}`">
                  <span v-html="item.name"></span>
                </nuxt-link>
<!--                  <div class="product__price transition-3">-->
<!--                      <span>${{typeof item.price === 'number' ? item.price.toFixed(2) : item.price}}</span>-->
<!--                      <span v-if="item.old_price" class="old-price">${{item.old_price}}</span>-->
<!--                  </div>-->
              </div>
              <div class="add-cart p-absolute transition-3">
                  <a @click.prevent="store.add_cart_product(item)" href="#">+ Add to Cart</a>
              </div>
          </div>
      </div>

      <!-- product modal start -->
      <!--<product-modal :item="item"/>-->
      <!-- product modal end -->
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
import ProductType from '~/types/productType';
import { useCartStore } from '~~/store/useCart';
import { useWishlistStore } from '~~/store/useWishlist';
import { useCompareStore } from '~~/store/useCompare';
import ProductModal from '../common/modals/ProductModal.vue';

export default defineComponent({
  components: { ProductModal },
  props:{
    item:{
      type:Object as PropType<ProductType>,
      default:{},
      required:true
    }
  },
  setup() {
    const appConfig = useAppConfig();

    const store = useCartStore();
    const wishlistState = useWishlistStore();
    const compareState = useCompareStore();
    return {store,wishlistState,compareState,appConfig}
  }
})
</script>
