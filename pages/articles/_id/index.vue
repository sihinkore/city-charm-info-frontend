<template>
  <div :class="$style.container">
    <v-sheet :class="$style.sheet" elevation="3" width="600px">
      <div v-if="isShowBtn" :class="$style.btn">
        <nuxt-link :to="article.id + '/edit'" :class="$style.link">
          <v-btn class="mx-1" fab dark color="orange">
            <v-icon dark>fas fa-pencil-alt</v-icon>
          </v-btn>
        </nuxt-link>
        <v-btn @click="trash" class="mx-1" fab dark color="blue">
          <v-icon dark>fas fa-trash-alt </v-icon>
        </v-btn>
      </div>
      <div :class="$style.title">{{ article.title }}</div>
      <div v-html="article.body" />
    </v-sheet>
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
    isShowBtn() {
      const currentUserEmail = this.$store.getters['user/headers'].uid
      const result = currentUserEmail === this.article?.user?.email
      return result
    },
  },
  async created() {
    const params = this.id
    await this.$store.dispatch('article/fetchArticle', params)
  },
  methods: {
    trash() {
      const result = confirm('この記事を削除してもよろしいですか？')
      if (result) {
        const id = this.id
        this.$axios.delete(`api/v1/articles/${id}`)
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.sheet {
  padding: 15px;
}
.btn {
  float: right;
}
.title {
  font-size: 25px;
  margin-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
.link {
  text-decoration: none;
}
</style>
