<template>
  <div>
    <div class="swiper-container filmswiper">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script src="swiper-bundle.min.js"></script>
<script>
export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.filmswiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped >
.swiper-wrapper {
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
.swiper-pagination {
  text-align: right;
}
::v-deep .swiper-pagination-bullet-active {
  background: white;
}
</style>
