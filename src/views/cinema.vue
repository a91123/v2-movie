<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{ data.name }}
        <p style="font-size: 12px">{{ data.address }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted() {
    Indicator.open('載入中')
    console.log(document.documentElement.clientHeight)
    this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
    var id = localStorage.getItem('cityId')
    const getdata = async () => {
      const res = await fetch(
        `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=8148371`,
        {
          headers: new Headers({
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"1608811732429964881035265","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
          })
        }
      )
      const data = await res.json()
      this.datalist = data.data.cinemas
      await this.$nextTick(() => {
        // 用這行 跳過eslint檢查 否則NEW 會報錯
        /* eslint-disable no-new */
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
      await Indicator.close()
      console.log(this.datalist)
    }
    getdata()
  }
}
</script>
<style lang="scss" scoped>
li {
  height: 50px;
}
.cinema {
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
