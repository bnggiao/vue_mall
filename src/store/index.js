import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCounter(state, payload){
            payload.count++
        },
        addCart(state, payload){
            state.cartList.push(payload)
        }
    },
    actions: {
        addCart(context, payload){
            return new Promise((resolve, reject) => {
                let oldProduct = null
                for(let i of context.state.cartList){ 
                    if(i.iid === payload.iid){
                        oldProduct = i
                    }
                }
                // 2.存在就+1，不存在push
                if(oldProduct){
                    // oldProduct.count += 1
                    context.commit('addCounter', oldProduct)
                    resolve('商品数量+1')
                }else{
                    payload.count = 1
                    payload.isCheck = true
                    // context.state.cartList.push(payload)
                    context.commit('addCart', payload)
                    resolve('添加商品成功')
                }
                reject('添加失败')
            })
            // 1.find方法
            // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            // if(oldProduct){
            //     oldProduct.count += 1
            // }else{
            //     payload.count = 1
            //     state.cartList.push(payload)
            // }

            // 2.for方法，判断改商品是否存在
            

        },
    },
    getters: {
        cartLength(state){
            return state.cartList.length
        },
        getCartList(state){
            return state.cartList
        }
    }
})

export default store