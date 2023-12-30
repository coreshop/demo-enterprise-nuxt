import {defineStore} from 'pinia'
import {CoreShopProduct, CoreShopProductNode} from "~/types/productType";
import { useCoreShopLatestProductsQuery, type CoreShopLatestProductsQuery, type Object_CoreShopProduct } from '@/graphql/generated'


export const useProductStore = defineStore({
    id: 'product',
    state: () => ({}),
    actions: {
        async loadProduct(id: number): Promise<CoreShopProductNode | null> {
            const query = gql`
            query CoreShopProduct($productId: Int!) {
              CoreShopProduct(product: {productId: $productId}) {
                ... on CoreShopProductResult {
                  product {
                    id
                    name
                    images {
                      ... on asset {
                        fullpath
                      }
                    }
                    price: wholesalePrice
                    shortDescription
                  }
                }
                ... on CoreShopError {
                  message
                }
              }
            }`;

            const data: any = await useAsyncQuery(query, {productId: id});

            return data.data.value.CoreShopProduct.product;
        },
        async loadForCategory(id: number): Promise<CoreShopProductNode[]> {
            const query = gql`
            query ($categoryId: Int!) {
              CoreShopProducts(productListing: {store: {storeName: "Standard"}, category: {categoryId: $categoryId}}) {
                ... on CoreShopProductsResult {
                  products {
                    totalCount,
                    edges {
                      node {
                        id
                        name
                        images {
                          ... on asset {
                            fullpath
                          }
                        }
                        price: wholesalePrice
                        shortDescription
                      }
                    }
                  }
                }
                ... on CoreShopError {
                  message
                }
              }
            }`;

            const data: any = await useAsyncQuery(query, {categoryId: id});

            return data.data.value.CoreShopProducts.products.edges.map((product: CoreShopProduct) => {
                return product.node
            });
        },
        async getLatestProducts(): Promise<Object_CoreShopProduct[]|null> {

          const result = await useAsyncQuery<CoreShopLatestProductsQuery>(gql`${useCoreShopLatestProductsQuery}`);

          const data = result.data.value.CoreShopLatestProducts;

          if (data?.__typename === 'CoreShopLatestProductsResult') {
            return data.products?.edges?.map((product: CoreShopProductNode) => {
              return product.node
            }) as Object_CoreShopProduct[];
          }

          return null;
        }
    }
})