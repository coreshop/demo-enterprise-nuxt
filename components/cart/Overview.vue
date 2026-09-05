<template>
  <table v-if="cart && cart.items && cart.items.length > 0"  class="table table-bordered">
    <thead>
    <tr>
      <td class="text-center">
        Image
      </td>
      <td class="text-center">
        Product Details
      </td>
      <td class="text-center">
        Quantity
      </td>
      <td class="text-center">
        Price
      </td>
      <td class="text-center">
        Total
      </td>
      <td></td>
    </tr>
    </thead>
    <tbody>
      <template  v-for="item in cart.items" :key="item.id">
        <cart-item :cart="cart" :item="item" />
      </template>
    </tbody>
    <tfoot>


    <tr>
      <td colspan="3" rowspan="10">
<!--        <div class="form-group"><label for="coreshop_cartRuleCoupon">Voucher Code</label><input type="text"-->
<!--                                                                                                id="coreshop_cartRuleCoupon"-->
<!--                                                                                                name="coreshop[cartRuleCoupon]"-->
<!--                                                                                                class="form-control">-->
<!--        </div>-->
<!--        <button type="submit" id="coreshop_submit_voucher" name="coreshop[submit_voucher]"-->
<!--                class="btn btn-secondary btn">coreshop.ui.voucher.apply_code-->
<!--        </button>-->
      </td>
      <td class="text-right">
        <strong>Subtotal (incl. VAT):</strong>
      </td>
      <td colspan="2" class="text-right cart-sub-total">
        <PriceWidget :price="cart.subtotalGross" />
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong>Subtotal (excl. VAT):</strong>
      </td>
      <td colspan="2" class="text-right cart-discount">
        <PriceWidget :price="cart.subtotalNet" />
      </td>
    </tr>
    <template v-for="adjustment in cart.adjustmentItems">
      <tr v-for="adjustment in cart.adjustmentItems">
        <td class="text-right">
          <strong>{{ adjustment.typeIdentifier }} (incl. VAT):</strong>
        </td>
        <td colspan="2" class="text-right cart-shipping">
          <PriceWidget :price="adjustment.pimcoreAmountGross" />
        </td>
      </tr>
      <tr>
        <td class="text-right">
          <strong>{{ adjustment.typeIdentifier }} (excl. VAT):</strong>
        </td>
        <td colspan="2" class="text-right cart-shipping">
          <PriceWidget :price="adjustment.pimcoreAmountNet" />
        </td>
      </tr>
    </template>
    <tr v-for="tax in cart.taxes" :key="tax.name">
      <td class="text-right cart-tax-detail">
        <strong>Tax {{ tax.name }}:</strong>
      </td>
      <td colspan="2" class="text-right cart-tax-detail">
        <PriceWidget :price="tax.amount" />
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong>Total Tax:</strong>
      </td>
      <td colspan="2" class="text-right cart-tax">
        <PriceWidget :price="cart.totalGross - cart.totalNet" />
      </td>
    </tr>
    <tr>
      <td class="text-right">
        <strong>Total:</strong>
      </td>
      <td colspan="2" class="text-right cart-total-price">
        <PriceWidget :price="cart.totalGross" />
      </td>
    </tr>
    </tfoot>
  </table>
  <div v-else>
    No Items in Cart
  </div>
</template>
<script lang="ts">

import type {OrderFragment} from "~/graphql/generated";
import type {PropType} from "vue";

export default defineComponent({
  props: {
    cart: {
      type: Object as PropType<OrderFragment>,
      default: null,
      required: true,
    },
  },
})
</script>
