<template>
  <div class="detailComment" v-if="Object.keys(commentInfo).length !== 0">
      <div class="topBox">
          <div class="topBox-left">用户评价</div>
          <div class="topBox-right">更多</div>
      </div>
       <div class="comment">
           <div class="user">
                <img :src="commentInfo.list[0].user.avatar" alt="">
                <span>{{commentInfo.list[0].user.uname}}</span>
            </div>
            <div class="str">
                {{commentInfo.list[0].content}}
            </div>
            <div class="shopParam">
                <div>{{commentInfo.list[0].created | showDate}}</div>
                <div class="shopParamchild">{{commentInfo.list[0].style}}</div>
            </div>
            <div class="img">
                <img :src="item" alt="" v-for="(item,index) in commentInfo.list[0].images" :key="index">
            </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/untils.js'
export default {
    props: {
        commentInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(value){
            let date = new Date(value * 100)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
    .detailComment{
        margin-top: 50px;
        border-top: 5px solid #e6e6e6;
        padding: 0px 10px;
    }
    .topBox{
        display: flex;
        padding: 15px 0px;
        border-bottom: 1px solid #e6e6e6;
    }
    .topBox-left{
        flex: 1;
    }
    .topBox-right{
        flex: 1;
        text-align: right;
    }
    .comment{
        margin-top: 20px;
    }
    .user {
        display: flex;
        width: 100%;
        height: 50px;
    }
    .user img{
        height: 50px;
        width: 50px;
        border: 1px solid #e6e6e6;
        border-radius: 25px;
        padding-bottom: 20px;
    }
    .user span{
        margin: 18px 0px 0px 10px;
    }
    .str{
        margin-top: 20px;
    }
    .shopParam{
        margin-top: 20px;
        display: flex;
        color: #a6a6a6;
    }
    .img{
        margin-top: 20px;
    }
    .shopParamchild{
        margin-left: 10px;
    }
    .img{
        display: flex;
        height: 100px;
        overflow: hidden;
    }
    .img img{
        width: 50px;
       height: 70px;
    }
</style>