<template>
  <nav>
    <ul>
      <!-- tag = 你要這個路由用什麼標籤顯示 用li就是li -->
      <router-link to="/film" tag="li" active-class="myactive">
        <i class="icofont-ui-movie"></i>
        電影
      </router-link>
      <!-- active class = 高亮顯示  -->
      <router-link to="/cinema" tag="li" active-class="myactive">
        <i class="icofont-home"></i>
        電影院
      </router-link>
      <router-link to="/member" tag="li" active-class="myactive">
        <i class="icofont-user-alt-7"></i>
        會員中心
      </router-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.myactive {
  color: orange;
}
nav {
  z-index: 10;
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: white;
}
ul {
  display: flex;
  li {
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
}
</style>
