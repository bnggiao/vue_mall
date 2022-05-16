<template>
  <div id="category">
    <nav-bar class="categoryNavBar" fontSize="18px">
        <div slot="center">分类</div>
    </nav-bar>
    <tab-menu :menuNavList="menuNavList" @TabMenuClick="TabMenuClick"></tab-menu>
    <scroll class="scroll" ref="scroll" @scroll="categotyScroll" :probeType="3">
      <div class="content">
        <type-list :typeList="typeList" :typeListImaLoad="typeListImaLoad"></type-list>
        <tab-control :controlList="controlList" @tabClick="tabClick"></tab-control>
        <goods-list :goods="shopList" class="goods-list"></goods-list>
      </div>
    </scroll>
    <back-top v-show="isshow" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
import NavBar from 'components/common/NavBar'
import TabControl from 'components/content/TabControl'
import {getGetagory, getTypeList, getShopList} from 'network/category'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import {backTopMixin} from 'common/mixin'

import TabMenu from './childComponents/TabMenu'
import TypeList from './childComponents/TypeList'
  export default {
    mixins: [backTopMixin],
    data () {
      return {
        maitKey: '3627',
        typeList: [],
        controlList: ['综合', '新品', '销量'],
        shopType: 'pop',
        shopList: [],
        menuNavList: []
      }
    },
    components: {
      NavBar,
      TabMenu,
      Scroll,
      TypeList,
      TabControl,
      GoodsList,
      BackTop
    },
    methods: {
      TabMenuClick(maitKey){
        this.maitKey = maitKey
        getTypeList(this.maitKey).then(res => {
          this.typeList = res.data.list
        })
      },
      typeListImaLoad(){
        this.$resf.scroll.refresh()
      },
      tabClick(index){
        switch(index){
          case 0:
            this.shopType = 'pop'
            break;
          case 1:
            this.shopType = 'new'
            break;
          case 2:
            this.shopType = 'sell'
            break;
        }
        getShopList(10062603, this.shopType).then(res => {
          this.shopList = res
        })
      },
      itemImaListener(){
        this.$refs.scroll.refresh()
      },

      categotyScroll(position){
        (-position.y > 1000) ? this.isshow = true : this.isshow = false
      }
    },
    created () {
      getGetagory().then(res => {
        this.menuNavList = res.data.category.list
      }),
      getTypeList(this.maitKey).then(res => {
        // console.log(res);
        this.typeList = res.data.list
      }),
      getShopList(10062603, this.shopType).then(res => {
        this.shopList = res
      }),
      this.$bus.$on('goodsItemImaLoad',this.itemImaListener)
    },
    activated(){
      this.$refs.scroll.refresh()
    }
    
  }
  
</script>

<style scoped>
  .categoryNavBar{
    background-color: var(--color-tint);
  }
  .scroll{
    width: 262.5px;
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 61px;
    overflow: hidden;
  }
  .content{
    width: 100%;
    padding-top: 20px;
  }
  .goods-list{
    margin-top: 20px;
  }
</style>