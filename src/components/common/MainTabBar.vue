<template>
  <div>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
        <img slot="item-icon" src="~/assets/img/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-active.png" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png" alt="">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>