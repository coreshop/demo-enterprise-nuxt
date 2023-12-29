
interface CoreShopCategory {
    node: CoreShopCategoryNode
}

interface CoreShopCategoryNode {
    id: string,
    name: string,
    slug: PimcoreSlugType,
}


export {CoreShopCategory, CoreShopCategoryNode};