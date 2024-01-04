export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:error', (error) => {
        const { onLogout } = useApollo()

        if (error.networkError?.result?.code === 401 && error.networkError?.result?.message == "Expired JWT Token") {
            onLogout();
        }
    });
});