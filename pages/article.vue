<template>
  <v-card flat :class="$style.card">
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
    <!-- <v-textarea
      placeholder="記事の内容を入力してください"
      no-resize
      outlined
      v-model="body"
    ></v-textarea> -->
    <div>
      <no-ssr placeholder="Loading Your Editor...">
        <vue-editor v-model="body" placeholder="記事の内容を入力してください" />
      </no-ssr>
      <div v-html="body" />
    </div>
    <div class="text-right">
      <v-btn @click="post" color="blue" dark> 投稿する </v-btn>
    </div>
  </v-card>
</template>
//
<script>
export default {
  //   // ログインしていなければ、記事作成ページに飛べない
  //   middleware: 'redirect_signin',
  data() {
    return {
      loading: false,
      title: '',
      body: '',
      items: ['グルメ', 'お出かけ', 'お買い物', '観光', 'ロケ地', 'その他'],
      category: '',
    }
  },
  methods: {
    // handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    //   const formData = new FormData()
    //   formData.append('image', file)
    //   this.$axios
    //     .post('rails/active_storage/direct_uploads', formData)
    //     .then((result) => {
    //       const url = result.data.url // Get url from response
    //       Editor.insertEmbed(cursorLocation, 'image', url)
    //       resetUploader()
    //     })
    //     .catch((err) => {
    //       // eslint-disable-next-line no-console
    //       console.log(err)
    //     })
    // },
    async post() {
      // 多重送信を防ぐ
      this.loading = true
      const params = {
        title: this.title,
        body: this.body,
        category: this.category,
      }
      try {
        await this.$axios.post('api/v1/articles', params)
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
  padding: 30px 70px;
}
</style>
