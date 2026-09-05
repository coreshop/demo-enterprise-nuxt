<template>
   <NuxtLayout>
     <CheckoutSteps :step="`cart`"/>
    <CartOverview v-if="cart" :cart="cart"/>
   </NuxtLayout>
</template>
<script lang="ts">

import type {OrderFragment} from "~/graphql/generated";

export default defineComponent({
  props: {

  },
  computed: {
    cart(): OrderFragment | null {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
  },
  setup() {

  },
})
</script>
