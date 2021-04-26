<template>
  <div>
    <header class="navigation-bar">
      <div @click="goBack()" class="btn-arrow">
        <img :src="getAssetImage('arrow-left.svg')" alt="Go Back" />
      </div>
      <div class="navigation-title">
        <h3>{{ category.title }}</h3>
        <span>Selecione uma pergunta</span>
      </div>
      <div class="navigation-icon">
        <img :src="getAssetImage(category.icon)" alt="" />
      </div>
    </header>

    <ul class="items">
      <li v-for="question in category.questions" :key="question.id">
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from '@/models'

export default defineComponent({
  name: 'Questions',
  methods: {
    getAssetImage(imageName: string) {
      return require(`@/assets/images/${imageName}`)
    },
    goBack() {
      this.$store.dispatch('setContext', 'Categories')
    }
  },
  data() {
    return {
      category: this.$store.getters.$getCurrentCategory as Category
    }
  }
})
</script>

<style scoped>
.navigation-bar {
  padding: 0 1.25rem 1.875rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  border-bottom: 1px solid #404451;
}

.btn-arrow {
  padding: 0.875rem 0.75rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
}

.btn-arrow:hover {
  background-color: #26282c;
}

.navigation-icon {
  display: grid;
  align-content: center;
}

.navigation-icon > img {
  width: 1.5rem;
}

.navigation-title > span {
  font-size: 13px;
}

.items {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  list-style: none;
}

.items > li {
  cursor: pointer;
  padding: 1rem 1.25rem;
}

.items > li:hover {
  background-color: #3f4452b3;
}
</style>
