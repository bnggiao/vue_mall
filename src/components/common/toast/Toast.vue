<template>
    <div class="toast" v-show="showToast">
        <div>{{msg}}</div>
    </div>
</template>

<script>

export default {
    name: 'toast',
    props: {

    },
    data(){
        return {
            showToast: false,
            msg: ''
        }
    },
    methods: {
        show(msg, time=1500){
            this.msg = msg
            this.showToast = true
            setTimeout(() => {
                this.showToast = false
            },time)
        },
    }
}
</script>

<style scoped>
    .toast{
        z-index: 999;
        border-radius: 10%;
        font-size: 20px;
        padding: 10px 15px;
        position: fixed;
        background: rgb(0, 0, 0,.8);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>