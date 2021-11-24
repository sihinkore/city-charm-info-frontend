<template>
  <div :class="$style.container">
    <v-card
      :class="$style.card"
      v-for="article in articles"
      :key="article.id"
      elevation="1"
      outlined
    >
      <nuxt-link :to="'articles/' + article.id" :class="$style.link">
        <div :class="$style.title">{{ article.title }}</div>
      </nuxt-link>
      <timeago
        :class="$style.time_ago"
        :datetime="article.updated_at"
        :auto-update="60"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: 'ロケ地',
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

<style lang="scss" module>
.container {
  max-width: 500px;
  margin: auto;
}
.card {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: stretch flex-start;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
}
.link {
  text-decoration: none;
}
.title {
  color: black;
  font-size: 20px;
  border-bottom: solid 1px;
  border-color: black;
}
</style>
