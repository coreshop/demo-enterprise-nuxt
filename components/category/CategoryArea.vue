<template>
  <div
    :class="`banner__area ${style_2?'pt-95':''} ${style_3?'pt-20':''} ${style_4?'pt-30':''}`"
  >
    <div :class="`container ${style_3 ? 'custom-container' : ''}`">
      <div
        :class="`${style_2?'':!style_3 && !style_4 && 'banner__inner p-relative mt--95'} ${style_4 ? 'banner__inner-2 p-relative' : ''}`"
      >
        <div class="row">
          <div
            v-for="item in data?.getCoreShopCategoryListing?.edges.slice(0, 3)"
            :key="item.node.id"
            class="col-xl-4 col-lg-4 col-md-6"
          >
            <div class="banner__item mb-30 p-relative">
<!--              <div class="banner__thumb fix">-->
<!--                <nuxt-link href="/shop" class="w-img">-->
<!--                  <img :src="item.img" alt="banner" />-->
<!--                </nuxt-link>-->
<!--              </div>-->
              <div class="banner__content p-absolute transition-3">
                <h5>
                  <nuxt-link :to="item.node.slug[0].slug">
                    <span v-html="item.node.name"></span>
                  </nuxt-link>
                </h5>
                <!--<nuxt-link href="/shop" class="link-btn">{{ item.node.name }}</nuxt-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import categoryData from "~/mixins/categoryData";

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
  mixins: [categoryData],
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
    style_3: {
      type: Boolean,
      default: false,
    },
    style_4: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
