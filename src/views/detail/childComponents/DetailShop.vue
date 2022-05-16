<template>
  <div v-if="Object.keys(goodsShop).length !== 0">
      <div class="logo">
          <img :src="goodsShop.logo" alt="">
          <span>{{goodsShop.name}}</span>
      </div>

      <div class="shop-data">
        <div class="left">
          <div class="leftChild1">
            <span>{{sell}}</span><br/>
            总销量
          </div>
          <div class="leftChild2">
             <span>{{goodsCount}}</span><br/>
            全部宝贝
          </div>
        </div>
        <div class="right">
          <table>
            <tr class="shop-evaluate-item" v-for="(item,index) in goodsShop.score" :key="index">
              <td width="40%">{{item.name}}</td>
              <td width="20%">{{item.score}}</td>
              <td width="10%">
                <span class="better" :class="{'is-better' : item.isBetter}">{{item.isBetter? '高' : '低'}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  props: {
    goodsShop:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    sell(){
      let n = this.goodsShop.sells
      n = parseInt(((n / 1000) * 100) / 100)
      return n + '万'
    },
    goodsCount(){
      if(this.goodsShop.goodsCount >= 10000){
        let n = this.goodsShop.goodsCount
        n = parseInt(((n / 1000) * 100) / 100)
        return n + '万'
      }
      return this.goodsShop.goodsCount
    }
  }
}
</script>

<style scoped>
  .logo img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 1px solid #a9a9a9;
  }
  .logo{
    padding: 30px 10px 0 10px;
    border-top: 5px solid #e6e6e6;
    display: flex;
    margin-top: 15px;
  }
  .logo span{
    line-height: 60px;
    margin-left: 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .shop-data{
    margin-top: 30px;
    display: flex;
  }
  .left{
    flex: 1;
    /* border: black 1px solid; */
    display: flex;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    border-right: #e6e6e6 solid 1px;
    padding-top: 10px;
    height: 60px;
  }
  .leftChild1 {
    flex: 1;
  }
  .leftChild2{
    flex: 1;
  }
  .left span{
    font-size: 20px;
  }
  .right{
    flex: 1;
    /* border: black 1px solid; */
    height: 60px;
    margin-left: 20px;
  }
  .better{
    background-color: green;
    color: white;
  }
  .is-better{
    background-color: red;
  }
</style>