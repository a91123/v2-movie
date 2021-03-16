 <template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <ticketbar v-show="isTicketBarShow"></ticketbar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from './components/tabbar'
import ticketbar from './components/ticketbar'
import { mapState } from 'vuex'
// import bus from '@/bus'
// import Vue from 'vue'

export default {
  data() {
    return {
      datalist: [],
      movie: [],
      mytext: ''
    }
  },
  computed: {
    ...mapState(['isTabbarShow']),
    ...mapState(['isTicketBarShow']) // mapState 可以直接訪問 store 裡面的state
  },

  methods: {},
  components: {
    tabbar,
    ticketbar
  }
  // beforeMount(data) {
  //   // 第一個參數是約定好的名字 第二個參數 data為 收到的值
  //   bus.$on('tabbar', (data) => {
  //     this.isShow = data
  //   })
  // }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f4f4f4;
}
html {
  height: 100%;
}
li {
  list-style: none;
}
</style>
