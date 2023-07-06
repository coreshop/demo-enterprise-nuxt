<template>
  <client-only>
    <header>
      <div id="header-sticky" class="header__area">
        <div class="container">
          <div class="row align-items-center">
            <div
                class="col-xl-3 col-lg-3 col-md-4 col-sm-4'">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo.png" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div
                class="col-xl-9 col-lg-9 col-md-8 col-sm-8">
              <div
                  class="header__right p-relative d-flex justify-content-between align-items-center'">
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <menus/>
                  </nav>
                </div>
                <div @click.prevent="handleOffcanvas" class="mobile-menu-btn d-lg-none">
                  <a href="#" class="mobile-menu-toggle"><i class="fas fa-bars"></i></a>
                </div>
                <div class="header__action">
                  <ul>
<!--                    <li>-->
<!--                      <a @click.prevent="handleOpenSearchBar" href="#" class="search-toggle">-->
<!--                        <i class="ion-ios-search-strong"></i> Search-->
<!--                      </a>-->
<!--                    </li>-->
                    <li>
                      <a href="#" class="cart"><i class="ion-bag"></i> Cart
                        <span>({{ state.totalPriceQuantity.quantity }})</span>
                      </a>
                      <!-- cart mini start -->
                      <cart-mini/>
                      <!-- cart mini end -->
                    </li>
                    <li><a href="#"><i class="far fa-bars"></i></a>
                      <extra-info/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- search popup start -->
    <search-popup ref="search_popup"/>
    <!-- search popup end -->

    <!-- off canvas start -->
    <off-canvas ref="offcanvas"/>
    <!-- off canvas end -->
  </client-only>
</template>

<script lang="ts">
// external
import {defineComponent} from 'vue';
import {useCartStore} from '~~/store/useCart';
// internal
import Menus from './Menus.vue';
import CartMini from './header-com/CartMini.vue';
import SearchPopup from '~~/components/common/modals/SearchPopup.vue';
import ExtraInfo from './header-com/ExtraInfo.vue';
import OffCanvas from '~~/components/common/sidebar/OffCanvas.vue';

// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void
}

interface OffCanvasComponentRef {
  OpenOffcanvas(): void
}

export default defineComponent({
  components: {Menus, CartMini, ExtraInfo, SearchPopup, OffCanvas},
  data: () => {
    return {}
  },
  methods: {
    handleOpenSearchBar() {
      const searchPopupRef = this.$refs.search_popup as SearchPopupComponentRef
      searchPopupRef.openSearchPopup()
    },
    handleOffcanvas() {
      const offCanvas = this.$refs.offcanvas as OffCanvasComponentRef
      offCanvas.OpenOffcanvas()
    }
  },
  setup() {
    const state = useCartStore();
    return {state}
  },
})
</script>
