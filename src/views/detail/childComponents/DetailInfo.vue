<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailInfo">
      <div class="info-desc">
          <div>{{detailInfo.desc}}</div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgload">
      </div>
  </div>
</template>

<script>
export default {
    props: {
        detailInfo: {
            type: Object,
            dafault(){
                return
            }
        }
    },
    data(){
        return {
            count: 0,
            imagesCount: 0
        }
    },
    methods: {
        imgload(){
            this.count++
            if(this.count === this.imagesCount){
                this.$emit('imageLload')
            }
        }
    },
    watch: {
        detailInfo(){
            this.imagesCount = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
    .detailInfo{
        border-top: #e6e6e6 5px solid;
        width: 100%;
        padding: 0px 10px;
        margin-top: 30px;
    }
    .info-desc{
        margin-top: 20px;
        padding-bottom: 10px;
    }
    .info-list img{
        width: 100%;
    }
    .info-key{
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        padding: 10px;
        border-top: #e6e6e6 1px solid;
    }
</style>