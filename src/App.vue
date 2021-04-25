<template>
  <div class="container">
    <div class="content">
      <component :is="$store.getters.$getContext" />
    </div>
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

<style>
body {
  background: #eee;
}

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 305px;
  justify-content: center;
  align-content: center;
}

.content {
  height: 480px;
  background: transparent
    linear-gradient(180deg, #404451 0%, var(--unnamed-color-26282c) 100%) 0% 0%
    no-repeat padding-box;
  background: transparent linear-gradient(180deg, #404451 0%, #26282c 100%) 0%
    0% no-repeat padding-box;
  color: #fff;
  box-shadow: 0px 10px 30px #3f445266;
  border-radius: 15px;
  padding: 2rem 0.375rem;
}
</style>
