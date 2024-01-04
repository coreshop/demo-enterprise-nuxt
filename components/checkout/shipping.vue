<template>

</template>
<script lang="ts">

import type {Object_CoreShopOrder} from "~/graphql/generated";
import type {PropType} from "vue";

export default defineComponent({
  props: {
    cart: {
      type: Object as PropType<Object_CoreShopOrder>,
      default: null,
      required: true,
    },
  },
})
</script>
