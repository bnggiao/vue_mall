<template>
  <div class="content">
      <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
      <scroll class="detail-scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
        <detail-swiper :topImg="topImg"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop :goods-shop="goodsShop"></detail-shop>
        <detail-info :detail-info="detailInfo" @imageLload="imageLload"></detail-info>
        <detail-param :goodsParam="goodsParam" ref="params"></detail-param>
        <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommend" ref="recommend"></goods-list>
      </scroll>
      <back-top @click.native="backClick" v-show="isshow"></back-top>
      <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/detailNavBar'
import DetailSwiper from './childComponents/detailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShop from './childComponents/DetailShop'
import DetailInfo from './childComponents/DetailInfo'
import DetailParam from './childComponents/DetailParam'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import DetailBottomBar from './childComponents/DetailBottomBar.vue'

import Scroll from 'components/common/Scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, GoodsShop, GoodsParam,getRecommend} from 'network/detail.js'
import {itemListtenerMixin, backTopMixin} from 'common/mixin.js'
import {mapActions} from 'vuex'

export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      Scroll,
      DetailInfo,
      DetailParam,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
    },
    
    data(){
        return {
            iid: null,
            topImg: [],
            goods: {},
            goodsShop: {},
            detailInfo: {},
            goodsParam: {},
            commentInfo: {},
            recommend: [],
            themeTopYs: [],
            currentIndex: Number,
        }
    },
    methods: {
        ...mapActions({
            addCartActions: 'addCart'
        }),
        // 图片监听
        imageLload(){
            this.$refs.scroll.refresh()
            this.themeTopYs.push(0) 
            this.themeTopYs.push(this.$refs.params.$el.offsetTop) 
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop) 
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop) 
            // Number.MAX_VALUE:最大值
            this.themeTopYs.push(Number.MAX_VALUE)
        },
        // nav点击跳转
        titleClick(index){
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        },
        // 滚动监听
        contentScroll(position){
            // 1.滚动联动效果
            let positionY = -position.y
            let length = this.themeTopYs.length
            for(let i = 0; i < length-1; i++){
                // 第一种方法
                // if(this.currentIndex !== i && (i < length-1 && positionY >= this.themeTopYs[i] && positionY <= this.themeTopYs[i + 1]) || (i === length -1 && this.themeTopYs[i] <= positionY)){
                //     this.currentIndex = i
                //     this.$refs.nav.currentIndex = this.currentIndex
                // }

                // 第二种方法
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY <= this.themeTopYs[i + 1])){
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
            // 2.是否显示backTop
            this.isshow = position.y < -1000
        },
       addCart(){
        //    设置购物车数据
           const product = {}
           product.img = this.topImg[0]
           product.title = this.goods.title
           product.desc = this.goods.desc
           product.price = this.goods.lowNowPrice
           product.iid = this.iid
        //    添加商品
        //    this.$store.dispatch('addCart',product).then((res) => {
        //        console.log(res);
        //    })
           this.addCartActions(product).then((res) => {
              this.$toast.show(res)
           })
       }
    },
    mixins: [itemListtenerMixin, backTopMixin],
    created () {
        // 保存传入的iid
        this.iid = this.$route.params.iid   
        getDetail(this.iid).then((res) => {
            // console.log(res);
            let data = res.result
            // 1.获取轮播图图片
            this.topImg = data.itemInfo.topImages
            // 2.获取商品数据
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // 3.获取店铺数据
            this.goodsShop = new GoodsShop(data.shopInfo)
            //4. 获取商品详情数据
            this.detailInfo = data.detailInfo
            // 5.商品参数数据
            this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            // 6.商品评论数据
            this.commentInfo = data.rate
        })
        // 获取推荐商品数据
        getRecommend().then((res) => {
            this.recommend = res.data.list
        })
        
    },
    mounted () {
       
    },
    destroyed () {
        this.$bus.$off('goodsItemImaLoad',this.itemImaListener)
    }
}
</script>

<style scoped>
    ul{
        margin: 50px;
    }
    .content{
        position: relative;
        z-index: 9;
        background-color: white;
    }
    .detail-scroll{
        height: calc(100vh - 114px);
        overflow: hidden;
    }
</style>