<template>
  <div class="ii">
    <ul
      class="wrap"
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="10"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    >
      <li
        @click="handlepage(data.filmId)"
        v-for="data in $store.state.hotFilm"
        :key="data.filmId"
      >
        <img :src="data.poster" alt="" />
        <div class="right">
          <h3>{{ data.name }}</h3>
          <p>平均分數{{ data.grade }}</p>
          <p>
            {{ data.actors | actorfilter }}
            <!--  過濾器-->
            <!-- {{ actorsName(data.actors)}} 用methos也可以 -->
          </p>
          <p>{{ data.nation + '|' + data.runtime + '分鐘' }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
Vue.filter('actorfilter', function (data) {
  const newlist = []
  if (data !== undefined) {
    for (var i = 0; i < data.length; i++) {
      newlist.push(data[i].name)
    }
  }
  if (newlist.length !== 0) {
    return '主要演員:' + newlist.join(' ')
  } else {
    return '暫無主演'
  }
})
export default {
  data() {
    return {
      page: 1,
      loading: false,
      isTrue: true
    }
  },

  methods: {
    loadMore() {
      this.isloading = true
      if (this.$store.state.hotFilm.length < this.$store.state.total) {
        Indicator.open('載入中')
      }
      this.loading = true
      this.page++
      if (
        this.$store.state.hotFilm.length !== 0 &&
        this.$store.state.hotFilm.length === this.$store.state.total
      ) {
        return
      }

      this.$store
        .dispatch('getHotFilmData', {
          page: this.page,
          id: localStorage.getItem('cityId')
        })
        .then(() => {
          Indicator.close()
          this.loading = false
        })
    },
    handlepage(id) {
      this.$router.push(`/detail/${id}`)
    },
    actorsName(actor) {
      let newlist = []
      newlist = actor.map((item) => item.name)
      return newlist.join(' ')
    }
  },
  mounted() {
    if (this.$store.state.hotFilm.length === 0) {
      Indicator.open('載入中')
      this.$store
        .dispatch('getHotFilmData', {
          page: this.page,
          id: localStorage.getItem('cityId')
        })
        .then((res) => {
          Indicator.close()
        })
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  font-size: 13px;
  li {
    background: white;
    color: #797d82;
    padding: 10px;
    display: flex;
    position: relative;

    p {
      padding: 2px 1px;
    }
    img {
      width: 100px;
    }
    .right {
      flex-direction: column;
    }
  }
  li:after {
    content: ' ';
    height: 1px;
    border-bottom: 1px solid#ededed;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
