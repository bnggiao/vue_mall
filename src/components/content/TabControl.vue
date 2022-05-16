<template>
  <div class="tab-control">
      <div v-for="(item,index) in controlList" :key="index" 
      class="tab-control-item" @click="itemClick(index)" :class="{active: index=== curr}">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        controlList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            curr: 0
        }
    },
    methods: {
        itemClick(index){
            this.curr = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tab-control{
        width: 100%;
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
        background-color: #fff;
        z-index: 9;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color: #ff5777;
    }
    .active span{
        border-bottom: 3px solid #ff5777;
        padding: 5px;
    }
</style>