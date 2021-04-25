<template>
  <h1>Hello World</h1>
  <div class="container">
    <component :is="$store.getters.$getContext" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Categories from '@/components/Categories.vue'

export default defineComponent({
  name: 'App',
  components: {
    Categories
  },
  created() {
    this.$store.dispatch('fetchCategories')
  }
})
</script>

<style></style>
