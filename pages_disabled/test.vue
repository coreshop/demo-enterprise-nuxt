<template>
  <h1>Hi</h1>
  <p>There are {{ data?.getCoreShopProductListing?.edges?.length || 0 }} coreshop products.</p>
</template>
<script lang="ts" setup>
const query = gql`
  query {
  getCoreShopProductListing {
    edges {
      node {
        id
        name
      }
    }
  }
}
`

const variables = { }
const { data } = await useAsyncQuery(query, variables)
</script>