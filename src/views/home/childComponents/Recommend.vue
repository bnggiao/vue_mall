<template>
  <div class="recommendBox">
      <div v-for="(item, id) in recommend" :key="id" class="recommendItem">
        <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
            <p>{{item.title}}</p>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommend: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            emit: true      
        }
    },
    methods: {
        imgLoad(){
            if(this.emit){
                // console.log('1');
                this.$emit('recommendImgLoad')
                this.emit = false
            }
        }
    }
}
</script>

<style>
    .recommendBox{
        display: flex;
        background-color: white;
        padding: 10px 0 20px;
        border-bottom: 5px solid #e6e6e6;
    }
    .recommendItem{
        flex: 1;
        text-align: center;
        padding: 5px;
        font-size: 12px;
    }
    .recommendItem img{
        width: 80%;
        margin-bottom: 5px;
    }
</style>