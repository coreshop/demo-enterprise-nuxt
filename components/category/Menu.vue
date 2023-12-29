<template>
  <nav class="navbar navbar-expand-lg navbar-main-menu navbar-dark bg-red">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCategories"
              aria-controls="navbarCategories" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCategories">
        <ul class="navbar-nav mr-auto">
          <li v-for="item in categories" :key="item.id" class="nav-item">
            <nuxt-link :href="`/category/${item.node.id}`" class="nav-link">{{ item.node.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCategoryStore} from "~/store/categories";

export default defineComponent({
  mixins: [],
  async setup() {
    const state = useCategoryStore();

    return {categories: await state.loadCategories()};
  },
})
</script>
