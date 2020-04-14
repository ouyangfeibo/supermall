import axios from 'axios'

export  function request(config){
    //1 创建实例对象
    const instance =axios.create(
        {
            timeout:10000
        }
    )

    //2 发送网络请求
    return instance(config)   
    // 因为请求之后的返回值就是Promise
}
 


// 使用方法
// 1.先导入封装函数
// 2.使用request

// request({
//     url:''
// }).then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })

// 上面方法更好 因为请求之后的返回值就是Promise
// export  function request(config){
//     // 使用Primise将请求到的网络数据返回
//     return new Promise((resolve,reject) =>{
//     //1 创建实例对象
//     const instance =axios.create(
//         {
//             baseURL:'',
//             timeout:5000
//         }
//     )
//     //2 发送网络请求
//     instance(config)
//     .then(res =>{
//         //返回请求成功
//         resolve(res)
//     }).catch(err =>{
//         // 返回请求失败
//         reject(err)
//     })
//   })
// }


