import {defineStore} from 'pinia'
import {CoreShopCategoryNode} from "~/types/categoryType";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: []
    }),
    actions: {
        async loadCategory(id: number): Promise<CoreShopCategoryNode|null> {
            const query = gql`
            query CoreShopCategory($categoryId: Int!) {
              CoreShopCategory(category: {categoryId: $categoryId}) {
                ... on CoreShopCategoryResult {
                  category {
                    id
                    name
                  }
                }
                ... on CoreShopError {
                  message
                }
              }
            }`;

            const data:any = await useAsyncQuery(query, {categoryId: id});

            return data.data.value.CoreShopCategory.category;
        },
        async loadCategories() {
            const query = gql`
            query {
              CoreShopCategories(categoryListing: {store: {storeName: "Standard"}}) {
                ... on CoreShopCategoriesResult {
                  categories {
                    totalCount,
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
                ... on CoreShopError {
                  message
                }
              }
            }`;

            const data:any = await useAsyncQuery(query);

            if (data.data.value.CoreShopCategories?.categories !== null) {
                if (data.data.value.CoreShopCategories?.categories.__typename !== 'CoreShopError') {
                    this.categories = data.data.value.CoreShopCategories.categories.edges;
                    return this.categories;
                }
            }

            return [];
        },
    }
})