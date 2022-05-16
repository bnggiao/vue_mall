<template>
  <div class="cartitem">
      <div class="check-buttom">
        <check-button :isCheck="item.isCheck" @click.native="chekBtn"></check-button>
      </div>
      <div class="img">
          <img :src="item.img" alt="">
      </div>
      <div class="params">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="bottom">
              <div class="price">{{'￥' + item.price}}</div>
              <div class="count">{{'X' + item.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    props: {
        item: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    components: {
        CheckButton
    },
    methods: {
        chekBtn(){
            this.item.isCheck = !this.item.isCheck
        }
    }
}
</script>

<style>
    .check-buttom{
        padding-top: 14%;
        width: 8%;
        align-items: center;
    }
    .cartitem{
        display: flex;
        height: 150px;
        width: 100%;
        padding: 10px;
    }
    .img {
        width: 25%;
    }
    .img img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    .params{
        width: 67%;
        margin-left: 10px;
    }
    .title{
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
    }
    .params .title, .params .desc{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bottom{
        display: flex;
        margin-top: 40px;
    }
    .count{
        flex: 1;
        text-align: right;
    }
</style>