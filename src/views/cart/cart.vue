<template>
  <div id="cart">
    <nav-bar class="nav-bar" fontSize="18px">
        <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'

import CartList from './childComponents/cartList.vue'
import CartBottomBar from './childComponents/CartBottomBar.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length: 'cartLength'
    // })
  },
  
}
</script>

<style scoped>
  #cart{
    height: 100vh;
    width: 100%;
  }
  .nav-bar{
    background-color: var(--color-tint);
  }

</style>