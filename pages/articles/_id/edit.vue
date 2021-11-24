<template>
  <v-card flat :class="$style.card">
    <div :class="$style.app">
      <v-select
        v-model="category"
        :items="items"
        label="カテゴリーを選択"
        outlined
      ></v-select>
      <v-text-field
        placeholder="タイトル"
        outlined
        v-model="title"
      ></v-text-field>
      <div>
        <no-ssr placeholder="Loading Your Editor...">
          <vue-editor
            v-model="body"
            placeholder="記事の内容を入力してください"
            :editor-toolbar="customToolbar"
          />
        </no-ssr>
      </div>
      <div class="text-right">
        <v-btn :class="$style.post" @click="patch" color="blue" dark>
          更新する
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  computed: {
    article: {
      get() {
        return this.$store.state.article.article
      },
    },
  },
  data() {
    return {
      loading: false,
      id: this.$route.params.id,
      title: '',
      body: '',
      items: ['グルメ', 'お出かけ', 'お買い物', '観光', 'ロケ地', 'その他'],
      category: '',
      customToolbar: [
        [
          {
            header: [1, 2, 3, 4, false],
          },
        ],
        [
          {
            font: [],
          },
        ],
        ['bold', 'italic', 'underline'],
        // 文字色
        [
          {
            color: [],
          },
          // 文字背景色
          {
            background: [],
          },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'video'],
      ],
    }
  },
  async created() {
    const params = this.id
    await this.$store.dispatch('article/fetchArticle', params)
    const article = this.article
    this.category = article.category
    this.title = article.title
    this.body = article.body
  },
  methods: {
    async patch() {
      // 多重送信を防ぐ
      this.loading = true
      const params = {
        title: this.title,
        body: this.body,
        category: this.category,
      }
      const id = this.id
      try {
        await this.$axios.patch(`api/v1/articles/${id}`, params)
        this.$router.push('/')
      } catch (err) {
        alert(err.response.data.errors.full_messages)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" module>
.card {
  margin: auto;
  padding: 30px 170px;
}
.app {
  max-width: 800px;
  text-align: center;
}
.post {
  margin: 10px;
}
</style>
