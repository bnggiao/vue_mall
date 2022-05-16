<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="navBar" fontSize="18px">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :controlList="['流行','新款','精选']" 
      class="tab-control1" 
      @tabClick="tabClick"
      ref="tabControl1 "
      v-show="isFixed"></tab-control>
    <!-- 滚动组件 -->
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contenScroll"
            :pull-up-load="true"
            @pullingup="pullingUp">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @homeSwiperImgLoad="homeSwiperImgLoad"></home-swiper>
      <!-- 推荐 -->
      <recommend :recommend="recommend" @recommendImgLoad="recommendImgLoad"></recommend>
      <!-- 本周流行 -->
      <featrue-view></featrue-view>
      <!-- 商品展示 -->
      <tab-control :controlList="['流行','新款','精选']" 
      @tabClick="tabClick"
      ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll> 

    <!-- 放回按钮 -->
    <back-top @click.native="backClick" v-show="isshow"></back-top>
    
  </div>
  
</template>

<script>
import NavBar from 'components/common/NavBar'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/Scroll/Scroll'

import HomeSwiper from './childComponents/HomeSwiper'
import Recommend from './childComponents/Recommend'
import FeatrueView from './childComponents/FeatrueView'



// request请求函数
import {getHomeMultData, getGoodsDate} from 'network/home'
import {itemListtenerMixin, backTopMixin} from 'common/mixin.js'


export default {
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatrueView,
    TabControl,
    GoodsList,
    Scroll,
  },

  data(){
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop':{page: 1, list: []},
        'new':{page: 1, list: []},
        'sell':{page: 1, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isFixed: false,
      imgLoad: 0,
      saveY: 0,
      itemImaListener: null
    }
  },

  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },

  methods: {
    // 事件监听方法

    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1: 
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'pop'
          break  
      }
      // 设置两个tabControl的index一致
      this.$refs.tabControl2.curr = index
      this.$refs.tabControl1.curr = index
    },
    // 监听滚动
    contenScroll(position){
      // 滚动隐藏backtop按钮
      this.isshow = position.y < -1000
      // 滚动吸顶（固定选项菜单tabControl）
      this.isFixed = -(position.y) > this.tabOffsetTop
    },

    // 滚动上拉加载数据
    pullingUp(){
      // 加载商品数据
      this.getGoodsDate(this.currentType)
      // 刷新不然滚动不了
      this.$refs.scroll.refresh()
      // 加载后执行才能再次加载
      this.$refs.scroll.finishPullUp()
    },

    // 轮播图加载监听
    homeSwiperImgLoad(){
      this.imgLoad += 1
      this.allImaLoad()
    },
    recommendImgLoad(){
      this.imgLoad += 1
      this.allImaLoad()
    },
    allImaLoad(){
      if(this.imgLoad === 2){
      // 设置顶部距离
      // offsetTop是dom距离顶部的高度，由于tabControl2是组件所以加上$el
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
     }
    },

    

    // 网络请求的方法
    getHomeMultData(){
        // 获取home API数据
        getHomeMultData().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
      // 获取商品API数据
    getGoodsDate(type){
      // 页面初始是零需要加一
      const page = this.goods[type].page
      // getGoodsDate(get请求值,页数)
      getGoodsDate(type,page).then(res => {
        // 用push函数的 ...把list添加到data的list
        this.goods[type].list.push(...res.data.list)
        // 页数加一
        this.goods[type].page += 1
      })
    }
  },
  mixins: [itemListtenerMixin, backTopMixin],

  created(){
    // 获取home API数据
    this.getHomeMultData()
      // 获取商品API数据
    this.getGoodsDate('pop')
    this.getGoodsDate('new')
    this.getGoodsDate('sell')
  },
  mounted () {
  
  },
  // 组件激活时钩子函数
  activated() {
    // 进入时滚动到保存的值
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  // 组件离开钩子函数
  deactivated() {
    // 离开时保存滚动y轴值
    this.saveY = this.$refs.scroll.getScroolY()
    this.$bus.$off('goodsItemImaLoad',this.itemImaListener)
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 61px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
  .tab-control1{
    position: relative;
    top: -5px;
  }
  .navBar{
    background-color: var(--color-tint);
  }
</style>