<template>
  <li v-for="(item, i) in social_links" :key="i">
    <a
      :href="item.link"
      :target="item.target"
    >
      <i :class="item.icon"></i>
    </a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "https://github.com/coreshop/CoreShop",
          target: "_blank",
          icon: "fab fa-github",
          name: "GitHub",
        },
        {
          link: "https://www.coreshop.org",
          target: "_blank",
          icon: "fa fa-globe",
          name: "Website",
        },
      ],
    };
  },
};
</script>
