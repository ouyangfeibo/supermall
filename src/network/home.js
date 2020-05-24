import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'http://123.207.32.32:8000/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'http://152.136.185.210:8000/api/n3/home/data',
        params:{
            type,
            page
        }
    })
}
