<template>
  <layout-column>
    <template v-slot:sidebar>
      <MenuLeft/>
    </template>

    <CategoryDetail :category="category" :products="products"/>
  </layout-column>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LayoutColumn from "~/layout/LayoutColumn.vue";
import MenuLeft from "~/components/category/MenuLeft.vue";
import CategoryDetail from "~/components/category/Detail.vue";
import categoryData from "~/mixins/categoryData";
import {useCategoryStore} from "~/store/categories";
import {useProductStore} from "~/store/products";

export default defineComponent({
  components: {
    CategoryDetail,
    MenuLeft,
    LayoutColumn,
  },
  mixins: [categoryData],
  async setup() {
    const slug: string = (useRoute().params.slug as string);
    const state = useCategoryStore();
    const productState = useProductStore();

    const category = await state.loadCategory(parseInt(slug));
    const products = await productState.loadForCategory(parseInt(slug));

    useHead({
      title: category.name,
    });
    return {category, products}
  },
});
</script>
