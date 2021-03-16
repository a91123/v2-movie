<template >
  <div>
    <ul>
      <li
        v-for="data in $store.state.cominglist"
        :key="data.filmId"
        @click="handleClick(data.isPresale, data.filmId)"
      >
        <img :src="data.poster" alt="" />
        <div class="right">
          <h3>{{ data.name }}</h3>
          <p>主要演員:{{ data.actors | actorfilter }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Indicator, MessageBox } from 'mint-ui'

export default {
  methods: {
    handleClick(data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '沒有排期看看其他電影吧',
          showCancelButton: true
        }).then((res) => {
          if (res === 'confirm') {
            this.$router.push('/film') // 跳回首頁
          }
        })
      }
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted() {
    if (this.$store.state.cominglist.length === 0) {
      Indicator.open('載入中')
      this.$store.dispatch('getdata').then(() => {
        Indicator.close()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  li {
    position: relative;
    background: white;
    padding: 10px;
    display: flex;
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
