<template>
  <div class="detail-param" v-if="Object.keys(this.goodsParam).length !== 0">
      <table>
            <tr v-for="(item, index) in goodsParam.size[0]" :key="index">
                <td>{{item[0]}}</td>
                <td>{{item[1]}}</td>
                <td>{{item[2]}}</td>
                <td>{{item[3]}}</td>
                <td>{{item[4]}}</td>
                <td v-if="goodsParam.size[1]">{{goodsParam.size[1][index][1]}}</td>
            </tr>
      </table>
      <table>
          <tr v-for="(item, index) in goodsParam.infos" :key="index">
              <td width="10%">{{item.key}}</td>
              <td class="color">{{item.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: {
        goodsParam: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            goodsParamSize: []
        }
    },
    watch: {
        goodsParam(){
            
        }
    }
    
}
</script>

<style scoped>
    .detail-param{
        margin-top: 20px;
        padding: 0px 10px;
    }
    table{
        border-collapse: collapse;
        width: 100%;
    }
    tr{
        border-bottom: 1px solid #e6e6e6;
        height: 50px;
        width: 100%;
    }
    .color{
        color: var(--color-tint);
    }
</style>