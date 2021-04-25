import { createStore } from 'vuex'
import { Context, Category } from '@/models'
import { faqCategories } from '@/mocks/api.json'

export default createStore({
  state: {
    categories: [] as Category[],
    context: 'Categories' as Context
  },
  mutations: {
    SET_CATEGORIES(state, payload: Category[]) {
      state.categories = payload
    }
  },
  actions: {
    fetchCategories({ commit }) {
      commit('SET_CATEGORIES', faqCategories)
    }
  },
  getters: {
    $getContext({ context }): Context {
      return context
    },
    $getCategories({ categories }): Category[] {
      return categories
    }
  }
})
