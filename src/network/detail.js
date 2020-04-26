import {request} from './request'

export function getdetail(iid){
    return request({
        url:'http://152.136.185.210:8000/api/h8/detail',
        params:{
            iid
        }
    })
}


// export class shop{
//     constructor(shopInfo){

//     }
// }