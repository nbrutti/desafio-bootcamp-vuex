<template>
  <div>
    <div class="heading">
      <div class="heading-image">
        <img :src="getAssetImage('astronaut.svg')" alt="Astronaut" />
      </div>
      <div class="heading-text">
        <h3>Perguntas frequentes</h3>
        <span>Escolha a categoria desejada</span>
      </div>
    </div>

    <ul class="items">
      <li
        @click="handleCategory(category)"
        v-for="category in $getCategories"
        :key="category.id"
      >
        <img :src="getAssetImage(category.icon)" :alt="category.title" />
        {{ category.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { commonsMixin } from '@/mixins'
import { Category } from '@/models'

export default defineComponent({
  name: 'Categories',
  mixins: [commonsMixin],
  methods: {
    handleCategory(category: Category) {
      console.log(`Mudando o contexto p/ a categoria ${category.title}`)
      this.$store.dispatch('setCurrentCategory', category)
      this.$store.dispatch('setContext', 'Questions')
    }
  },
  computed: {
    $getCategories(): Category[] {
      return this.$store.getters.$getCategories
    }
  }
})
</script>

<style scoped>
.heading-image {
  display: grid;
  justify-content: center;
}

.heading-text > h3 {
  font-size: 20px;
  font-weight: bold;
}

.heading-text > span {
  font-size: 13px;
}

.heading-text {
  padding: 2rem;
}

.items {
  list-style: none;
}

.items > li {
  cursor: pointer;
  display: flex;
  gap: 2.125rem;
  padding: 1rem 1.875rem;
  transition: background-color 0.2s ease-in-out;
}

.items > li:hover {
  background-color: #3f4452b3;
}

.items > li > img {
  width: 21px;
}

.heading-image > img {
  width: 242px;
}
</style>
