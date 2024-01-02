<template>
  <div class="input-group">
    <div>
      <input type="number" name="quantity" v-model="quantity" class="form-control cart-item-quantity" min="1">
    </div>
    <div class="input-group-append ml-2">
      <button type="submit" class="btn btn-cart mt-0" rel="nofollow" @click="handleAddToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { ProductFragment } from "~/graphql/generated";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductFragment>,
      default: {},
      required: true
    },
  },
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    handleAddToCart() {
      const cartStore = useCartStore();
      if (this.product.id) {
        cartStore.addToOrder(parseInt(this.product.id), this.quantity);
      }
    },
  },
});
</script>
