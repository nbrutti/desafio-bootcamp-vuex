<template>
  <div>
    <header class="navigation-bar">
      <div @click="goBack()" class="btn-arrow">
        <img :src="getAssetImage('arrow-left.svg')" alt="Go Back" />
      </div>
      <div class="navigation-title">
        <h3>{{ question.title }}</h3>
      </div>
    </header>

    <main class="question-content">
      <p v-html="question.content"></p>
    </main>
  </div>
</template>

<script lang="ts">
import { commonsMixin } from '@/mixins'
import { Question } from '@/models'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Response',
  mixins: [commonsMixin],
  data() {
    return {
      question: this.$store.getters.$getCurrentQuestion as Question
    }
  },
  methods: {
    goBack() {
      this.$store.dispatch('setContext', 'Questions')
    }
  }
})
</script>

<style scoped>
.navigation-bar {
  padding: 0 1.25rem 1.875rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: 1rem;
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

.navigation-title > h3 {
  font-size: 16px;
  font-weight: normal;
}

.question-content > p {
  padding: 0 1.25rem 1.875rem 1.25rem;
  font-size: 13px;
  font-weight: normal;
}
</style>
