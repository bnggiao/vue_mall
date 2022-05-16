<template>
      <div id="TabMenu">
        <scroll class="content">
             <div v-for="(item, index) in menuNavList" 
            :key="index" 
            @click="menuCLick(item.maitKey)"
            :class="{avtive: activeId === item.maitKey}" class="item">
                {{item.title}}
            </div>
        </scroll>
      </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'

export default {
    components: {
        Scroll
    },
    props: {
        menuNavList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            activeId: '3627'
        }
    },
    methods: {
        menuCLick(maitKey){
            this.activeId = maitKey
            this.$emit('TabMenuClick',maitKey)
        },
    }
}
</script>

<style scoped> 
    .content{
        width: 112.5px;
        position: absolute;
        top: 44px;
        bottom: 61px;
        overflow: hidden;
    }
    .item{
        height: 48px;
        text-align: center;
        align-items: center;
        line-height: 48px;
        background-color: #f8f8f8;
    }
    .avtive{
        color: var(--color-tint);
        border-left: 5px solid var(--color-tint);
        background-color: white;
        font-weight: bold;
    }
</style>