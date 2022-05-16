<template>
  <div>
      <nav-bar class="nav-bar1" fontSize="18px">
        <div slot="left" class="left" @click="back">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="detail-nav-bar">
            <div v-for="(item, index) in titles" 
            :key="index" class="item" 
            :class="{active: index === currentIndex}"
            @click="itemClick(index)">
                {{item}}
            </div>
        </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
    components: {
        NavBar
    },
    data () {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        back(){
            this.$router.back()
        }
    },
    
}
</script>

<style scoped>
    .nav-bar1{
        background-color: white;
    }
    .detail-nav-bar{
        display: flex;
    }
    .item{
        flex: 1;
        font-size: 13px;
        color: #a9a99a;
    }
    .active{
        color: var(--color-tint);
    }
    .left img{
        margin: 11px;
        width: 22px;
    }
</style>