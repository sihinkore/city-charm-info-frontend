<template>
  <div>
    <div>{{ article.title }}</div>
    <div v-html="article.body" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    article: {
      get() {
        return this.$store.state.article.article
      },
    },
  },
  async created() {
    const params = this.id
    await this.$store.dispatch('article/fetchArticle', params)
  },
}
</script>
