<template>
  <div>
    <h1>Categories</h1>

    <li v-for="category in $store.getters.$getCategories" :key="category.id">
      {{ category.title }}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Categories'
})
</script>

<style scoped></style>
