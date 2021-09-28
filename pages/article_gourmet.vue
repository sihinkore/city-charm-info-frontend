<template>
  <div>
    <v-card v-for="article in articles" :key="article.id">
      <nuxt-link :to="'articles/' + article.id">
        <div>タイトル: {{ article.title }}</div>
      </nuxt-link>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: 'グルメ',
    }
  },
  computed: {
    articles: {
      get() {
        return this.$store.state.article.articles
      },
    },
  },
  async created() {
    const id = { category: this.category }
    await this.$store.dispatch('article/fetchArticles', id)
  },
}
</script>
