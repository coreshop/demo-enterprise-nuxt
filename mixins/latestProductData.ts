import image_1 from "~/assets/images/image1.avif";
import image_2 from "~/assets/images/image2.avif";
import ProductType from "~/types/productType";

export default {
  data() {
    return {
      latestProductData:[
        {
          id: 1,
          name: "Product 1",
          slug: "product-1",
          ean: "123123",
          isTracked: false,
          stockAvailable: true,
          taxRate: 0,
          tax: 0,
          shortDescription: "Aut perspiciatis occaecati dolores quia nostrum sint. Harum natus est saepe laboriosam accusamus dolorem.",
          price: 123.12,
          images:[{
            fullpath: image_1
          }]
        },
        {
          id: 2,
          name: "Product 2",
          slug: "product-2",
          ean: "123123",
          isTracked: true,
          stockAvailable: true,
          taxRate: 0,
          tax: 0,
          shortDescription: "Aut perspiciatis occaecati dolores quia nostrum sint. Harum natus est saepe laboriosam accusamus dolorem.",
          price: 123.12,
          images:[{
            fullpath: image_2
          }]
        },
        {
          id: 3,
          name: "Product 3",
          slug: "product-3",
          ean: "123123",
          isTracked: true,
          stockAvailable: false,
          taxRate: 0,
          tax: 0,
          shortDescription: "Aut perspiciatis occaecati dolores quia nostrum sint. Harum natus est saepe laboriosam accusamus dolorem.",
          price: 123.12,
          images:[{
            fullpath: image_1
          }]
        },
        {
          id: 4,
          name: "Product 4",
          slug: "product-4",
          ean: "123123",
          isTracked: false,
          stockAvailable: true,
          taxRate: 0,
          tax: 0,
          shortDescription: "Aut perspiciatis occaecati dolores quia nostrum sint. Harum natus est saepe laboriosam accusamus dolorem.",
          price: 123.12,
          images:[{
            fullpath: image_2
          }]
        }
      ] as ProductType []
    }
  },
}