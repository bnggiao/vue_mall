<template>
    <div class="tabbar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activestyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>

export default {
    props:{
        path: String,
        activeColor: {
            type: String,
            default: 'brown'
        }
    },
    data(){
        return {
            // isActive: true,
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path)
            // console.log(this.path);
        },
    },
    computed: {
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle(){
          return this.isActive ? {color: this.activeColor} : {}
      }  
    }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img{
  margin-bottom: 5px;
  width: 26px;
  vertical-align: middle;
}

</style>