import AssetType from "~/types/assets";

interface ProductType {
    id: number,
    name: string,
    images: AssetType[],
}

export default ProductType;