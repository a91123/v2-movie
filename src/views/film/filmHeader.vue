<template>
  <ul>
    <router-link
      to="/city"
      tag="div"
      active-class="active"
      style="
        font-size: 15px;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-left: 5px;
      "
      >{{ this.name }} <i class="el-icon-caret-bottom"></i
    ></router-link>
    <router-link to="/film/hot" tag="li" active-class="active"
      >現正熱映</router-link
    >
    <router-link to="/film/commingSoon" tag="li" active-class="active"
      >即將上映</router-link
    >
  </ul>
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem('cityName')
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  z-index: 3000;
  li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
}
.active {
  color: red;
  border-bottom: 2px solid red;
}
</style>
