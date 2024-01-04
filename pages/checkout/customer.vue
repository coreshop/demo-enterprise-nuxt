<template>
  <NuxtLayout :name="`checkout`">
    <CheckoutSteps :step="`customer`"/>
    <CheckoutAddress :cart="cart"/>
  </NuxtLayout>
</template>
<script lang="ts">

import type {Object_CoreShopOrder} from "~/graphql/generated";

export default defineComponent({
  props: {

  },
  computed: {
    cart(): Object_CoreShopOrder | null {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
  },
  setup() {
    definePageMeta({
      middleware: 'checkout'
    })
  },
})
</script>
