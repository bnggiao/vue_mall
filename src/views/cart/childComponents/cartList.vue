<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
        <cart-item v-for="(item, index) in getCartList" :key="index" :item="item"></cart-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
import cartItem from './cartItem'
import {mapGetters} from 'vuex'

export default {
    components: {
        Scroll,
        cartItem
    },
    computed: {
        ...mapGetters(['getCartList'])
    },
    activated () {
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
    .content{
       position: absolute;
       top: 44px;
       bottom: 101px;
       left: 0;
       right: 0;
       overflow: hidden;
    }
</style>