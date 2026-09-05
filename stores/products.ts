import {defineStore} from 'pinia'
import { useGetCoreShopProductPriceQuery } from '@/graphql/generated'


export const useProductStore = defineStore('product', {
    state: () => ({}),
    actions: {
        getProductPrice(id: number) {
            const { result, loading, error } = useGetCoreShopProductPriceQuery({
            productId: id,
          });

          const price = computed(() => {
            if (result?.value?.CoreShopProductPrice?.__typename === "CoreShopProductPriceResult")
            {
              return result?.value?.CoreShopProductPrice;
            }

            return null;
          });

          return {
            price: price,
            loading,
            error,
          };
        }
    }
})