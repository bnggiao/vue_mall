<template>
  <div class="goods-list-item" @click="goodsItemClick">
      <img v-lazy="showImg" alt="" @load="imgLoad">
      <div class="goods-item-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">￥{{goodsItem.price}}</span>
          <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imgLoad(){
            this.$bus.$emit('goodsItemImaLoad')
        },
        goodsItemClick(){
            this.$router.push('/detail/'+ this.goodsItem.iid)
        }
    },
    computed: {
        showImg(){
            return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
        }
    }
}
</script>

<style>
    .goods-list-item{
       padding-bottom:40px ;
       position: relative;
       width: 45%;
    }

    .goods-list-item img{
        width: 100%;
        height: 98%;
        border-radius: 5px;
    }

    .goods-item-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        overflow: hidden;
        text-align: center;
        width: 100%;
    }
    
    .goods-item-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    
    .price{
        color: var(--color-tint);
    }

    .cfav{
        background: url('~assets/img/common/collect.svg') 0 0/14px 14px no-repeat;
        margin-left: 4px;
        padding-left:14px ;
    }
</style>