<template>
  <div class="warpper" ref="warpper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll: null
        }
    },
    props: {
        // 默认不监听滚动
        probeType: {
            type: Number,
            default: 0
        },
        //默认不上拉加载
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.warpper,{
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click: true
        }),
        // home组件要监听滚动，使用$emit传给home
        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        }),
        // 上拉加载新数据
        this.scroll.on('pullingUp',() => {
            this.$emit('pullingup')
        })
        // console.log(this.scroll);
    },
    methods: {
        // 滚动到指定位置
        scrollTo(x, y, tiem=500){
            // this.scroll &&判断scroll是否加载完再执行
            this.scroll && this.scroll.scrollTo(x, y, tiem)
        },
        // 上拉加载更多刷新
        refresh(){
            this.scroll && this.scroll.refresh()
            // console.log('1'); 
        },
        // 上拉加载完成
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        getScroolY(){
           return  this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style scoped>

</style>