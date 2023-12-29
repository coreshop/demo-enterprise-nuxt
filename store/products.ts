import {defineStore} from 'pinia'
import {CoreShopProduct, CoreShopProductNode} from "~/types/productType";

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
    }
})