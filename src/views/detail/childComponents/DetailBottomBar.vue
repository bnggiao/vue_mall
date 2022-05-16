<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>
          </div>
          <div>
              <i class="icon select"></i>
              <span class="text">收藏</span>
          </div>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        height: 58px;
        width: 100%;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        display: flex;
        font-size: 12px;
    }
    .bar-left{
        display: flex;
        flex: 1;
        justify-content: space-around;
    }
    .bar-left div{
        width: 44px;
        text-align: center;
        flex: 1;
    }
    .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url(~@/assets/img/detail/detail_bottom.png) 0 0/100%;
    }
    .service{
        background-position: 0 -52px;
    }
    .shop{
        background-position: 0 -98px;
    }
    .bar-right{
        display: flex;
        flex: 1;
    }
    .buy{
        background-color: var(--color-high-text);
        color: white;
        flex: 1;
        line-height: 65px;
        text-align: center;
    }
    .cart{
        background-color: yellow;
        flex: 1;
        line-height: 65px;
        text-align: center;
    }

</style>