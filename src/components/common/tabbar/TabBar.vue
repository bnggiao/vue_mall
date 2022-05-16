<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
#tabbar {
  display: flex;
  border-top: 2px solid #e6e6e6;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding-top: 10px;
  z-index: 8;
}
</style>