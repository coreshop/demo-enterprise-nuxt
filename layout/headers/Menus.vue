<template>
  <ul>
    <li
      v-for="(item, index) in data?.getCoreShopCategoryListing?.edges"
      :key="index"
    >
      <nuxt-link :href="`${item.node.slug[0].slug}`">{{ item.node.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
// import menuType from "~~/types/menuType";
import bg from '~/assets/img/bg/mega-menu-bg.jpg';


import { defineComponent } from "vue";
import menuData from "~/mixins/menuData";

export default defineComponent({
  setup: async () => {
    const query = gql`
      query {
        getCoreShopCategoryListing(filter: "{\\"parentCategory__id\\": null}") {
          edges {
            node {
              id
              name
              slug {
                ... on UrlSlug {
                  slug
                  siteId
                }
              }
              parentCategory {
                ... on object_CoreShopCategory {
                  id
                }
              }
            }
          }
        }
      }
    `;

    const { data } = await useAsyncQuery(query)

    return {data};
  },
});
</script>
