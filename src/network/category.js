import {request} from './request'
export function getGetagory(){
    return request({
        url: '/category'
    })
}

export function getTypeList(maitKey){
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
export function  getShopList(miniWallkey,type){
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}
