<template>
  <div class="avatar">
    <router-link to="/login" tag="li">
      <div class="avatar-pic">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>立即登錄</p>
      </div></router-link
    >
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  background: url('https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png');
  height: 156px;
  background-size: cover;
  position: relative;
  .avatar-pic {
    display: flex;
    padding-top: 68px;
    padding-left: 22px;
    p {
      align-self: center;
      margin-left: 10px;
      color: white;
      font-weight: bold;
    }
    img {
      width: 63px;
      height: 63px;
      border-radius: 50%;
      background-color: white;
    }
  }
}
</style>
