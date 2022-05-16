<template>
  <div class="cart-bottom-bar">
      <div class="check-box">
          <check-button :isCheck="allSelect" @click.native="checkClick"></check-button>
          <span>全选</span>
      </div>
      <div class="totalPrice">合计：{{totalPrice}}</div>
      <div class="caculate" @click="caculate">去计算({{caculateCount}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['getCartList']),
        // 价格汇总
        totalPrice(){
        //    return '￥' + this.getCartList.filter( item => {
        //        return item.isCheck
        //    }).reduce((preValue, item) => {
        //        return preValue + item.price * item.count
        //    }, 0).toFixed(2)
            let price = 0
            for(let item of this.getCartList){
                if(item.isCheck){
                    price += item.price * item.count
                }
            }
            return '￥' + price.toFixed(2)
        },
        // 商品数量
        caculateCount(){
            return this.getCartList.filter(item => item.isCheck).length
        },
        // 全选按钮的实现
        allSelect(){
            if(this.getCartList.length === 0) return false
            // 1.find找出一个为false就返回false，找不到放回true，因为find会放回条件为true的item，对象取反为false
            // return !this.getCartList.find(item => !item.isCheck)

            // 2.filter过滤，如果有一个为false，length就为1以上，1以上取反为false
            // return !this.getCartList.filter(item => !item.isCheck).length

            // 3.for循环方法
            for(let item of this.getCartList){
                if(!item.isCheck){
                    return false
                }
            }
            return true
        }
    },
     methods: {
        //  全选按钮，判断allslect来实现
        checkClick(){
            if(this.allSelect){
                this.getCartList.forEach(item => item.isCheck = false)
            }else{
                this.getCartList.forEach(item => item.isCheck = true)
            }
        },
        caculate(){
            if(!this.allSelect){
                this.$toast.show('请选择商品')
            }
        }
    }
}
</script>

<style scoped>
    .cart-bottom-bar{
        display: flex;
        position: fixed;
        bottom: 61px;

        
        /* height: 40px; */
        width: 100%;
        height: 40px;
        background-color: #eee;
    }
    .check-box{
        flex: 1;
        margin-top: 10px;
        display: flex;
    }
    .check-box span{
        margin-left: 5px;
        display: block;
        padding-top: 5px;
    }
    .caculate{
        width: 90px;
        height: 100%;
        background-color: orange;
        padding-top: 10px;
        text-align: center;
        color: white;
    }
    .totalPrice{
        flex: 1;
        margin-top: 15px;
    }
</style>