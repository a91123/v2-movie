<template >
  <!-- v-if解決 null讀不到屬性的問題 因為 mouted在全部掛載完 才會fetch資料 但節點已經先建完了 卻沒資料 所以會報錯 -->
  <div v-if="filminfo">
    <div class="img-wrap">
      <img :src="filminfo.poster" class="poster" />
    </div>

    <div class="detail">
      <h3>{{ filminfo.name }}</h3>
      <p>{{ filminfo.category }}</p>
      <p ref="detailref" :class="overhideClass">{{ filminfo.synopsis }}</p>
      <div class="toggle" @click="handleSyn">顯示更多</div>
    </div>
    <div class="actorCard">
      <h3>演員列表</h3>
      <swiper perview="4" class="actorswiper" myclassname="actorswiper">
        <div class="swiper-slide" v-for="(data, index) in filminfo.actors" :key="index">
          <img :src="data.avatarAddress" class="actor" />
          <p>{{ data.name }}</p>
        </div>
      </swiper>
    </div>
    <div class="photoCard">
      <h3>劇照</h3>
      <swiper perview="3" class="photoswiper" myclassname="photoswiper">
        <div class="swiper-slide" v-for="data in filminfo.photos" :key="data">
          <img :src="data" class="actor" />
        </div>
      </swiper>
    </div>
  </div>
</template>
<script>
import swiper from './datail/detailSwiper'
import { Indicator } from 'mint-ui'
// import bus from '@/bus'
export default {
  components: {
    swiper
  },
  data () {
    return {
      filminfo: null,
      detailHeight: 38,
      overhideClass: {
        hide: true
      }
    }
  },
  props: ['id'],
  methods: {
    handleSyn () {
      const detailref = this.$refs.detailref
      if (this.overhideClass.hide === true) {
        // console.log(this.$refs.detailref.scrollHeight)
        detailref.style.height = this.$refs.detailref.scrollHeight + 'px'
        this.overhideClass.hide = !this.overhideClass.hide
      } else {
        detailref.style.height = this.detailHeight + 'px'
        this.overhideClass.hide = !this.overhideClass.hide
      }
    }
  },

  beforeMount () {
    // bus.$emit('tabbar', false)
    this.$store.commit('HideTabbar', false)
    this.$store.commit('TicketBarShow', true) // 第一個參數為mutation的名字
  },
  mounted () {
    Indicator.open('載入中')
    const getdata = async () => {
      const res = await fetch(
        `https://m.maizuo.com/gateway?filmId=${this.id}&k=4608276`,
        {
          headers: new Headers({
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"1608811732429964881035265"}',
            'X-Host': 'mall.film-ticket.film.info'
          })
        }
      )
      const data = await res.json()
      this.filminfo = data.data.film
      await Indicator.close()
    }
    getdata()
  },
  beforeDestroy () {
    // 第一個參數為 約定好的名稱 第二個參數是要傳的值
    // bus.$emit('tabbar', true)
    this.$store.commit('HideTabbar', true)
    this.$store.commit('TicketBarShow', false)
  }
}
</script>
<style lang="scss" scoped>
.actorCard {
  background-color: white;
  margin: 10px 0px;
}
.detail {
  background-color: #fff;
  font-size: 13px;
  padding-top: 10px;

  color: #797d82;
  .hide {
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .toggle {
    text-align: center;
  }
}
.img-wrap {
  width: 100%;
  overflow: hidden;
  height: 56vw;
  position: relative;
  // top: 50%;
  .poster {
    width: 100%;
    position: absolute;
    top: -80%;
  }
}
.photoCard {
  background-color: #fff;
  padding-bottom: 60px;
}
</style>
