import {request} from './request'

export function getdetail(iid){
    return request({
        url:'http://152.136.185.210:8000/api/n3/detail',
        params:{
            iid
        }
    })
}
export function getrecommend(){
    return request({
        url:'http://152.136.185.210:8000/api/n3/recommend',  
    })
}

// export class shop{
//     constructor(shopInfo){

//     }
// }