import CategoryType from "~/types/categoryType";
import cate_img_1 from "~/assets/img/shop/banner/banner-sm-1.jpg";
import cate_img_2 from "~/assets/img/shop/banner/banner-sm-2.jpg";
import cate_img_3 from "~/assets/img/shop/banner/banner-sm-3.jpg";
import cate_img_4 from "~/assets/img/shop/banner/02/banner-1.webp";
import cate_img_5 from "~/assets/img/shop/banner/02/banner-2.webp";
import cate_img_6 from "~/assets/img/shop/banner/02/banner-3.webp";

export default {
  data() {
    return {
      categoryData:[
        {
          id: 1,
          name: "Lighting & Chair",
          slug: 'lighting-chair',
          children:['Lighting','Chair']
        },
        {
          id: 2,
          name: "Decoration & Accessories",
          slug: 'decoration-accessories',
          children:['Decoration','Accessories']
        },
        {
          id: 3,
          name: "Clothing & Oil",
          slug: 'clothing-oil',
          children:['Clothing','Oil']
        },
        {
          id: 4,
          name: "Fashion for Men's",
          slug: 'fashion-mens',
          children:['Shirt'],
        },
        {
          id: 5,
          name: "Fashion for Women’s",
          slug: 'fashion-womens',
          children:['Shoes'],
        },
      ] as CategoryType []
    }
  },
}