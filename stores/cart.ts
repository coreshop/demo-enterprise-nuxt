import {defineStore} from 'pinia'
import {
    useCoreShopAddToOrderMutation,
    useCoreShopOrderLazyQuery,
    useCoreShopOrderQuery, useCoreShopRemoveOrderItemMutation,
    useCoreShopUpdateOrderItemMutation
} from "~/graphql/generated";
import type {Object_CoreShopOrder} from "~/graphql/generated";
import {DEFAULT_OPERATION_TYPE_NAME_MAP} from "@graphql-tools/merge/typings/typedefs-mergers/schema-def";

interface CartStoreState {
    cart: null | Object_CoreShopOrder;
    cartToken: null | string;
    cartLoading: boolean;
}

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartStoreState => ({
        cart: null,
        cartLoading: true,
        cartToken: null,

    }),
    actions: {
        async loadCartIfAvailable(): Promise<void> {
            if (!process.client) {
                return;
            }

            this.cartToken = localStorage.getItem('coreShopOrderToken');

            if (this.cartToken) {
                this.cartLoading = true;

                const {load} = useCoreShopOrderLazyQuery({
                    token: this.cartToken
                });

                const data = await load();

                if (data && data?.CoreShopOrder?.__typename === 'CoreShopOrderResult') {
                    if (data.CoreShopOrder.order?.__typename === 'object_CoreShopOrder') {
                        this.cart = data.CoreShopOrder.order;
                    }
                }
                else if (data && data.CoreShopOrder?.__typename === 'CoreShopError') {
                    this.cartToken = null;
                    this.cart = null;
                    localStorage.removeItem('coreShopOrderToken');
                }

            }

            this.cartLoading = false;
        },
        async addToOrder(productId: number, quantity: number): Promise<void> {
            const client = useApolloClient();
            const {loading, mutate, onError} = useCoreShopAddToOrderMutation();

            this.cartLoading = true;

            try {
                const data = await mutate({
                    productId: productId,
                    quantity: quantity,
                    storeName: 'Standard',
                    token: this.cartToken
                });

                if (data?.data?.CoreShopAddToOrder?.__typename === 'CoreShopAddToOrderResult') {
                    if (data?.data.CoreShopAddToOrder?.order?.__typename === 'object_CoreShopOrder') {
                        this.cart = data?.data.CoreShopAddToOrder.order;

                        this.cartToken = this.cart.token || '';
                        localStorage.setItem('coreShopOrderToken', this.cart.token || '');
                    }
                }

            } catch (error) {
                console.error(error);
            }

            this.cartLoading = false;
        },
        async updateOrderItem(orderItemId: number, quantity: number): Promise<void> {
            const client = useApolloClient();
            const {loading, mutate, onError} = useCoreShopUpdateOrderItemMutation();

            if (!this.cartToken) {
                return;
            }

            this.cartLoading = true;

            try {
                const data = await mutate({
                    orderItemId: orderItemId,
                    quantity: quantity,
                    token: this.cartToken
                });

                if (data?.data?.CoreShopUpdateOrderItem?.__typename === 'CoreShopUpdateOrderItemResult') {
                    if (data?.data.CoreShopUpdateOrderItem?.order?.__typename === 'object_CoreShopOrder') {
                        this.cart = data?.data.CoreShopUpdateOrderItem.order;
                    }
                }

            } catch (error) {
                console.error(error);
            }

            this.cartLoading = false;
        },
        async removeOrderItem(orderItemId: number): Promise<void> {
            const client = useApolloClient();
            const {loading, mutate, onError} = useCoreShopRemoveOrderItemMutation();

            if (!this.cartToken) {
                return;
            }

            this.cartLoading = true;

            try {
                const data = await mutate({
                    orderItemId: orderItemId,
                    token: this.cartToken
                });

                if (data?.data?.CoreShopRemoveOrderItem?.__typename === 'CoreShopRemoveOrderItemResult') {
                    if (data?.data.CoreShopRemoveOrderItem?.order?.__typename === 'object_CoreShopOrder') {
                        this.cart = data?.data.CoreShopRemoveOrderItem.order;
                    }
                }

            } catch (error) {
                console.error(error);
            }

            this.cartLoading = false;
        },
    }
})
