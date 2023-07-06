<template>
  <section :class="`footer__area footer-bg ${box_style ? 'box-m-15' : ''}`">
      <div class="footer__bottom">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10">
                      <div class="footer__copyright">
                          <p>Copyright {{new Date().getFullYear()}} © <nuxt-link href="https://www.coreshop.org">CoreShop</nuxt-link> (CoreShop GmbH - GPLv3 and CoreShop Commercial License) </p>
                      </div>
                  </div>
                  <div class="col-lg-2">
                      <div class="footer__social f-right">
                          <ul>
                              <social/>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Social from '~~/components/social/Social.vue';

export default defineComponent({
  components: { Social },
  props:{
    box_style:{
        type:Boolean,
        default:false,
    }
  }
})
</script>
