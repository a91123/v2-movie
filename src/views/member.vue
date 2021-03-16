<template>
  <div>
    <memberPic></memberPic>
    <ul class="tabbar-bar">
      <li click="handleRout">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>電影訂單</p>
      </li>
      <li>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>商品訂單</p>
      </li>
    </ul>
    <div class="member-bottom">
      <div class="mycard">
        <div class="mycard-left">
          <img
            class="fff"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXtJREFUWAntmLFOwzAQQO+iVurcrRL/wCfACvxBR0DwAUiwdOwC7AwVdOYHStf+At8AEhs/kCqH72xHhTqDaXCMdJEap9dz7+U5apMD0E0NdGsAfXm6Pd+DNd2b9wdANPLxpCPih6m9gn5xjTeP71xbAAWupFcAGiYFaiyGn9DHfYbsSU5Z3ZlxaHCX0CsuPH3j/D/6wK5iNTMWj6AkZhoXUgvxUMYO4bi+iBkMLoXFMVlAd811ZU6A3A6vHt7k0DFZwM2MzI4VcNcFyd6g/Zlxp0nTU9r1jNue/78M4mRe//W1bSLm+zZXMnuDChiztKFcNRiyEhNTgzG2QrlqMGQlJpa9wW83CzFn9ptcmp4tzIPZ8fZcfMHJ08l2HCAPgwiNd1FJDTZZCpnzsTwMeprAqIABKVEha5B7ImaTJ/uo6e0n1wyOyQJyw4a3dTWrEySQdle3PrisY8q+eSQGpeVhukmA+Gxestxp3blqXJsZXGerEwYtqgZ+GPgCGlFng13G+JYAAAAASUVORK5CYII="
            alt=""
          /><span class="label">優惠券</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="mycard">
        <div class="mycard-left">
          <img
            class="fff"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzxJREFUWAntWEFoE0EUnUm7BkSktFLQCgoeCirUo3qoLVpqThaEoK0UKeJNBQ8KaSsBS8FePHgTBWlSC0XBi1SbajT14NGCCB7Eg0ovmosHcTfZ7//rznaymxm3bCIKu5DMn5n/33u8mZ3NhrF//OL19BXz2Z0VsGaAsT4GsL1eTsPGOF9DES9auXGl/0z2sx83IJDEWba1yhi0+5Ob2+dlI2H0+EW2+knJOUcc54sGN877C/z5UfuOIWDdxpVK/eZmwzJmQu5Q7Cwrtn9DHPGRAcRFseCmWFwBgWLPtYBZFUnNbj2uOvs9KNBV8xP4yrO58V3NFlecz+4mLhWPUiAw2FO14dXz3ES3qjjqOGFbFXOFuFRYgZvES+S8hMvdW+FQKs5lBvtHpt94c76g5ljCOd2xIUoR84Blw1PceJ3M5RJzcqt0cEuy4zjn/AmK7KxUeXH5/uQhuVDE4lgCgNPO/sV9RDEdVTQn8uSWsAiTsFHcInHJ83KsFHg4ffnHjqRxAu14gEvQZlerhaX8taNyMcXiWNrW1c16T151PhTTUeUeGzUlhEFYhEnYXUljiLhqkqSOeokxaV86a8LCwqmCuXqH2XCWQeVxIZeZROBvHgawFMV7Dw6x5OatzjDFpYc3KE4V8pkxZ5C+gHWAXbmOUZIl+L2BTT3neDqtPS20AgmTAHDJxpZz49/xnLoAwGbowFq/ajrrwxhhXRvm3q0ZxA7u0VvHRqYu4RZSF7tFfxRIeS7QxcLsxEek3e/WOg2SHbHxLnz3+pHjIg1STFeC8Q+o4KXT8b7424HRqZtsdNob0QWhBAoAB1h03JZuBBtviK9f3re7y+rO8HJLwuiL+qhU3iQ+Hcqu86jChzy6PI9Wr9GH4noPfiWIZmJDDqpwXJeGVfNRxiM7GIU8TG0sMIxLupzYQZ07YeZiB8O4pMuJHdS5E2YudjCMS7qc2EGdO2HmYgfDuKTLiR3UuRNmLugg/WzHS/XSHQZ0ozkel8st1wcE0t8WlGDhf3ZeoVzR4Jg4iItgBbdMEXgnob9isWAQX2pTFpiflmYzcn7DY8s2XUxeJm4/QcDBwFuav6LR/Qa/BTZa3v+P9wstjEbQV26IwAAAAABJRU5ErkJggg=="
            alt=""
          /><span class="label">組合包</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="mycard">
        <div class="mycard-left">
          <img
            class="fff"
            src="data:image/png;base64,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"
            alt=""
          /><span class="label">餘額</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="mycard">
        <div class="mycard-left">
          <img
            class="fff"
            src="data:image/png;base64,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"
            alt=""
          /><span class="label">設定</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import memberPic from './member/memberPic'
export default {
  components: {
    memberPic
  },
  methods: {
    handleRout() {}
  }
}
</script>
<style lang="scss" scoped>
.tabbar-bar {
  display: flex;
  background-color: white;
  li {
    flex: 1;
    text-align: center;
    list-style: none;
    p {
      color: #797d82;
      font-size: 15px;
      margin: 5px 0px;
    }
    img {
      margin-top: 10px;
      width: 26px;
      height: 26px;
    }
  }
}
.member-bottom {
  margin-top: 15px;
  .mycard {
    background-color: #fff;
    height: 49px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
      width: 20px;
      height: 20px;
    }

    .label {
      font-size: 15px;
      margin-left: 15px;
    }
  }
  .mycard:after {
    content: ' ';
    height: 1px;
    border-bottom: 1px solid#ededed;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
