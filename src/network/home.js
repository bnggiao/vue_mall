import { request } from "./request";

export function getHomeMultData(){
    return request({
        url: '/home/multidata'
    })
}

export function getGoodsDate(type, page){
    return request({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}