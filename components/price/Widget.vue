<template>
  <span>{{ formatted }}</span>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formatted(value: any) {
      var formatter = new Intl.NumberFormat("de-AT", {
        style: "currency",
        currency: "EUR",
      });
      return formatter.format(value.price / 100);
    },
  },
});
</script>