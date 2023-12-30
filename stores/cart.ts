import {defineStore} from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: {},
    }),
    actions: {
        async loadCart() {
            const query = gql`
            query {
              CoreShopActiveOrder(activeOrder: {store: {storeName: "Standard"}}) {
                ... on CoreShopActiveOrderResult {
                  order {
                    id,
                    ... on object_CoreShopOrder {
                      token,
                      store {
                        ... on CoreshopStore {name}
                      }
                      items {
                        ... on object_CoreShopOrderItem {
                          id,
                          totalNet
                          totalGross
                          subtotalNet
                          subtotalGross
                          product {
                            ... on object_CoreShopProduct {
                              id
                            }
                          }
                        }
                      }
                      totalNet
                      totalGross
                      subtotalNet
                      subtotalGross
                      adjustmentItems {
                        ... on fieldcollection_CoreShopAdjustment {
                          typeIdentifier
                          label
                          pimcoreAmountNet
                          pimcoreAmountGross
                        }
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

            if (data.data?.CoreShopActiveOrder?.order !== null) {
                if (data.data?.CoreShopActiveOrder?.order.__typename === 'CoreShopError') {
                    //Create New Order
                    this.cart = {
                        token: 'asdfasdf',
                    };
                } else {
                    this.cart = data.data.CoreShopActiveOrder;
                }
            }
        },
    }
})