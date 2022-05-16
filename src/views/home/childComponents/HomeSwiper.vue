<template>
    <swiper>
        <swiper-item v-for="(item, id) in banners" :key="id">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    components: {
        Swiper,
        SwiperItem,
    },
    props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            load: true
        }
    },
    methods: {
        imgLoad(){
            if(this.load){
                this.$emit('homeSwiperImgLoad')
                this.load = false
            }
        }
    }
}
</script>

<style>
    img{
        width: 100%;
    }
</style>