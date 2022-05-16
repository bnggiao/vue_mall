<template>
  <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImg" :key="index">
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        topImg: {
            type: Array,
            defult(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detail-swiper{
        height: 420px;
        overflow: hidden;
    }
</style>