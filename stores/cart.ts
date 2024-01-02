import {defineStore} from 'pinia'
import {useCoreShopAddToOrderMutation, useCoreShopOrderLazyQuery, useCoreShopOrderQuery} from "~/graphql/generated";
import type {Object_CoreShopOrder} from "~/graphql/generated";

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

                        localStorage.setItem('coreShopOrderToken', this.cart.token || '');
                    }
                }

            } catch (error) {
                console.error('Fehler beim Hinzufügen zum Warenkorb:', error);
            }

            this.cartLoading = true;
        },
    }
})
