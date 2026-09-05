<template>
  <NuxtLayout :name="`checkout`">
    <CheckoutSteps :step="`customer`"/>
    <CheckoutAddress :cart="cart"/>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'checkout',
})
</script>
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
})
</script>
