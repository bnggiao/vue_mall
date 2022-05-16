<template>
  <div class="nav-bar" :style="{fontSize:fontSize}">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        fontSize: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        /* background-color: var(--color-tint); */
        width: 100%;
    }
    .left{
        width: 44px;
        height: 44px;
        /* background-color: blue; */
    }
    .center{
        flex: 1;
        /* background-color: blueviolet; */
        text-align: center;
        line-height: 44px;
        color: white;
        width: 100px;
        height: 44px;
    }
    .right{
        width: 44px;
        height: 44px;
        /* background-color: chartreuse; */
    }
</style>