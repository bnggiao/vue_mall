<template>
  <div class="topBox">
      <div class="left">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="center">
          <p>&nbsp;登录/注册</p>
          <div class="centerChild">
              <img src="~assets/img/profile/phone.svg" alt="">
              <span>暂无绑定手机号</span> 
          </div>
      </div>
      <div class="right">
          <span>></span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .topBox{
        height: 80px;
        width: 100%;
        background-color: var(--color-tint);
        display: flex;
        color: white;
        padding: 0 5%;
    }
    img{
        width: 100%;
    }
    .topBox .left{
        width: 25%;
    }
    .center img{
        width: 10%;
    }
    .right{
        padding: 5%;
        font-size: 20px;
    }
    .centerChild span{
        position: relative;
        top: -5px;
    }
    .centerChild{
        margin-top: 5px;
    }
    .center{
        padding: 5px 5px 5px 15px;
    }
</style>