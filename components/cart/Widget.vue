<template>
  <div class="col-md-3 p-sm-2">
    <div class="loading" v-if="cartLoading">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <div v-else id="cart" class="btn-group btn-block">
      <button type="button" class="btn btn-block btn-lg dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-shopping-cart"></i>
        <span id="cart-overview-total">
            <span class="cart-badge">{{ cart && cart.items ? cart.items.length : 0 }}</span> Items -
            <span class="cart-total"> <PriceWidget :price="cart ? cart.totalGross : 0" /></span>
        </span>
      </button>
      <ul v-if="cart && cart.items && cart.items.length > 0" class="dropdown-menu pull-right" aria-labelledby="dropdownMenuButton">
        <li>
          <table class="table hcart cart-items">
            <tr v-for="item in cart.items" :key="item.id">
              <td class="text-center">
                <nuxt-link v-if="item.product" :href="`/product/${item.product.id}`">
                  <nuxt-img provider="pimcore" :src="item.product.imagesCartPreview[0].fullpath" class="img-fluid img-thumbnail" />
                </nuxt-link>
              </td>
              <td class="text-left">
                <nuxt-link v-if="item.product" :href="`/product/${item.product.id}`">
                  {{ item.product.name }}
                </nuxt-link>
              </td>
              <td class="text-right">x {{ item.quantity }}</td>
              <td class="text-right">
                <PriceWidget :price="item.totalGross" />
              </td>
              <td class="text-center">
<!--                TODO: removeFromCart-->
<!--                {% if not item.isGiftItem %}-->
<!--                <a href="{{ path('coreshop_cart_remove', {cartItem: item.id|coreshop_string}) }}" class="removeFromCart" data-id="{{ item.id }}" data-refresh="true">-->
<!--                  <i class="fa fa-times"></i>-->
<!--                </a>-->
<!--                {% endif %}-->
              </td>
            </tr>
          </table>
        </li>
        <li>
          <table class="table table-bordered total">
            <tbody>
            <tr>
              <td class="text-right"><strong>Subtotal</strong></td>
              <td class="text-left cart-subtotal">
                <PriceWidget :price="cart.subtotalGross" />
              </td>
            </tr>
            <tr>
              <td class="text-right"><strong>Total</strong></td>
              <td class="text-left cart-total">
                <PriceWidget :price="cart.totalGross" />
              </td>
            </tr>
            </tbody>
          </table>
          <p class="text-right btn-block1">
            <nuxt-link :href="`/cart`">
              Cart
            </nuxt-link>

<!--            {% if is_granted('CORESHOP_CHECKOUT') %}-->
<!--            <a href="{{ path('coreshop_checkout', {'stepIdentifier': coreshop_checkout_steps_get_first()}) }}">-->
<!--              {{ 'coreshop.ui.checkout'|trans }}-->
<!--            </a>-->
<!--            {% endif %}-->
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">

import type {Object_CoreShopOrder} from "~/graphql/generated";

export default defineComponent({
  props: {

  },
  computed: {
    cart(): Object_CoreShopOrder | null {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
    cartLoading(): boolean {
      const cartStore = useCartStore();
      return cartStore.cartLoading;
    }
  },
  setup() {

  },
})
</script>
