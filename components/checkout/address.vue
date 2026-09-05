<template>

</template>
<script lang="ts">

import type {OrderFragment} from "~/graphql/generated";
import type {PropType} from "vue";

export default defineComponent({
  props: {
    cart: {
      type: Object as PropType<OrderFragment>,
      default: null,
      required: true,
    },
  },
})
</script>
