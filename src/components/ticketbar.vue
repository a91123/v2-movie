<template>
  <nav>
    <ul>
      <router-link to="/cinema" tag="li" active-class="myactive">
        預購畫位
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
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: #ff5f16;
}
ul {
  display: flex;
  li {
    color: white;
    flex: auto;
    line-height: 50px;
    text-align: center;
  }
}
</style>
