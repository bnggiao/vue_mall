// 引入防抖函数
import {debounce} from 'common/untils.js'
import BackTop from 'components/content/backTop/BackTop'

// goodsList图片的监听
export const itemListtenerMixin = {
    data(){
        return {
            itemImaListener: null
        }
    },
    mounted () {
        let refresh = debounce(this.$refs.scroll.refresh, 500)

        this.itemImaListener =  () => {
            refresh()
        }

        this.$bus.$on('goodsItemImaLoad',this.itemImaListener)
    }
}

// backTop按钮
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isshow: false,
        }
    },
    methods: {
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        },
    }
}