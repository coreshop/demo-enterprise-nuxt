<template>
  <Header/>
  <div class="main-container container">
    <div class="row">
      <div class="col-md-3">
        <slot name="sidebar"></slot>
      </div>
      <div class="col-md-9">
        <slot></slot>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default defineComponent({
  components: {Header, Footer},
  props: {}
});
</script>
