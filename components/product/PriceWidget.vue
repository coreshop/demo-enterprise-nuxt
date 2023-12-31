<template>
  <div v-if="!loading">
    <div class="price">
      <span class="price-head">Price</span>
      <span class="price-new">
        <PriceWidget :price="price?.price_gross" />
      </span>
    </div>
    <div v-if="showTax">
      <div class="price">
        <div class="tax">
          <span> Tax {{ taxRateFormatted }}</span>
          <span> (<PriceWidget :price="price?.tax_amount" />)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { Object_CoreShopProduct } from "../../graphql/generated";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Object_CoreShopProduct>,
      default: {},
      required: true,
    },
    showTax: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useProductStore();

    return store.getProductPrice(parseInt(props.product.id));
  },
  computed: {
    taxRateFormatted(value: any) {
      return value.price.tax_rate + "%";
    },
  },
});
</script>
