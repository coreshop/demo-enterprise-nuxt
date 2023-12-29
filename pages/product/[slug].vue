<template>
  <layout-column>
    <template v-slot:sidebar>
      <MenuLeft/>
    </template>
    <ProductDetail :product="product"/>
  </layout-column>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProductDetail from "~/components/product/Detail.vue";
import LayoutColumn from "~/layout/LayoutColumn.vue";
import MenuLeft from "~/components/category/MenuLeft.vue";
import {useProductStore} from "~/store/products";

export default defineComponent({
  components: {
    MenuLeft,
    LayoutColumn,
    ProductDetail,
  },
  async setup() {
    const productState = useProductStore();
    const slug = useRoute().params.slug as string;
    const product = await productState.loadProduct(parseInt(slug));

    useHead({
      title: product?.name,
    });
    return {product}
  },
});
</script>
