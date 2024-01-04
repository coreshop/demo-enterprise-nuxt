export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!process.client) {
        return;
    }

    const cartStore = useCartStore();
    await useCartStore().loadCartIfAvailable();

    if (cartStore.cart === null) {
        return navigateTo('/');
    }
})