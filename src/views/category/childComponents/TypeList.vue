<template>
  <div class="type-list">
    <div class="item" v-for="(item, index) in typeList" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="" @load="typeListImaLoad(typeList.length)">
            <span>{{item.title}}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        typeList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            cont: 0
        }
    },
    methods: {
        typeListImaLoad(length){
            this.cont ++
            if(this.cont === length){
                this.$emit('typeListImaLoad')
            }
        }
    }
}
</script>

<style scoped>
    .item{
        width: 74.1px;
        height: 94.1px;
        margin: 0 0 20px 10px;
    }
    .type-list{
        display: flex;
        flex-flow: wrap;

    }
    .item img{
        width: 100%;
    }
    .item span{
        display: inline-block;
        width: 74.1px;
        font-size: 12px;
        text-align: center;
    }
</style>