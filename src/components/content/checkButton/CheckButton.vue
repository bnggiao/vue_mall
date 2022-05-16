<template>
  <div class="check-button" :class="{'no-check': isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="" v-show="isCheck">
  </div>
</template>

<script>
export default {
    props: {
        isCheck: {
            type: Boolean,
            default(){
                return false
            }
        }
    }
}
</script>

<style scoped>
    .check-button{
        width: 25px;
        height: 25px;
        display: flex;
        padding: 3px;
        border-radius: 50%;
        border: 2px solid #a9a9a9;
        background-color: white;
    }
    .check-button img{
        width: 100%;
    }
    .no-check{
        border: 2px solid var(--color-tint);
        background-color: var(--color-tint);
    }
</style>