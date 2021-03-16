<template>
  <div>
    <mt-index-list>
      <mt-index-section
        :index="data.index"
        v-for="data in datalist"
        :key="data.index"
      >
        <!-- mt-cell不支持click 所以用div包起來 -->
        <div
          @click="handleClick(city.cityId, city.name)"
          v-for="city in data.list"
          :key="city.cityId"
        >
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
// import bus from '@/bus'
export default {
  data() {
    return {
      //   datalist: [{ A: ['A1', 'a2'] }, { B: ['b1', 'b2'] }, { C: ['c1', 'c2'] }]
      datalist: []
    }
  },
  methods: {
    handleCity(data) {
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      var newlist = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = data.filter((item) => {
          return item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        })
        if (arr.length > 0) {
          newlist.push({ index: letterArr[j], list: arr })
        }
      }
      return newlist
    },
    handleClick(id, name) {
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityName', name)
      this.$store.commit('refresh', [])
      this.$router.push('film')
    }
  },
  mounted() {
    fetch('https://m.maizuo.com/gateway?k=3814446', {
      headers: new Headers({
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1608811732429964881035265","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list'
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.datalist = this.handleCity(res.data.cities)
      })
  }
}
</script>
<style lang="scss" scoped>
</style>
