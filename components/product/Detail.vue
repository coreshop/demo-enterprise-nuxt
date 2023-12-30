<template>
  <Breadcrumb :name="product.name"/>

  <div class="row product-info">

    <div class="col-sm-5 images-block">
      <nuxt-img v-if="product.images?.length > 0" provider="pimcore" :src="product.images[0].fullpath" class="img-fluid img-thumbnail" />

      <div class="row" v-if="product.images?.length > 0">
        <div class="col-12 col-sm-6" v-for="image in product.images" :key="image.fullpath">
          <nuxt-img provider="pimcore" :src="image.fullpath" class="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>

    <div class="col-sm-7 product-details">
      <h2>{{ product.name }}</h2>
      <hr/>

      <div class="description" v-if="product.shortDescription">
        {{ product.shortDescription }}
      </div>
      <hr/>

      <ul class="list-unstyled manufacturer">
        <li v-if="product.ean"><span>EAN:</span> {{ product.ean }}</li>
        <!-- <li>
          <span>Availability:</span>
          <span v-if="product.isTracked">
            <span v-if="product.stockAvailable">
              <strong class="label label-success">In Stock</strong>
            </span>
            <span v-else>
              <span>Out of Stock</span>
            </span>
          </span>
        </li> -->
      </ul>
      <hr/>

      <div class="price">
        <span class="price-head">Price:</span>
        <span class="price-new">€{{ product.price.toFixed(2) }}</span>
      </div>
<!--      <div class="tax">-->
<!--        <span>incl. {{ product.taxRate }}% Tax</span>-->
<!--        <span>(€{{ product.tax.toFixed(2) }})</span>-->
<!--      </div>-->

      <hr/>

      <div class="options">
        <div class="cart-button btn-group">
          <form name="coreshop" method="post" action="">
            <div class="input-group">
              <div>
                <input type="number" name="quantity" class="form-control cart-item-quantity" value="1">
              </div>
              <div class="input-group-append ml-2">
                <button type="submit" class="btn btn-cart mt-0" rel="nofollow">
                  Add to Cart
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { ProductFragment } from "~/graphql/generated";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductFragment>,
      default: {},
      required: true
    },
  },
});
</script>
