import {defineStore} from 'pinia';
import {useCoreShopAuthorizeMutation} from "~/graphql/generated";

interface AuthStoreState {
    token: null | string;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthStoreState => ({
        token: null
    }),
    actions: {
        async login(username: string, password: string) {
            const cartStore = useCartStore();
            const {mutate} = useCoreShopAuthorizeMutation();

            try {
                const data = await mutate({
                    username,
                    password,
                    orderToken: cartStore.cartToken
                });

                if (data?.data?.CoreShopAuthorize?.__typename === 'CoreShopAuthorizeResult') {
                    this.token = data.data.CoreShopAuthorize.token as string;

                    const { onLogin } = useApollo()

                    await onLogin(this.token);
                }
            } catch (error) {
                console.error('Login failed:', error);
            }
        },
        logout() {
            this.token = null;
            const { onLogout } = useApollo()
            onLogout();
        }
    }
});