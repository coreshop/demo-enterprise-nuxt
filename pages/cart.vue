<template>
   <NuxtLayout>
     <CheckoutSteps :step="`cart`"/>
    <CartOverview v-if="cart" :cart="cart"/>
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

  },
})
</script>
