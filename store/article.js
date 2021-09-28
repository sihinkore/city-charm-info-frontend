export const state = () => {
  return {
    articles: [],
    article: [],
  }
}

export const getters = {
  articles: (state) => state.articles,
  article: (state) => state.article,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setArticle(state, articleDetaile) {
    state.article = articleDetaile
  },
}

export const actions = {
  async fetchArticles({ commit }, params) {
    const response = await this.$axios.get('api/v1/articles', { params })
    const data = response.data
    commit('setArticles', data)
  },
  async fetchArticle({ commit }, id) {
    const response = await this.$axios.get(`api/v1/articles/${id}`)
    console.log(response)
    const data = response.data
    commit('setArticle', data)
  },
}
