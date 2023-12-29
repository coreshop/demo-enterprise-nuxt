import AssetType from "~/types/assets";

interface CoreShopProduct {
    node: CoreShopProductNode
}

interface CoreShopProductNode {
    id: string,
    name: string,
    images: AssetType[],
    shortDescription: string,
    price: number,

    ean: string,
    isTracked: boolean,
    stockAvailable: boolean,
    taxRate: number,
    tax: number,
}

interface ProductType {
    id: number,
    name: string,
    slug: string,
    ean: string,
    isTracked: boolean,
    stockAvailable: boolean,
    taxRate: number,
    tax: number,
    shortDescription: string,
    price: number,
    images: AssetType[],
}

export {ProductType, CoreShopProduct, CoreShopProductNode};
