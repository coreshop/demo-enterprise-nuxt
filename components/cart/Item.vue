<template>
    <tr class="shopping-cart-item">
      <td class="text-center">
        <nuxt-link v-if="item.product" :href="`/product/${item.product.id}`">
          <nuxt-img provider="pimcore" :src="item.product.imagesCartProduct[0].fullpath" class="img-fluid img-thumbnail" />
        </nuxt-link>
      </td>
      <td class="text-center">
        <nuxt-link v-if="item.product" :href="`/product/${item.product.id}`">
          {{ item.product.name }}
        </nuxt-link>
      </td>
      <td class="text-center">
        <div class="input-group">
          <input type="number" required="required" min="1" autocomplete="off" class="form-control" v-model="quantity" @change="updateCartQuantity">
        </div>
      </td>
      <td class="text-right cart-item-price">

        <span class="price-new">
          <PriceWidget :price="item.itemRetailPriceGross" />
        </span>
      </td>
      <td class="text-right cart-item-total-price">
        <PriceWidget :price="item.totalGross" />
      </td>
      <td class="text-center">
          <button title="Remove" class="btn btn-danger tool-tip" @click="removeOrderItem">
            <i class="fa fa-times-circle"></i>
          </button>
      </td>
    </tr>
</template>
<script lang="ts">

import type {Object_CoreShopOrder, Object_CoreShopOrderItem} from "~/graphql/generated";
import type {PropType} from "vue";

export default defineComponent({
  props: {
    cart: {
      type: Object as PropType<Object_CoreShopOrder>,
      default: null,
      required: true,
    },
    item: {
      type: Object as PropType<Object_CoreShopOrderItem>,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      quantity: this.item.quantity
    };
  },
  methods: {
    updateCartQuantity() {
      const cartStore = useCartStore();
      if (this.item.id) {
        cartStore.updateOrderItem(parseInt(this.item.id), this.quantity ?? 1);
      }
    },
    removeOrderItem() {
      const cartStore = useCartStore();
      if (this.item.id) {
        cartStore.removeOrderItem(parseInt(this.item.id));
      }
    }
  },
})
</script>
