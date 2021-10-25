<template>
  <div>
    <!-- カルーセルコンポーネント -->
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- ボタン -->
    <v-container :class="$style.container">
      <v-row style="height: 300px">
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_gourmet">
              <v-btn fab dark x-large color="pink">
                <v-icon dark x-large>fa-utensils </v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">グルメ</div>
          </div>
        </v-col>
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_goout" :class="$style.link">
              <v-btn fab dark x-large color="blue">
                <v-icon dark> fa-car-side </v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">お出かけ</div>
          </div>
        </v-col>
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_shopping" :class="$style.link">
              <v-btn fab dark x-large color="teal">
                <v-icon dark> fa-shopping-cart </v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">お買い物</div>
          </div>
        </v-col>
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_sightseeing" :class="$style.link">
              <v-btn fab dark x-large color="orange">
                <v-icon dark> fa-suitcase </v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">観光</div>
          </div>
        </v-col>
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_location" :class="$style.link">
              <v-btn fab dark x-large color="cyan">
                <v-icon dark> mdi-movie-open-settings </v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">ロケ地</div>
          </div>
        </v-col>
        <v-col :class="$style.btn" cols="12" sm="4" md="2" lg="2" xl="2">
          <div>
            <nuxt-link to="/article_others" :class="$style.link">
              <v-btn fab dark x-large color="grey">
                <v-icon dark>fas fa-ellipsis-h</v-icon>
              </v-btn>
            </nuxt-link>
            <div :class="$style.btnText">その他</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-2',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
}
</script>

<style lang="scss" module>
.container {
  padding-left: 150px;
  padding-right: 150px;
}
.btn {
  display: grid;
  justify-items: center;
}
.link {
  text-decoration: none;
}
.btnText {
  display: grid;
  justify-items: center;
}
</style>
