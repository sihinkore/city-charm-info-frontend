<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#f7cff6">
      <nuxt-link to="/" :class="$style.header_link">
        <v-toolbar-title :class="$style.app_title" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <div v-if="isSignedIn">
        <nuxt-link to="/article">
          <v-btn text :class="$style.register_btn">記事作成</v-btn>
        </nuxt-link>
        <nuxt-link to="/">
          <v-btn text @click="logout" :class="$style.log_in_btn"
            >ログアウト</v-btn
          >
        </nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/sign_up">
          <v-btn text :class="$style.register_btn">ユーザー登録</v-btn>
        </nuxt-link>
        <nuxt-link to="/sign_in">
          <v-btn text :class="$style.log_in_btn">ログイン</v-btn>
        </nuxt-link>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isSignedIn() {
      return this.$store.state.user.isSignedIn
    },
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: 'City Charm Information',
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logOut')
    },
  },
}
</script>

<style lang="scss" module>
.header_link {
  text-decoration: none;
}
.app_title {
  color: #fff;
  font-weight: bold;
}
.register_btn {
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 5px;
}
.log_in_btn {
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
}
</style>
