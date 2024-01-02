<template>
  <NuxtPage></NuxtPage>
</template>

<script lang="ts">
export default defineComponent({
  mounted() {
    const store = useCartStore();
    store.loadCartIfAvailable();
  }
});
</script>