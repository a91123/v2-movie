<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script src="swiper-bundle.min.js"></script>
<script>
export default {
  props: ['perview', 'myclassname'],
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.perview,
      spaceBetween: this.myclassname === 'actors' ? 20 : 10,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped >
.swiper-wrapper {
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
}

::v-deep .swiper-pagination-bullet-active {
  background: blue;
}
</style>
