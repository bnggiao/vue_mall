<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="0-price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-2" :key="index">
              <img :src="goods.services[index].icon" alt="">
              <span>{{goods.services[index].name}}</span>
          </span>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style scoped>
    .base-info{
        padding: 10px;
    }
    .info-title{
        font-weight: bold;
        margin: 10px 0px;
    }
    .info-price{
        color: var(--color-tint);
        font-weight: bold;
        font-size: 25px;
    }
    .other{
        display: flex;
        border-bottom: 1px #e6e6e6 solid;
        padding-bottom: 20px;
    }
    .other span{
        text-align: center;
        padding: 10px 0px;
        margin-top: 20px;
        flex: 1;
        color: #a9a9a9;
        font-size: 14px;
    }
    .info-service{
        display: flex;
        color: #a9a9a9;
        font-size: 14px;
        margin-top: 20px;
        text-align: center;
    }
    .info-service span{
        flex: 1;
        line-height: 14px;
    }
    .info-service img{
        height: 14px;
        width: 14px;
    }
</style>