import { createStore } from 'vuex'
import { Context, Category } from '@/models'
import { faqCategories } from '@/mocks/api.json'

export default createStore({
  state: {
    categories: [] as Category[],
    currentCategory: {} as Category,
    context: 'Categories' as Context
  },
  mutations: {
    SET_CATEGORIES(state, payload: Category[]) {
      state.categories = payload
    },
    SET_CURRENT_CATEGORY(state, payload: Category) {
      state.currentCategory = payload
    },
    SET_CONTEXT(state, payload: Context) {
      state.context = payload
    }
  },
  actions: {
    fetchCategories({ commit }) {
      commit('SET_CATEGORIES', faqCategories)
    },
    setContext({ commit }, context: Context) {
      commit('SET_CONTEXT', context)
    },
    setCurrentCategory({ commit }, category: Category) {
      console.log(category)
      commit('SET_CURRENT_CATEGORY', category)
    }
  },
  getters: {
    $getContext({ context }): Context {
      return context
    },
    $getCategories({ categories }): Category[] {
      return categories
    },
    $getCurrentCategory({ currentCategory }): Category {
      return currentCategory
    }
  }
})
